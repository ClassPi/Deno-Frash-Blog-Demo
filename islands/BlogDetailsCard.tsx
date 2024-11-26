import { useEffect, useRef, useState } from "preact/hooks";
import { MarkdownData } from "../interfaces/MarkdownData.ts";

export default function BlogDetailsCard({ prop }: { prop: MarkdownData }) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const blogCard = ref.current;
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                observer.disconnect();
            }
        }, { threshold: 0.01,rootMargin:"20px" });

        if (blogCard) {
            observer.observe(blogCard);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
              }
        };
    }, []);

    return (
        <div
            ref={ref}
            class="card lg:card-side bg-base-100 shadow-xl h-60 grid grid-cols-5"
        >
            <div class="card-body col-span-3">
                <article>
                    <a href={`/blog/${prop.title?.replaceAll(" ", "-")}`}>
                    <h2 class="card-title text-2xl link link-hover mb-5">
                        {prop.title}
                    </h2>
                    </a>
                    <p class="text-lg line-clamp-3 first-letter:text-5xl first-letter:font-thin first-letter:float-left first-letter:mr-2">
                        {prop.summary}
                    </p>
                </article>
            </div>

            <figure class="col-span-2">
                <a href={`/blog/${prop.title?.replaceAll(" ", "-")}`} 
                   class={`${isIntersecting && "hover:bg-black" } overflow-clip  relative after:duration-400 after:transition-all after:bg-origin-padding after:bg-bottom after:bg-no-repeat after:bg-arrow-right after:absolute after:w-full after:h-full after:-translate-y-full after:pointer-events-none after:opacity-0 after:scale-0 after:hover:scale-50 after:hover:opacity-70`} >
                    {isIntersecting && (<img
                        name="cover"
                        className={`${
                            isLoaded ? "" : "skeleton rounded-l-none"
                          }  hover:blur-sm hover:opacity-75 overflow-hidden inset-0 object-cover w-full h-full transition-all duration-500 transform hover:scale-110 hover:cursor-pointer`}
                        src={prop.cover ? prop.cover : "/baseCover.png"}
                        alt="Cover"
                        onLoad={() => setIsLoaded(true)}
                        onError={(e) => (e.currentTarget.src = "/baseCover.png")}
                        
                    />)}
                </a>
            </figure>
        </div>
    );
}
