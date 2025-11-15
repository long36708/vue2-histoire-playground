import { defineSetupVue2 } from "histoire-plugin-vue2";

export const setupVue2 = defineSetupVue2(({ story, variant }) => {
  // Vue plugin

  console.log('story',story)
  console.log('variant',variant)
  return {
    // 下边这段代码是错误的
    // provide: {
    //   key: "meow",
    // },
  };
});
