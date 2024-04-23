# 前端学习路线

## 写在前面

- **环境搭建**

  建议使用 [VSCode](https://code.visualstudio.com) 作为主力 IDE，[VScode 下载、安装、配置中文环境（Windows）](https://blog.csdn.net/bbj12345678/article/details/109429937)；安装 Live Preview 拓展以实时预览网页。其他 IDE 请自行了解使用。

  > VSCode 内置 Markdown 支持，支持实时预览和同步滚动。

- **学习方法**

  1. 会用、多用**搜索引擎**。前人的智慧是学习进步的捷径。必应、百度都可以，能科学上网的话可以用谷歌搜索。

     > 本文<u>**不会再反复强调去使用搜索引擎**</u>。不知道就搜，搜不到就问，就是这么简单，请养成良好习惯。

  2. 多问，多交流。不过在这之前，先了解一下[**提问的艺术**](https://segmentfault.com/a/1190000007610773)。

  3. 多写，多练。只是过了一两遍视频或文档，很容易遗忘；实践少了，想真正实现一个功能的时候会无从下手。多敲代码是为了尽可能多记、牢记常用语法和 API，少花时间在搜索和查文档上，也是为了培养思维能力。

  4. 把英语学好。多学习行内的常用术语，培养英语阅读能力。英语能力提升了，不仅代码风格能提升一个档次（比如文件目录、标识符命名更规范），还能接触外国的优秀知识圈，慢慢与众人拉开信息差。

  5. 关于 **视频讲解** 和 **文档阅读** 这两种学习方式，个人建议，零基础以前者为主，后者为辅；而入门后，就要开始培养后者的习惯和能力。总之，越深入学习，在视频上花费的时间应当越少。

     > 文档阅读能力对开发者很重要！阅读文档可以快速掌握编程语言、库、框架的相关知识。许多墙外的优质英文文档更是前沿的宝贵技术资源。（因为部分中文文档存在拖更，汉化程度低，要点省略的问题；或者甚至根本没有中文文档）

  6. 与时俱进。计算机行业技术更新迭代很快，要<u>优先</u>（而非一味追求或不闻不问）学习符合发展趋势的技术（比如三剑客的<u>稳定</u>新特性，工具框架的前沿版本，新的工具框架等），其次了解旧项目可能还在使用的过时技术（比如 JQuery、Bootstrap，乃至 Vue 2 等），摈弃过于过时的技术（比如兼容 IE 8 及以前）。

## 零基础入门

该阶段学习前端三剑客：HTML、CSS、JavaScript。

首要任务是熟悉 HTML 的常用标签和属性，CSS 的常用选择器和规则，JS 的常用语法和 API。

然后，可以开始仿写一些简单网页，熟悉网页的常见布局，实现常见的网页组件（如轮播图、Tab 导航、下拉菜单等）。如果直接做有困难，也可以自己找视频跟着做。

相关学习资料：

- [**【黑马程序员 pink 老师讲 HTML5+CSS3+移动端适配】**](https://www.bilibili.com/video/BV14J4114768/?share_source=copy_web&vd_source=6f7c7eed85a2bea31c29ba31883dd94b)，[**【黑马程序员 JavaScript 从入门到精通】**](https://www.bilibili.com/video/BV1Y84y1L7Nn/?share_source=copy_web&vd_source=6f7c7eed85a2bea31c29ba31883dd94b)，B 站大学零基础入门视频，建议倍速观看，跳过吹水部分以提高学习效率。
- [**菜鸟教程 - 学的不仅是技术，更是梦想！**](https://www.runoob.com)，很基础简要的文档，适合入门。
- [**web 入门 - 学习 Web 开发 | MDN**](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)，更正式的文档，更应培养阅读这类文档的习惯和能力。

#### 笔记

个人喜欢用 markdown 记笔记。虽然 VSCode 也够用，不过更推荐[Obsidian](https://obsidian.md)，便于构建知识库。其他方式请自行探索。

基础语法之类的就没必要详细记了，编程相关的笔记应着重记录**问题和解决方案，灵感及其实现，重构优化之道**。

## 进阶

> 这个阶段应该已经具备自行寻找学习资料的能力，故减少提供此类链接，自己多探索。

需要学习的三剑客现代特性<u>**包括但不限于**</u>以下内容。

- HTML：语义化标签、新表单控件、`<canvas>`、`<svg>`、多媒体支持、sessionStorage/localStorage......
- CSS：flex、grid、媒体查询，`:has()`、`:is()`、`:where()`等新选择器，视窗动态单位、容器查询、相对颜色、混合颜色、作用域、嵌套、滚动驱动动画......
- JS：ES6(2015) ~ ES13(2022)；AJAX、异步（Promise、async/await）、Proxy、Reflect......

- Web Components、Web API......

**CSS 预处理器**：Sass(SCSS)、Less、Stylus。个人建议学 SCSS，功能强大完善。其他的自行了解，按照个人喜好选择就好。

**Git**：请阅读压缩包内的 [《Pro Git》](https://git-scm.com/book/zh/v2)。

> VSCode 集成了 Git 功能，可视化界面能够满足常见需求，但复杂操作仍需要使用命令行。

## 提高

有了扎实的三剑客基础，便可以开始学习使用各类库、框架，学习 Node.js，接触 JavaScript 的超集——TypeScript，了解并实践前端工程化。

### Vue

> 仅为个人推荐，想从 React，Angular 开始学当然也没问题啦，但那样就得靠你自己多探索了。

Vue 2 已在 2023 年的最后一天正式停止维护。目前推荐学习 [Vue 3](https://cn.vuejs.org)，简单易上手。多实操，比如重构以前的三剑客原生代码，跟着 B 站视频敲一些~~旧且烂大街的~~项目，也可以去 GitHub、Gitee 上找一些网上推荐的知名开源前端项目的源码，参考学习现代工程的项目结构和代码实现。

> 简单推荐一个我偶然发现的[Vue 3 + TS 王者荣耀图鉴](https://github.com/lengyibai/wzry)项目（作者面试用的）。

Vue 3 相关生态：

- 路由：[Vue Router](https://router.vuejs.org/zh)
- 状态管理：[Pinia](https://pinia.vuejs.org/zh)（新，优先）、[Vuex](https://vuex.vuejs.org/zh)（老牌）
- 组件库：[Element Plus](https://element-plus.org/zh-CN)、[Ant Design Vue](https://antdv.com/components/overview-cn)、[Vant](https://vant-contrib.gitee.io/vant/#/zh-CN)...
- 构建工具：[Vite](https://cn.vitejs.dev)（新，优先）、[Webpack](https://www.webpackjs.com)（老牌）

### Node.js

[英文官网](https://nodejs.org/en)已翻新，[中文官网](https://nodejs.cn)还没有。

个人认为 Node 的官网不适用于初学，而更适合学成后查 API（不过英文新版官网顶部导航有`Learn`学习文档，有一定帮助。而中文旧官网仅有 API 文档）。所以，去网上多找找系统学习的教程吧，这里只放个视频链接：[【尚硅谷 Node.js 零基础视频教程】](https://www.bilibili.com/video/BV1gM411W7ex/?share_source=copy_web&vd_source=6f7c7eed85a2bea31c29ba31883dd94b)

- 包管理工具：npm、yarn、pnpm。了解更多：[包管理工具之从 NPM 到 PNPM](https://segmentfault.com/a/1190000044547381)

### TypeScript

省流：具有静态类型标注的 JavaScript，对中大型项目更适用。

请自行寻找视频或文章学习，或查看[英文手册](https://www.typescriptlang.org/docs/handbook/intro.html)。

另外，记得学习一些<u>类型体操</u>，加深对 TS 类型系统的理解，面试也会考。参考：[TypeScript 类型体操姿势合集<通关总结>--刷完](https://juejin.cn/post/6999280101556748295)

### 前端工程化

详情请见：[手把手带你入门前端工程化——超详细教程](https://zhuanlan.zhihu.com/p/276458191)，下面只提部分内容

#### 1. **技术选型**

#### 2. **统一规范**

- 代码风格：[Prettier](https://prettier.io)
- 代码质量：[ESLint](https://eslint.org)、[Stylelint](https://stylelint.io)等
- Git 规范：分支管理，Commit 规范（[Husky](https://typicode.github.io/husky)）
- UI 规范
- 项目目录/文件规范

  ......

#### 3. **测试**

> 仅供参考：[前端开发到底要不要写测试？](https://segmentfault.com/a/1190000015724775)

- 单元测试（UT）：[Vitest](https://cn.vitest.dev) + [Vue Test Utils](https://test-utils.vuejs.org)（新，搭配 Vite）、[Jest](https://www.jestjs.cn)（一般搭配 Webpack）
- 端到端测试（E2E）：[Cypress](https://www.cypress.io)、[Playwright](https://playwright.dev)、[Nightwatch](https://nightwatchjs.org)

#### 4. **部署**

手动部署：打包、把构建好的文件丢静态服务器。。是时候解放双手了！

[持续集成（CI）/持续部署（CD）](https://zhuanlan.zhihu.com/p/42286143)：[Jenkins](https://www.jenkins.io)、[GitHub Actions](https://docs.github.com/zh/actions)。GitHub 的 marketplace 里面也有现成的 actions，如果看了文档还是不懂，就去找开源工具框架的`.github/workflows`目录下的配置文件。

#### 5. **监控**

#### 6. **性能优化**

#### 7. **重构**

### 拓展

- 发展趋势：[2024 年 7 个 Web 前端开发趋势](https://zhuanlan.zhihu.com/p/679356816)
- 原子化 CSS：[TailwindCSS](https://tailwindcss.com)和一个基于它的组件库[daisyUI](https://daisyui.com)
  > 题外话：个人特别喜欢 daisyUI 官网的滚动驱动动画
- JS 运行时：[JS 三大运行时全面对比：Node.js vs Bun vs Deno](https://zhuanlan.zhihu.com/p/658717237)（仅供参考）
- 前端“锈化”：打包工具 Rollup 的 Rust 版本[Rolldown](https://rolldown.rs/about)，[RS 基建锈化之 Oxlint 无缝尝鲜](https://zhuanlan.zhihu.com/p/688917267)

### 跨平台开发技术

我也是这部分的初学者，给不了多少有用的建议。不过要记住，现在还没有什么框架能真正做到完美的跨平台兼容，不同的框架多多少少都有坑。

个人听说得较多的框架有 [Uni-app](https://uniapp.dcloud.net.cn)、[Quasar](https://quasar.dev)、[Taro](https://docs.taro.zone/docs)、[React Native](https://reactnative.cn)、[Flutter](https://flutter.dev)......
