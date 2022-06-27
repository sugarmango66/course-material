"use strict";
exports.id = 7410;
exports.ids = [7410];
exports.modules = {

/***/ 8087:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/http-and-web-applications/index.html.vue?vue&type=template&id=0f340f50



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="http-and-web-applications" tabindex="-1"><a class="header-anchor" href="#http-and-web-applications" aria-hidden="true">#</a> HTTP and Web Applications</h1><p>The web is built on a protocol called the <em>HyperText Transfer Protocol</em> (HTTP). To build proper web applications, it is essential to understand how this protocol works. <a href="https://tools.ietf.org/html/rfc2616" target="_blank" rel="noopener noreferrer">The HTTP specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> explains it all, but since it&#39;s a specification it can be quite hard to read, so let me give you a quick introduction to HTTP before you can look up details in the HTTP specification.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/kuTKFoU5v7k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="http-and-web-applications.pdf">http-and-web-applications.pdf</a></li><li><a href="http-and-web-applications.pptx">http-and-web-applications.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://launchschool.com/books/http" target="_blank" rel="noopener noreferrer">Introduction to HTTP`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by Launch School <ul><li>Up to (including) the chapter HTTP --&gt; Processing Responses</li></ul></li><li><a href="https://tools.ietf.org/html/rfc2616" target="_blank" rel="noopener noreferrer">HTTP/1.1 specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>Don&#39;t read and learn everything by heart, but just enough so you get comfortable looking up things (methods, status codes, etc.) in it</li></ul></li><li>The rest of this page</li></ul><h2 id="interesting-reading" tabindex="-1"><a class="header-anchor" href="#interesting-reading" aria-hidden="true">#</a> Interesting reading</h2><ul><li><a href="https://www.reddit.com/r/dataisbeautiful/comments/cxuah9/usage_share_of_internet_browsers_1996_2019_oc/" target="_blank" rel="noopener noreferrer">Usage Share of Internet Browsers 1996 - 2019 (visualized)`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="clients-and-servers" tabindex="-1"><a class="header-anchor" href="#clients-and-servers" aria-hidden="true">#</a> Clients and Servers</h2><p>The HTTP protocol is built on a <em>client-server</em> architecture. That means that some computers on the web act as <em>servers</em>, and all other computers acts as <em>clients</em>. When you browse the web through a web browser, your web browser is a client.</p><p>A client can send an HTTP request to a server, asking the server to do something for it. When a server receives the HTTP request, it should carry out the request, and then send back an HTTP response containing the result of the request to the client. This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below. Note that just having a server on its own is useless; servers exist to serve clients (that&#39;s why we call them <em>servers</em>).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of Client-Server communication." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant Client\n    participant Server\n    Client->>+Server: 1. HTTP Request\n    Note right of Server: 2. Carry out request\n    Server-->>-Client: 3. HTTP Response\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant Client\n    participant Server\n    Client->>+Server: 1. HTTP Request\n    Note right of Server: 2. Carry out request\n    Server-->>-Client: 3. HTTP Response\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">Example</p><p>When you click on a link in your web browser, your web browser sends an HTTP request to a server, requesting the server to send back the webpage the link leads to. When the server receives this request it generates the webpage/loads it from a file and sends it back in an HTTP response, and when your web browser receives the HTTP response it displays the webpage on the screen.</p></div><p>In general, any computer can act as a client or a server. It is also possible for a computer to be both a client and a server at the same time. For example, when you (acting as a client) send an HTTP request to <code>Server A</code>, that server might in turn send an HTTP request to <code>Server B</code> to handle your request. Then <code>Server A</code> acts both as a server and a client at the same time.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When you login with your Google account on the website hosted on <code>Server X</code> then <code>Server X</code> will send its own request to Google to check which Google account you own, making <code>Server X</code> act as a server in some cases, and as a client in some cases.</p><p>(this example is a bit simplified; in practice it is a bit more complicated than this to login with your Google account on another website)</p></div><h2 id="resources-and-uris" tabindex="-1"><a class="header-anchor" href="#resources-and-uris" aria-hidden="true">#</a> Resources and URIs</h2><p>Servers in HTTP are expected to contain resources. It is up to each server to decide what type of resources it should contain, but some commonly found resources on websites includes:</p><ul><li>Images (<code>.png</code> files, <code>.jpeg</code> files, etc.)</li><li>Sounds (<code>.mp3</code> files, etc.)</li><li>Videos (<code>.mp4</code> files, etc.)</li><li>Documents (<code>.pdf</code> files, <code>.docx</code> files, <code>.txt</code> files, etc.)</li><li>Static webpages (<code>.html</code> files, <code>.css</code> files, <code>.js</code> files, etc.)</li><li>General data, such as: <ul><li>Accounts</li><li>Blogposts</li><li>Guestbook posts</li><li>Articles</li><li>Private Messages</li><li>Comments</li><li>etc.</li></ul></li></ul><p>Some resources (images, videos, documents, etc.) are simply stored as files on the server, while other resources can be stored in a database, or some other way. For now, we don&#39;t really care about how the resources are being stored on the server, as long as they are stored somehow.</p><p>When a client wants to work with a resource, it sends an HTTP requests to the server, asking the server to do something with the resource. There are primarilly four different types of requests clients can send. These are known as CRUD operations, and they are:</p><ul><li><u>C</u>reate (ask the server to create a new resource)</li><li><u>R</u>etrieve/<u>R</u>ead (ask the server to send back a resource)</li><li><u>U</u>pdate (ask the server to change a resource)</li><li><u>D</u>elete (ask the server to delete a reosurce)</li></ul><p>In English, an HTTP request could say something like:</p><ul><li><em>Send back the contact page to me</em></li><li><em>Delete the last comment I wrote</em></li><li><em>Change the title of the blog post I wrote yesterday to &quot;Congratulations&quot;</em> (the client sends the new title to the server)</li><li><em>Create a new friend relationship with the user Alice for me</em> (the client sends a new resource representing the friend relationship to the server)</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When you create a new account on a website, your web browser sends an HTTP request to the server asking the server to create a new resource representing your account containing your username and password (and possibly some additional information).</p></div><p>Each request sent to a server is about doing something with a resource. The client tells the server which resource that is through a <em>Uniform Resource Identifier</em> (URI). Each resource on the server should have a URI that uniquely identifies it, and it is the server that decides which URI each resource should have. Each time you view a webpage (webpage = resource) in a web browser, you can see the URI that uniquely identifies that webpage in the address bar (usually located at the top of the web browser).</p><p>For example, <a href="https://en.wikipedia.org/wiki/Mathematics" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s article/webpage about Mathematics`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> has the URI <code>/wiki/Mathematics</code>, while their <a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" rel="noopener noreferrer">article/webpage about Computer Science`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> has the URI <code>/wiki/Computer_science</code>.</p><p>The <a href="https://tools.ietf.org/html/rfc3986" target="_blank" rel="noopener noreferrer">URI specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> specifies the format of URIs. Simply put, it is a sequence of characters, where the slash character <code>/</code> is used to group relevant resources together. URIs also include the protocol used to access the resource (e.g. HTTP) and an identifier indicating which server that stores the resource (a domain name or an IP address), so a complete URI could for example be <code>https://en.wikipedia.org/wiki/Mathematics</code>, where <code>https</code> indicates that the HTTPS protocol should be used to send the HTTP request, and the computer containing the resource is the one with the IP address the domain name <code>wikipedia.org</code> maps to.</p><div class="custom-container tip"><p class="custom-container-title">HTTP VS HTTPS</p><p>The web is built on the HTTP protocol. The HTTP protocol is not encrypted, so it&#39;s a bad idea to send sensitive information (such as passwords, credit card numbers, etc.) using it. Therefore the HTTPS protocol was invented. HTTPS does more or less work the same way as HTTP, but with the addition of being encrypted, so even though you learn HTTP here, you can just as well later use HTTPS.</p></div><div class="custom-container tip"><p class="custom-container-title">URI VS URL</p><p>You have probably heard about Uniform Resource Locators (URL:s) before, and might wonder how they differ from URI:s</p><p>URI:s are used to identify resources, and Uniform Resource Locators (URL) are used to indicate <em>where</em> the resource is stored (which you can use to retrieve the resource). Since the location of a resource also can be used to uniquely identify it, all URL:s are also URI:s.</p><p>The HTTP specification calls it URI, but many developers do instead call it URL, since it in practice has to be a URL for the web browser to be able to fetch the resource.</p></div><p>URIs usually identifies either a single resource, or a collection of multiple resources of the same type. It is quite common that the beginning of a URI identifies a collection of resources, and the end of the URI identifies a specific resource within that collection. For example, the URI <code>/accounts</code> could identify the collection of all accounts on a website, and the URI <code>/accounts/Alice</code> identifies the specific account with the username <em>Alice</em>. We can also see this pattern in the example before with URIs on Wikipedia:</p><ul><li><code>/wiki</code> identifies the collection of all wiki articles</li><li><code>/wiki/Mathematics</code> identifies the specific wiki article about Mathematics</li><li><code>/wiki/Computer_science</code> identifies the specific wiki article about Computer Science</li></ul><h2 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h2><p>So, a client can send an HTTP request to a server to request the server to do something for it. The HTTP specification have specified the structure of these HTTP requests, so it is very important that clients send HTTP requests using that specific structure, otherwise servers will not understand the request and simply ignore it or send back an HTTP response indicating that something was wrong with the request.</p><p>The structure of an HTTP request is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The structure of an HTTP request." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-http ext-http line-numbers-mode"${
          _scopeId
        }><pre class="language-http"${
          _scopeId
        }><code${
          _scopeId
        }>METHOD URI VERSION
<span class="token header-name keyword"${
          _scopeId
        }>HEADER1:</span> VALUE1
<span class="token header-name keyword"${
          _scopeId
        }>HEADER2:</span> VALUE2
...

BODY
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-http ext-http line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-http" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("METHOD URI VERSION\n"),
                (0,external_vue_.createVNode)("span", { class: "token header-name keyword" }, "HEADER1:"),
                (0,external_vue_.createTextVNode)(" VALUE1\n"),
                (0,external_vue_.createVNode)("span", { class: "token header-name keyword" }, "HEADER2:"),
                (0,external_vue_.createTextVNode)(" VALUE2\n...\n\nBODY\n")
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The first line in an HTTP request is called the <em>request line</em>. It consists of three parts.</p><p>The first part on the request line is called the <code>METHOD</code>. It is also known as the <em>verb</em>. It indicates what the client wants to do with the resource identified by the <code>URI</code> (the second part). For example, the <code>GET</code> method indicates that the client wants to retrieve the resource, so the server should send back the resource in an HTTP response. The <code>DELETE</code> method indicates that the client wants the server to delete the resource, so the server should delete the resource before it sends back the HTTP response.</p><p>The third part on the request line, <code>VERSION</code>, indicates which version of HTTP the client is using, so the server can use the same version. A common value used here is <code>HTTP/1.1</code>, but HTTP 2 is used more and more frequently these days, so seeing <code>HTTP/2</code> is also common these days. HTTP 2 is backward compatible with HTTP 1.1, so even if you are only taught the basics of HTTP 1.1 in this lecture, you have use of that if you want to learn HTTP 2 later (HTTP 2 primarily contains additional functionality for loading webpages faster).</p><p>Below the request line you find <em>the headers</em>. These are key-value pairs with additional information about the request. For example, the <code>Host</code> header is used to indicate the domain name or the IP address of the server the request should be sent to (for example <code>Host: ju.se</code>), and the <code>Accept</code> header is used to indicate which data format the client would like to get back the requested resource in (for example <code>Accept: text/html</code>).</p><p>Below the headers you find the <code>BODY</code> of the request. Here the client can pass a resource to the server in the HTTP request. This is used when the client wants to create a new resource on the server or update an existing resource. If no resource needs to be sent to the server, you omit the body (leave it empty/blank).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of an HTTP request asking the server to create a new account resource. The resource is sent in the body of the request is written in <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer">JSON`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> format, and the client asks the server to send back the result of the request as a webpage (in HTML format).</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/accounts</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Host:</span> game-site.com
<span class="token header-name keyword">Content-Type:</span> application/json
<span class="token header-name keyword">Accept:</span> text/html<span class="token application-json">

<span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h3 id="request-headers" tabindex="-1"><a class="header-anchor" href="#request-headers" aria-hidden="true">#</a> Request Headers</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below describes some of the headers you can use in an HTTP request. `)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Description of some of the HTTP request headers." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<table${
          _scopeId
        }><thead${
          _scopeId
        }><tr${
          _scopeId
        }><th${
          _scopeId
        }>Name</th><th${
          _scopeId
        }>Example</th><th${
          _scopeId
        }>Description</th></tr></thead><tbody${
          _scopeId
        }><tr${
          _scopeId
        }><td${
          _scopeId
        }><code${
          _scopeId
        }>Host</code></td><td${
          _scopeId
        }><code${
          _scopeId
        }>Host: nintendo.se</code></td><td${
          _scopeId
        }>Identifies the domain the HTTP request is sent to</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }><code${
          _scopeId
        }>Accept</code></td><td${
          _scopeId
        }><code${
          _scopeId
        }>Accept: text/html</code></td><td${
          _scopeId
        }>Identifies the data format the client wants the resource back in</td></tr><tr${
          _scopeId
        }><td${
          _scopeId
        }><code${
          _scopeId
        }>Content-Type</code></td><td${
          _scopeId
        }><code${
          _scopeId
        }>Content-Type: application/json</code></td><td${
          _scopeId
        }>Identifies the data format the body of the HTTP request is written in</td></tr></tbody></table>`)
      } else {
        return [
          (0,external_vue_.createVNode)("table", null, [
            (0,external_vue_.createVNode)("thead", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("th", null, "Name"),
                (0,external_vue_.createVNode)("th", null, "Example"),
                (0,external_vue_.createVNode)("th", null, "Description")
              ])
            ]),
            (0,external_vue_.createVNode)("tbody", null, [
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, [
                  (0,external_vue_.createVNode)("code", null, "Host")
                ]),
                (0,external_vue_.createVNode)("td", null, [
                  (0,external_vue_.createVNode)("code", null, "Host: nintendo.se")
                ]),
                (0,external_vue_.createVNode)("td", null, "Identifies the domain the HTTP request is sent to")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, [
                  (0,external_vue_.createVNode)("code", null, "Accept")
                ]),
                (0,external_vue_.createVNode)("td", null, [
                  (0,external_vue_.createVNode)("code", null, "Accept: text/html")
                ]),
                (0,external_vue_.createVNode)("td", null, "Identifies the data format the client wants the resource back in")
              ]),
              (0,external_vue_.createVNode)("tr", null, [
                (0,external_vue_.createVNode)("td", null, [
                  (0,external_vue_.createVNode)("code", null, "Content-Type")
                ]),
                (0,external_vue_.createVNode)("td", null, [
                  (0,external_vue_.createVNode)("code", null, "Content-Type: application/json")
                ]),
                (0,external_vue_.createVNode)("td", null, "Identifies the data format the body of the HTTP request is written in")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><p>There exists a bunch of different HTTP methods, but web developers primarily need to know four of them: <code>GET</code>, <code>POST</code>, <code>PUT</code> and <code>DELETE</code>. These maps well to the commonly used CRUD operations:</p><ul><li>Create: <code>POST</code></li><li>Retrieve: <code>GET</code></li><li>Update: <code>PUT</code></li><li>Delete: <code>Delete</code></li></ul><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h4><p>A client can send a <code>GET</code> request to a server to tell the server to send back the resource identified by the URI in the request. A <code>GET</code> requests contains no body since the request is only about fetching a resource from the server, and not sending a resource to the server.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a request retrieving the accounts collection (i.e. all accounts).</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/accounts</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Host:</span> game-site.com
<span class="token header-name keyword">Accept:</span> text/html
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h4><p>A client can send a <code>POST</code> request to a server to tell the server to create a new resource. The URI in the request should identify what type of resource that should be created, and the body of the request should contain the resource.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a request creating a new contact message.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/contact-messages</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Host:</span> a-store.com
<span class="token header-name keyword">Content-Type:</span> application/json<span class="token application-json">

<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hi, I bought a thing from you, and it&#39;s not working. Please get back to me with info on how to proceed.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;alice@wonderland.com&quot;</span><span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h4 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> PUT</h4><p>A client can send a <code>PUT</code> request to a server to tell the server to replace an existing resource on the server with a new one the client sends it. The URI in the request should identify the resource on the server to be replaced, and the body of the request should contain the new resource.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a request updating the diary entry for the date <code>2020-02-13</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">PUT</span> <span class="token request-target url">/diary-entries/2020-02-13</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Host:</span> diaries.com
<span class="token header-name keyword">Content-Type:</span> application/json<span class="token application-json">

<span class="token punctuation">{</span><span class="token string">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Today was a wonderful day, Kim proposed to me, and I said yes :D We will live happily ever after now. (update 2020-04-15: Me and Kim are no longer together).&quot;</span><span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> DELETE</h4><p>A client can send a <code>DELETE</code> request to a server to tell the server to delete the resource(s) on the server identified by the URI in the request.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a request deleting the guestbook post with id <code>123</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">DELETE</span> <span class="token request-target url">/guestbook-posts/123</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Host:</span> football-lovers.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="custom-container warning"><p class="custom-container-title">PUT and DELETE not in HTML</p><p>In HTML (the language used to build webpages), it&#39;s only possible to send <code>GET</code> and <code>POST</code> requests. Therefore web developers rarely use <code>PUT</code> and <code>DELETE</code> requests. On websites, <code>PUT</code> and <code>DELETE</code> requests are often implemented as <code>POST</code> requests, and the URI is used to indicate if it should be a create, update or a delete operation.</p><p>For example, if one wants to send a request like <code>DELETE /accounts/123</code>, one typically use <code>POST /accounts/123/delete</code> instead.</p></div><h2 id="responses" tabindex="-1"><a class="header-anchor" href="#responses" aria-hidden="true">#</a> Responses</h2><p>When a server receives an HTTP request, it should look at the request (i.e. the method and the URI) to figure out what the request is about, then carry out the request, and then send back an HTTP response. The structure of an HTTP response is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "The structure of an HTTP response." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-http ext-http line-numbers-mode"${
          _scopeId
        }><pre class="language-http"${
          _scopeId
        }><code${
          _scopeId
        }>VERSION STATUS_CODE REASON_PHRASE
<span class="token header-name keyword"${
          _scopeId
        }>HEADER1:</span> VALUE1
<span class="token header-name keyword"${
          _scopeId
        }>HEADER2:</span> VALUE2
...

BODY
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-http ext-http line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-http" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("VERSION STATUS_CODE REASON_PHRASE\n"),
                (0,external_vue_.createVNode)("span", { class: "token header-name keyword" }, "HEADER1:"),
                (0,external_vue_.createTextVNode)(" VALUE1\n"),
                (0,external_vue_.createVNode)("span", { class: "token header-name keyword" }, "HEADER2:"),
                (0,external_vue_.createTextVNode)(" VALUE2\n...\n\nBODY\n")
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>The first line in the HTTP response is called <em>the status line</em>. It first contains the HTTP version the server is using (<code>VERSION</code>, like <code>HTTP/1.1</code>), and then a <code>STATUS_CODE</code> (a three digit number) indicating how the server handled the request (e.g. did it carry out the request? Or why didn&#39;t it carry out the request?), and then a <code>REASON_PHRASE</code>, which just is a very short human readable text for what the status code means. For programmers using HTTP, it&#39;s primarily the status code that&#39;s interesting to look at.</p><p>Just as HTTP requests, HTTP responses can contain headers and a body too.</p><div class="custom-container warning"><p class="custom-container-title">Request Headers != Response Headers</p><p>Although HTTP requests and HTTP responses both contain headers, which headers they can contain depends on if it&#39;s a request or a response. For example, the <code>Accept</code> header can only be used in HTTP requests, and the <code>Content-Type</code> header can be used in both HTTP requests and HTTP responses.</p></div><h3 id="status-codes" tabindex="-1"><a class="header-anchor" href="#status-codes" aria-hidden="true">#</a> Status codes</h3><p>The three digit status code can either start with the digit <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code> or <code>5</code>. Which digit it is hints about how the server handled the request.</p><h4 id="_1xx" tabindex="-1"><a class="header-anchor" href="#_1xx" aria-hidden="true">#</a> 1XX</h4><p>The <code>1XX</code> status codes indicate an <em>informational</em> response. These aren&#39;t that important to know for programmers using HTTP, so they won&#39;t be described in detail here.</p><h4 id="_2xx" tabindex="-1"><a class="header-anchor" href="#_2xx" aria-hidden="true">#</a> 2XX</h4><p>The <code>2XX</code> status codes indicate that the server successfully carried out the HTTP request. The most commonly used ones are (reason phrase shown after the status code):</p><ul><li><code>200</code> OK<br> The server carried out the request and sends back a resource in the body of the response</li><li><code>201</code> Created<br> The server carried out the request and a new resource was created while carrying out the request. The <code>Location</code> header in the HTTP response contains the URI for the newly created resource</li><li><code>204</code> No Content<br> The server carried out the request, but the response contains no body (can for example be used in <code>DELETE</code> requests)</li></ul><h4 id="_3xx" tabindex="-1"><a class="header-anchor" href="#_3xx" aria-hidden="true">#</a> 3XX</h4><p>The <code>3XX</code> status codes indicate that the server encourages the client to send a new HTTP request using another URI instead (i.e. redirecting the client). Examples include:</p><ul><li><code>302</code> Found<br> The server encourages the client to send the same HTTP request again but with the URI specified in the <code>Location</code> response header instead. This is useful if you change URIs on a website. For example, first maybe <code>/about-us</code> was used to identify the about page on the website, and then you changed that to just <code>/about</code>. Then when a client sends a <code>GET</code> request to <code>/about-us</code> you can send back a <code>302</code> response with the header <code>Location: /about</code> to indicate that the URI for the page has changed to <code>/about</code>, and that the client should use this new URI instead</li></ul><h4 id="_4xx" tabindex="-1"><a class="header-anchor" href="#_4xx" aria-hidden="true">#</a> 4XX</h4><p>The <code>4XX</code> status codes indicate that the server didn&#39;t carry out the request because the client has done something wrong with the request. The client needs to fix the problem and try again. Examples include:</p><ul><li><code>400</code> Bad Request<br> The server didn&#39;t carry out the request because something is wrong with it. The body of the response can contain additional information about what&#39;s wrong. Better to use another <code>4XX</code> status code if a more specific code that describes the problem exists</li><li><code>401</code> Unauthorized<br> The server didn&#39;t carry out the request because the client is not authorized to request it (the client might for example need to login first)</li><li><code>404</code> Not Found<br> The server didn&#39;t carry out the request because the URI in the request doesn&#39;t identify a resource that exists</li></ul><h4 id="_5xx" tabindex="-1"><a class="header-anchor" href="#_5xx" aria-hidden="true">#</a> 5XX</h4><p>The <code>5XX</code> status codes indicate that the server couldn&#39;t carry out the request because something is wrong on the server-side. Maybe the server crashed, or maybe the server needs to access an external component (such as a database) to carry out the request, but it couldn&#39;t access it the moment, etc. Examples include:</p><ul><li><code>500 </code> Internal Server Error<br> The server couldn&#39;t carry out the request</li></ul><h2 id="world-wide-web" tabindex="-1"><a class="header-anchor" href="#world-wide-web" aria-hidden="true">#</a> World Wide Web</h2><p>So, why is it called <em>the world wide web</em>? Webpages can contain links to other webpages, and if you try to visualize this structure, you end up with something looking like a web, as shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below (some imagination might be required 😅).</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A visualization of some webpages (rectangles) and where their links lead (arrows)." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n  a[Webpage A]\n  b[Webpage B]\n  c[Webpage C]\n  d[Webpage D]\n  e[Webpage E]\n  f[Webpage F]\n  g[Webpage G]\n  a-->b\n  c-->b\n  c-->a\n  c-->d\n  d-->a\n  d-->b\n  e-->b\n  e-->c\n  f-->c\n  f-->d\n  f-->a\n  b-->f\n  g-->b\n  g-->f\n  g-->e\n  d-->g\n  c-->g\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n  a[Webpage A]\n  b[Webpage B]\n  c[Webpage C]\n  d[Webpage D]\n  e[Webpage E]\n  f[Webpage F]\n  g[Webpage G]\n  a-->b\n  c-->b\n  c-->a\n  c-->d\n  d-->a\n  d-->b\n  e-->b\n  e-->c\n  f-->c\n  f-->d\n  f-->a\n  b-->f\n  g-->b\n  g-->f\n  g-->e\n  d-->g\n  c-->g\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<div class="custom-container tip"><p class="custom-container-title">Terminology</p><p>A <em>web application</em> is the application running on the server that receives HTTP requests and sends back HTTP responses.</p><p>A <em>webpage</em> is a single page (an HTML document) you can view in your web browser. Each HTTP response usually contains a single webpage.</p><p>A <em>website</em> is the collection of all webpages on one and the same server (i.e. all webpages on the same domain, for example all webpages at <a href="https://ju.se" target="_blank" rel="noopener noreferrer">ju.se`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>).</p></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/http-and-web-applications/index.html.vue?vue&type=template&id=0f340f50

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/http-and-web-applications/index.html.vue

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

/***/ 5177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1195968e",
  "path": "/lectures/http-and-web-applications/",
  "title": "HTTP and Web Applications",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "HTTP and Web Applications"
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
      "title": "Interesting reading",
      "slug": "interesting-reading",
      "children": []
    },
    {
      "level": 2,
      "title": "Clients and Servers",
      "slug": "clients-and-servers",
      "children": []
    },
    {
      "level": 2,
      "title": "Resources and URIs",
      "slug": "resources-and-uris",
      "children": []
    },
    {
      "level": 2,
      "title": "Requests",
      "slug": "requests",
      "children": [
        {
          "level": 3,
          "title": "Request Headers",
          "slug": "request-headers",
          "children": []
        },
        {
          "level": 3,
          "title": "Methods",
          "slug": "methods",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Responses",
      "slug": "responses",
      "children": [
        {
          "level": 3,
          "title": "Status codes",
          "slug": "status-codes",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "World Wide Web",
      "slug": "world-wide-web",
      "children": []
    }
  ],
  "filePathRelative": "lectures/http-and-web-applications/README.md",
  "git": {
    "updatedTime": 1637582377000
  }
}


/***/ })

};
;
//# sourceMappingURL=7410.app.js.map