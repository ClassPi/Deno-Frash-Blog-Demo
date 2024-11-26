import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { MarkdownData } from "../../interfaces/MarkdownData.ts";
import { getTargetMarkdownData } from "../../utils/blog.ts";
import { CSS, render } from "@deno/gfm";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext) {
        const title: string = ctx.params.slug.replaceAll("-", " ");
        const originData: MarkdownData = getTargetMarkdownData(title);
        const content = originData.content ? originData.content : "";
        const body = render(content,{allowMath:true});

        const { publishedAt, changedAt, summary } = originData;
        const prop = await ctx.render({
            title,
            publishedAt,
            changedAt,
            summary,
            body,
        });
        return prop;
    },
};
//data:{ title:string, publishedAt:Date | null, changedAt:Date | null, summary:string, data_string:string}
export default function Blog(
    props: PageProps<
        {
            title: string;
            publishedAt: Date | null;
            changedAt: Date | null;
            summary: string;
            body: string;
        }
    >,
) {
    return (
        <section>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: CSS }} />
            </Head>
            <article
                class=" markdown-body rounded-2xl p-8 py-10"
                dangerouslySetInnerHTML={{ __html: render(props.data.body) }}
            >
            </article>
        </section>
    );
}
