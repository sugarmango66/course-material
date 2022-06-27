"use strict";(self.webpackChunkcourse_material=self.webpackChunkcourse_material||[]).push([[4696],{7248:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var n=a(6252);const s=(0,n._)("h1",{id:"content-delivery-networks",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#content-delivery-networks","aria-hidden":"true"},"#"),(0,n.Uk)(" Content Delivery Networks")],-1),o=(0,n._)("p",null,[(0,n.Uk)("It's important that static files clients request (images, videos, CSS files, client-side JS files, etc.) are delivered fast to the clients, because users don't want to wait. What's the fastest way to deliver them? Probably by using a "),(0,n._)("em",null,"Content Delivery Network"),(0,n.Uk)(" (CDN), so let's go through what that is.")],-1),r=(0,n._)("hr",null,null,-1),l=(0,n.Uk)("First, let's make it clear that there exists many different companies that host content delivery networks. The website "),i={href:"https://www.trustradius.com/content-delivery-networks-cdn",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("TrustRadius has a list of some of them"),p=(0,n.Uk)(". One of them, "),u=(0,n._)("em",null,"Cloudflare",-1),d=(0,n.Uk)(", has some really good pages describing what a content delivery network is. The content of this lecture will simply be the content on those pages:"),h={href:"https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("What is a CDN? | How do CDNs work?"),w={href:"https://www.cloudflare.com/learning/cdn/performance/",target:"_blank",rel:"noopener noreferrer"},b=(0,n.Uk)("CDN Performance"),m={href:"https://www.cloudflare.com/learning/cdn/cdn-load-balance-reliability/",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("CDN Reliability & Redundancy"),f=(0,n._)("p",null,"The rest of this lecture will contain some complimentary information related to content delivery networks.",-1),g=(0,n._)("h2",{id:"a-cdn-do-not-run-your-web-application",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#a-cdn-do-not-run-your-web-application","aria-hidden":"true"},"#"),(0,n.Uk)(" A CDN do not run your web application")],-1),v=(0,n._)("p",null,"You can't use a CDN to run your web application, such as an Express application. CDNs do not execute any of your application's code. You can only use a CDN to distribute files, such as images, videos, CSS files, etc.",-1),_=(0,n._)("p",null,'If your website only consists of static files, then you don\'t really need a web application at all. In these cases, a content delivery network is all you need to "run" your website. This is an extremely cheap way of "running" a single-page application, and clients will be able to retrieve your single-page application very fast. If you need to have some code that runs on a server, you can run that as a separate web application on another server your single-page application sends requests to.',-1),S=(0,n._)("h2",{id:"css-frameworks-and-client-side-javascript-libraries",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#css-frameworks-and-client-side-javascript-libraries","aria-hidden":"true"},"#"),(0,n.Uk)(" CSS frameworks and client-side JavaScript libraries")],-1),U=(0,n.Uk)("Many CSS frameworks and client-side JavaScript libraries are distributed through content delivery networks. For example, the CSS framework "),j={href:"https://picturepan2.github.io/spectre/getting-started/installation.html#install-cdn",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("Spectre is distributed through a content delivery network"),q=(0,n.Uk)(" called "),T={href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("unpkg"),W=(0,n.Uk)(". These can be loaded very fast to your webpages by using the "),D=(0,n._)("code",null,"<link>",-1),N=(0,n.Uk)(" tag and the "),J=(0,n._)("code",null,"<script>",-1),I=(0,n.Uk)(" tag as usual, especially if your user has already visited another website loading the framework/library from the same content delivery network, because then the user already have the file in the web browser's cache. The drawback with this solution is that your webpages are now dependent on the content delivery network. If the content delivery network for some reason is down, your webpages will not be displayed correct."),E=(0,n._)("p",null,"If you want you can host the CSS files for the CSS framework and the JavaScript files for the client-side JavaScript library in your own web application instead. This way, as long as your web application is up and running, you can be sure all webpages on it will be displayed correct. The drawback is that we lose the benefits with using a content delivery network, (shorter loading times, less requests to handle for our own web application, etc.).",-1),Q=(0,n._)("p",null,"Can we somehow get the best of both worlds? Yes! We can try to load the files from the content delivery network, and if that fails we fallback to loading them from our own web application. This can be achieved with client-side JavaScript.",-1),R={class:"custom-container tip"},M=(0,n._)("p",{class:"custom-container-title"},"Example",-1),O=(0,n.Uk)("The client-side JavaScript library "),Y={href:"https://jquery.com/",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("jQuery"),Z=(0,n.Uk)(" can be loaded from the content delivery network "),B={href:"https://cdnjs.com/",target:"_blank",rel:"noopener noreferrer"},F=(0,n.Uk)("cdnjs"),H=(0,n.Uk)(". The "),P=(0,n._)("code",null,"<script>",-1),L=(0,n.Uk)(" tag on Line 1 in the code below will first tell the web browser to load the jQuery library from the content delivery network. The JavaScript code in the next "),z=(0,n._)("code",null,"<script>",-1),G=(0,n.Uk)(" tag will then check if the library was loaded successfully, and if not it will add another "),K=(0,n._)("code",null,"<script>",-1),X=(0,n.Uk)(" element to the document, telling the web browser to load the library from the web application instead. After these lines, we can be sure the jQuery library has been loaded."),V=(0,n.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\twindow<span class="token punctuation">.</span>jQuery <span class="token operator">||</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;script src=&quot;/static/libs/jquery/3.5.1/jquery.min.js&quot;&gt;&lt;\\/script&gt;&#39;</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',1),$=(0,n.uE)('<h2 id="subresource-integrity" tabindex="-1"><a class="header-anchor" href="#subresource-integrity" aria-hidden="true">#</a> Subresource Integrity</h2><p>Fetching and executing client-side JavaScript code from other servers can be dangerous. You probably trust the code in the client-side JavaScript library you load from a content delivery network, but if you&#39;re unlucky, you might not get the code you want! Maybe a hacker has managed to hack the content delivery network, and he has programmed the network to always send back his own evil client-side JavaScript code whenever the network receives a request for a JavaScript file. That can end really dangerous for your users.</p><p>To protect websites from this vulnerability, a security feature was added to web browsers called <em>Subresource Integrity</em> (SRI). Whenever you load a file using the <code>&lt;script&gt;</code> tag or <code>&lt;link&gt;</code> tag, you can also add the <code>integrity</code> attribute to it, and it&#39;s value should be:</p><ul><li>The name of a hash algorithm, and</li><li>The hash value of the file you want to load using that algorithm</li></ul><p>When the web browser has downloaded the file, it will compute the hash value of the file using the hash algorithm and see if it matches the hash value in the attribute, and it will only use the file if they match. If they don&#39;t match it means someone has made changes to the file you intended to download.</p><p>Most content delivery network hosting JavaScript and CSS files will also provide you with a hashing algorithm and hash value you can use, so mostly you just need to copy-paste to make use of this security feature.</p>',6),ee={class:"custom-container tip"},te=(0,n._)("p",{class:"custom-container-title"},"Example",-1),ae=(0,n.Uk)("The client-side JavaScript library "),ne={href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"},se=(0,n.Uk)("Moment"),oe=(0,n.Uk)(" can be downloaded from the content delivery network "),re={href:"https://cdnjs.com",target:"_blank",rel:"noopener noreferrer"},le=(0,n.Uk)("cdnjs"),ie=(0,n.Uk)(" with an integrity check using the code below."),ce=(0,n.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),pe={},ue=(0,a(3744).Z)(pe,[["render",function(e,t){const a=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,o,r,(0,n._)("p",null,[l,(0,n._)("a",i,[c,(0,n.Wm)(a)]),p,u,d]),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",h,[k,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",w,[b,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",m,[y,(0,n.Wm)(a)])])]),f,g,v,_,S,(0,n._)("p",null,[U,(0,n._)("a",j,[C,(0,n.Wm)(a)]),q,(0,n._)("a",T,[x,(0,n.Wm)(a)]),W,D,N,J,I]),E,Q,(0,n._)("div",R,[M,(0,n._)("p",null,[O,(0,n._)("a",Y,[A,(0,n.Wm)(a)]),Z,(0,n._)("a",B,[F,(0,n.Wm)(a)]),H,P,L,z,G,K,X]),V]),$,(0,n._)("div",ee,[te,(0,n._)("p",null,[ae,(0,n._)("a",ne,[se,(0,n.Wm)(a)]),oe,(0,n._)("a",re,[le,(0,n.Wm)(a)]),ie]),ce])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}},1467:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-0fa30a06",path:"/lectures/content-delivery-networks/",title:"Content Delivery Networks",lang:"en-US",frontmatter:{sidebar:"auto",navbarTitle:"Content Delivery Networks"},excerpt:"",headers:[{level:2,title:"A CDN do not run your web application",slug:"a-cdn-do-not-run-your-web-application",children:[]},{level:2,title:"CSS frameworks and client-side JavaScript libraries",slug:"css-frameworks-and-client-side-javascript-libraries",children:[]},{level:2,title:"Subresource Integrity",slug:"subresource-integrity",children:[]}],filePathRelative:"lectures/content-delivery-networks/README.md",git:{updatedTime:1610277692e3}}}}]);
//# sourceMappingURL=v-0fa30a06.5555338e.js.map