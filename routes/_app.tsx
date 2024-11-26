import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
      <html>
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>fresh-two</title>
              <link rel="stylesheet" href="/styles.css" />
            </head>
            <body f-client-nav class=" flex flex-1 flex-col h-full w-full bg-gray-100">
              <Component />
            </body>
          </html>
  );
}
