import { Partial } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import ProfileCard from "../components/ProfileCard.tsx";

export default function Layout({ Component }: PageProps) {
    return (
        // <section class="w-full my-6 max-md:mx-1 lg:mr-36">
            <section class="my-6 md:mx-10 lg:mx-20 xl:mx-32 2xl:mx-40 grid lg:grid-cols-4 md:grid-cols-5 relative">
                <div class="p-2 lg:col-span-1 h-min flex justify-center">
                    <ProfileCard />
                </div>

                <div class="p-2 lg:col-span-3 md:col-span-5 min-h-lvh">
                    <Partial name="Main content">
                        <Component />
                    </Partial>
                </div>
            </section>
        // </section>
    );
}
