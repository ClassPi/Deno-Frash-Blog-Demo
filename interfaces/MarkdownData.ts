export interface MarkdownData {
    title: string | null;
    cover: string | null;
    publishedAt: Date | null;
    changedAt: Date | null;
    type?: "life" | "tech";
    summary: string | null;
    content: string | null;
}