"use strict";
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 7117:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/using-shells/index.html.vue?vue&type=template&id=67f96e50



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="using-shells" tabindex="-1"><a class="header-anchor" href="#using-shells" aria-hidden="true">#</a> Using Shells</h1><p>Graphical User Interfaces are great, but using a shell/console/terminal can make you much more productive. Let&#39;s learn how to use shells so we can finish our workdays 5 minutes earlier for the rest of our lives.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/Sn4tmwk4tqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="using-shells.pdf">using-shells.pdf</a></li><li><a href="using-shells.pptx">using-shells.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://www.joshwcomeau.com/javascript/terminal-for-js-devs/" target="_blank" rel="noopener noreferrer">The Front-End Developer&#39;s Guide to the Terminal`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li>The rest of this page</li></ul><h2 id="what-s-a-shell" tabindex="-1"><a class="header-anchor" href="#what-s-a-shell" aria-hidden="true">#</a> What&#39;s a shell?</h2><p>In this lecture we will simply see shells as an application in which you can enter text commands, which the shell then will execute for you. If the shell needs to show the result of executing the command to you, it will show you that as text. So no fancy graphical user interface here, just an old traditional text interface (command line interface).</p><p>The commands you enter in the shell will cause different programs on the computer to run and do something for you. In most cases these programs will do some work with files, so a basic understanding of how files and folders work on the computer&#39;s file system is needed to be able to use a shell.</p><div class="custom-container tip"><p class="custom-container-title">Shells VS Consoles VS Terminals</p><p>There are differences between a <em>shell</em>, a <em>console</em>, and a <em>terminal</em>, but for simplicity we will here consider them to be the same thing, and simply refer to them as <em>shells</em>. If you want to dig into the differences between these terms, feel free to read the Ask Ubuntu question <a href="https://askubuntu.com/q/506510/255935" target="_blank" rel="noopener noreferrer">What is the difference between Terminal, Console, Shell, and Command Line?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h2 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h2><p>A <em>file</em> is a collection of data, for example some text you&#39;ve typed. An example of that is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of text content in a file containing data about a list of things." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>My todo list
 - Clean garden
 - Grocery shopping
 - Feed the pet
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "My todo list\n - Clean garden\n - Grocery shopping\n - Feed the pet\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "4"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>Computers can store multiple files, and for us to be able to distinguish them from each other, we give each file a name. For example, the file named <code>my-todo-list</code> can contain information about what I need to do, and the file named <code>my-lecture-notes</code> can contain notes I&#39;ve written at the lectures I&#39;ve attended.</p><div class="custom-container warning"><p class="custom-container-title">No spaces?</p><p>Filenames can contain spaces (&quot;<code></code>&quot;), but since spaces are used to separate arguments passed to commands in shells, it&#39;s a bad idea to use spaces in filenames.</p><p>Some applications and programming libraries also have difficulties handling filenames with spaces, so it&#39;s also a bit safer to never use spaces in filenames, otherwise you might get into trouble with those applications and libraries.</p><p>Consequently, most experienced programmers use a <code>-</code> instead of a space (<code></code>) in filenames.</p></div><div class="custom-container warning"><p class="custom-container-title">No caps?</p><p>Filenames can contain capital characters, but it&#39;s easier and quicker to type only lowercase characters on a keyboard, so most experienced computer users don&#39;t use capital characters in their filenames.</p></div><div class="custom-container warning"><p class="custom-container-title">No special characters?</p><p>Most modern operating system can handle special characters like <code>å</code>, <code>ä</code>, <code>ö</code>, <code>&#39;</code>, etc. in filenames without problem, but often you transfer files to other computers that might run another (such as an older) operating system that can&#39;t handle these characters in filenames, so if you want to make sure the files works on other computers too (<strong>which you always want!</strong>), it&#39;s usually a bad idea to use special characters in filenames even if it works on your computer.</p><p>Programmers you should always name code files in English, so for us it&#39;s easy, because we don&#39;t need to care about handling <code>å</code>, <code>ä</code> and <code>ö</code> 🙂</p></div><p>Most applications using files need to have the data in the files in a more structured format than one intuitively entered by a human (as the one shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above). Therefore, when applications store data in files, they store it in special formats they understand, for example <a href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="noopener noreferrer">JSON`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, <a href="https://en.wikipedia.org/wiki/XML" target="_blank" rel="noopener noreferrer">XML`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> or <a href="https://en.wikipedia.org/wiki/Comma-separated_values" target="_blank" rel="noopener noreferrer">CSV`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, etc.</p><p>When the data in a file has been written in a specific format, the filename usually ends with an extension (a <code>.</code> followed by some characters) that indicates which format the data in the file is written in. JSON format has the file extension <code>.json</code>, XML has the file extension <code>.xml</code>, etc.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a file named <code>todo-list.json</code> that contains information about a todo list in JSON format.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My todo list&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Clean garden&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Grocery shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Feed the pet&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><div class="custom-container warning"><p class="custom-container-title">Three character extensions?</p><p>Some old operating system could only handle 3 characters as the file extension. Therefor many file extensions only consists of 3 characters, although using more characters would make more sense. For example, HTML files used <code>.htm</code>, and JPEG used <code>.jpg</code>. If you&#39;re curious, you can read more about this in Wikipedia&#39;s article <a href="https://en.wikipedia.org/wiki/8.3_filename" target="_blank" rel="noopener noreferrer">8.3 filename`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><p>These days operating system do not have this limitation, and it&#39;s common to use the longer format of the file extensions, such as <code>.html</code> for HTML files and <code>.jpeg</code> for JPEG files.</p></div><h2 id="folders" tabindex="-1"><a class="header-anchor" href="#folders" aria-hidden="true">#</a> Folders</h2><p>A computer usually contains many files, and instead of having them all in a single bucket, we can place them in different buckets, known as <em>folders</em>. A folder can also contain other folders (known as sub-folders), which enables us to store files in a tree hierarchy. Just like files, each folder has a name. The root folder is usually called <code>/</code>, and the folders you create yourself you can call whatever you want, but it&#39;s a good idea to name them using the same convention as mentioned for filenames.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` shows an example of some files and folders stored on a computer. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A visualization of how files can be structured in folders. ▭ are files, ♢ are folders. Arrows from a folder points to the files and sub-folders it contains." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n    root{/}\n    d1{school-work}\n    d2{2019}\n    d3{2020}\n    selfie[selfie.jpeg]\n    notes1[lecture-notes-programming.txt]\n    notes2[lecture-notes-physics.txt]\n    notes3[lecture-notes-math.txt]\n    root --> d1\n    d1 --> d2\n    d1 --> d3\n    root --> selfie\n    d2 --> notes1\n    d2 --> notes2\n    d3 --> notes3\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n    root{/}\n    d1{school-work}\n    d2{2019}\n    d3{2020}\n    selfie[selfie.jpeg]\n    notes1[lecture-notes-programming.txt]\n    notes2[lecture-notes-physics.txt]\n    notes3[lecture-notes-math.txt]\n    root --> d1\n    d1 --> d2\n    d1 --> d3\n    root --> selfie\n    d2 --> notes1\n    d2 --> notes2\n    d3 --> notes3\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container warning"><p class="custom-container-title">Folder VS Directory</p><p>Here the terms are used interchangeably, but they are actually not the same. See the Stack Overflow question <a href="https://stackoverflow.com/q/5078676/2104665" target="_blank" rel="noopener noreferrer">What is the difference between a directory and a folder?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> if you&#39;re curios about the details.</p></div><h2 id="paths" tabindex="-1"><a class="header-anchor" href="#paths" aria-hidden="true">#</a> Paths</h2><p>Since files (and folders) can be put in folders, it&#39;s not enough to just know the name of a file (or folder) to identify it. For example, two different files can have the same name as long as they are placed in different folders.</p><p>A path is a complete identifier for a file or a folder. These are used quite a lot when you use a shell, because the commands you execute in the shell usually operates on files and folders, and you specify which ones by passing the paths to the files and folders you want the command to operate on.</p><h3 id="absolute-paths" tabindex="-1"><a class="header-anchor" href="#absolute-paths" aria-hidden="true">#</a> Absolute paths</h3><p>To identify a file (or folder), you can list all the folders from the root folder (<code>/</code>) to the file (or folder). The names of the folders are usually separated by <code>/</code>, and by adding the filename afterwards, you have constructed the <em>absolute path</em> to the file (or folder).</p><p>For example, the absolute path to the file <code>lecture-notes-programming.txt</code> in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, { previous: "" }, null, _parent))
  _push(` above is <code>/school-work/2019/lecture-notes-programming.txt</code>.</p><h3 id="relative-paths" tabindex="-1"><a class="header-anchor" href="#relative-paths" aria-hidden="true">#</a> Relative paths</h3><p>Always when using a shell, you are standing in a folder, and that folder is known as the <em>Working Directory</em>. Often when you work with files and folders, you are only interested in the files and sub-folders in a specific folder. Then you can set that specific folder as your Working Directory, and then you can refer to the other files and folders using a <em>relative path</em> from your Working Directory, instead of using the absolute path from the root folder. This is usually much more convenient. Relative paths work like this:</p><ul><li><code>some-name</code> <br> Refers to the file (or folder) with the name <code>some-name</code> in the Working Directory</li><li><code>a-sub-folder/some-name</code> <br> Refers to the file (or folder) with the name <code>some-name</code> in the sub folder <code>a-sub-folder</code> in the Working Directory. You can add more <code>/</code> to go into more sub folders</li><li><code>.</code> <br> Refers to the folder you are standing in (the Working Directory)</li><li><code>..</code> <br> Refers to the parent directory of the folder you are standing in. Can be used repeatedly and together with the other notations. For example, <code>../..</code> is the parent folder to the parent folder you are standing in, and <code>../a-file.txt</code> refers to the file <code>a-file.txt</code> in the parent folder</li></ul><div class="custom-container warning"><p class="custom-container-title">Do paths to folders end with /?</p><p>If a path refers to a folder, it can end with <code>/</code>, but it&#39;s not required to write that. For example, both <code>/a-sub-folder</code> and <code>/a-sub-folder/</code> would refer to the same folder. However, it can be good to add that extra slash at the end to indicate to other humans reading the path that the path leads to a folder, since they might otherwise think it leads to a file.</p><p>In addition to that, some commands will in some contexts work differently depending on the presence of the ending <code>/</code>. For examples, see the Unix question <a href="https://unix.stackexchange.com/q/50499/79600" target="_blank" rel="noopener noreferrer">When should I use a trailing slash on a directory?`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. So, often it&#39;s a good practice to end paths leading to directories with <code>/</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>To rename the file <code>/school-work/2019/lecture-notes-programming.txt</code> to <code>/school-work/2019/programming-notes.txt</code>, you can use the <code>mv</code> command (<strong>mo</strong>ve) with absolute paths, like this (it doesn&#39;t matter what your Working Directory is since you use absolute paths):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> /school-work/2019/lecture-notes-programming.txt /school-work/2019/programming-notes.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Using the Working Directory, you could instead first change the Working Directory to <code>/school-work/2019/</code> using an absolute path and the <code>cd</code> command (<strong>c</strong>hange <strong>d</strong>irectory), and then rename the file using relative paths and the <code>mv</code> command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /school-work/2019/
<span class="token function">mv</span> lecture-notes-programming.txt programming-notes.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><p>Which commands the computer can execute differs between different operating system and different shells, but some commands exists on most of them, including:</p><ul><li><code>pwd</code><br> Print Working Directory, prints the path to the folder you are currently standing in</li><li><code>ls</code><br> List Structure, prints the names of the files and sub folders in the Working Directory</li><li><code>cd path</code><br> Change Directory, go to the folder specified in <code>path</code> (change to actual path)</li><li><code>mkdir name</code><br> MaKe DIRectory, creates a new folder called <code>name</code> (change to actual name) in the Working Directory. <code>name</code> can also be a path to the directory that should be created</li><li><code>mv old_name new_name</code><br> MoVe, moves the file or folder called <code>old_name</code> (change to actual name) to <code>new_name</code> (change to actual name) in the Working Directory. <code>old_name</code> and <code>new_name</code> can also be paths</li></ul><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/using-shells/index.html.vue?vue&type=template&id=67f96e50

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/using-shells/index.html.vue

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

/***/ 5911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-234b2462",
  "path": "/lectures/using-shells/",
  "title": "Using Shells",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Using Shells"
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
      "title": "What's a shell?",
      "slug": "what-s-a-shell",
      "children": []
    },
    {
      "level": 2,
      "title": "Files",
      "slug": "files",
      "children": []
    },
    {
      "level": 2,
      "title": "Folders",
      "slug": "folders",
      "children": []
    },
    {
      "level": 2,
      "title": "Paths",
      "slug": "paths",
      "children": [
        {
          "level": 3,
          "title": "Absolute paths",
          "slug": "absolute-paths",
          "children": []
        },
        {
          "level": 3,
          "title": "Relative paths",
          "slug": "relative-paths",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Commands",
      "slug": "commands",
      "children": []
    }
  ],
  "filePathRelative": "lectures/using-shells/README.md",
  "git": {
    "updatedTime": 1637582377000
  }
}


/***/ })

};
;
//# sourceMappingURL=488.app.js.map