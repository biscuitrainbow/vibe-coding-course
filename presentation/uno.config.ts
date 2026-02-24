import { defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  shortcuts: {
    "bg-primary": "bg-[#C6E94E]",
    "text-primary": "text-[#000000]",
    "bg-accent": "bg-[#A8C840]",
    "text-accent": "text-[#A8C840]",
    "bg-surface": "bg-[#FFFFFF]",
    "bg-dark": "bg-[#000000]",
    "text-dark": "text-[#000000]",
    "text-light": "text-[#f1f5f9]",
    "stat-card":
      "bg-white rounded-2xl p-8 text-center shadow-sm",
    "tool-badge":
      "inline-block px-3 py-1 rounded-full bg-white/80 text-[#000000] text-sm font-semibold mr-2",
  },
  presets: [
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
  ],
});
