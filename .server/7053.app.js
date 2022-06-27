"use strict";
exports.id = 7053;
exports.ids = [7053];
exports.modules = {

/***/ 2540:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/web-cookies/index.html.vue?vue&type=template&id=3fe9c898



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="web-cookies" tabindex="-1"><a class="header-anchor" href="#web-cookies" aria-hidden="true">#</a> Web Cookies</h1><p>A cookie is something a web application can use to remember information about a user. The specification <a href="https://tools.ietf.org/html/rfc6265" target="_blank" rel="noopener noreferrer">HTTP State Management Mechanism`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> explains how it works in detail, but let me give you a quick introduction to cookies before you read the specification.</p><h2 id="http-is-stateless" tabindex="-1"><a class="header-anchor" href="#http-is-stateless" aria-hidden="true">#</a> HTTP is stateless</h2><p>So, why do we have cookies? We have cookies because HTTP is a stateless protocol. What that means in practice is that when the server receives an HTTP request from a client, that HTTP request should contain all information the server needs to carry out the request. The server should not need to have any memory of previous HTTP requests it has received and carried out. An example of this is shown in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Example of Server having no memory of previous HTTP requests it has received." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant Client as Client A\n    participant Server\n    Client->>+Server: 1. HTTP Request: What is 4 + 5?\n    Note right of Server: 2. Carry out request: Compute 4 + 5 = 9\n    Server-->>-Client: 3. HTTP Response: 4 + 5 = 9\n    Client->>+Server: 4. HTTP Request: Which was last request I sent?\n    Note right of Server: 5. Carry out request: Have I received requests before? :S\n    Server-->>-Client: 6. HTTP Response: No idea\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant Client as Client A\n    participant Server\n    Client->>+Server: 1. HTTP Request: What is 4 + 5?\n    Note right of Server: 2. Carry out request: Compute 4 + 5 = 9\n    Server-->>-Client: 3. HTTP Response: 4 + 5 = 9\n    Client->>+Server: 4. HTTP Request: Which was last request I sent?\n    Note right of Server: 5. Carry out request: Have I received requests before? :S\n    Server-->>-Client: 6. HTTP Response: No idea\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>If the server would remember previous requests, then HTTP wouldn&#39;t be a stateless protocol. So when a server has carried out an HTTP request, it can simply forget everything about that request and the client the request came from.</p><p>So, why is HTTP a stateless protocol? There are some benefits with being stateless. For one, it is much easier to implement the server, because each incoming HTTP request contains all information it needs to carry out the request; no need to look at previous requests or to remember the incoming request for the future. Another benefit is that it is also easier to scale the server if clients communicate with it using a stateless protocol, but let&#39;s not get into the details about that here.</p><p>So, why did we have cookies again? Imagine users can create accounts and login on our website. When a user sends a login request (username and password) to the server, then the server needs to check if these credentials are correct, and if they are, the user should be logged in to that account. When the user in the future sends a new request to the server, the server needs to remember which account that user is logged in to. Since HTTP is a stateless protocol, the server can&#39;t remember such information using HTTP. For this, and many other use-cases where the server need to remember some information about a specific client, we use cookies.</p><h2 id="what-is-a-cookie" tabindex="-1"><a class="header-anchor" href="#what-is-a-cookie" aria-hidden="true">#</a> What is a cookie?</h2><p>A cookie is simply a key-value pair, where the key is a short description of the value. The key is sometimes also called the name of the cookie.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server needs to remember that the user is 17 years old, then it could create a cookie with the key <code>age</code> and the value <code>17</code>.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server needs to remember that a user lives in Jönköping, then it could create a cookie with the key <code>city</code> and the value <code>Jönköping</code>.</p></div><h2 id="what-can-we-use-cookies-for" tabindex="-1"><a class="header-anchor" href="#what-can-we-use-cookies-for" aria-hidden="true">#</a> What can we use cookies for?</h2><p>Cookies are used to remember information about the client/user. What information is up to you to decide, but here are some examples:</p><ul><li>Remember which pages the user has visited on a website</li><li>Remember what the user has searched for on a website</li></ul><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2><p>So, using cookies, a server can remember information about a client. It works something like this:</p><ol><li>A client sends an HTTP request to the server</li><li>When the server carries out the request, it realizes that it needs to remember some information about this client</li><li>In the HTTP response the server sends back to the client, it tells the client to create a new cookie containing a specific key and a specific value</li><li>When the client receives the HTTP response, it should create a cookie with the key and value the server instructed it to do in the response</li><li>When the client sends HTTP requests to the server in the future, it should pass along the cookie (the key-value pair) to the server</li></ol><p>This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Sequence Diagram visualizing how cookies work." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant Client\n\tparticipant Server\n\tClient->>+Server: HTTP Request\n\tNote right of Server: Need to remember\n\tServer->>-Client: HTTP Response (create cookie)\n\tNote left of Client: Creates and stores cookie\n\tClient->>+Server: HTTP Request (with cookie)\n\tNote right of Server: Reads info from cookie\n\tServer->>-Client: HTTP Response\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant Client\n\tparticipant Server\n\tClient->>+Server: HTTP Request\n\tNote right of Server: Need to remember\n\tServer->>-Client: HTTP Response (create cookie)\n\tNote left of Client: Creates and stores cookie\n\tClient->>+Server: HTTP Request (with cookie)\n\tNote right of Server: Reads info from cookie\n\tServer->>-Client: HTTP Response\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>So simply put: the server can tell the client to create cookies, the cookies are stored on the client (how is up to the client to decide, but most web browsers simply store them in files), and the client sends the cookies to the server in the HTTP requests it sends to the server.</p><h3 id="creating-a-cookie" tabindex="-1"><a class="header-anchor" href="#creating-a-cookie" aria-hidden="true">#</a> Creating a cookie</h3><p>The server can tell a client to create a new cookie by adding the <code>Set-Cookie</code> header in the HTTP response. The value for this header is <code>key=value</code> (use actual values instead of <code>key</code> and <code>value</code>). If the server wants the client to create multiple cookies, this header will be present multiple times in the HTTP response (one time for each cookie).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the server wants a client to create a cookie with the key <code>age</code> and the value <code>17</code> and a cookie with the key <code>city</code> and the value <code>Jönköping</code>, it should send back an HTTP response like the one below (the status code does of course not have to be 200).</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header-name keyword">Set-Cookie:</span> age=17
<span class="token header-name keyword">Set-Cookie:</span> city=Jönköping
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><h3 id="sending-a-cookie" tabindex="-1"><a class="header-anchor" href="#sending-a-cookie" aria-hidden="true">#</a> Sending a cookie</h3><p>The client can send a cookie in an HTTP request by adding the <code>Cookie</code> header to the HTTP request. The value for this header is <code>key=value</code> (use actual values instead of <code>key</code> and <code>value</code>). If the client wants to send multiple cookies, the value of this header should be the cookies separated by <code>; </code> (semicolon + space).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/example</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Cookie:</span> age=17
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">Example</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/example</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Cookie:</span> age=17; city=Jönköping
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="configuring-cookies" tabindex="-1"><a class="header-anchor" href="#configuring-cookies" aria-hidden="true">#</a> Configuring cookies</h2><p>When a server tells a client to create a new cookie, it can tell the client more information about the cookie than just the key and the value of the cookie. This is done by adding different attributes to the end of the <code>Set-Cookie</code> header value. You can add multiple of them, separated by <code>;</code>.</p><h3 id="expiration" tabindex="-1"><a class="header-anchor" href="#expiration" aria-hidden="true">#</a> Expiration</h3><p>To tell the client for how long the cookie should be used (i.e. to tell the client when the client should delete the cookie), the <code>Expiration</code> attribute is used. <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.1" target="_blank" rel="noopener noreferrer">Part 5.1.1 of the Cookies specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> specifies how the date value should be written, but it&#39;s not that important to remember for web developers (frameworks/libraries will do that for us 😃).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a response telling the client to create a cookie that should exist to a specific date.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header-name keyword">Set-Cookie:</span> age=17; Expires=Sun, 08 May 2022 16:31:02 GMT
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><p>Cookies without the <code>Expiration</code> attribute are known as <em>session cookies</em>, and they will be deleted when the user&#39;s session is over (i.e. when the user closes the web browser).</p><h3 id="max-age" tabindex="-1"><a class="header-anchor" href="#max-age" aria-hidden="true">#</a> Max-Age</h3><p>Instead of specifying the exact date a cookie should be deleted, one can use the <code>Max-Age</code> attribute to specify for how many seconds the cookie should live (the client will then compute the exact date to delete the cookie).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Example of a response telling the client to create a cookie that should exist for 1 hour (1 hour = 60 minutes = 60 * 60 seconds = 3600 seconds) after it has been created.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header-name keyword">Set-Cookie:</span> age=17; Max-Age=3600
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> Domain</h3><p>When creating a cookie, it will only be sent to the domain that created it:</p><ul><li>If the main domain <code>hello.com</code> created the cookie, it will only be sent to <code>hello.com</code>, and never to its sub-domains, like <code>test.hello.com</code></li><li>If the sub-domain <code>test.hello.com</code> created the cookie, it will only be sent to that sub-domain, and never to <code>hello.com</code>, or any of it other sub-domains (like <code>hi.hello.com</code>)</li></ul><p>If you want to change this, you can use the <code>Domain</code> attribute:</p><ul><li>If the main domain <code>hello.com</code> wants a cookie to also be sent to all it sub-domains, it should set the <code>Domain</code> attribute to <code>hello.com</code></li><li>If the sub-domain <code>test.hello.com</code> wants a cookie to also be sent to the main domain as well as to other sub-domains (like <code>hi.hello.com</code>), it should set the <code>Domain</code> attribute to <code>hello.com</code></li></ul><p>You can&#39;t set whichever value you want for the <code>Domain</code> attribute. For example, a request to <code>hello.com</code> can&#39;t create a cookie with the domain <code>facebook.com</code>. The <code>Domain</code> attribute can only be set to</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> Path</h3><p>Using the <code>Path</code> attribute, you can limit which requests that will contain the cookie to the ones whose URI starts with a specific path to a folder. For example, if <code>Path=/hello</code> is used, the cookie will be sent in request whose URI is:</p><ul><li><code>/hello</code></li><li><code>/hello/whatever</code></li><li><code>/hello/whatever/whatever</code></li><li>...</li></ul><p>But it will not be sent in requests whose URI is:</p><ul><li><code>/whatever-except-hello</code></li><li><code>/whatever-except-hello/hello</code></li><li>...</li></ul><h3 id="secure" tabindex="-1"><a class="header-anchor" href="#secure" aria-hidden="true">#</a> Secure</h3><p>A cookie created with the <code>Secure</code> attribute should only be sent to the server when the client uses HTTPS, and never when the client uses HTTP. Server should typically use HTTPS instead of HTTP to avoid man-in-the-middle attacks, but if a user by mistake communicates with the server using HTTP, the cookie can be exposed to man-in-the-middle attackers, who, for example, this way can hijack their login session on the server, and thereafter act as the user.</p><p>So practically all cookies should use the <code>Secure</code> attribute, so clients don&#39;t send the users&#39; cookies to the server when the clients by mistake use HTTP.</p><p>The <code>Secure</code> attribute has no value, so instead of writing <code>Secure=</code>, one simply writes <code>Secure</code>.</p><h3 id="httponly" tabindex="-1"><a class="header-anchor" href="#httponly" aria-hidden="true">#</a> HttpOnly</h3><p>Client-side JavaScrip can by default access the cookies created by the domain the client-side JavaScript comes from. If the website contains a Cross-Site Scripting vulnerability, or if a hacker fools a user to copy-paste and execute some bad client-side code into the web browser&#39;s console, a hacker can come over the user&#39;s cookies, which enables to hijack the user&#39;s login session, etc.</p><p>Cookies storing sensitive data (such as session id) are better created with the <code>HttpOnly</code> attribute. This attribute tells the client that this cookie should only be used in HTTP request, and not let client-side JavaScript access it.</p><p>The <code>HttpOnly</code> attribute has no value, so instead of writing <code>HttpOnly=</code>, one simply writes <code>HttpOnly</code>.</p><h2 id="more-to-consider" tabindex="-1"><a class="header-anchor" href="#more-to-consider" aria-hidden="true">#</a> More to consider?</h2><p>In addition to the security aspects mentioned in the attributes above, there are some other important things you should be aware of when using cookies.</p><h3 id="can-t-trust-cookies" tabindex="-1"><a class="header-anchor" href="#can-t-trust-cookies" aria-hidden="true">#</a> Can&#39;t trust cookies</h3><p>Since the cookies are stored on the client, the client can easily modify them, and therefor the server can&#39;t trust the cookies it receives. For example:</p><ul><li>If a server tells a client to create a cookie, it can&#39;t count on to receive this cookie in future requests from the client (the client can ignore creating the cookie, or the user might simply manually delete it)</li><li>When a server receives a cookie with a name it has previously told the client to create, it can&#39;t trust that the value in the cookie is the same value as it told the client to put in the cookie since the client easily can change that value</li><li>Nothing prevents a client from creating its own cookies, without the server telling it, so the server might receive cookies from a client before it has told the client to create any</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When the server receives a successful login request, it can&#39;t remember that the client has logged by using a cookie like <code>isLoggedIn=true</code>, because any client (think hackers) can create a cookie like this one on their own without sending a successful login request to the server.</p><p>For the login use-case, one should instead use sessions.</p></div><h3 id="the-cookie-law" tabindex="-1"><a class="header-anchor" href="#the-cookie-law" aria-hidden="true">#</a> The &quot;cookie law&quot;</h3><p>The European Union&#39;s ePrivacy Directive and General Data Protection Regulation makes it illegal to use cookies in some cases on websites intended to be used by European Union citizens unless you have the user&#39;s approval of using cookies. For details, see the webpage <a href="https://gdpr.eu/cookies/" target="_blank" rel="noopener noreferrer">Cookies, the GDPR, and the ePrivacy Directive`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (especially the sub-chapter <em>Cookie compliance</em>).</p><p>Many websites make use of client-side JavaScript libraries, and these can be used by the library creator to track which website a specific user is visiting using cookies. For example, when webpage(a webpage client-side JavaScript can tell the web browser to create cookies too). European Union thought that this could risk users&#39; privacy online, and therefor introduced a EU directive which become known as the cookie law.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-cookies/index.html.vue?vue&type=template&id=3fe9c898

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-cookies/index.html.vue

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

/***/ 4403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-3fb714cc",
  "path": "/lectures/web-cookies/",
  "title": "Web Cookies",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Web Cookies"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "HTTP is stateless",
      "slug": "http-is-stateless",
      "children": []
    },
    {
      "level": 2,
      "title": "What is a cookie?",
      "slug": "what-is-a-cookie",
      "children": []
    },
    {
      "level": 2,
      "title": "What can we use cookies for?",
      "slug": "what-can-we-use-cookies-for",
      "children": []
    },
    {
      "level": 2,
      "title": "Basic usage",
      "slug": "basic-usage",
      "children": [
        {
          "level": 3,
          "title": "Creating a cookie",
          "slug": "creating-a-cookie",
          "children": []
        },
        {
          "level": 3,
          "title": "Sending a cookie",
          "slug": "sending-a-cookie",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Configuring cookies",
      "slug": "configuring-cookies",
      "children": [
        {
          "level": 3,
          "title": "Expiration",
          "slug": "expiration",
          "children": []
        },
        {
          "level": 3,
          "title": "Max-Age",
          "slug": "max-age",
          "children": []
        },
        {
          "level": 3,
          "title": "Domain",
          "slug": "domain",
          "children": []
        },
        {
          "level": 3,
          "title": "Path",
          "slug": "path",
          "children": []
        },
        {
          "level": 3,
          "title": "Secure",
          "slug": "secure",
          "children": []
        },
        {
          "level": 3,
          "title": "HttpOnly",
          "slug": "httponly",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "More to consider?",
      "slug": "more-to-consider",
      "children": [
        {
          "level": 3,
          "title": "Can't trust cookies",
          "slug": "can-t-trust-cookies",
          "children": []
        },
        {
          "level": 3,
          "title": "The \"cookie law\"",
          "slug": "the-cookie-law",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/web-cookies/README.md",
  "git": {
    "updatedTime": 1637582377000
  }
}


/***/ })

};
;
//# sourceMappingURL=7053.app.js.map