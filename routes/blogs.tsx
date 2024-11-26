import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { MarkdownData } from "../interfaces/MarkdownData.ts";
import BlogDetailsCard from "../islands/BlogDetailsCard.tsx";
import { getMarkdownDataNoContent } from "../utils/blog.ts";


export const handler: Handlers = {
    async GET(req: Request, ctx: FreshContext) {
        const params = new URL(req.url).searchParams;
        const type = params.get("type");
        let postList = getMarkdownDataNoContent();
        if (type) {
            postList = postList.filter((post) => post.type === type);
        }
        const resp = await ctx.render(postList);
        return resp;
    },
};

export default function BlogList(props: PageProps<MarkdownData[]>) {
    return (
        <figure>
            <BlogIntroductoryCard data={props.data} />

            <figure class="mt-7 space-y-10">
                {props.data.map((post) => <BlogDetailsCard prop={post} />)}
            </figure>
        </figure>
    );
}

function BlogIntroductoryCard({ data }: { data: MarkdownData[] }) {
    const types = data.map((x) => x.type);
    const project_num = types.filter((type) => type === "tech").length;
    const life_num = types.filter((type) => type === "life").length;

    return (
        <div class="card flex bg-base-100 shadow-xl">
            <div class="card-body rounded-md ">
                <h1 class="card-title text-6xl text-right">ladder UP 📓</h1>
                <p>
                    There are {project_num} tech projects and {life_num}{" "}
                    life posts.
                </p>
            </div>
        </div>
    );
}


