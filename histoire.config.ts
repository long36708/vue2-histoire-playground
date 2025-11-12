import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue2";

export default defineConfig({
  plugins: [HstVue()],
  storyMatch: ["src/**/*.story.vue"],
  // storyMatch: ["**/src/*.story.vue"],
  // storyMatch: ['**/*.story.vue'],
  setupFile: "./histoire.setup.ts",
});
