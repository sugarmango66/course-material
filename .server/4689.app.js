"use strict";
exports.id = 4689;
exports.ids = [4689];
exports.modules = {

/***/ 1513:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/internet-basics/index.html.vue?vue&type=template&id=63d26ba6



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="internet" tabindex="-1"><a class="header-anchor" href="#internet" aria-hidden="true">#</a> Internet</h1><p>You have probably heard about and used <em>the Internet</em>, but what is it really? And how does it differ from <em>the web</em>? In this lecture you&#39;ll be introduced to what the Internet is and how the basics work.</p><iframe width="640" height="360" src="https://www.youtube.com/embed/Mzs5QMy-mT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="internet-basics.pdf">internet-basics.pdf</a></li><li><a href="internet-basics.pptx">internet-basics.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li>The following Wikipedia articles gives a good overview of the Internet (read to the extent you want/find interesting): <ul><li><a href="https://en.wikipedia.org/wiki/Internet" target="_blank" rel="noopener noreferrer">Internet`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://en.wikipedia.org/wiki/History_of_the_Internet" target="_blank" rel="noopener noreferrer">History of the Internet`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://en.wikipedia.org/wiki/Internet_Protocol" target="_blank" rel="noopener noreferrer">Internet Protocol`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://en.wikipedia.org/wiki/IPv6_deployment" target="_blank" rel="noopener noreferrer">IPv6 deployment`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul></li><li><a href="https://www.submarinecablemap.com" target="_blank" rel="noopener noreferrer">submarinecablemap.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (just cool too see how different parts of the world are connected)</li><li><a href="https://tools.ietf.org/html/rfc791" target="_blank" rel="noopener noreferrer">Internet Protocol Specification`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (probably not that interesting nor relevant for you to read, but do be aware of its existence</li><li>The rest of this page</li></ul><h2 id="the-internet" tabindex="-1"><a class="header-anchor" href="#the-internet" aria-hidden="true">#</a> The Internet</h2><p>The Internet can be seen as a large network that spans across most of the planet (primarily where people live). This is a simplified view of how it works, but that view is accurate enough for programmers to learn how to create applications using it. By connecting your computer to the Internet, your computer can communicate with other computers connected to the Internet. This is visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "A visualization of the Internet as a large network that computers can connect to. Computer 4 is not connected to the network, and hence can't use the Internet to communicate with the other computers." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    i((Internet))\n    c1[Computer 1]---i\n    c2[Computer 2]---i\n    c3[Computer 3]---i\n    i---c5[Computer 5]\n    i---c6[Computer 6]\n    c4[Computer 4]\n" }, null, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nflowchart TD\n    i((Internet))\n    c1[Computer 1]---i\n    c2[Computer 2]---i\n    c3[Computer 3]---i\n    i---c5[Computer 5]\n    i---c6[Computer 6]\n    c4[Computer 4]\n" })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>It&#39;s not wrong to say that two computers communicate with each other, but it&#39;s more accurate to say that it&#39;s the applications running on the respective computers that communicate with each other. For example, a chat application running on <code>Computer 5</code> uses the Internet to communicate with the chat application running on <code>Computer 3</code>.</p><h2 id="the-internet-protocol" tabindex="-1"><a class="header-anchor" href="#the-internet-protocol" aria-hidden="true">#</a> The Internet Protocol</h2><p>How the communication between two computers connected to the Internet works is specified in the <a href="https://tools.ietf.org/html/rfc791" target="_blank" rel="noopener noreferrer">Internet Protocol`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (IP), which all computers connected to the Internet must understand. But if you want to implement your own application that communicates with an application running on another computer connected to the Internet, you don&#39;t need to know that much about how the Internet Protocol works, because most likely you will use one of the many other protocols that has been built on top of the Internet Protocol (such as FTP, HTML, or SMTP, etc.), but there are some things about the Internet Protocol you must know anyway, since these other protocols use some of the details specified in the Internet Protocol.</p><p>When <code>Computer 1</code> wants to communicate with <code>Computer 2</code> on the Internet, <code>Computer 1</code> will send <code>Computer 2</code> a <em>message</em>. <code>Computer 1</code> will simply send this message to the Internet, and then the Internet is responsible for to somehow deliver the message to <code>Computer 2</code>.</p><h3 id="ip-addresses" tabindex="-1"><a class="header-anchor" href="#ip-addresses" aria-hidden="true">#</a> IP Addresses</h3><p>For the Internet to know which computer to deliver a message to, each computer connected to the Internet needs to have a unique identifier. The unique identifier of the computer that should receive the message needs to be written in the message. That&#39;s how the Internet knows which computer to deliver the message to.</p><p>These unique identifiers are known as IP addresses. In version 4 of the Internet Protocol, IP addresses have the format <code>A.B.C.E</code>, where each letter is a number between 0 and 255, for example <code>123.92.36.99</code>. Each number can be implemented using 8 bits, so in total there exists (at most) 2⁸×2⁸×2⁸×2⁸ = 255×255×255×255 = 4 294 967 296 unique IP addresses. As soon as your computer connects to the Internet, Internet will assign your computer a unique IP address other computers can use to send messages to it.</p><p>The problem with version 4 of the Internet Protocol is that at most 4 294 967 296 computers can be connected to the Internet at one and the same time, but more and more computers get connected to the Internet (game consoles, smartphones, cars, washing machines, etc.), and we are running out of IP addresses! In version 6 of the Internet Protocol they changed the format of the IP addresses to <code>A:B:C:D:E:F:G:H</code>, where each letter is a number between 0 and 65536. Each such number can be implemented using 64 bits, so each number is usually written as 4 <a href="https://simple.wikipedia.org/wiki/Hexadecimal" target="_blank" rel="noopener noreferrer">hexadecimal digits`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, for example <code>A53D</code>. A complete IP version 6 IP address can look like <code>1234:4B36:12D1:AA12:39BE:2543:CCCC:5326</code>.</p><p>Today the Internet supports both version 4 and version 6 of the Internet Protocol, so it&#39;s common to see IP addresses of both formats.</p><h3 id="packets" tabindex="-1"><a class="header-anchor" href="#packets" aria-hidden="true">#</a> Packets</h3><p>An IP message is called a <em>packet</em>. In a packet, the sender puts her own IP address, the IP address of the receiving computer (and some other meta information we will not get into the details of here) and the message itself (called the payload).</p><h3 id="shortcomings" tabindex="-1"><a class="header-anchor" href="#shortcomings" aria-hidden="true">#</a> Shortcomings</h3><p>The Internet Protocol is a very simple protocol, and as such it contains some shortcomings, some mentioned below. Other protocols built on top of the Internet Protocols tries to deal with these shortcomings.</p><h4 id="no-delivery-guarantee" tabindex="-1"><a class="header-anchor" href="#no-delivery-guarantee" aria-hidden="true">#</a> No delivery guarantee</h4><p>There is no delivery guarantee of the packets. When <code>Computer 1</code> sends <code>Computer 2</code> a packet, it can&#39;t be sure that the Internet actually manages to deliver the packet to <code>Computer 2</code> (maybe <code>Computer 2</code> just disconnected from the Internet, or has trouble with its Internet connection, etc.).</p><h4 id="limited-packet-size" tabindex="-1"><a class="header-anchor" href="#limited-packet-size" aria-hidden="true">#</a> Limited packet size</h4><p>The payload in a packet has a maximum size. For example, you can&#39;t send a 1GB big movie file in a single packet, but instead have to break down the movie file into smaller parts and send each part in a separate packet.</p><h4 id="packets-delivery-order-not-guaranteed" tabindex="-1"><a class="header-anchor" href="#packets-delivery-order-not-guaranteed" aria-hidden="true">#</a> Packets delivery order not guaranteed</h4><p>If <code>Computer 1</code> first sends <code>Packet A</code> and then <code>Packet B</code> to <code>Computer 2</code>, it might very well be that <code>Computer 2</code> receives <code>Packet B</code> before it receives <code>Packet A</code>.</p><h4 id="the-receiving-application-is-not-identified" tabindex="-1"><a class="header-anchor" href="#the-receiving-application-is-not-identified" aria-hidden="true">#</a> The receiving application is not identified</h4><p>An IP packet only identifies which computer the packet should be delivered to. The receiving computer probably have many applications running, and the IP packet doesn&#39;t specify which application that should receive the packet.</p><h2 id="the-transmission-control-protocol" tabindex="-1"><a class="header-anchor" href="#the-transmission-control-protocol" aria-hidden="true">#</a> The Transmission Control Protocol</h2><p>The Transmission Control Protocol (TCP) is a protocol built on top of the Internet Protocol. We will not go through the details of how it&#39;s implemented here, but just mention some of it&#39;s features.</p><h3 id="delivery-acknowledgement" tabindex="-1"><a class="header-anchor" href="#delivery-acknowledgement" aria-hidden="true">#</a> Delivery acknowledgement</h3><p>In TCP, when <code>Computer 2</code> has received a packet from <code>Computer 1</code>, it should send back a packet to <code>Computer 1</code> to tell <code>Computer 1</code> that it has received the packet. <code>Computer 1</code> will continue to send its packet (with some interval) until it receives that other packet from <code>Computer 2</code> telling it it has received the packet. This way, <code>Computer 1</code> can be sure that <code>Computer 2</code> has received the packet.</p><h3 id="delivery-order" tabindex="-1"><a class="header-anchor" href="#delivery-order" aria-hidden="true">#</a> Delivery order</h3><p>In TCP, when a big message needs to be divided into multiple smaller parts and sent in separate packets, each packet is also assigned a number indicating in which order the parts in the packets should be put together again. This way, it doesn&#39;t matter if the receiving computer receives the packets out of order since the order number in each packet tells it in which order they should be.</p><h3 id="port-numbers" tabindex="-1"><a class="header-anchor" href="#port-numbers" aria-hidden="true">#</a> Port numbers</h3><p>In a TCP packet, the sender also writes a <em>port number</em>. A port number is simply a number between <code>0</code> and <code>65535</code>. The port number should identify which application running on the receiving computer that should receive the packet. For example, if you build an application that can be used to chat between two computers on the Internet, then all the packets you send can use (for example) the port number <code>7564</code>, and your application should also tell the computer it runs on to forward all packets it receives with that port number to your application.</p><p>There exists some reserved port numbers that identifies applications with a special purpose. For example, web applications using the HTTP protocol always receives packets with port number 80. The <a href="https://www.iana.org/" target="_blank" rel="noopener noreferrer">Internet Assigned Numbers Authority`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (IANA) is responsible for keeping track of and registering new reserved port numbers. In addition to the ones they keep track of, there also exist port numbers that are de facto used by other applications. Wikipedia&#39;s page <a href="https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers" target="_blank" rel="noopener noreferrer">List of TCP and UDP port numbers`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> contains more information about this.</p><h2 id="the-user-datagram-protocol" tabindex="-1"><a class="header-anchor" href="#the-user-datagram-protocol" aria-hidden="true">#</a> The User Datagram Protocol</h2><p>The downside with TCP is that it makes the communication a bit slower due to the extra things that needs to be done. Sometimes it&#39;s more important to have as little delay as possible instead of having all packets fully delivered. For example, when making a video call to someone, it&#39;s more important to deliver as much information (sound and video) as fast as possible, instead of delivering all the information complete. For example, it&#39;s better to have 0.1 seconds delay in sound and video and 75% of the quality instead of having 1 second delay in sound and video and 100% of the quality. So, the User Datagram Protocol (UDP) is a protocol built on top of the Internet Protocol you can use when you need to deliver the packets as fast as possible.</p><p>Just as with TCP, it adds port numbers to the packets to identify which application on the receiving computer that should receive the packet.</p><h2 id="internet-services" tabindex="-1"><a class="header-anchor" href="#internet-services" aria-hidden="true">#</a> Internet Services</h2><p>Using TCP and UDP we can use the Internet and create whichever type of applications we want, but there are some common type of applications that has evolved, and we say that these are available as different services on the Internet. Each service usually use their own protocol that runs on top of TCP or UDP.</p><h3 id="the-world-wide-web" tabindex="-1"><a class="header-anchor" href="#the-world-wide-web" aria-hidden="true">#</a> The World Wide Web</h3><p>Each time you use your web browser you use the World Wide Web (WWW, or simply <em>the web</em>) service that runs on the Internet. It consists of many computers on the Internet hosting websites (called servers), and when your web browser communicates with one of them, it will do so using the <a href="https://tools.ietf.org/html/rfc2616" target="_blank" rel="noopener noreferrer">HyperText Transfer Protocol`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (HTTP). HTTP usually runs on top of TCP and uses port 80.</p><h3 id="emails" tabindex="-1"><a class="header-anchor" href="#emails" aria-hidden="true">#</a> Emails</h3><p>When your computer sends an email on the Internet it might use a protocol called the <a href="https://tools.ietf.org/html/rfc5321" target="_blank" rel="noopener noreferrer">Simple Mail Transfer Protocol`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (SMTP). SMTP usually runs on top of TCP and uses port 25.</p><h3 id="file-sharing" tabindex="-1"><a class="header-anchor" href="#file-sharing" aria-hidden="true">#</a> File sharing</h3><p>Not as common as before we got the web, but there exists computers on the Internet storing files. These are known as file servers. When other computers want to download the files from them, they might use the protocol called the <a href="https://tools.ietf.org/html/rfc959" target="_blank" rel="noopener noreferrer">File Transfer Protocol`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> (FTP). FTP usually runs on top of TCP and uses port 20 and 21.</p><h3 id="domain-name-system" tabindex="-1"><a class="header-anchor" href="#domain-name-system" aria-hidden="true">#</a> Domain Name System</h3><p>So, when <code>Computer 1</code> wants to send a message to <code>Computer 2</code> on the Internet, <code>Computer 1</code> (or rather the human using <code>Computer 1</code>) needs to know the IP address of <code>Computer 2</code>. We humans are quite bad at remembering numbers, but much better at remembering names. The Domain Name System (DNS) service on the Internet can be used to translate names into IP addresses, so using that one you can register a domain name like <code>my-website.com</code> and map that to the IP address of the computer hosting your website, for example <code>123.123.123.123</code>. Then when a user tries to visit <code>my-website.com</code> in her web browser, her web browser will first use DNS to translate <code>my-website.com</code> to the IP address <code>123.123.123.123</code>, and then use HTTP to connect to <code>123.123.123.123</code>.</p><p>The document <a href="https://datatracker.ietf.org/doc/html/rfc1035" target="_blank" rel="noopener noreferrer">DOMAIN NAMES - IMPLEMENTATION AND SPECIFICATION`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> contains the specification for how the Domain Name System works.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/internet-basics/index.html.vue?vue&type=template&id=63d26ba6

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/internet-basics/index.html.vue

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

/***/ 1802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0026cf7f",
  "path": "/lectures/internet-basics/",
  "title": "Internet",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Internet Basics"
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
      "title": "The Internet",
      "slug": "the-internet",
      "children": []
    },
    {
      "level": 2,
      "title": "The Internet Protocol",
      "slug": "the-internet-protocol",
      "children": [
        {
          "level": 3,
          "title": "IP Addresses",
          "slug": "ip-addresses",
          "children": []
        },
        {
          "level": 3,
          "title": "Packets",
          "slug": "packets",
          "children": []
        },
        {
          "level": 3,
          "title": "Shortcomings",
          "slug": "shortcomings",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "The Transmission Control Protocol",
      "slug": "the-transmission-control-protocol",
      "children": [
        {
          "level": 3,
          "title": "Delivery acknowledgement",
          "slug": "delivery-acknowledgement",
          "children": []
        },
        {
          "level": 3,
          "title": "Delivery order",
          "slug": "delivery-order",
          "children": []
        },
        {
          "level": 3,
          "title": "Port numbers",
          "slug": "port-numbers",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "The User Datagram Protocol",
      "slug": "the-user-datagram-protocol",
      "children": []
    },
    {
      "level": 2,
      "title": "Internet Services",
      "slug": "internet-services",
      "children": [
        {
          "level": 3,
          "title": "The World Wide Web",
          "slug": "the-world-wide-web",
          "children": []
        },
        {
          "level": 3,
          "title": "Emails",
          "slug": "emails",
          "children": []
        },
        {
          "level": 3,
          "title": "File sharing",
          "slug": "file-sharing",
          "children": []
        },
        {
          "level": 3,
          "title": "Domain Name System",
          "slug": "domain-name-system",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/internet-basics/README.md",
  "git": {
    "updatedTime": 1637582377000
  }
}


/***/ })

};
;
//# sourceMappingURL=4689.app.js.map