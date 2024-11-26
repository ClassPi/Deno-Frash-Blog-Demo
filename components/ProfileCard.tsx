export default function ProfileCard() {
  return (
    <div className="card bg-base-100 max-w-52 shadow-xl lg:block hidden min-[h-27rem]">
      <figure>
        <div class="avatar online mt-6 mx-4 max-lg:mt-8 max-lg:mx-8 transition-all">
          <div class="max-w-36 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/119377967?v=4 " />
          </div>
        </div>
      </figure>

      <figure>
        <div className="card-body max-lg:py-4">
          <ul class="menu bg-base-100 font-bold space-y-2">
            <li>
              <a class="max-w-40 h-12 flex justify-center " href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lg:h-5 lg:w-5 max-lg:h-8 max-lg:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="mx-2 text-xl lg:block hidden ">Home</span>
              </a>
            </li>
            <li>
              <a class="max-w-40 h-12 flex justify-center" href="/about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 max-lg:h-8 max-lg:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
                <span class="mx-2 text-xl lg:block hidden">About</span>
              </a>
            </li>

            <li class="lg:hidden">
              <a class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 max-lg:h-8 max-lg:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>
                <span class="mx-2 text-xl px-2 lg:block hidden">Blogs</span>
              </a>
            </li>

            <li class="max-lg:hidden">
              <details>
                <summary class="flex justify-center max-w-40 h-12 after:max-lg:hidden lg:after:absolute lg:after:end-3">
                  <a class="flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 max-lg:h-8 max-lg:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                      />
                    </svg>
                    <span class="mx-2 text-xl px-2 lg:block hidden">Blogs</span>
                  </a>
                </summary>
                <ul>
                  <li>
                    <a
                      class="max-w-40 h-12 flex justify-center pl-0"
                      href="/blogs?type=tech"
                    >
                      <span class="mx-2 text-base lg:block hidden whitespace-nowrap">
                        Tech Blog
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      class="max-w-40 h-12 flex justify-center pl-0"
                      href="/blogs?type=life"
                    >
                      <span class="mx-2 text-base lg:block hidden whitespace-nowrap">
                        Life Blog
                      </span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </figure>

      <figure>
        <div class="max-w-48 h-12 mb-6">
          <div class="flex justify-between">
            <div class="join join-vertical justify-center align-middle">
              <a href="https://github.com/ClassPi">
                <svg
                  class="w-7 h-7 link"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="inherit"
                    clip-rule="inherit"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="neutral"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
