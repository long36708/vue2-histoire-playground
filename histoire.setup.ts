import { defineSetupVue2 } from "@histoire/plugin-vue2";

export const setupVue2 = defineSetupVue2(({ story, variant }) => {
  // Vue plugin

  return {
    provide: {
      key: "meow",
    },
  };
});
