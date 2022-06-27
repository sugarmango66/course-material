"use strict";
exports.id = 1489;
exports.ids = [1489];
exports.modules = {

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/npm/index.html.vue?vue&type=template&id=53986563



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1><p>Use npm to install libraries/packages you can use in your Node.js application.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/nTI5XlD9jOk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="npm.pdf">npm.pdf</a></li><li><a href="npm.pptx">npm.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry" target="_blank" rel="noopener noreferrer">Getting packages from the registry`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on npm&#39;s website</li><li>In many cases it is better to write your own code instead of using many small npm packages. The following two pages gives an example of why: <ul><li><a href="https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/" target="_blank" rel="noopener noreferrer">How one programmer broke the internet by deleting a tiny piece of code`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="http://left-pad.io/" target="_blank" rel="noopener noreferrer">left-pad.io`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li></ul><h2 id="why-npm" tabindex="-1"><a class="header-anchor" href="#why-npm" aria-hidden="true">#</a> Why npm?</h2><p>JavaScript is a really small programming language. With it we can only do computations, but we can&#39;t do much more than that. There&#39;s no way to read input from the user, to use network communication, or to work with files on the filesystem, etc. Therefor Node.js does not only execute our JavaScript code, but it executes it in an environment that gives us access to additional functionality, i.e. modules we can import. Through these modules we have the ability to ask the user for input, to use network communication, to work with files on the filesystem, etc.</p><p>So, thanks to Node.js, we can not only use JavaScript to do computations, but also to implement arbitrary type of applications, such as web applications, command line interface applications, graphical user interface applications, etc. However, the support we get from Node.js to implement these type of applications is usually quite minimal, so we need to write a lot of code ourselves to do it from scratch, and that is very time consuming and unrealistic. Therefor other programmers create libraries that (often) are built on Node.js modules we can use to more easily implement the applications we need to implement. But since these libraries aren&#39;t part of Node.js, they aren&#39;t part of the runtime environment our JavaScript code is executed in, so we need to get access to the libraries in another way. Introducing npm.</p><h2 id="what-is-npm" tabindex="-1"><a class="header-anchor" href="#what-is-npm" aria-hidden="true">#</a> What is npm?</h2><p>npm is an online repository for npm packages. An <em>npm package</em> can simply be seen as something that contains all the files required to use a specific library. So, programmers that creates libraries can put the source files for the library in an npm package, give that package a unique name, and then upload it to the npm online repository. Thereafter, other programmers can download the npm package from the npm online repository (identifying it by its name) to their own computer, and then use the library in their own apps.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows how library creators use npm to make their libraries available to others. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how library creators use npm." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    libraryCreator[Library Creator]\n    library[Library]\n    package[npm Package]\n    repository[npm Repository]\n    libraryCreator-- Creates -->library\n    library-- Is packaged into -->package\n    package-- Is uploaded to -->repository\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    libraryCreator[Library Creator]\n    library[Library]\n    package[npm Package]\n    repository[npm Repository]\n    libraryCreator-- Creates -->library\n    library-- Is packaged into -->package\n    package-- Is uploaded to -->repository\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below shows how app creators can use npm to get libraries onto their own computers. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how app creators use npm." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    appCreator[App Creator]\n    library[Library]\n    package[npm Package]\n    repository[npm Repository]\n    appCreator[App Creator]\n    appCreator-- Uses -->library\n    library-- Is unpackaged from -->package\n    package-- Is downloaded from -->repository\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    appCreator[App Creator]\n    library[Library]\n    package[npm Package]\n    repository[npm Repository]\n    appCreator[App Creator]\n    appCreator-- Uses -->library\n    library-- Is unpackaged from -->package\n    package-- Is downloaded from -->repository\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>To find libraries you can install through npm, check out their online repository at <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><div class="custom-container tip"><p class="custom-container-title">What does npm mean?</p><p>npm was created to be a package manager for Node.js, so originally it was named <em>Node Package Manager</em>, or <em>npm</em> for short (same name as the command we write in shells to use it). But nothing stopped it from handling packages containing code written in other programming languages (which some used it for), and to reflect that they changed the name after a while. So it&#39;s no longer called Node Package Manager, but simply <em>npm</em>. And they changed the acronym to instead be short for <em>npm is not an acronym</em> 🙃</p><p>At <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, you can in the top left corner see other fun meaning of npm. In the <a href="https://github.com/npm/npm-expansions" target="_blank" rel="noopener noreferrer">npm-expansion repository`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> you can suggest your own meanings.</p></div><h2 id="how-to-create-an-npm-package" tabindex="-1"><a class="header-anchor" href="#how-to-create-an-npm-package" aria-hidden="true">#</a> How to create an npm package?</h2><p>How to create npm packages is not covered in this lecture. If you want to learn that, read <a href="https://docs.npmjs.com/creating-node-js-modules" target="_blank" rel="noopener noreferrer">Creating Node.js modules`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> on npm&#39;s website.</p><h2 id="how-to-use-npm-packages" tabindex="-1"><a class="header-anchor" href="#how-to-use-npm-packages" aria-hidden="true">#</a> How to use npm packages?</h2><p>So, you have found a library you want to use, and it is distributed as an npm package? Great! Let&#39;s go through what you need to do to use the library in your own JavaScript code.</p><h3 id="install-npm" tabindex="-1"><a class="header-anchor" href="#install-npm" aria-hidden="true">#</a> Install npm</h3><p>npm is the default package manager for Node.js, so when you install Node.js, you also get npm installed at the same time. But you might want to <a href="https://docs.npmjs.com/try-the-latest-stable-version-of-npm" target="_blank" rel="noopener noreferrer">update npm to the latest version`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>When npm has been installed, you can use it through the <code>npm</code> command in a shell/terminal.</p><h3 id="create-the-package-json-file" tabindex="-1"><a class="header-anchor" href="#create-the-package-json-file" aria-hidden="true">#</a> Create the package.json file</h3><p>Each project using npm should have a file called <code>package.json</code>. That is a JSON file that will remember which npm packages and versions the project makes use of. To create the <code>package.json</code> file, go to your app project folder and run the command <code>npm init --yes</code>. That command will create the <code>package.json</code> file with content similar to what&#39;s shown below.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>You are probably wondering what all content in <code>package.json</code> means. Turns out that you don&#39;t need to care about this when you create your own app using npm packages, so don&#39;t get too scared of all the content.</p><p>The <code>package.json</code> file do primarily (as the name suggests) contain information about an npm package, and you need to have one when you create your own npm package. In it you should write information about the package you create, such as it&#39;s <code>name</code>, <code>version</code>, <code>description</code>, etc. Although not showed in the file above, the <code>package.json</code> file is also used to keep track of which other npm packages your own npm package is dependent on.</p><p>However, <code>package.json</code> can also be used by applications that only want to use it to keep track of which npm packages the application is using. For these applications, most of the content in the file is irrelevant.This is also the reason we can run the command <code>npm init</code> with the flag <code>--yes</code>, which means that we want to use the default values for all of the fields in <code>package.json</code>. If you are a package creator and stand in the library folder, you should not use the flag <code>--yes</code>, and instead enter the required information npm asks you to enter. But we, application creators, don&#39;t need to worry about that.</p><h3 id="downloading-an-npm-package" tabindex="-1"><a class="header-anchor" href="#downloading-an-npm-package" aria-hidden="true">#</a> Downloading an npm package</h3><p>To download an npm package, run the command <code>npm install THE_PACKAGE_NAME</code>. For example, to install the npm package named <code>express</code>, run <code>npm install express</code>. This will:</p><ol><li>Download and unpackage the latest version of the <code>express</code> package from the npm online repository to the <code>node_modules</code> folder in the project folder</li><li>Update the <code>package.json</code> file to remember that your project is dependent on that specific version of the <code>express</code> package</li></ol><p>After you have executed <code>npm install express</code>, the <code>package.json</code> file will look like this:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Desktop&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.18.1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>As you can see, a <code>dependencies</code> section has been added to the file, and there it remembers which packages and versions our application is using. In addition to this, the <code>express</code> package has also been downloaded and unpackaged in the app project folder <code>/node_modules/express</code>. In that folder you find the course code for the <code>express</code> package. Express is also using other npm packages, and those have also been downloaded and unpackaged in the <code>/node_module</code> folder, so even if you just installed one npm package, multiple has been downloaded.</p><div class="custom-container tip"><p class="custom-container-title">The --save flag</p><p>To install an npm package, use the command <code>npm install THE_PACKAGE_NAME</code>. But if you read the documentation for many npm packages, they instead say you should run the command <code>npm install THE_PACKAGE_NAME --save</code>. Why?</p><p>When we first got npm, the command <code>npm install THE_PACKAGE_NAME</code> did only download the package to the <code>node_modules</code> folder. 99.99% of the time you also wanted to add the package name to your <code>package.json</code> file. If you added the <code>--save</code> flag to the command, then npm would also do that.</p><p>In npm version 5 they changed this behavior, so npm will add the package name to your <code>package.json</code> file by default (without the <code>--save</code> flag), and one has to add the flag <code>--no-save</code> if one doesn&#39;t want the package name to be added to the <code>package.json</code> file.</p></div><div class="custom-container tip"><p class="custom-container-title">Version control</p><p>If you version control your source code in a repository, you should not version control the <code>node_modules</code> folder. Remember, you should only version control your own code, and never code others have written.</p><p>But if another programmer clones the repository to her computer, how can she run the application without the libraries in the <code>node_modules</code> folder? Well, she can&#39;t, and she has to install all npm packages herself. She can easily do that by running the command <code>npm install</code>, which will look at the packages mentioned in the <code>package.json</code> file, and download and unpackage all of them to the <code>node_modules</code> folder. So it&#39;s very important that you version control the <code>package.json</code> file!</p></div><h3 id="using-an-npm-package" tabindex="-1"><a class="header-anchor" href="#using-an-npm-package" aria-hidden="true">#</a> Using an npm package</h3><p>After you have downloaded the npm package, you can in JavaScript include it in your code by using the <code>require()</code> function in your JavaScript code. Pass it the name of your package as a string, and you will get back the functionality the package exports.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Access the library&#39;s functionality</span>
<span class="token comment">// through the &quot;express&quot; variable now.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="versioning" tabindex="-1"><a class="header-anchor" href="#versioning" aria-hidden="true">#</a> Versioning</h3><p>Often a library developer makes improvement to her library, and then releases it as a new version. To keep track of the different releases, one usually use a versioning system to name the releases. The simplest versioning system is to simply use a single version number, like <code>1</code>, <code>2</code>, <code>3</code>, and so on. The benefit with such a system is that it&#39;s extremely easy to understand how it works, but it&#39;s not suitable to use for libraries that have many dependencies. Let me give you a simple example of that.</p><p>Imagine that your app is using these two packages:</p><ul><li>version 5 of package <code>A</code> (<code>A.5</code>)</li><li>version 2 of package <code>X</code> (<code>X.2</code>)</li></ul><p>The package <code>A.5</code> in turn is also using <code>X.2</code>. This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how library creators use npm." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    app[Your App]\n    a5[A.5]\n    x2[X.2]\n    app-- Uses -->a5\n    app-- Uses -->x2\n    a5-- Uses -->x2\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    app[Your App]\n    a5[A.5]\n    x2[X.2]\n    app-- Uses -->a5\n    app-- Uses -->x2\n    a5-- Uses -->x2\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>After this, a new version of <code>X</code> is released (<code>X.3</code>). It has added some new functionality you want to use in your app, so you want to use <code>X.3</code>. But you don&#39;t know if <code>X.3</code> has removed some of its old functionality or not, so you are not sure if <code>A.5</code> will work well with <code>X.3</code>. So you don&#39;t know if you can use only <code>X.3</code> (which would be better), as shown below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how library creators use npm." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    app[Your App]\n    a5[A.5]\n    x3[X.3]\n    app-- Uses -->a5\n    app-- Uses -->x3\n    a5-- Uses -->x3\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    app[Your App]\n    a5[A.5]\n    x3[X.3]\n    app-- Uses -->a5\n    app-- Uses -->x3\n    a5-- Uses -->x3\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Or if you need to use two different versions of the library at the same time (which would be worse), as shown below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of how library creators use npm." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    app[Your App]\n    a5[A.5]\n    x2[X.2]\n    x3[X.3]\n    app-- Uses -->a5\n    app-- Uses -->x3\n    a5-- Uses -->x2\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    app[Your App]\n    a5[A.5]\n    x2[X.2]\n    x3[X.3]\n    app-- Uses -->a5\n    app-- Uses -->x3\n    a5-- Uses -->x2\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>It would be good if the version number somehow could indicate what changes that has been made to the package since the previous version, right? So one just need to look at the version number to know if one safely can update a package that is used by your app and other packages. Therefor npm packages do not use the <code>1</code>, <code>2</code>, <code>3</code> versioning system, but instead a versioning system called SemVer.</p><p>In <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">SemVer`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, a version consists of three numbers in the format <code>MAJOR.MINOR.PATCH</code>. The first version of a library should use:</p><ul><li><code>MAJOR</code> = <code>1</code></li><li><code>MINOR</code> = <code>0</code></li><li><code>PATCH</code> = <code>0</code></li></ul><p>That is, the first version of a library should be <code>1.0.0</code>.</p><p>Each time you fix something in the library without adding or removing functionality (such as fixing a bug, improve performance, or fix a security vulnerability, etc.) and then release a new version, you should increment the <code>PATCH</code> number by 1, so next version would in this case be <code>1.0.1</code>. If you then fix another thing without adding or removing functionality and release yet another new version, you continue to increment the <code>PATCH</code> number by 1, so next version would be <code>1.0.2</code>, and so on.</p><p>If you add additional functionality to the library and then release a new version, you should increment <code>MINOR</code>, and restart <code>PATCH</code> on 0. So in our case the next version would be <code>1.1.0</code>, and so one.</p><p>If you remove some existing functionality in the library and release a new version after that, you should increment <code>MAJOR</code> by 1, and restart <code>MINOR</code> and <code>PATCH</code> on 0. So, in our case the next version would be <code>2.0.0</code>, and so one.</p><p>With this versioning system, libraries can easily be updated to the latest <code>MINOR</code> version automatically for you, since that shouldn&#39;t break any existing code using that package (since only removing (which is a <code>MAJOR</code> new version) should be able to break existing functionality).</p><p>The <code>package.json</code> file we had before contained this:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Desktop&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.18.1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Since all npm packages use SemVer, we can see on line 13 that it specifies that the application use version <code>4.18.1</code> of the <code>express</code> package. However, the version also starts with the <code>^</code> symbol, so it&#39;s actually written <code>^4.18.1</code>. If it would say only <code>4.18.1</code>, that would mean that that specific version of the package has to be used. But since it starts with a <code>^</code> symbol instead, it means that our application is OK with using a version of the package with a newer <code>MINOR</code> or newer <code>PATCH</code> version . So if <code>4.19.0</code> is available, it is OK to use that version instead.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/npm/index.html.vue?vue&type=template&id=53986563

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/npm/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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

/***/ 3253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-24339936",
  "path": "/lectures/npm/",
  "title": "npm",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "npm"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Lecture material",
      "slug": "lecture-material",
      "children": []
    },
    {
      "level": 2,
      "title": "Recommended reading",
      "slug": "recommended-reading",
      "children": []
    },
    {
      "level": 2,
      "title": "Why npm?",
      "slug": "why-npm",
      "children": []
    },
    {
      "level": 2,
      "title": "What is npm?",
      "slug": "what-is-npm",
      "children": []
    },
    {
      "level": 2,
      "title": "How to create an npm package?",
      "slug": "how-to-create-an-npm-package",
      "children": []
    },
    {
      "level": 2,
      "title": "How to use npm packages?",
      "slug": "how-to-use-npm-packages",
      "children": [
        {
          "level": 3,
          "title": "Install npm",
          "slug": "install-npm",
          "children": []
        },
        {
          "level": 3,
          "title": "Create the package.json file",
          "slug": "create-the-package-json-file",
          "children": []
        },
        {
          "level": 3,
          "title": "Downloading an npm package",
          "slug": "downloading-an-npm-package",
          "children": []
        },
        {
          "level": 3,
          "title": "Using an npm package",
          "slug": "using-an-npm-package",
          "children": []
        },
        {
          "level": 3,
          "title": "Versioning",
          "slug": "versioning",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/npm/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=1489.app.js.map