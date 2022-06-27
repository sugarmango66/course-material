"use strict";
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 1506:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/sqlite/index.html.vue?vue&type=template&id=b622237c



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")

  _push(`<!--[--><h1 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h1><p>A simple relational database we can use to store our data.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/ztodDSWRzVk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="sqlite.pdf">sqlite.pdf</a></li><li><a href="sqlite.pptx">sqlite.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://www.sqlite.org/docs.html" target="_blank" rel="noopener noreferrer">SQLite Documentation`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>: <ul><li>Programming Interfaces: <ul><li>SQL Syntax<br> (don&#39;t read/learn everything, just understand how the syntax works and get comfortable looking up things)</li></ul></li></ul></li></ul><h2 id="relational-database" tabindex="-1"><a class="header-anchor" href="#relational-database" aria-hidden="true">#</a> Relational database</h2><p>SQLite is a <em>relational database</em>. A database is an application we use to store data, and a relational database is a specific type of database that stores data objects in different <em>tables</em>. The data objects stored in the tables can have relations to data objects in other tables, hence the name <em>relational database</em>.</p><p>SQLite is not the only relational database we have. In fact, there exists quite many of them, such as:</p><ul><li>MariaDB</li><li>MySQL</li><li>PostgreSQL</li><li>Microsoft SQL Server</li><li>Oracle Database</li><li><a href="https://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems#General_information" target="_blank" rel="noopener noreferrer">and a bunch others`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="sqlite-vs-other-relational-databases" tabindex="-1"><a class="header-anchor" href="#sqlite-vs-other-relational-databases" aria-hidden="true">#</a> SQLite VS other Relational databases</h2><p>So, why use SQLite instead of any of the other relational databases? The main reason to choose SQLite over other relational databases is that it&#39;s incredibly easy to start using SQLite because it&#39;s much &quot;smaller&quot; than most other relational databases:</p><ul><li>Most other relational databases needs to be installed and run as separate applications, and then our own application that needs to store data in the database has to connect to the database over the network. SQLite is not run as a separate application, but instead it will run as part of our own application through a library we add to it</li><li>Most other relational databases are designed to be used by multiple different users (i.e. different applications), and therefor support creation of user accounts and authentication using username and password. SQLite does not support different users, so much less hassle to connect to it</li><li>Most other relational databases store the data in multiple different files. SQLite instead stores all data in one and the same file</li></ul><p>This gives SQLite a few benefits compared to most other relational databases, such as:</p><ul><li>You don&#39;t need to install and start a separate database application</li><li>You don&#39;t need to manually create a user in the database and you don&#39;t need to remember a password</li><li>You can easily erase the entire database (just delete the file storing the database data)</li></ul><h2 id="how-to-use-sqlite" tabindex="-1"><a class="header-anchor" href="#how-to-use-sqlite" aria-hidden="true">#</a> How to use SQLite</h2><p>To use SQLite, you first need to add it as a library to your application. How you do that depends on which programming language you implement your application in, but for Node.js applications you can for example use the npm package <a href="https://www.npmjs.com/package/sqlite3" target="_blank" rel="noopener noreferrer">sqlite3`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Then, when you use the library, you just need to provide it with the path to the file that should store your entire database.</p><ol><li><code>npm install node-sqlite3</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sqlite3 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sqlite3&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">sqlite3<span class="token punctuation">.</span>Database</span><span class="token punctuation">(</span>
    <span class="token string">&#39;my-database.db&#39;</span> <span class="token comment">// This is the path to the file that should store the database.</span>
<span class="token punctuation">)</span>

<span class="token comment">// Now we can use the db object to communicate with the database.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="how-to-create" tabindex="-1"><a class="header-anchor" href="#how-to-create" aria-hidden="true">#</a> How to create</h2><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/sqlite/index.html.vue?vue&type=template&id=b622237c

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/sqlite/index.html.vue

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

/***/ 8459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-bc0e457c",
  "path": "/lectures/sqlite/",
  "title": "SQLite",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "SQLite"
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
      "title": "Relational database",
      "slug": "relational-database",
      "children": []
    },
    {
      "level": 2,
      "title": "SQLite VS other Relational databases",
      "slug": "sqlite-vs-other-relational-databases",
      "children": []
    },
    {
      "level": 2,
      "title": "How to use SQLite",
      "slug": "how-to-use-sqlite",
      "children": []
    },
    {
      "level": 2,
      "title": "How to create",
      "slug": "how-to-create",
      "children": []
    }
  ],
  "filePathRelative": "lectures/sqlite/README.md",
  "git": {
    "updatedTime": 1570355762000
  }
}


/***/ })

};
;
//# sourceMappingURL=348.app.js.map