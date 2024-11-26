import grayMatter, { GrayMatterFile } from "gray-matter";
import { walk } from "$std/fs/walk.ts";
import { MarkdownData } from "../interfaces/MarkdownData.ts";
import { delay } from "$std/async/delay.ts";

const markdownStore: MarkdownData[] = [];

/**
 * Watches for changes in the "./data" directory and reinitializes the store when changes are detected.
 * 
 * This function uses Deno's `watchFs` API to monitor the specified directory. When a change is detected,
 * it calls the `initStore` function to reinitialize the store and then recursively calls itself to continue
 * watching for further changes.
 * 
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
export async function watchFiles() {

    const watcher = Deno.watchFs("./data");
    for await (const _ of watcher) {
        await initStore();
        watchFiles();
        break;
    }
}

/**
 * Retrieves an array of MarkdownData objects without their content.
 *
 * This function maps over the `markdownStore` and returns a new array of objects
 * containing the title, publishedAt, changedAt, type, summary, and cover properties
 * from the original data, but sets the content property to null.
 *
 * @returns {MarkdownData[]} An array of MarkdownData objects with content set to null.
 */
export function getMarkdownDataNoContent(): MarkdownData[] {
    return markdownStore.map((data) => {
        return {
            title: data.title,
            publishedAt: data.publishedAt,
            changedAt: data.changedAt,
            type: data.type,
            summary: data.summary,
            cover: data.cover,
            content: null,
        };
    });
} 

/**
 * Retrieves the markdown data with the specified title from the markdown store.
 *
 * @param title - The title of the markdown data to retrieve.
 * @returns The markdown data that matches the specified title.
 * @throws Will throw an error if no data with the specified title is found.
 */
export function getTargetMarkdownData(title: string): MarkdownData {
    const data = markdownStore.find((data) => data.title === title);
    if (data) {
        return data;
    } else {
        throw new Error("No such data found");
    }
}

/**
 * Initializes the markdown store by clearing any existing entries and then
 * populating it with data from markdown files found in the "./data" directory.
 * 
 * This function reads all markdown files in the specified directory, parses
 * their content using `grayMatter`, and extracts relevant metadata to store
 * in the `markdownStore` array.
 * 
 * @returns {Promise<void>} A promise that resolves when the store has been initialized.
 */
export async function initStore(): Promise<void> {
    if (markdownStore.length !== 0) {
        markdownStore.length = 0; //clear the array
    }
    for await (
        const entry of walk("./data", { includeDirs: false, exts: [".md"] })
    ) {
        const mdContent = await Deno.readTextFile(entry.path);
        const info: GrayMatterFile<string> = grayMatter(mdContent);
        const data: MarkdownData = {
            title: info.data.title,
            publishedAt: info.data.publishedAt,
            changedAt: info.data.changedAt,
            type: info.data.type,
            summary: info.data.summary,
            content: info.content,
            cover: info.data.cover,
        };  
        markdownStore.push(data);
    }
}

Deno.test("initStore", async () => {
    await initStore();
    await delay(2000);
    console.log(markdownStore);
});

Deno.test("watchFiles", async () => {
    await watchFiles();
});

Deno.test("getMarkdownDataNoContent", () => {
    const data = getMarkdownDataNoContent();
    console.log(data);
});