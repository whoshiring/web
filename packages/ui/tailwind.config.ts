import { plugin as designSystemPlugin } from "@entry/system";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}"],
  plugins: [designSystemPlugin({})],
} satisfies Config;

export default config;
