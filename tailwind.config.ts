import { type Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  // deno-lint-ignore no-explicit-any
  plugins: [daisyui as any, typography],
  theme:{
    extend:{
      backgroundImage:{
        'arrow-right':"url('/arrow-right.svg')",
      },
      backgroundSize:{
        '30%':'30%',
      },
      scale:{
        '1000':'5',
      },
      height:{
        '27rem':'27rem',
      }
    }
  }
} satisfies Config;
