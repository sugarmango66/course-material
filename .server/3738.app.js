"use strict";
exports.id = 3738;
exports.ids = [3738];
exports.modules = {

/***/ 8118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lab_instructions_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/client-server-communication/lab-instructions.html.vue?vue&type=template&id=34a3ab0c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_RouterLink = (0,external_vue_.resolveComponent)("RouterLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="lab-instructions" tabindex="-1"><a class="header-anchor" href="#lab-instructions" aria-hidden="true">#</a> Lab Instructions</h1><p>This page contains instructions for the examination test <em>Laboratory Work</em>. It consists of two parts, and both of them need to be completed and presented orally to a teacher at a lab session before you pass the examination test.</p><h2 id="installing-required-software" tabindex="-1"><a class="header-anchor" href="#installing-required-software" aria-hidden="true">#</a> Installing Required Software</h2><p><strong>If you work on the computers in E2404, E2432 or E2433</strong>, all required software should already be installed for you, so no need to install anything yourself.</p><p><strong>If you work on a school computer in any other room</strong>, you need to manually install the required software through the Software Center application (unless someone already has done that on the specific computer you sit at).</p><p><strong>If you work on your own private computer</strong>, you need to download and install all required software yourself. In this course, we only use free software available for both Windows, Mac and Linux.</p><p>The required software is:</p><ul><li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ol><li>Use the Current version.</li><li>In the installation process, make sure the following features are installed (they are checked by default, so simply don&#39;t uncheck them!): <ul><li>Node.js runtime</li><li>npm package manager</li><li>Add to PATH</li></ul></li><li>To verify that Node.js has been successfully installed, run the command <code>node -v</code> in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of Node.js that was installed, something like <code>v11.6.0</code>.</li></ol></li><li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>This one is installed along with Node.js, so you don&#39;t need to install it separately. However, you might want to update it to the latest version (not required): <ul><li><a href="https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm" target="_blank" rel="noopener noreferrer">Update npm instructions`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li><li>To verify that npm has been successfully installed, run the command <code>npm -v</code> in a shell (you might need to restart your computer first). If it has been installed successfully, you should see the version of npm that was installed, something like <code>6.9.0</code>.</li></ul></li><li><a href="https://cli.vuejs.org/guide/installation.html#installation" target="_blank" rel="noopener noreferrer">Vue CLI`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>After you have installed Node.js and npm, simply run the command <code>npm install -g @vue/cli</code> in a shell to install Vue CLI.</li><li>To verify that Vue CLI has been successfully installed, run the command <code>vue -V</code> in a shell. If it has been installed successfully, you should see the version of Vue CLI that was installed, something like <code>3.7.0</code>.</li></ul></li></ul><p>The following software tools are not required (use whichever tools you want), but recommended:</p><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>IDE with good support for writing, running and debugging Node.js and JavaScript code.</li></ul></li><li><a href="https://sqlitebrowser.org/" target="_blank" rel="noopener noreferrer">DB Browser for SQLite`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Database management tool you can use to visualize/debug the database. An alternative is to install and use <a href="https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite" target="_blank" rel="noopener noreferrer">the SQLite extension for Visual Studio Code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</li></ul></li><li><a href="https://www.getpostman.com/" target="_blank" rel="noopener noreferrer">Postman`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>App you can use to send custom HTTP requests to a web application.</li></ul></li></ul><h2 id="part-1-the-tool-app" tabindex="-1"><a class="header-anchor" href="#part-1-the-tool-app" aria-hidden="true">#</a> Part 1 - The Tool App</h2><p>The goal with this part of the laboratory work is to teach you how to use Vue to build a Single-Page Application. Vue is a quite big framework (it would be possible to have a single 7.5 credit course just to teach all there is to know about Vue), so you are only expected to learn and use the basics (what has been taught in this course), which will be enough to create quite advanced and good Single-Page Applications.</p><p>The Single-Page Application you should create will consist of different pages, each containing a useful tool of some kind such as a simple calculator, a clock, a counter, etc.</p><h3 id="pre-requisites" tabindex="-1"><a class="header-anchor" href="#pre-requisites" aria-hidden="true">#</a> Pre-requisites</h3><p>Before you start working on this part you are expected to view the following lectures:</p><ul><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/using-shells/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Using Shells`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Using Shells")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li><li>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RouterLink, { to: "/lectures/vue/" }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Vue`)
      } else {
        return [
          (0,external_vue_.createTextVNode)("Vue")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</li></ul><p>The tutorial about Vue will also help you learn the basics.</p><h3 id="creating-a-new-vue-application" tabindex="-1"><a class="header-anchor" href="#creating-a-new-vue-application" aria-hidden="true">#</a> Creating a new Vue application</h3><p>Start by using the Vue CLI program to create a new folder containing the initial source files for the Vue application you should create:</p><ol><li>Open a shell, for example <em>Windows PowerShell</em> in Windows.</li><li>Navigate to the folder where you want to create a new folder containing the source code for the Vue application. The following commands might be helpful: <ul><li><code>pwd</code> - Show which folder you are currently standing in.</li><li><code>mkdir projects</code> - Create a new sub-folder named <code>projects</code> in the folder you are currently standing in.</li><li><code>cd projects</code> - Go into the sub-folder named <code>projects</code></li><li><code>cd ../</code> - Go back to the parent folder</li></ul></li><li>Create the root folder for your project&#39;s source files by running the following command: <ul><li><code>vue create project-name</code> - Create a new sub-folder named <code>project-name</code> containing the source files for your Vue application (change <code>project-name</code> to something else (avoid using spaces))</li><li>In the configuration process, make the following choices: <ol><li>Please pick a preset: <strong>Manually select features</strong></li><li>Check the features needed for your project: <strong>Only select <em>Router</em></strong>. <ul><li>Selecting more is OK, but it will produce more code making it harder to understand the initial source code.</li></ul></li><li>Use history mode for router: <strong>no</strong></li><li>Where do you prefer placing config for Babel, PostCSS, ESLint, etc.: <strong>In package.json</strong></li></ol></li></ul></li><li>Go into the root folder of your Vue application by running the following command: <ul><li><code>cd project-name</code> - Go into the sub-folder named <code>project-name</code> (use the same name as before)</li></ul></li><li>Open the application&#39;s root folder in a code editor of your choice, e.g.: <ul><li><code>code .</code> - Start Visual Studio Code with the application&#39;s root folder opened in the Explorer panel</li></ul></li><li>Start the Vue development server which will immediately build your Vue application and each time you change the source code in your Vue application by running the following command: <ul><li><code>npm run serve</code> - Start the Vue development server</li></ul></li><li>Visit <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in a web browser to see how your Vue application works.</li><li>Try changing some code in one of the <code>*.vue</code> files. When you save your changes, the server will immediately re-build the Vue application and push it to the web browser, so when you go back to your web browser you should be able to see the changes almost immediately.</li></ol><p>Let&#39;s quickly go through the most important files and folders your Vue application consists of:</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>::: /public/*</p><p${
          _scopeId
        }>In this folder you can place static files (such as images) and then refer to them in the other source files using absolute paths. Often better to use the <code${
          _scopeId
        }>/src/assets/</code> folder instead.</p><p${
          _scopeId
        }>:::</p>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/public/index.html" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>Contains the fundamental HTML code for your Single-Page Application. This is the only HTML file you will have in your entire application.</p><p${
                _scopeId
              }>The most important part is <code${
                _scopeId
              }>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>. This is the element Vue will use to render its dynamic content. Often you don&#39;t need to change anything in this file, but it can be useful to make changes to the <code${
                _scopeId
              }>&lt;head&gt;</code> element (change <code${
                _scopeId
              }>&lt;title&gt;</code>, load files from CSS framework using more <code${
                _scopeId
              }>&lt;link&gt;</code> elements or from JavaScript libraries using <code${
                _scopeId
              }>&lt;script&gt;</code> elements, etc.).</p><div class="language-html ext-html line-numbers-mode"${
                _scopeId
              }><pre class="language-html"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token doctype"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;!</span><span class="token doctype-tag"${
                _scopeId
              }>DOCTYPE</span> <span class="token name"${
                _scopeId
              }>html</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>html</span> <span class="token attr-name"${
                _scopeId
              }>lang</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>en<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>head</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>meta</span> <span class="token attr-name"${
                _scopeId
              }>charset</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>utf-8<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>meta</span> <span class="token attr-name"${
                _scopeId
              }>http-equiv</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>X-UA-Compatible<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token attr-name"${
                _scopeId
              }>content</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>IE=edge<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>meta</span> <span class="token attr-name"${
                _scopeId
              }>name</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>viewport<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token attr-name"${
                _scopeId
              }>content</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>width=device-width,initial-scale=1.0<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>link</span> <span class="token attr-name"${
                _scopeId
              }>rel</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>icon<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span> <span class="token attr-name"${
                _scopeId
              }>href</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>&lt;%= BASE_URL %&gt;favicon.ico<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>title</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>My Website<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>title</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>head</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>body</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>noscript</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
      <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>strong</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>This website only works if you have JavaScript enabled.<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>strong</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>noscript</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>div</span> <span class="token attr-name"${
                _scopeId
              }>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>app<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>div</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token comment"${
                _scopeId
              }>&lt;!-- built files will be auto injected --&gt;</span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>body</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>html</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>2</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>3</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>4</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>5</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>6</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>7</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>8</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>9</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>10</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>11</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>12</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>13</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>14</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>15</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>16</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>17</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, "Contains the fundamental HTML code for your Single-Page Application. This is the only HTML file you will have in your entire application."),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The most important part is "),
                  (0,external_vue_.createVNode)("code", null, "<div id=\"app\"></div>"),
                  (0,external_vue_.createTextVNode)(". This is the element Vue will use to render its dynamic content. Often you don't need to change anything in this file, but it can be useful to make changes to the "),
                  (0,external_vue_.createVNode)("code", null, "<head>"),
                  (0,external_vue_.createTextVNode)(" element (change "),
                  (0,external_vue_.createVNode)("code", null, "<title>"),
                  (0,external_vue_.createTextVNode)(", load files from CSS framework using more "),
                  (0,external_vue_.createVNode)("code", null, "<link>"),
                  (0,external_vue_.createTextVNode)(" elements or from JavaScript libraries using "),
                  (0,external_vue_.createVNode)("code", null, "<script>"),
                  (0,external_vue_.createTextVNode)(" elements, etc.).")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token doctype" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<!"),
                        (0,external_vue_.createVNode)("span", { class: "token doctype-tag" }, "DOCTYPE"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token name" }, "html"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("html")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("en"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("head")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("meta")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "charset"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("utf-8"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("meta")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "http-equiv"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("X-UA-Compatible"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "content"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("IE=edge"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("meta")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("viewport"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "content"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("width=device-width,initial-scale=1.0"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("link")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "rel"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("icon"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "href"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("<%= BASE_URL %>favicon.ico"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("My Website"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("title")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("head")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("body")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("noscript")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("strong")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("This website only works if you have JavaScript enabled."),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("strong")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("noscript")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("app"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- built files will be auto injected -->"),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("body")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("html")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/src/main.js" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>This is the file that first run when your Vue application starts. It is primarily used to configure the Vue application. Currently it:</p><ol${
                _scopeId
              }><li${
                _scopeId
              }>Adds routing capabilities to the application (as they are defined in <code${
                _scopeId
              }>/src/router.js</code>).</li><li${
                _scopeId
              }>Tells Vue that <code${
                _scopeId
              }>/src/App.vue</code> is the main Vue component that should be shown.</li><li${
                _scopeId
              }>Tells Vue that the dynamic parts should be inserted into the HTML element in <code${
                _scopeId
              }>/public/index.html</code> with the id <code${
                _scopeId
              }>app</code>.</li></ol><div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token keyword"${
                _scopeId
              }>import</span> Vue <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;vue&#39;</span>
<span class="token keyword"${
                _scopeId
              }>import</span> App <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;./App.vue&#39;</span>
<span class="token keyword"${
                _scopeId
              }>import</span> router <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;./router&#39;</span>

Vue<span class="token punctuation"${
                _scopeId
              }>.</span>config<span class="token punctuation"${
                _scopeId
              }>.</span>productionTip <span class="token operator"${
                _scopeId
              }>=</span> <span class="token boolean"${
                _scopeId
              }>false</span>

<span class="token keyword"${
                _scopeId
              }>new</span> <span class="token class-name"${
                _scopeId
              }>Vue</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  router<span class="token punctuation"${
                _scopeId
              }>,</span>
  <span class="token function-variable function"${
                _scopeId
              }>render</span><span class="token operator"${
                _scopeId
              }>:</span> <span class="token keyword"${
                _scopeId
              }>function</span> <span class="token punctuation"${
                _scopeId
              }>(</span><span class="token parameter"${
                _scopeId
              }>h</span><span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>{</span> <span class="token keyword"${
                _scopeId
              }>return</span> <span class="token function"${
                _scopeId
              }>h</span><span class="token punctuation"${
                _scopeId
              }>(</span>App<span class="token punctuation"${
                _scopeId
              }>)</span> <span class="token punctuation"${
                _scopeId
              }>}</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>\$mount</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&#39;#app&#39;</span><span class="token punctuation"${
                _scopeId
              }>)</span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>2</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>3</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>4</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>5</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>6</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>7</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>8</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>9</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>10</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, "This is the file that first run when your Vue application starts. It is primarily used to configure the Vue application. Currently it:"),
                (0,external_vue_.createVNode)("ol", null, [
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("Adds routing capabilities to the application (as they are defined in "),
                    (0,external_vue_.createVNode)("code", null, "/src/router.js"),
                    (0,external_vue_.createTextVNode)(").")
                  ]),
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("Tells Vue that "),
                    (0,external_vue_.createVNode)("code", null, "/src/App.vue"),
                    (0,external_vue_.createTextVNode)(" is the main Vue component that should be shown.")
                  ]),
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("Tells Vue that the dynamic parts should be inserted into the HTML element in "),
                    (0,external_vue_.createVNode)("code", null, "/public/index.html"),
                    (0,external_vue_.createTextVNode)(" with the id "),
                    (0,external_vue_.createVNode)("code", null, "app"),
                    (0,external_vue_.createTextVNode)(".")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" Vue "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'vue'"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" App "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'./App.vue'"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" router "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'./router'"),
                      (0,external_vue_.createTextVNode)("\n\nVue"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("config"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("productionTip "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Vue"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  router"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "render"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token parameter" }, "h"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "h"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("App"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "$mount"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'#app'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/src/router.js" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>This file tells Vue what main content to show (which Vue component to use) on the page depending on which URI the user navigates to. Initially it says:</p><ul${
                _scopeId
              }><li${
                _scopeId
              }>The URI <code${
                _scopeId
              }>/</code> should show the Vue component <code${
                _scopeId
              }>/src/views/Home.vue</code> as the main content.</li><li${
                _scopeId
              }>The URI <code${
                _scopeId
              }>/about</code> should show the Vue component <code${
                _scopeId
              }>/src/views/About.vue</code> as the main content.</li></ul><div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token keyword"${
                _scopeId
              }>import</span> Vue <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;vue&#39;</span>
<span class="token keyword"${
                _scopeId
              }>import</span> Router <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;vue-router&#39;</span>
<span class="token keyword"${
                _scopeId
              }>import</span> Home <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;./views/Home.vue&#39;</span>
<span class="token keyword"${
                _scopeId
              }>import</span> About <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;./views/About.vue&#39;</span>

Vue<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>use</span><span class="token punctuation"${
                _scopeId
              }>(</span>Router<span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token keyword"${
                _scopeId
              }>export</span> <span class="token keyword"${
                _scopeId
              }>default</span> <span class="token keyword"${
                _scopeId
              }>new</span> <span class="token class-name"${
                _scopeId
              }>Router</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token punctuation"${
                _scopeId
              }>{</span>
  routes<span class="token operator"${
                _scopeId
              }>:</span> <span class="token punctuation"${
                _scopeId
              }>[</span><span class="token punctuation"${
                _scopeId
              }>{</span>
    path<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;/&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;home&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    component<span class="token operator"${
                _scopeId
              }>:</span> Home
  <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    path<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;/about&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;about&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
    component<span class="token operator"${
                _scopeId
              }>:</span> About
  <span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>]</span>
<span class="token punctuation"${
                _scopeId
              }>}</span><span class="token punctuation"${
                _scopeId
              }>)</span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>2</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>3</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>4</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>5</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>6</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>7</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>8</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>9</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>10</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>11</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>12</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>13</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>14</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>15</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>16</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>17</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>18</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, "This file tells Vue what main content to show (which Vue component to use) on the page depending on which URI the user navigates to. Initially it says:"),
                (0,external_vue_.createVNode)("ul", null, [
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("The URI "),
                    (0,external_vue_.createVNode)("code", null, "/"),
                    (0,external_vue_.createTextVNode)(" should show the Vue component "),
                    (0,external_vue_.createVNode)("code", null, "/src/views/Home.vue"),
                    (0,external_vue_.createTextVNode)(" as the main content.")
                  ]),
                  (0,external_vue_.createVNode)("li", null, [
                    (0,external_vue_.createTextVNode)("The URI "),
                    (0,external_vue_.createVNode)("code", null, "/about"),
                    (0,external_vue_.createTextVNode)(" should show the Vue component "),
                    (0,external_vue_.createVNode)("code", null, "/src/views/About.vue"),
                    (0,external_vue_.createTextVNode)(" as the main content.")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" Vue "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'vue'"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" Router "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'vue-router'"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" Home "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'./views/Home.vue'"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                      (0,external_vue_.createTextVNode)(" About "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'./views/About.vue'"),
                      (0,external_vue_.createTextVNode)("\n\nVue"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "use"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("Router"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Router"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n  routes"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    path"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'/'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    name"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'home'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    component"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" Home\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                      (0,external_vue_.createTextVNode)("\n    path"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'/about'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    name"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "'about'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)("\n    component"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                      (0,external_vue_.createTextVNode)(" About\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/src/App.vue" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>This is the main Vue component that is shown. It acts as the layout and will insert the main content on the page where you use the special Vue component <code${
                _scopeId
              }>&lt;router-view/&gt;</code>. To insert links that changes the main content when clicked on use the special Vue component <code${
                _scopeId
              }>&lt;router-link to=&quot;/THE-URI&quot;&gt;LINK TEXT&lt;/router-link&gt;</code></p><div class="language-html ext-html line-numbers-mode"${
                _scopeId
              }><pre class="language-html"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>template</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>div</span> <span class="token attr-name"${
                _scopeId
              }>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>app<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>div</span> <span class="token attr-name"${
                _scopeId
              }>id</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>nav<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
      <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>router-link</span> <span class="token attr-name"${
                _scopeId
              }>to</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>/<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>Home<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>router-link</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span> |
      <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>router-link</span> <span class="token attr-name"${
                _scopeId
              }>to</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>/about<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>About<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>router-link</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>div</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>router-view</span><span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>div</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>template</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>2</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>3</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>4</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>5</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>6</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>7</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>8</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>9</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("This is the main Vue component that is shown. It acts as the layout and will insert the main content on the page where you use the special Vue component "),
                  (0,external_vue_.createVNode)("code", null, "<router-view/>"),
                  (0,external_vue_.createTextVNode)(". To insert links that changes the main content when clicked on use the special Vue component "),
                  (0,external_vue_.createVNode)("code", null, "<router-link to=\"/THE-URI\">LINK TEXT</router-link>")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("template")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("app"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("nav"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("router-link")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "to"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("/"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("Home"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("router-link")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)(" |\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("router-link")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "to"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("/about"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("About"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("router-link")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("router-view")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("template")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/src/views/*.vue" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>The Vue components in this folder (<code${
                _scopeId
              }>Home.vue</code> and <code${
                _scopeId
              }>About.vue</code>) represent the main content on the various pages. They are also called <em${
                _scopeId
              }>views</em>.</p><p${
                _scopeId
              }>Sample code of <code${
                _scopeId
              }>/src/views/Home.vue</code> (which in turn makes use of the Vue component <code${
                _scopeId
              }>HelloWorld.vue</code> from the folder <code${
                _scopeId
              }>/src/components/</code>):</p><div class="language-html ext-html line-numbers-mode"${
                _scopeId
              }><pre class="language-html"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>template</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>div</span> <span class="token attr-name"${
                _scopeId
              }>class</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>home<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>h1</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>This is home<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>h1</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>HelloWorld</span> <span class="token attr-name"${
                _scopeId
              }>msg</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>Welcome to Your Vue.js App<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>/&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>div</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>template</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>

<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>script</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token script"${
                _scopeId
              }><span class="token language-javascript"${
                _scopeId
              }>
<span class="token comment"${
                _scopeId
              }>// @ is an alias to /src</span>
<span class="token keyword"${
                _scopeId
              }>import</span> HelloWorld <span class="token keyword"${
                _scopeId
              }>from</span> <span class="token string"${
                _scopeId
              }>&#39;@/components/HelloWorld.vue&#39;</span>

<span class="token keyword"${
                _scopeId
              }>export</span> <span class="token keyword"${
                _scopeId
              }>default</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
  name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;home&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
  components<span class="token operator"${
                _scopeId
              }>:</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    HelloWorld
  <span class="token punctuation"${
                _scopeId
              }>}</span>
<span class="token punctuation"${
                _scopeId
              }>}</span>
</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>script</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>2</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>3</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>4</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>5</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>6</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>7</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>8</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>9</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>10</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>11</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>12</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>13</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>14</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>15</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>16</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>17</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>18</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The Vue components in this folder ("),
                  (0,external_vue_.createVNode)("code", null, "Home.vue"),
                  (0,external_vue_.createTextVNode)(" and "),
                  (0,external_vue_.createVNode)("code", null, "About.vue"),
                  (0,external_vue_.createTextVNode)(") represent the main content on the various pages. They are also called "),
                  (0,external_vue_.createVNode)("em", null, "views"),
                  (0,external_vue_.createTextVNode)(".")
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("Sample code of "),
                  (0,external_vue_.createVNode)("code", null, "/src/views/Home.vue"),
                  (0,external_vue_.createTextVNode)(" (which in turn makes use of the Vue component "),
                  (0,external_vue_.createVNode)("code", null, "HelloWorld.vue"),
                  (0,external_vue_.createTextVNode)(" from the folder "),
                  (0,external_vue_.createVNode)("code", null, "/src/components/"),
                  (0,external_vue_.createTextVNode)("):")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("template")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("home"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("h1")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("This is home"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("h1")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("HelloWorld")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "msg"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("Welcome to Your Vue.js App"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("template")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("script")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token script" }, [
                        (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token comment" }, "// @ is an alias to /src"),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                          (0,external_vue_.createTextVNode)(" HelloWorld "),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token string" }, "'@/components/HelloWorld.vue'"),
                          (0,external_vue_.createTextVNode)("\n\n"),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                          (0,external_vue_.createTextVNode)("\n  name"),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token string" }, "'home'"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                          (0,external_vue_.createTextVNode)("\n  components"),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                          (0,external_vue_.createTextVNode)("\n    HelloWorld\n  "),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                          (0,external_vue_.createTextVNode)("\n")
                        ])
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("script")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/src/components/*.vue" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>The Vue components in this folder represent Vue components that can be re-used in other Vue components. As example, if you want to have a login form at multiple different places in your application you could create a Vue component in this folder (e.g. <code${
                _scopeId
              }>Login.vue</code>) containing that login form/functionality, and then refer to this component in any other Vue component where you want the login form to appear.</p><p${
                _scopeId
              }>Sample code of <code${
                _scopeId
              }>/src/components/HelloWorld.vue</code>:</p><div class="language-html ext-html line-numbers-mode"${
                _scopeId
              }><pre class="language-html"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>template</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>div</span> <span class="token attr-name"${
                _scopeId
              }>class</span><span class="token attr-value"${
                _scopeId
              }><span class="token punctuation attr-equals"${
                _scopeId
              }>=</span><span class="token punctuation"${
                _scopeId
              }>&quot;</span>hello<span class="token punctuation"${
                _scopeId
              }>&quot;</span></span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>h1</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>{{msg}}<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>h1</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
    <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>p</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>How are you?<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>p</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
  <span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>div</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>template</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>

<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>script</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token script"${
                _scopeId
              }><span class="token language-javascript"${
                _scopeId
              }>
<span class="token keyword"${
                _scopeId
              }>export</span> <span class="token keyword"${
                _scopeId
              }>default</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
  name<span class="token operator"${
                _scopeId
              }>:</span> <span class="token string"${
                _scopeId
              }>&#39;HelloWorld&#39;</span><span class="token punctuation"${
                _scopeId
              }>,</span>
  props<span class="token operator"${
                _scopeId
              }>:</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
    msg<span class="token operator"${
                _scopeId
              }>:</span> String
  <span class="token punctuation"${
                _scopeId
              }>}</span>
<span class="token punctuation"${
                _scopeId
              }>}</span>
</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>script</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>

<span class="token comment"${
                _scopeId
              }>&lt;!-- Add &quot;scoped&quot; attribute to limit CSS to this component only --&gt;</span>
<span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;</span>style</span> <span class="token attr-name"${
                _scopeId
              }>scoped</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span><span class="token style"${
                _scopeId
              }><span class="token language-css"${
                _scopeId
              }>
<span class="token selector"${
                _scopeId
              }>*</span> <span class="token punctuation"${
                _scopeId
              }>{</span>
  <span class="token property"${
                _scopeId
              }>color</span><span class="token punctuation"${
                _scopeId
              }>:</span> red<span class="token punctuation"${
                _scopeId
              }>;</span>
<span class="token punctuation"${
                _scopeId
              }>}</span>
</span></span><span class="token tag"${
                _scopeId
              }><span class="token tag"${
                _scopeId
              }><span class="token punctuation"${
                _scopeId
              }>&lt;/</span>style</span><span class="token punctuation"${
                _scopeId
              }>&gt;</span></span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>2</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>3</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>4</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>5</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>6</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>7</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>8</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>9</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>10</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>11</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>12</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>13</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>14</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>15</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>16</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>17</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>18</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>19</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>20</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>21</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>22</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("The Vue components in this folder represent Vue components that can be re-used in other Vue components. As example, if you want to have a login form at multiple different places in your application you could create a Vue component in this folder (e.g. "),
                  (0,external_vue_.createVNode)("code", null, "Login.vue"),
                  (0,external_vue_.createTextVNode)(") containing that login form/functionality, and then refer to this component in any other Vue component where you want the login form to appear.")
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("Sample code of "),
                  (0,external_vue_.createVNode)("code", null, "/src/components/HelloWorld.vue"),
                  (0,external_vue_.createTextVNode)(":")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("template")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                        (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                          (0,external_vue_.createTextVNode)("hello"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("h1")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("{{msg}}"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("h1")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("p")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("How are you?"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("p")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n  "),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("div")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("template")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("script")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token script" }, [
                        (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                          (0,external_vue_.createTextVNode)("\n  name"),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token string" }, "'HelloWorld'"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                          (0,external_vue_.createTextVNode)("\n  props"),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                          (0,external_vue_.createTextVNode)("\n    msg"),
                          (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                          (0,external_vue_.createTextVNode)(" String\n  "),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                          (0,external_vue_.createTextVNode)("\n")
                        ])
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("script")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Add \"scoped\" attribute to limit CSS to this component only -->"),
                      (0,external_vue_.createTextVNode)("\n"),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                          (0,external_vue_.createTextVNode)("style")
                        ]),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "scoped"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token style" }, [
                        (0,external_vue_.createVNode)("span", { class: "token language-css" }, [
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token selector" }, "*"),
                          (0,external_vue_.createTextVNode)(),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                          (0,external_vue_.createTextVNode)("\n  "),
                          (0,external_vue_.createVNode)("span", { class: "token property" }, "color"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                          (0,external_vue_.createTextVNode)(" red"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                          (0,external_vue_.createTextVNode)("\n"),
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                          (0,external_vue_.createTextVNode)("\n")
                        ])
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                          (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                          (0,external_vue_.createTextVNode)("style")
                        ]),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                      ]),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "/src/assets/*" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${_scopeId}>In this folder you can place static files (such as images) and then refer to them in the other source files using relative paths.</p>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, "In this folder you can place static files (such as images) and then refer to them in the other source files using relative paths.")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "::: /public/*"),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("In this folder you can place static files (such as images) and then refer to them in the other source files using absolute paths. Often better to use the "),
            (0,external_vue_.createVNode)("code", null, "/src/assets/"),
            (0,external_vue_.createTextVNode)(" folder instead.")
          ]),
          (0,external_vue_.createVNode)("p", null, ":::"),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/public/index.html" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, "Contains the fundamental HTML code for your Single-Page Application. This is the only HTML file you will have in your entire application."),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("The most important part is "),
                (0,external_vue_.createVNode)("code", null, "<div id=\"app\"></div>"),
                (0,external_vue_.createTextVNode)(". This is the element Vue will use to render its dynamic content. Often you don't need to change anything in this file, but it can be useful to make changes to the "),
                (0,external_vue_.createVNode)("code", null, "<head>"),
                (0,external_vue_.createTextVNode)(" element (change "),
                (0,external_vue_.createVNode)("code", null, "<title>"),
                (0,external_vue_.createTextVNode)(", load files from CSS framework using more "),
                (0,external_vue_.createVNode)("code", null, "<link>"),
                (0,external_vue_.createTextVNode)(" elements or from JavaScript libraries using "),
                (0,external_vue_.createVNode)("code", null, "<script>"),
                (0,external_vue_.createTextVNode)(" elements, etc.).")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token doctype" }, [
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<!"),
                      (0,external_vue_.createVNode)("span", { class: "token doctype-tag" }, "DOCTYPE"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token name" }, "html"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("html")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "lang"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("en"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("head")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("meta")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "charset"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("utf-8"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("meta")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "http-equiv"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("X-UA-Compatible"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "content"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("IE=edge"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("meta")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "name"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("viewport"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "content"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("width=device-width,initial-scale=1.0"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("link")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "rel"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("icon"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "href"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("<%= BASE_URL %>favicon.ico"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("My Website"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("title")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("head")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("body")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("noscript")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("strong")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("This website only works if you have JavaScript enabled."),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("strong")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("noscript")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("app"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- built files will be auto injected -->"),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("body")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("html")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/src/main.js" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, "This is the file that first run when your Vue application starts. It is primarily used to configure the Vue application. Currently it:"),
              (0,external_vue_.createVNode)("ol", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Adds routing capabilities to the application (as they are defined in "),
                  (0,external_vue_.createVNode)("code", null, "/src/router.js"),
                  (0,external_vue_.createTextVNode)(").")
                ]),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Tells Vue that "),
                  (0,external_vue_.createVNode)("code", null, "/src/App.vue"),
                  (0,external_vue_.createTextVNode)(" is the main Vue component that should be shown.")
                ]),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Tells Vue that the dynamic parts should be inserted into the HTML element in "),
                  (0,external_vue_.createVNode)("code", null, "/public/index.html"),
                  (0,external_vue_.createTextVNode)(" with the id "),
                  (0,external_vue_.createVNode)("code", null, "app"),
                  (0,external_vue_.createTextVNode)(".")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" Vue "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'vue'"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" App "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'./App.vue'"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" router "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'./router'"),
                    (0,external_vue_.createTextVNode)("\n\nVue"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("config"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("productionTip "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Vue"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  router"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token function-variable function" }, "render"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "h"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "h"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("App"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "$mount"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'#app'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/src/router.js" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, "This file tells Vue what main content to show (which Vue component to use) on the page depending on which URI the user navigates to. Initially it says:"),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("The URI "),
                  (0,external_vue_.createVNode)("code", null, "/"),
                  (0,external_vue_.createTextVNode)(" should show the Vue component "),
                  (0,external_vue_.createVNode)("code", null, "/src/views/Home.vue"),
                  (0,external_vue_.createTextVNode)(" as the main content.")
                ]),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("The URI "),
                  (0,external_vue_.createVNode)("code", null, "/about"),
                  (0,external_vue_.createTextVNode)(" should show the Vue component "),
                  (0,external_vue_.createVNode)("code", null, "/src/views/About.vue"),
                  (0,external_vue_.createTextVNode)(" as the main content.")
                ])
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" Vue "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'vue'"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" Router "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'vue-router'"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" Home "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'./views/Home.vue'"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                    (0,external_vue_.createTextVNode)(" About "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'./views/About.vue'"),
                    (0,external_vue_.createTextVNode)("\n\nVue"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "use"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("Router"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "new"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token class-name" }, "Router"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n  routes"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    path"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'home'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    component"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" Home\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n    path"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/about'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    name"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'about'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)("\n    component"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)(" About\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/src/App.vue" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("This is the main Vue component that is shown. It acts as the layout and will insert the main content on the page where you use the special Vue component "),
                (0,external_vue_.createVNode)("code", null, "<router-view/>"),
                (0,external_vue_.createTextVNode)(". To insert links that changes the main content when clicked on use the special Vue component "),
                (0,external_vue_.createVNode)("code", null, "<router-link to=\"/THE-URI\">LINK TEXT</router-link>")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("template")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("app"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("nav"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("router-link")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "to"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("/"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("Home"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("router-link")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)(" |\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("router-link")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "to"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("/about"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("About"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("router-link")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("router-view")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("template")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/src/views/*.vue" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("The Vue components in this folder ("),
                (0,external_vue_.createVNode)("code", null, "Home.vue"),
                (0,external_vue_.createTextVNode)(" and "),
                (0,external_vue_.createVNode)("code", null, "About.vue"),
                (0,external_vue_.createTextVNode)(") represent the main content on the various pages. They are also called "),
                (0,external_vue_.createVNode)("em", null, "views"),
                (0,external_vue_.createTextVNode)(".")
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("Sample code of "),
                (0,external_vue_.createVNode)("code", null, "/src/views/Home.vue"),
                (0,external_vue_.createTextVNode)(" (which in turn makes use of the Vue component "),
                (0,external_vue_.createVNode)("code", null, "HelloWorld.vue"),
                (0,external_vue_.createTextVNode)(" from the folder "),
                (0,external_vue_.createVNode)("code", null, "/src/components/"),
                (0,external_vue_.createTextVNode)("):")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("template")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("home"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("h1")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("This is home"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("h1")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("HelloWorld")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "msg"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("Welcome to Your Vue.js App"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "/>")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("template")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("script")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token script" }, [
                      (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token comment" }, "// @ is an alias to /src"),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "import"),
                        (0,external_vue_.createTextVNode)(" HelloWorld "),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "from"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token string" }, "'@/components/HelloWorld.vue'"),
                        (0,external_vue_.createTextVNode)("\n\n"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n  name"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token string" }, "'home'"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)("\n  components"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n    HelloWorld\n  "),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n")
                      ])
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("script")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/src/components/*.vue" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("The Vue components in this folder represent Vue components that can be re-used in other Vue components. As example, if you want to have a login form at multiple different places in your application you could create a Vue component in this folder (e.g. "),
                (0,external_vue_.createVNode)("code", null, "Login.vue"),
                (0,external_vue_.createTextVNode)(") containing that login form/functionality, and then refer to this component in any other Vue component where you want the login form to appear.")
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("Sample code of "),
                (0,external_vue_.createVNode)("code", null, "/src/components/HelloWorld.vue"),
                (0,external_vue_.createTextVNode)(":")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-html ext-html line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-html" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("template")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                      (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                        (0,external_vue_.createTextVNode)("hello"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("h1")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("{{msg}}"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("h1")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("p")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("How are you?"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("p")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n  "),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("div")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("template")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("script")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token script" }, [
                      (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token keyword" }, "default"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n  name"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token string" }, "'HelloWorld'"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                        (0,external_vue_.createTextVNode)("\n  props"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n    msg"),
                        (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                        (0,external_vue_.createTextVNode)(" String\n  "),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n")
                      ])
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("script")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "<!-- Add \"scoped\" attribute to limit CSS to this component only -->"),
                    (0,external_vue_.createTextVNode)("\n"),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                        (0,external_vue_.createTextVNode)("style")
                      ]),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "scoped"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token style" }, [
                      (0,external_vue_.createVNode)("span", { class: "token language-css" }, [
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token selector" }, "*"),
                        (0,external_vue_.createTextVNode)(),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                        (0,external_vue_.createTextVNode)("\n  "),
                        (0,external_vue_.createVNode)("span", { class: "token property" }, "color"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ":"),
                        (0,external_vue_.createTextVNode)(" red"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                        (0,external_vue_.createTextVNode)("\n"),
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                        (0,external_vue_.createTextVNode)("\n")
                      ])
                    ]),
                    (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                      (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                        (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                        (0,external_vue_.createTextVNode)("style")
                      ]),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                    ]),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "5"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "6"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "7"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "8"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "9"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "10"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "11"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "12"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "13"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "14"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "15"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "16"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "17"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "18"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "/src/assets/*" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, "In this folder you can place static files (such as images) and then refer to them in the other source files using relative paths.")
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="application-layout" tabindex="-1"><a class="header-anchor" href="#application-layout" aria-hidden="true">#</a> Application (layout)</h3><p>So <code>/src/App.vue</code> is a Vue component that act as the layout for the application. In this component you can use the special Vue component <code>&lt;router-view/&gt;</code> to insert the main content at one place, and you can use the special Vue component <code>&lt;router-link to=&quot;/THE-URI&quot;&gt;LINK TEXT&lt;/router-link&gt;</code> to insert links to the other &quot;pages&quot;/views (<code>/src/views/Home.Vue</code> and <code>/src/views/About.Vue</code>).</p><p>Change the layout (change the code in <code>/src/App.vue</code>) to contain at least:</p><ul><li>A header</li><li>A navigation menu</li><li>The main content</li><li>A footer</li></ul><p>Design your layout however you want. It&#39;s not that important that it&#39;s beautiful, the most important thing is that you learn how this component works and should be used. See the rest of the sub-chapters in Part 1 to see which links you need to have in the navigation menu (or the header/footer).</p><div class="custom-container tip"><p class="custom-container-title">Be smart/lazy</p><p>Feel free to use a CSS framework such as Bootstrap to design your application. Most CSS frameworks are distributed as npm packages, so often you can just run <code>npm install ...</code> to download the source files for the framework and then load them into your application by importing the required CSS and JS files from the npm package you downloaded, but loading them from a Content Delivery Network by adding <code>&lt;link&gt;</code> and <code>&lt;script&gt;</code> elements in <code>/public/index.html</code> works as well.</p></div><h3 id="home-about-static" tabindex="-1"><a class="header-anchor" href="#home-about-static" aria-hidden="true">#</a> Home &amp; About (static)</h3><p>Change <code>/src/views/Home.Vue</code> and <code>/src/views/About.Vue</code> to be more relevant to your application. It&#39;s not that important what they contain, but they should feel like they&#39;re part of the application. The goal is simply to practice on using HTML and CSS in your Vue component.</p><p>Feel free to delete <code>/src/components/HelloWorld.vue</code>.</p><h3 id="dice-state-conditionals-events" tabindex="-1"><a class="header-anchor" href="#dice-state-conditionals-events" aria-hidden="true">#</a> Dice (state, conditionals, events)</h3><p>Add a new Vue component representing the main content on a &quot;page&quot; that displays a random value between 1 and 6:</p><ol><li>Create a new file called <code>Dice.vue</code> in <code>/src/views/</code>. To start you can simply copy the content of <code>Home.vue</code> and paste it in <code>Dice.vue</code>.</li><li>Register a route to this new component in <code>/src/router.js</code>.</li><li>If you haven&#39;t already done it, provide a link to the new route by adding <code>&lt;router-link to=&quot;/THE-URI&quot;&gt;LINK TEXT&lt;/router-link&gt;</code> to the navigation menu/header/footer in your layout (<code>/src/App.vue</code>).</li></ol><p>Then add the <code>data</code> function to <code>Dice.vue</code>:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> between1And6 <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">6</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      diceValue<span class="token operator">:</span> between1And6
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Then change the HTML code in <code>Dice.vue</code> to display <code>diceValue</code>. In the HTML code you should also display the text:</p><ul><li><code>That was low.</code> if <code>diceValue</code> is 1 or 2.</li><li><code>That was average.</code> if <code>diceValue</code> is 3 or 4.</li><li><code>That was high.</code> if <code>diceValue</code> is 5 or 6.</li></ul><p>To conditionally display HTML code you can use <a href="https://vuejs.org/v2/guide/conditional.html" target="_blank" rel="noopener noreferrer">the <code>v-if</code>, <code>v-else-if</code> and <code>v-else</code> directives`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>To generate a new random dice value shown on the screen the user needs to go to another &quot;page&quot; and then back again (so the current instance of <code>Dice.vue</code> is deleted and then a new instance of it is created and displayed when the user gets back). This is not that convenient for the user. Instead, add an HTML button in <code>Dice.vue</code> the user can click on to &quot;throw&quot; the dice again (generate a new random integer between 1 and 6). You need to add a method to your component to handle the click like this:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">throwDice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// You need to change the code here...</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>diceValue <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>And then tell Vue to run this method when the user clicks on the button (you need to use the <a href="https://vuejs.org/v2/guide/events.html#Listening-to-Events" target="_blank" rel="noopener noreferrer"><code>v-on</code> directive`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (or the short syntax <code>@</code>)).</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>Inside a method in a Vue component (such as <code>throwDice</code> above) we can use the special variable <code>this</code> to refer to the instance of the Vue component itself. <code>this.diceValue</code> will refer to the same <code>diceValue</code> in the object we returned from the <code>data()</code> method.</p></div><h3 id="faq-loops" tabindex="-1"><a class="header-anchor" href="#faq-loops" aria-hidden="true">#</a> FAQ (loops)</h3><p>Add a new Vue component representing the main content on a FAQ &quot;page&quot;. The procedure is similar to what you did before.</p><p>Don&#39;t hard code the FAQs in the HTML code in your component. Instead, use the <code>data()</code> method and put the FAQs in an array like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
  question<span class="token operator">:</span> <span class="token string">&quot;How old are you?&quot;</span><span class="token punctuation">,</span>
  answer<span class="token operator">:</span> <span class="token string">&quot;I&#39;m 10 years old.&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  question<span class="token operator">:</span> <span class="token string">&quot;What&#39;s your favorite color?&quot;</span><span class="token punctuation">,</span>
  answer<span class="token operator">:</span> <span class="token string">&quot;My favorite color is purple.&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In your HTML code you can then use the <a href="https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for" target="_blank" rel="noopener noreferrer"><code>v-for</code> directive`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to loop through all the FAQs and produce similar looking HTML code for all of them.</p><p>Then add a <code>showAnswer</code> property to all your FAQ objects in the array with the initial value <code>false</code>. The answer to a FAQ should only be shown if its <code>showAnswer</code> property has the value <code>true</code>. The user should be able to show/hide the answer to each FAQ by clicking on the FAQ&#39;s question shown on the screen. So in the HTML code you need to listen for click on the question, and then invert that FAQ object&#39;s <code>showAnswer</code> value.</p><p>Somewhere on the &quot;page&quot; you should also display how many FAQs there are in total.</p><h3 id="calculator-model-binding-computed-properties" tabindex="-1"><a class="header-anchor" href="#calculator-model-binding-computed-properties" aria-hidden="true">#</a> Calculator (model binding, computed properties)</h3><p>Add a new page with a form in which the user can enter two numbers and select one of the operations <code>+</code>, <code>-</code>, <code>*</code> and <code>/</code>. As the user changes any of these fields, the result of the computation should be shown on the screen, but no result should be shown on the screen until the user has changed all three fields.</p><p>To implement this, use the <a href="https://vuejs.org/v2/guide/forms.html" target="_blank" rel="noopener noreferrer"><code>v-model</code> directive`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> for two <code>&lt;input&gt;</code> (for the two numbers) and one <code>&lt;select&gt;</code> (for the operation) and then use a <a href="https://vuejs.org/v2/guide/computed.html#Computed-Properties" target="_blank" rel="noopener noreferrer">computed property`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to automatically compute the result of the operation as soon as the user changes any of the three fields.</p><h3 id="clock-life-cycles" tabindex="-1"><a class="header-anchor" href="#clock-life-cycles" aria-hidden="true">#</a> Clock (life cycles)</h3><p>Some times you want to create a Vue component that needs to be updated regularly. An example of that is a <code>Clock.vue</code> component that displays the current time of day in the format HH:mm:ss and updates that each second.</p><p>To figure out what the current time is, JavaScript gives us the <code>Date</code> constructor that we can use like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> hours <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// E.g. 14</span>
<span class="token keyword">const</span> minutes <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// E.g. 4</span>
<span class="token keyword">const</span> seconds <span class="token operator">=</span> now<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// E.g. 45</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>To regularly execute some code, web browsers gives us <a href="https://www.w3schools.com/jsref/met_win_setinterval.asp" target="_blank" rel="noopener noreferrer">the function <code>setInterval()</code>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, which we can pass a callback function and an interval to. The web browser will then repeatedly call our callback function with that interval. However, if one Vue component calls <code>setInterval()</code> to regularly update itself, and then that component is deleted, then we need to tell the web browser to stop calling our callback function, because we don&#39;t need that anymore. To do that, web browsers also gives us <a href="https://www.w3schools.com/jsref/met_win_clearinterval.asp" target="_blank" rel="noopener noreferrer">the function <code>clearInterval()</code>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. To call <code>setInterval()</code> when a Vue component is created we can use the <code>created()</code> method, and to call <code>clearInterval()</code> when a Vue component is destroyed we can use the <code>destroyed()</code> method:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Call setInterval() here...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Call clearInterval() here...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>To remember the id you get back from <code>setInterval()</code>, you can simply store it on the Vue component instance using the special <code>this</code> variable, i.e. <code>this.intervalId = &quot;The value we get back from setInterval()&quot;</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The callback function you pass to <code>setInterval()</code> we be invoked as a function by the web browser. That means the special variable <code>this</code> inside the callback function will not refer to the Vue component instance unless you write code explicitly making that happen.</p><p>Don&#39;t use:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// The special variable &quot;this&quot; won&#39;t refer to the Vue component instance here :(</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Instead, either do one of the following:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// The special variable &quot;this&quot; will refer to the Vue component instance :)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// The special variable &quot;this&quot; will refer to the Vue component instance :)</span>
  <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// The variable &quot;self&quot; will refer to the Vue component instance :)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><p>Use <code>setInterval()</code>, <code>clearInterval()</code> and <code>Date</code> to implement a <code>Clock.vue</code> component that displays the current time in the format HH:mm:ss (each unit should always be displayed with two digits). Be sure to properly use <code>created()</code> and <code>destroyed()</code>.</p><h3 id="counters-props" tabindex="-1"><a class="header-anchor" href="#counters-props" aria-hidden="true">#</a> Counters (props)</h3><p>Create a new page that have three buttons functioning as counters (each button contains a number, and clicking on the button should increment the number):</p><ul><li>The first button should start on 0, and clicking it should increment it by 1.</li><li>The second button should start on 45, and clicking it should increment it by 5.</li><li>The third button should start on 33, and clicking it should increment it by 10.</li></ul><p>Instead of implementing three separate counters, create a Vue component in the <code>/src/components/</code> folder representing a single counter, and then use three instances of it on your counters &quot;page&quot;. Since the timers should function differently (different start values and different increment steps) you can&#39;t hard code that in the counter component. Instead, the one using the counter component should be able to specify this through props, e.g. (<code>&lt;Counter start-value=&quot;33&quot; inc-steps=&quot;10&quot;/&gt;</code>).</p><p>Read more about <a href="https://vuejs.org/v2/guide/components-props.html" target="_blank" rel="noopener noreferrer">props in Vue&#39;s docs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><h3 id="oral-presentation" tabindex="-1"><a class="header-anchor" href="#oral-presentation" aria-hidden="true">#</a> Oral presentation</h3><p>When you&#39;re done with Part 1, present your work orally to a teacher at one of the lab sessions. Be prepared to:</p><ul><li>Show that your application works as it should.</li><li>Explain how the code you&#39;ve written works.</li><li>Answer any question the teacher might have about the code (the teacher will ask question to verify that you understand how it works).</li></ul><p>Afterwards you will be approved on the objective <em>Lab Part 1</em> on Ping Pong by the teacher.</p><h2 id="part-2-using-a-rest-api-in-vue" tabindex="-1"><a class="header-anchor" href="#part-2-using-a-rest-api-in-vue" aria-hidden="true">#</a> Part 2 - Using a REST API in Vue</h2><p>The goal with this part of the project is to teach you how to use a backend in your Single-Page Application to fetch and store some data.</p><p>In this lab you will implement a Single-Page Application as the frontend application for a platform called <em>Activity Finder</em>. On this platform users can create new accounts and then register activities they are going to do that others may come to as well. Example of activities are:</p><ul><li>Play football</li><li>Learn how to play guitar</li><li>Watch the movie Lord of the Rings</li></ul><p>The backend for the platform has already been implemented. The backend exposes a REST API one can use to communicate with it. A client side SDK for the REST API is also available, making it very easy to communicate with the backend. Your task is simply to implement the frontend as a Single-Page Application using Vue and the SDK.</p><h3 id="starting-the-backend" tabindex="-1"><a class="header-anchor" href="#starting-the-backend" aria-hidden="true">#</a> Starting the backend</h3><p>The backend is implemented in Node.js, and its source code is available in the ZIP file <a href="files/activity-finder-backend.zip">activity-finder-backend.zip</a>. When you develop/test your frontend application, you need to have the backend application up and running on the same computer as your frontend application. To get the backend application up and running you need to:</p><ol><li>Download and unzip the source code for the backend application.</li><li>Open the root folder of the backend application in a shell.</li><li>Run the command <code>npm install</code> to install all the npm packages it is using.</li><li>Run the command <code>npm run start</code> to start it.</li></ol><p>When you have started the backend application it will listen for incoming HTTP requests through the REST API on port 8000. If you want to change the port number, just change that at the bottom of the file <code>/src/app.js</code> in the backend application. To test if the backend application is properly running, open <a href="http://localhost:8000/accounts" target="_blank" rel="noopener noreferrer">localhost:8000/accounts`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in a web browser. If it&#39;s up and running you should see an empty JSON array (<code>[]</code>) on the screen. You can also try to use Postman to send your own HTTP requests to it.</p><h3 id="getting-started-with-the-frontend" tabindex="-1"><a class="header-anchor" href="#getting-started-with-the-frontend" aria-hidden="true">#</a> Getting started with the frontend</h3><p>Create a new Vue application as your frontend application the same way you did in Part 1. Add the file <a href="files/activity-finder-client.js">activity-finder-client.js</a> to the <code>/src</code> folder of your Vue application. This file is the SDK you can use to communicate with the backend application through its REST API. For example, this file exports a function called <code>getAllAccounts()</code>, and when you call this function the SDK will in turn send an HTTP GET request for <code>/accounts</code> to the backend application, which then in turn sends back all accounts to the SDK, which then delivers all these accounts to you as an array containing objects where each object contains information about an account. But more on this later.</p><p>If you changed the port number the backend is listening for incoming HTTP requests on, you need to change that at the top of the file <code>activity-finder-client.js</code> as well (the constant <code>rootPath</code>).</p><p>The SDK makes use of the npm package <code>jwt-decode</code>, so in the root folder of your Vue application you also need to run the command <code>npm install jwt-decode</code>.</p><h3 id="implementing-the-layout" tabindex="-1"><a class="header-anchor" href="#implementing-the-layout" aria-hidden="true">#</a> Implementing the layout</h3><p>Just as in Part 1, change the code in <code>/src/App.vue</code> to contain a layout of your choice. Feel free to use any CSS framework you want. Look through the rest of the sub-chapters in Part 2 to understand what functionality the application will contain in the end/which links you need to have in the layout.</p><p>In your application you need to keep track of whether the user is signed in or not, and most likely you want this to be reactive, so the GUI updates on its own as soon as the user signs in/out. An easy way to implement this is by having a <code>data()</code> method in <code>/src/App.vue</code> looking like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
      user<span class="token operator">:</span> <span class="token punctuation">{</span>
        isSignedIn<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>As soon as the user signs in, you simply change <code>user.isSignedIn</code> to <code>true</code>, and then you change it to <code>false</code> when the user signs out. This way, you can in the HTML code in <code>/src/App.vue</code> show different things depending on if the user is signed in or not, e.g.:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.isSignedIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    You are signed in :)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
    You are not signed in :(
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>If you want you can also add more properties to <code>user</code>, such as <code>user.username</code> if you want to be able to display the signed in user&#39;s username.</p><p>But what if you want to be able to figure out if the user is signed in or out in another Vue component? One way is to pass the <code>user</code> object as a props to those components: in <code>/src/App.vue</code>, use <code>&lt;router-view :user=&quot;user&quot;/&gt;</code> instead of only <code>&lt;router-view/&gt;</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You might wonder why <code>/src/App.vue</code> uses:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
      user<span class="token operator">:</span> <span class="token punctuation">{</span>
        isSignedIn<span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Instead of simply:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
      isSignedIn<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>The reason is because we want the other Vue components to be able to change <code>user.isSignedIn</code>. Since the other Vue components now receive the entire <code>user</code> object as a props, this will work since <strong>objects are passed by reference</strong>. If we would only pass <code>isSignedIn</code>, which is a primitive value (a boolean), the other components would receive a copy of the value, and it wouldn&#39;t be &quot;write reactive&quot;.</p><p>(it&#39;s OK if you don&#39;t understand this, but the key thing to remember is that if a Vue component wants to change a value it has received as a props and that change should be reactive, that props needs to be an object)</p></div><h3 id="view-all-accounts" tabindex="-1"><a class="header-anchor" href="#view-all-accounts" aria-hidden="true">#</a> View all accounts</h3><p>Add a &quot;page&quot; that displays all accounts that exists. To fetch all accounts from the backend, you can call the SDK function <code>getAllAccounts()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

client<span class="token punctuation">.</span><span class="token function">getAllAccounts</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> accounts</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// accounts = array with all accounts if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// accounts = [{id: 1, username: &quot;Alice&quot;}, {...}, ...]</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Populating the database</p><p>The backend does initially not contain any accounts, so if you implement this correctly you will fetch an empty array with accounts. You might want to manually insert some records into the database by opening the file <code>/src/activity-finder.db</code> in DB Browser for SQLite.</p></div><div class="custom-container tip"><p class="custom-container-title">Callback function</p><p>Remember that <code>this</code> in a callback function won&#39;t refer to the Vue component instance if you create the callback function using <code>function(...){...}</code>, so be sure to use one of the workarounds mentioned in Lab 1, such as creating the callback function using <code>(...) =&gt; {...}</code> instead (as in the sample code above).</p></div><h3 id="view-one-account" tabindex="-1"><a class="header-anchor" href="#view-one-account" aria-hidden="true">#</a> View one account</h3><p>Add a &quot;page&quot; that displays one account with a specific id. On the previous page, clicking on an account should lead to this page. The URL should contain information about which account to fetch, such as the account&#39;s id, like <code>/accounts/37</code>. In Vue Router you cna use <a href="https://router.vuejs.org/guide/essentials/dynamic-matching.html#dynamic-route-matching" target="_blank" rel="noopener noreferrer">Dynamic Route Matching`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to achieve this.</p><p>To fetch an account with a specific id from the backend, you can call the SDK function <code>getAccountById()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>


client<span class="token punctuation">.</span><span class="token function">getAccountById</span><span class="token punctuation">(</span><span class="token number">37</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// account = object with info about the account if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// account = {id: 37, username: &quot;Olle&quot;}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;notFound&quot;: No account with the given id exists.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="sign-up" tabindex="-1"><a class="header-anchor" href="#sign-up" aria-hidden="true">#</a> Sign up</h3><p>Add a &quot;page&quot; where the user can sign up (create a new account).</p><p>To tell the backend to create a new account, call the SDK function <code>createAccount()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> account <span class="token operator">=</span> <span class="token punctuation">{</span>
  username<span class="token operator">:</span> <span class="token string">&quot;Greta&quot;</span><span class="token punctuation">,</span>
  password<span class="token operator">:</span> <span class="token string">&quot;rrrrrr&quot;</span>
<span class="token punctuation">}</span>

client<span class="token punctuation">.</span><span class="token function">createAccount</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// id = the id the newly created account got if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// id = 85</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;invalidAccount&quot;: The account object is wrong.</span>
    <span class="token comment">//  - &quot;usernameTooShort&quot;: The username is too short.</span>
    <span class="token comment">//  - &quot;usernameTooLong&quot;: The username is too long.</span>
    <span class="token comment">//  - &quot;passwordTooShort&quot;: The password is too short.</span>
    <span class="token comment">//  - &quot;usernameTaken&quot;: The username is already used by another account.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="sign-in" tabindex="-1"><a class="header-anchor" href="#sign-in" aria-hidden="true">#</a> Sign in</h3><p>Add a &quot;page&quot; where the user can sign in. To tell the backend to sign in, call the SDK function <code>signIn()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token string">&quot;Greta&quot;</span>
<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&quot;rrrrrr&quot;</span>

client<span class="token punctuation">.</span><span class="token function">signIn</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> account</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// account = object with info about the account you signed into if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// account = {id: 85, username: &quot;Greta&quot;}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;wrongCredentials&quot;: The username of password is incorrect.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Hint</p><p>Remember, when the user has successfully signed in, change <code>user.isSignedIn</code> in <code>/src/App.vue</code> to <code>true</code> (pass <code>user</code> as a props to the &quot;page&quot; component and change it to <code>true</code> in the &quot;page&quot; component).</p></div><h3 id="sign-out" tabindex="-1"><a class="header-anchor" href="#sign-out" aria-hidden="true">#</a> Sign out</h3><p>Add a &quot;page&quot; where the user can sign out. To tell the backend to sign out, call the SDK function <code>signOut()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

client<span class="token punctuation">.</span><span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// The SDK has now forgot which account you previously signed in to.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Hint</p><p>Remember, when the user has successfully signed in, change <code>user.isSignedIn</code> in <code>/src/App.vue</code> to <code>false</code> (pass <code>user</code> as a props to the &quot;page&quot; component and change it to <code>false</code> in the &quot;page&quot; component).</p></div><h3 id="create-activity" tabindex="-1"><a class="header-anchor" href="#create-activity" aria-hidden="true">#</a> Create activity</h3><p>Add a &quot;page&quot; where signed in users can create new activities. To tell the backend to create a new activity, call the SDK function <code>createActivity()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> activity <span class="token operator">=</span> <span class="token punctuation">{</span>
  accountId<span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token comment">// The id of the account creating the activity (i.e. the signed in user&#39;s account id).</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Play football&quot;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;Ordinary football, but with three teams instead of two :)&quot;</span><span class="token punctuation">,</span>
  startTime<span class="token operator">:</span> <span class="token number">1577199600000</span><span class="token punctuation">,</span> <span class="token comment">// Unix timestamp (milliseconds)</span>
  endTime<span class="token operator">:</span> <span class="token number">1577203200000</span><span class="token punctuation">,</span> <span class="token comment">// Unix timestamp (millisecond)</span>
  latitude<span class="token operator">:</span> <span class="token number">57.77859078562013</span><span class="token punctuation">,</span>
  longitude<span class="token operator">:</span> <span class="token number">14.16189193725586</span>
<span class="token punctuation">}</span>

client<span class="token punctuation">.</span><span class="token function">createActivity</span><span class="token punctuation">(</span>activity<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// id = the id the newly created activity got if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// id = 85</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;invalidActivity&quot;: The activity object is wrong.</span>
    <span class="token comment">//  - &quot;notAuthenticated&quot;: The user is not signed in.</span>
    <span class="token comment">//  - &quot;notAuthorized&quot;: The user tries to create an activity for an account the user is not signed in to.</span>
    <span class="token comment">//  - &quot;accountNotFound&quot;: No account with the id &#39;accountId&#39; exists.</span>
    <span class="token comment">//  - &quot;titleTooShort&quot;: The title is too short.</span>
    <span class="token comment">//  - &quot;titleTooLong&quot;: The title is too long.</span>
    <span class="token comment">//  - &quot;descriptionTooShort&quot;: The description is too short.</span>
    <span class="token comment">//  - &quot;descriptionTooLong&quot;: The description is too long.</span>
    <span class="token comment">//  - &quot;startTimeTooEarly&quot;: The start time has already been.</span>
    <span class="token comment">//  - &quot;endingBeforeStarting&quot;: The end time is before the start time.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>The user can only create new activities belonging to it&#39;s own account.</p><div class="custom-container tip"><p class="custom-container-title">Hint</p><p>If you want to make it easy, let users enter <code>startTime</code> and <code>endTime</code> in <code>&lt;input type=&quot;number&quot;&gt;</code>. You can generate unix timestamps at <a href="https://timestampgenerator.com/" target="_blank" rel="noopener noreferrer">timestampgenerator.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, and then add <code>000</code> to the end to get it in milliseconds. You could use <code>&lt;input type=&quot;datetime-local&quot;&gt;</code> instead, but that requires more work from you (you need to convert it into a unix timestamp).</p></div><div class="custom-container tip"><p class="custom-container-title">Hint</p><p>You can use <code>&lt;input type=&quot;number&quot; step=&quot;any&quot;&gt;</code> to let the user enter values for <code>latitude</code> and <code>longitude</code>. The values can be found using <a href="https://epsg.io/map" target="_blank" rel="noopener noreferrer">https://epsg.io/map`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. The best would of course be to let users pick location on a map like that directly on the page, but let&#39;s do this the easy way to start with.</p></div><h3 id="view-all-activities" tabindex="-1"><a class="header-anchor" href="#view-all-activities" aria-hidden="true">#</a> View all activities</h3><p>Add a &quot;page&quot; that displays all activities. To fetch all activities from the backend, you can call the SDK function <code>getAllActivities()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

client<span class="token punctuation">.</span><span class="token function">getAllActivities</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> activities</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// activities = array with all activities if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// activities = [{id: 1, accountId: 32, title: &quot;Play football&quot;, ...}, {...}, ...]</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="view-one-activity" tabindex="-1"><a class="header-anchor" href="#view-one-activity" aria-hidden="true">#</a> View one activity</h3><p>Add a &quot;page&quot; that displays one activity with a specific id. To fetch an activity with a specific id from the backend, call the SDK function <code>getActivityById()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>


client<span class="token punctuation">.</span><span class="token function">getActivityById</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> activity</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// activity = object with info about the activity if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// activity = {id: 5, accountId: 48, title: &quot;Read Harry Potter&quot;, ...}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;notFound&quot;: No activity with the given id exists.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="view-own-activities" tabindex="-1"><a class="header-anchor" href="#view-own-activities" aria-hidden="true">#</a> View own activities</h3><p>Add a &quot;page&quot; that displays all activities created by the signed in user. To fetch all activities belonging to a specific user, call the SDK function <code>getActivitiesByAccountId()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

client<span class="token punctuation">.</span><span class="token function">getActivitiesByAccountId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors<span class="token punctuation">,</span> activities</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token comment">// activities = array with all activities if everything went OK.</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// activities = [{id: 1, accountId: 3, title: &quot;Watch the sky&quot;, ...}, {...}, ...]</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="delete-activity" tabindex="-1"><a class="header-anchor" href="#delete-activity" aria-hidden="true">#</a> Delete activity</h3><p>Somehow signed in users should be able to delete activities they have created. Implement this however you want.</p><p>To tell the backend to delete an activity with a specific id, call the SDK function <code>deleteActivityById()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

client<span class="token punctuation">.</span><span class="token function">deleteActivityById</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// activityExisted = true or false</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;notAuthenticated&quot;: The user is not signed in.</span>
    <span class="token comment">//  - &quot;notAuthorized&quot;: The user tries to delete an activity that doesn&#39;t belong to the account the user is signed into.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>A user can only delete activities belonging to its own account.</p><h3 id="update-activity" tabindex="-1"><a class="header-anchor" href="#update-activity" aria-hidden="true">#</a> Update activity</h3><p>Somehow signed in users should be able to update activities they have created. Implement this however you want.</p><p>To tell the backend to update an activity with a specific id, call the SDK function <code>updateActivityById()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../activity-finder-client&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> updatedActivity <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Play Ice Hockey&quot;</span><span class="token punctuation">,</span>
  accountId<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;CHANGE: we play ice hockey instead, 5 teams :)&quot;</span><span class="token punctuation">,</span>
  startTime<span class="token operator">:</span> <span class="token number">1577199600000</span><span class="token punctuation">,</span>
  endTime<span class="token operator">:</span> <span class="token number">1577203200000</span><span class="token punctuation">,</span>
  latitude<span class="token operator">:</span> <span class="token number">57.77859078562013</span><span class="token punctuation">,</span>
  longitude<span class="token operator">:</span> <span class="token number">14.16189193725586</span>
<span class="token punctuation">}</span>

client<span class="token punctuation">.</span><span class="token function">updateActivityById</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">,</span> updatedActivity<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">errors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// errors = array with error codes (empty if everything went OK).</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>errors<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// Activity was updated.</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// errors = [&quot;errorCode1&quot;, &quot;errorCode2&quot;, ...]</span>
    <span class="token comment">// Possible errors codes:</span>
    <span class="token comment">//  - &quot;networkError&quot;: Couldn&#39;t connect to the backend.</span>
    <span class="token comment">//  - &quot;backendError&quot;: The backend couldn&#39;t execute the request for some reason.</span>
    <span class="token comment">//  - &quot;notFound&quot;: No activity with the given id exists.</span>
    <span class="token comment">//  - &quot;invalidActivity&quot;: The activity object is wrong.</span>
    <span class="token comment">//  - &quot;notAuthenticated&quot;: The user is not signed in.</span>
    <span class="token comment">//  - &quot;notAuthorized&quot;: The user tries to update an activity for an account the user is not signed in to.</span>
    <span class="token comment">//  - &quot;idChanged&quot;: The id changed (not allowed).</span>
    <span class="token comment">//  - &quot;started&quot;: The activity has already started.</span>
    <span class="token comment">//  - &quot;titleTooShort&quot;: The title is too short.</span>
    <span class="token comment">//  - &quot;titleTooLong&quot;: The title is too long.</span>
    <span class="token comment">//  - &quot;descriptionTooShort&quot;: The description is too short.</span>
    <span class="token comment">//  - &quot;descriptionTooLong&quot;: The description is too long.</span>
    <span class="token comment">//  - &quot;startTimeTooEarly&quot;: The start time is changed to a time that has already been.</span>
    <span class="token comment">//  - &quot;endingBeforeStarting&quot;: The end time is before the start time.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>When an activity has started, it can no longer be updated, and users can only update activities belonging to their own accounts.</p><h3 id="oral-presentation-1" tabindex="-1"><a class="header-anchor" href="#oral-presentation-1" aria-hidden="true">#</a> Oral presentation</h3><p>When you&#39;re done with Part 2, present your work orally to a teacher at one of the lab sessions. Be prepared to:</p><ul><li>Show that your application works as it should.</li><li>Explain how the code you&#39;ve written works.</li><li>Answer any question the teacher might have about the code (the teacher will ask question to verify that you understand how it works).</li></ul><p>Afterwards you will be approved on the objective <em>Lab Part 2</em> on Ping Pong by the teacher.</p><p>If you have time to spare, try complete the extra tasks below.</p><h3 id="extra-tasks" tabindex="-1"><a class="header-anchor" href="#extra-tasks" aria-hidden="true">#</a> Extra tasks</h3><p>These extra tasks do not need to completed, but if you have time for it, give them a try. They are fun, we promise! 😉</p><h4 id="auto-login" tabindex="-1"><a class="header-anchor" href="#auto-login" aria-hidden="true">#</a> Auto login</h4><p>When the user signs up, also automatically sign in the user.</p><h4 id="loading-indicators" tabindex="-1"><a class="header-anchor" href="#loading-indicators" aria-hidden="true">#</a> Loading indicators</h4><p>It can take some time for the frontend before it receives the response from the backend when it has sent an HTTP request to it. This is usually not noticeable for developers who run the frontend and backend on the same computer (the communication delay is so small), but can become apparent when you deploy them on the Internet. When there is a loading time like this (~each time you use the SDK), display a loading indicator of some kind. In the simplest case, this can just be the boring text &quot;Loading&quot;, but most CSS frameworks have some nicely designed components for this.</p><p>The SDK can simulate network communication delay. In the source code, simply change the variable <code>networkDelayInMs</code> to the amount of milliseconds you want to add as delay to each HTTP request it sends.</p><h4 id="empty-states" tabindex="-1"><a class="header-anchor" href="#empty-states" aria-hidden="true">#</a> Empty states</h4><p>When listening all accounts or all activities and there are non, don&#39;t simply display an empty page. Instead, display the text &quot;None have been created yet&quot;, or do something even better. For the curious one, <a href="https://duckduckgo.com/?q=empty+state+ux" target="_blank" rel="noopener noreferrer">search for &quot;empty state ux&quot;`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><h4 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h4><p>Although the REST API/the SDK does not provide pagination functionality, nothing prevents you from implementing one in the frontend application.</p><h4 id="filtering" tabindex="-1"><a class="header-anchor" href="#filtering" aria-hidden="true">#</a> Filtering</h4><p>Instead of showing a list of all activities, also have a form users can use to filter which activities to show. You decide what filtering should be available, but maybe search for title, or select a date range or to show all activities close to a specific place? Although the REST API/the SDK does not provide filtering functionality, nothing prevents you from implementing one in the frontend application.</p><h4 id="maps" tabindex="-1"><a class="header-anchor" href="#maps" aria-hidden="true">#</a> Maps</h4><p>Each activity has a longitude and a latitude. Requiring user to manually enter these won&#39;t be a good experience for them. Instead, it would be easier for them to pick their location on a map. Let them do that! And instead of showing a list of all activities, show a map marking where each activity takes place.</p><h4 id="remember-activities" tabindex="-1"><a class="header-anchor" href="#remember-activities" aria-hidden="true">#</a> Remember activities</h4><p>Let users remember activities they like locally (e.g. store the information in local storage). Have a special page they can use to list all the activities they&#39;ve choose to remember.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/lab-instructions.html.vue?vue&type=template&id=34a3ab0c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/client-server-communication/lab-instructions.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const lab_instructions_html = (__exports__);

/***/ }),

/***/ 3744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 9488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7dd976e3",
  "path": "/courses/client-server-communication/lab-instructions.html",
  "title": "Lab Instructions",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Installing Required Software",
      "slug": "installing-required-software",
      "children": []
    },
    {
      "level": 2,
      "title": "Part 1 - The Tool App",
      "slug": "part-1-the-tool-app",
      "children": [
        {
          "level": 3,
          "title": "Pre-requisites",
          "slug": "pre-requisites",
          "children": []
        },
        {
          "level": 3,
          "title": "Creating a new Vue application",
          "slug": "creating-a-new-vue-application",
          "children": []
        },
        {
          "level": 3,
          "title": "Application (layout)",
          "slug": "application-layout",
          "children": []
        },
        {
          "level": 3,
          "title": "Home & About (static)",
          "slug": "home-about-static",
          "children": []
        },
        {
          "level": 3,
          "title": "Dice (state, conditionals, events)",
          "slug": "dice-state-conditionals-events",
          "children": []
        },
        {
          "level": 3,
          "title": "FAQ (loops)",
          "slug": "faq-loops",
          "children": []
        },
        {
          "level": 3,
          "title": "Calculator (model binding, computed properties)",
          "slug": "calculator-model-binding-computed-properties",
          "children": []
        },
        {
          "level": 3,
          "title": "Clock (life cycles)",
          "slug": "clock-life-cycles",
          "children": []
        },
        {
          "level": 3,
          "title": "Counters (props)",
          "slug": "counters-props",
          "children": []
        },
        {
          "level": 3,
          "title": "Oral presentation",
          "slug": "oral-presentation",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Part 2 - Using a REST API in Vue",
      "slug": "part-2-using-a-rest-api-in-vue",
      "children": [
        {
          "level": 3,
          "title": "Starting the backend",
          "slug": "starting-the-backend",
          "children": []
        },
        {
          "level": 3,
          "title": "Getting started with the frontend",
          "slug": "getting-started-with-the-frontend",
          "children": []
        },
        {
          "level": 3,
          "title": "Implementing the layout",
          "slug": "implementing-the-layout",
          "children": []
        },
        {
          "level": 3,
          "title": "View all accounts",
          "slug": "view-all-accounts",
          "children": []
        },
        {
          "level": 3,
          "title": "View one account",
          "slug": "view-one-account",
          "children": []
        },
        {
          "level": 3,
          "title": "Sign up",
          "slug": "sign-up",
          "children": []
        },
        {
          "level": 3,
          "title": "Sign in",
          "slug": "sign-in",
          "children": []
        },
        {
          "level": 3,
          "title": "Sign out",
          "slug": "sign-out",
          "children": []
        },
        {
          "level": 3,
          "title": "Create activity",
          "slug": "create-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "View all activities",
          "slug": "view-all-activities",
          "children": []
        },
        {
          "level": 3,
          "title": "View one activity",
          "slug": "view-one-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "View own activities",
          "slug": "view-own-activities",
          "children": []
        },
        {
          "level": 3,
          "title": "Delete activity",
          "slug": "delete-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "Update activity",
          "slug": "update-activity",
          "children": []
        },
        {
          "level": 3,
          "title": "Oral presentation",
          "slug": "oral-presentation-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Extra tasks",
          "slug": "extra-tasks",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/client-server-communication/lab-instructions.md",
  "git": {
    "updatedTime": 1637833218000
  }
}


/***/ })

};
;
//# sourceMappingURL=3738.app.js.map