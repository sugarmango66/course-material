"use strict";
exports.id = 8710;
exports.ids = [8710];
exports.modules = {

/***/ 8328:
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
// EXTERNAL MODULE: ./src/lectures/report-writing/code-as-image.png
var code_as_image = __webpack_require__(6732);
// EXTERNAL MODULE: ./src/lectures/report-writing/screenshot.png
var screenshot = __webpack_require__(9400);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/report-writing/index.html.vue?vue&type=template&id=ca73dfe8






function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_ReportMistake = (0,external_vue_.resolveComponent)("ReportMistake")
  const _component_RenderMermaid = (0,external_vue_.resolveComponent)("RenderMermaid")

  _push(`<!--[--><h1 id="report-writing" tabindex="-1"><a class="header-anchor" href="#report-writing" aria-hidden="true">#</a> Report Writing</h1><p>There are some common mistakes students do the first time they try to write a report describing the project work they&#39;ve done. In this lecture some of those mistakes are pointed out so you can avoid doing them yourself. But first some important theory to know before you start writing your report.</p><h2 id="what-is-a-project" tabindex="-1"><a class="header-anchor" href="#what-is-a-project" aria-hidden="true">#</a> What is a project?</h2><p>Most reports are associated with a project, so you must have a good understanding of what a project is before you write a report on one. <a href="https://en.wikipedia.org/wiki/Project" target="_blank" rel="noopener noreferrer">Wikipedia&#39;s Project page`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> has a long definition of the term, but let us only focus on projects where the goal is to implement some software. A project is always about a problem that should be solved, and the solution (in this case the software) you create should solve that problem.</p><h3 id="the-problem" tabindex="-1"><a class="header-anchor" href="#the-problem" aria-hidden="true">#</a> The problem</h3><p>The goal with the software you create is to get people to use it (no point in creating something no one will use). Why would they use it? Because it will help them in some way. So the first thing you should decide in a project work is: <em>What is the problem people are having that we will try to solve in this project</em>? Examples of problems are:</p><ul><li>Crossing the road is dangerous.</li><li>Waiting (in line, at a bus stop, at the traffic lights, etc.) is boring AND a waste of time (two problems in one).</li><li>Leaving the children home alone is dangerous (parents are worried about both the house and their children).</li><li>Communicating with someone not speaking your language is hard.</li><li>Remembering when Arsenal plays their next game is hard, and it changes after each game.</li><li>Contacting all players in a hockey team (to notify them of cancelled matches, changed practice hours, etc.) is hard/time consuming.</li><li>Knowing what is cheap and what is expensive in a grocery store is hard.</li></ul><p>If you can&#39;t come up with a problem on your own, simply ask a friend or a company about problems they&#39;re having, and then you can try to solve that problem as your project.</p><p>When you have identified the problem to solve, you need to analyze the problem in depth to get a better understanding of it, so you know things like:</p><ul><li>Who are having the problem?</li><li>What is characteristic of those having the problem? E.g.: <ul><li>Are they rich?</li><li>Do they live in big cities?</li><li>Are they old?</li><li>Do they all have driver licenses?</li><li>How much time are they willing to invest to solve the problem? (e.g. 15 minutes to learn how to use a new app?)</li><li>Etc.</li></ul></li><li>When are they having the problem?</li><li>How does the problem impact the rest of their lives?</li><li>Etc.</li></ul><p>Analyzing the problem in depth could be a big project itself taking many months, but let us keep things minimal here (you don&#39;t have time to do a proper analyze of the project in depth for the project you do in school) and move on.</p><h3 id="the-solution" tabindex="-1"><a class="header-anchor" href="#the-solution" aria-hidden="true">#</a> The solution</h3><p>When you have a good understanding of the problem, you need to come up with a solution to the problem. What the solution looks like do of course depends on what the problem is, but in our case the solution will always involve the creation of software. For example, if the problem is <em>My children has grown up and now I have a lot of small clothes no one in the family can use</em>, then maybe the solution could be to create a website where people can sell their clothes online to others.</p><p>Often you don&#39;t only come up with one solution, but many different solutions (coming up with different solutions could be a project itself taking many months), and then you continue to work with the solution you think is the most promising one. When you do, you need to be sure that the people having the problem really think that the solution you pick is a good solution they are willing to use (optimally willing to pay money for 🤑). You can compare your solution to existing solutions to see if your solution seems to be better. For example, parents might now throw/give away their children clothes for free now, but with your solution they would get some money for the clothes, making them prefer your solution. Making a survey and asking the people having the problem if they think your solution is a good idea is of course a very smart thing to do.</p><p>When you have decided which solution to go with, you need to realize it (in the previous example implement the website). When you&#39;re done realizing the solution, we&#39;ll for simplicity consider the project to be over. Real projects could however continue after this. For example, the following could also be part of the project:</p><ul><li>Delivering the solution to a customer.</li><li>Running the solution for a customer.</li><li>Maintaining the solution for a customer.</li><li>Add new functionality to the solution for a customer.</li><li>Fix bugs in the solution.</li><li>...</li></ul><h2 id="report-structure" tabindex="-1"><a class="header-anchor" href="#report-structure" aria-hidden="true">#</a> Report structure</h2><p>Now that you have a basic understanding of what a project is, let&#39;s take a look at how we can write a report about one.</p><p>Reports describing projects tends to be quite long. Therefore we divide them into chapters, making them a bit more structured. But which chapters should we have? In which order should they be? There&#39;s no single correct answer to this, but let&#39;s go through an example of a good structure for a report.</p><h3 id="chapter-1-introduction" tabindex="-1"><a class="header-anchor" href="#chapter-1-introduction" aria-hidden="true">#</a> Chapter 1: Introduction</h3><p>The first chapter in the report should introduce the reader to the project. The reader does so far not know anything about your project, so the first thing you need to explain to the reader is which problem you try to solve and how you intend to solve it.</p><p>In this chapter you can think of the reader as an investor with a lot of money, and your goal is to convince the investor that the problem is a serious problem worth solving, and that your solution solves the problem in an excellent way. If you manage to convince the investor of this, she might be willing to invest some money in your project, and you get the money you need to start working on the project and to build the solution.</p><p>In our case the solution is a website, so we need to tell the reader what problem the users of the website are having and then explain how they solve that problem by using the website. A UML use-case diagram is an excellent tool to visualize what the user will be able to do on the website.</p><div class="custom-container tip"><p class="custom-container-title">Keep it simple!</p><p>Investors are not technical people (just rich and stupid bastards 😉), so avoid using technical terms. Anyone reading your report should be able to understand all the text in the Introduction chapter, even your own grandpa who doesn&#39;t even know how to turn off the radio.</p></div><h3 id="chapter-2-solution" tabindex="-1"><a class="header-anchor" href="#chapter-2-solution" aria-hidden="true">#</a> Chapter 2: Solution</h3><p>So, you have decided on a solution and you&#39;ve got the money you need to build it from an investor? Great, now we just need to figure out the technical details of how to build the solution. The solution is usually quite complex, so dividing the solution into multiple chapters is usually a good idea, but if the solution is small and simple, a single chapter describing the solution can be enough.</p><p>In our case, the solution is a website, so this chapter could be about giving an overview of how we will implement the website. In our case we could explain that a user will use her web browser on her computer to communicate with our web application running on our server, and our server in turn will communicate with our database that runs on yet another server.</p><p>In our case the solution consists of two components we create ourselves:</p><ul><li>The web application</li><li>The database</li></ul><p>We have a lot to say about these, but that will be implementation details, and those are probably better described in chapters dedicated to describe these in detail, so this chapter is just about the architecture of the solution (an overview of the solution). This way, readers who don&#39;t know much about programming should still be able to read and understand most parts of this chapters.</p><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>In our case we describe the architecture of our solution in this chapter, so maybe <em>Architecture</em> is a more accurate chapter name than <em>Solution</em>? It&#39;s your report, you decide!</p></div><div class="custom-container tip"><p class="custom-container-title">Keep it simple!</p><p>In the Solution chapter you have to get a little bit more technical compared to the Introduction chapter, but try to keep it simple (avoid mentioning technical implementation details unless it makes sense to mention them here) so most readers can read the chapter and understand the solution overall without being technical experts. Your grandpa should be able to understand most of what you&#39;ve written, even though <a href="https://www.youtube.com/watch?v=st6-DgWeuos" target="_blank" rel="noopener noreferrer">he doesn&#39;t know where the any key is`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h3><p>We can use a separate chapter to describe the database component in our solution, so in this chapter we describe everything there is to know about the database, such as:</p><ul><li>What database do we use (MySQL? SQLite?, MariaDB? Etc.)</li><li>What tables do we have in the database?</li><li>What columns do we have in the tables?</li><li>What constraints do we have in our database?</li><li>...</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>In this chapter you can expect the reader to know a lot about databases, so don&#39;t expect your grandpa to understand much of what you write here. This chapter will primarily be read by other developers working on the project to learn how they should use the database, and by quality assurance people (your boss, your team&#39;s quality assurance member, your customer&#39;s quality assurance checker, etc.) to verify that your solution has been implemented in a good way.</p></div><div class="custom-container warning"><p class="custom-container-title">Remember!</p><p>This chapter is about the database only, so no need to mention anything about the web application in this chapter.</p></div><h3 id="web-application" tabindex="-1"><a class="header-anchor" href="#web-application" aria-hidden="true">#</a> Web Application</h3><p>We can use a separate chapter to describe the web application component in our solution, so in this chapter we describe everything there is to know about the web application, such as:</p><ul><li>Which framework is the web application implemented in?</li><li>How is the source code structured?</li><li>How is authentication and authorization handled?</li><li>How is information about the clients remembered? E.g. cookies, sessions, tokens, etc.</li><li>Which security vulnerabilities has been thought of and is protected against?</li><li>Which libraries is the web application using?</li><li>...</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>In this chapter you can expect the reader to know a lot about how web applications work, so don&#39;t expect your grandpa to understand much of what you write here. This chapter will primarily be read by other developers working on the project to learn how they should add new features to the web application, and by quality assurance people (your boss, your team&#39;s quality assurance member, your customer&#39;s quality assurance checker, etc.) to verify that your solution has been implemented in a good way.</p></div><div class="custom-container warning"><p class="custom-container-title">Remember!</p><p>This chapter is about the web application only, so no need to describe implementation details of the database. The only thing you need to mention about the database in this chapter is how you communicate with it/connect to it.</p></div><h3 id="other-chapters" tabindex="-1"><a class="header-anchor" href="#other-chapters" aria-hidden="true">#</a> Other chapters</h3><p>Add whichever other chapters you want that make sense to have. Maybe a chapter describing the website&#39;s graphical user interface is good to have? Or maybe designing the graphical user interface is an entire project on its own? Maybe the solution also includes a smartphone app? Then having a chapter explaining the implementation of that app would be good? Or maybe the smartphone app should be described in a separate report? Maybe our solution also includes special days people can come to a house and leave the clothes they want to sell there, and then others can come to the house and buy them? Then a chapter explaining how this works would be good, etc.</p><h2 id="readers-are-stupid" tabindex="-1"><a class="header-anchor" href="#readers-are-stupid" aria-hidden="true">#</a> Readers are stupid!</h2><p>When you write a report you must always remember that you write it for the readers. Each time you hesitate over something, such as:</p><ul><li>Which chapters do I need?</li><li>In which chapter should I write this?</li><li>Do I need a figure to explain this?</li><li>Have I explained this good enough now?</li></ul><p>Always think of the reader. Pretend you are a very stupid reader of the report, and that you don&#39;t know anything about the project. Then try to answer your question, and then go with the answer you come up with.</p><div class="custom-container tip"><p class="custom-container-title">Your opinion about the report doesn&#39;t matter</p><p>It doesn&#39;t matter whether you think the report is good or bad, what&#39;s important is what the readers think of your report, since they are the ones who will read it. To make them think the report is good, you often need to do more work on it than you initially think is necessary, because you know YOUR project work by heart, but the reader doesn&#39;t know anything about it, so you need to explain more things than you think.</p></div><h2 id="be-explicit" tabindex="-1"><a class="header-anchor" href="#be-explicit" aria-hidden="true">#</a> Be explicit</h2><p>If you write something that can be interpreted in different ways, readers have no idea which way that is the correct interpretation, since they don&#39;t have anyone to ask for clarification. So, when it comes to written text, it&#39;s very important to be explicit about what you mean, so there&#39;s no way for readers to interpret the text in different ways.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Let&#39;s take a look at an example from a report describing how a blog on an Android app works:</p><blockquote><p>It doesn&#39;t work to create empty blogposts.</p></blockquote><p>The problems with that wording are:</p><ol><li>There&#39;s no explanation of what <em>doesn&#39;t work</em> means. The app doesn&#39;t contain that functionality at all? Or the app crashes when that functionality is used? Or does nothing happen when one click on the create-button? Or is an error message shown to the user?</li><li>There&#39;s no explanation of what <em>empty</em> means. Missing all of title, content and date? Or just missing title? Or what?</li></ol><p>As you see, sentences in a report that are that vague are more confusing than helpful to the reader!</p><p>Let&#39;s take a look at a better worded sentence:</p><blockquote><p>When creating a new blogpost with an empty content, an error message is shown to the user indicating that new blogposts must have some content.</p></blockquote><p>This is much better! Everyone reading this sentence will get the very same understanding of how the app works. But most likely, you will have more validation rules than just that one, and you need to describe all of them. Then you should not describe each of them in separate sentences like that, but rather show them in a list, or a table, as in the example below.</p><blockquote><p>When creating a new blogposts, the following validation rules are applied:</p><ul><li>The content of the blogpost must not be empty</li><li>The content of the blogpost must at most consist of 1000 characters</li><li>The title of the blogpost must consist of at least 5 characters</li><li>The title of the blogpost must at most consist of 75 characters</li><li>The publication date can not be set to a date in the past</li></ul><p>If some of the rules are not followed, they will be shown as error messages to the user.</p></blockquote><p>This is a very good way of describing how it works;</p><ul><li>Lists are used, so it&#39;s easy to see where all the validation rules are specified, and to count how many they are, etc.</li><li>It&#39;s very easy to add more validation rules in the future: just add a rule to the list</li></ul><p>Even if your app only has a single validation rule, displaying that one in a list is still a very good idea, because it gives the report a very good structure, and it&#39;s very easy to add more validation rules to the report in the future.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Another example from a report on a website:</p><blockquote><p>The client communicates with the server, and then it crashes.</p></blockquote><p>What crashes? The client? The server? The network? Or everything? Students love overusing the word <em>it</em>, but readers hate, because they often don&#39;t know what <em>it</em> refers to. It is much better to be explicit:</p><blockquote><p>The client communicates with the server, and then the client crashes.</p></blockquote><p>This is much better, now all readers gets the understanding that it&#39;s the client that crashes. But <em>then</em> in the sentence is still ambiguous. WHEN is <em>then</em>?</p><ul><li>then = Directly after the request has been sent?</li><li>then = While waiting for the response?</li><li>then = When the response is being received?</li><li>then = After the response has been received?</li></ul><p>Different readers will make different guesses here, and get different understandings. It&#39;s much better to be explicit than vague, for example:</p><blockquote><p>The client sends an HTTP request to the server, and when the client receives the HTTP response from the server the client crashes.</p></blockquote><p>This sentence is explicit all the way, so it&#39;s very easy to read and understand, and everybody gets the same understanding from it.</p></div><h2 id="common-student-mistakes" tabindex="-1"><a class="header-anchor" href="#common-student-mistakes" aria-hidden="true">#</a> Common student mistakes</h2><p>So, which are the common mistakes students do in their reports and that you should avoid? Here are some of them.</p><h3 id="non-unique-solution-name" tabindex="-1"><a class="header-anchor" href="#non-unique-solution-name" aria-hidden="true">#</a> Non unique solution name</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>My Website</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "My Website")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>ShoeSell</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "ShoeSell")
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Camera App</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Camera App")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>CamAppo</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "CamAppo")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The name of the solution is very general.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The name of the solution is very general.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The solution is hard to find for people searching on the web, and it&#39;s hard to talk about the solution (e.g. Person A: <em${
          _scopeId
        }>I like the Camera App, it&#39;s a great application</em>, Person B: <em${
          _scopeId
        }>😕 Which camera app?</em>).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The solution is hard to find for people searching on the web, and it's hard to talk about the solution (e.g. Person A: "),
            (0,external_vue_.createVNode)("em", null, "I like the Camera App, it's a great application"),
            (0,external_vue_.createTextVNode)(", Person B: "),
            (0,external_vue_.createVNode)("em", null, "😕 Which camera app?"),
            (0,external_vue_.createTextVNode)(").")
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Use a more unique name on your solution. Compare to <em${
          _scopeId
        }>Google</em>, <em${
          _scopeId
        }>Netflix</em>, <em${
          _scopeId
        }>Spotify</em>, etc. Hard to come up with a unique name? Use a <a href="https://www.google.se/search?q=project+name+generator" target="_blank" rel="noopener noreferrer"${
          _scopeId
        }>project name generator`)
        _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
        _push(`</a>.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Use a more unique name on your solution. Compare to "),
            (0,external_vue_.createVNode)("em", null, "Google"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("em", null, "Netflix"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("em", null, "Spotify"),
            (0,external_vue_.createTextVNode)(", etc. Hard to come up with a unique name? Use a "),
            (0,external_vue_.createVNode)("a", {
              href: "https://www.google.se/search?q=project+name+generator",
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              (0,external_vue_.createTextVNode)("project name generator"),
              (0,external_vue_.createVNode)(_component_OutboundLink)
            ]),
            (0,external_vue_.createTextVNode)(".")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="weird-solution-name" tabindex="-1"><a class="header-anchor" href="#weird-solution-name" aria-hidden="true">#</a> Weird solution name</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Jukioperlatino</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Jukioperlatino")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Fnelly</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Fnelly")
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>dsfkjs</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "dsfkjs")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Klanga</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Klanga")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The name of the solution is too strange.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The name of the solution is too strange.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>People can&#39;t easily talk about the solution, and remembering the name is extremely hard.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "People can't easily talk about the solution, and remembering the name is extremely hard.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Use an easier (and possibly shorter) name. Compare to <em${
          _scopeId
        }>Google</em>, <em${
          _scopeId
        }>Netflix</em>, <em${
          _scopeId
        }>Spotify</em>, etc..</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Use an easier (and possibly shorter) name. Compare to "),
            (0,external_vue_.createVNode)("em", null, "Google"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("em", null, "Netflix"),
            (0,external_vue_.createTextVNode)(", "),
            (0,external_vue_.createVNode)("em", null, "Spotify"),
            (0,external_vue_.createTextVNode)(", etc..")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="components-used-before-defined" tabindex="-1"><a class="header-anchor" href="#components-used-before-defined" aria-hidden="true">#</a> Components used before defined</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(first time <em${
          _scopeId
        }>database</em> is mentioned in the report)</p><p${
          _scopeId
        }>The database runs on a separate server.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("(first time "),
            (0,external_vue_.createVNode)("em", null, "database"),
            (0,external_vue_.createTextVNode)(" is mentioned in the report)")
          ]),
          (0,external_vue_.createVNode)("p", null, "The database runs on a separate server.")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(first time <em${
          _scopeId
        }>database</em> is mentioned in the report)</p><p${
          _scopeId
        }>The website has a database it uses to store the resources in.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("(first time "),
            (0,external_vue_.createVNode)("em", null, "database"),
            (0,external_vue_.createTextVNode)(" is mentioned in the report)")
          ]),
          (0,external_vue_.createVNode)("p", null, "The website has a database it uses to store the resources in.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text refers to components before they have been introduced.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text refers to components before they have been introduced.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The reader has no idea about what you refer to (which database <em${
          _scopeId
        }>The database</em> in the example above refers to), nor that it&#39;s part of the solution.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The reader has no idea about what you refer to (which database "),
            (0,external_vue_.createVNode)("em", null, "The database"),
            (0,external_vue_.createTextVNode)(" in the example above refers to), nor that it's part of the solution.")
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Introduce components before you refer to them.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Introduce components before you refer to them.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="ambiguous-explanations" tabindex="-1"><a class="header-anchor" href="#ambiguous-explanations" aria-hidden="true">#</a> Ambiguous explanations</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The solution consists of a backend application and a frontend application. The application is...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The solution consists of a backend application and a frontend application. The application is...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The solution consists of a backend application and a frontend application. The frontend application is...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The solution consists of a backend application and a frontend application. The frontend application is...")
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Any user can login to the application and upload photos.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Any user can login to the application and upload photos.")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In the application any user can create and login to an account, and thereafter upload photos belonging to the account they logged in to.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In the application any user can create and login to an account, and thereafter upload photos belonging to the account they logged in to.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text is ambiguous, i.e. can be read in many different ways.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text is ambiguous, i.e. can be read in many different ways.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The reader doesn&#39;t know what the text actually means and have to guess what the intended meaning is. <a href="https://www.xkcd.com/169/" target="_blank" rel="noopener noreferrer"${
          _scopeId
        }>It can end really bad for you.`)
        _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
        _push(`</a></p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The reader doesn't know what the text actually means and have to guess what the intended meaning is. "),
            (0,external_vue_.createVNode)("a", {
              href: "https://www.xkcd.com/169/",
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              (0,external_vue_.createTextVNode)("It can end really bad for you."),
              (0,external_vue_.createVNode)(_component_OutboundLink)
            ])
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Be explicit about what you mean. Don&#39;t leave any room for different interpretations anywhere in the report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Be explicit about what you mean. Don't leave any room for different interpretations anywhere in the report.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="inconsistent-terms" tabindex="-1"><a class="header-anchor" href="#inconsistent-terms" aria-hidden="true">#</a> Inconsistent terms</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The solution consists of an Android application. The app is designed... The software securely communicates with...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The solution consists of an Android application. The app is designed... The software securely communicates with...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The solution consists of an Android application. The application is designed... The application securely comminutes with...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The solution consists of an Android application. The application is designed... The application securely comminutes with...")
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><em${
          _scopeId
        }>BikeIT</em> is a website where you can buy a hi-tech bike. On the site you can also sell your old bike.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("em", null, "BikeIT"),
            (0,external_vue_.createTextVNode)(" is a website where you can buy a hi-tech bike. On the site you can also sell your old bike.")
          ])
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><em${
          _scopeId
        }>BikeIT</em> is a website where you can buy a hi-tech bike. On the website you can also sell your old bike.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("em", null, "BikeIT"),
            (0,external_vue_.createTextVNode)(" is a website where you can buy a hi-tech bike. On the website you can also sell your old bike.")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text uses different terms to refer to the same thing.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text uses different terms to refer to the same thing.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>It&#39;s hard for the reader to read the text, and the reader gets unsure if you refer to the same thing or two different things when you refer to it using different terms.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "It's hard for the reader to read the text, and the reader gets unsure if you refer to the same thing or two different things when you refer to it using different terms.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Be consistent with which terms you use.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Be consistent with which terms you use.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="making-text-stand-out" tabindex="-1"><a class="header-anchor" href="#making-text-stand-out" aria-hidden="true">#</a> Making text stand out</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>&quot;<b${
          _scopeId
        }><i${
          _scopeId
        }><u${
          _scopeId
        }>Pangoga</u></i></b>&quot; is a platform that...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("\""),
            (0,external_vue_.createVNode)("b", null, [
              (0,external_vue_.createVNode)("i", null, [
                (0,external_vue_.createVNode)("u", null, "Pangoga")
              ])
            ]),
            (0,external_vue_.createTextVNode)("\" is a platform that...")
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><i${
          _scopeId
        }>Pangoga</i> is a platform that...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("i", null, "Pangoga"),
            (0,external_vue_.createTextVNode)(" is a platform that...")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Some of the text stands out too much.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Some of the text stands out too much.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text is harder to read when a word stands out too much from the rest of the text. For example, when you read this paragraph chances are you noticed this smiley 😃 before you were supposed to, stealing your focus from the text. It can even steal your focus when you read this text, which appears after it.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text is harder to read when a word stands out too much from the rest of the text. For example, when you read this paragraph chances are you noticed this smiley 😃 before you were supposed to, stealing your focus from the text. It can even steal your focus when you read this text, which appears after it.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Don&#39;t make the text standout too much. Just using italic is enough in most cases. When showing inline code, making it standout like <code${
          _scopeId
        }>this</code> is very common.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Don't make the text standout too much. Just using italic is enough in most cases. When showing inline code, making it standout like "),
            (0,external_vue_.createVNode)("code", null, "this"),
            (0,external_vue_.createTextVNode)(" is very common.")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="acronyms-without-explanations" tabindex="-1"><a class="header-anchor" href="#acronyms-without-explanations" aria-hidden="true">#</a> Acronyms without explanations</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The GUI has been...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The GUI has been...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The Graphical User Interface (GUI) has been...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The Graphical User Interface (GUI) has been...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text uses acronyms without explaining what they mean.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text uses acronyms without explaining what they mean.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The reader doesn&#39;t know what the acronym stands for and doesn&#39;t understand the text.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The reader doesn't know what the acronym stands for and doesn't understand the text.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Always explain what an acronym stands for the first time you use it in the report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Always explain what an acronym stands for the first time you use it in the report.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="acronyms-are-introduced-wrong" tabindex="-1"><a class="header-anchor" href="#acronyms-are-introduced-wrong" aria-hidden="true">#</a> Acronyms are introduced wrong</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The Graphical User Interface (from here on written as GUI) has been...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The Graphical User Interface (from here on written as GUI) has been...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The Graphical User Interface (GUI) has been...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The Graphical User Interface (GUI) has been...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The standard notation for introducing acronyms has not been used.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The standard notation for introducing acronyms has not been used.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The standard notation is very short, if you use another notation the reader needs to do more work to read it. The reader also needs to learn your specific way of introducing acronyms, which is an extra effort for the reader.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The standard notation is very short, if you use another notation the reader needs to do more work to read it. The reader also needs to learn your specific way of introducing acronyms, which is an extra effort for the reader.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Stick to using the standard notation for introducing acronyms, or (second best) don&#39;t introduce them at all (if you do introduce an acronym, you have to use the acronym somewhere later in the text).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Stick to using the standard notation for introducing acronyms, or (second best) don't introduce them at all (if you do introduce an acronym, you have to use the acronym somewhere later in the text).")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="repeating-information" tabindex="-1"><a class="header-anchor" href="#repeating-information" aria-hidden="true">#</a> Repeating information</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The database contains three tables: accounts, blogposts and comments. [...] The three type of resources in the database are accounts, blogposts and comments. [...] The resources stored in the database (accounts, blogposts and comments) are all validated before they are inserted.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The database contains three tables: accounts, blogposts and comments. [...] The three type of resources in the database are accounts, blogposts and comments. [...] The resources stored in the database (accounts, blogposts and comments) are all validated before they are inserted.")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The database contains three tables: accounts, blogposts and comments.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The database contains three tables: accounts, blogposts and comments.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The same type of information is mentioned multiple times in the report, often across many different chapters.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The same type of information is mentioned multiple times in the report, often across many different chapters.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Making changes in the future will be hard, since the report needs to be updated at multiple places (and you will probably forget to update the report at all places, which makes it inconsistent). The report does also have a poor structure if the same information is described at multiple places. For example, if the user want to find this specific information and it&#39;s written at multiple different places, it is not obvious where in the report the user should start searching for it. Also, the reader doesn&#39;t get any new information by reading the same information multiple times, wasting the reader&#39;s time.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Making changes in the future will be hard, since the report needs to be updated at multiple places (and you will probably forget to update the report at all places, which makes it inconsistent). The report does also have a poor structure if the same information is described at multiple places. For example, if the user want to find this specific information and it's written at multiple different places, it is not obvious where in the report the user should start searching for it. Also, the reader doesn't get any new information by reading the same information multiple times, wasting the reader's time.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Don&#39;t repeat the same information; each thing worth mentioning should only be mentioned once, and it should be obvious where in the report (which chapter) each thing is described. If it&#39;s not obvious you probably need to re-structure your report somehow.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Don't repeat the same information; each thing worth mentioning should only be mentioned once, and it should be obvious where in the report (which chapter) each thing is described. If it's not obvious you probably need to re-structure your report somehow.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="chapters-start-with-figures" tabindex="-1"><a class="header-anchor" href="#chapters-start-with-figures" aria-hidden="true">#</a> Chapters start with figures</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(in the beginning of a chapter)</p><p${
          _scopeId
        }>[Actual Figure]</p><p${
          _scopeId
        }>The figure above shows...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "(in the beginning of a chapter)"),
          (0,external_vue_.createVNode)("p", null, "[Actual Figure]"),
          (0,external_vue_.createVNode)("p", null, "The figure above shows...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(in the beginning of a chapter)</p><p${
          _scopeId
        }>The figure below shows...</p><p${
          _scopeId
        }>[Actual Figure]</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "(in the beginning of a chapter)"),
          (0,external_vue_.createVNode)("p", null, "The figure below shows..."),
          (0,external_vue_.createVNode)("p", null, "[Actual Figure]")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The first thing in the chapter is a figure.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The first thing in the chapter is a figure.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>When the reader starts reading the chapter, she has no idea why there&#39;s a figure there, or why she should look at it.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "When the reader starts reading the chapter, she has no idea why there's a figure there, or why she should look at it.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Always start a chapter with text, and if you want the reader to immediately look at a figure, tell the reader to do that the first thing you write in the chapter.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Always start a chapter with text, and if you want the reader to immediately look at a figure, tell the reader to do that the first thing you write in the chapter.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="chapters-missing-figures" tabindex="-1"><a class="header-anchor" href="#chapters-missing-figures" aria-hidden="true">#</a> Chapters missing figures</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The default profile avatar is a picture of a human. Only the head is shown, the human is almost smiling and has blue ring above the head.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The default profile avatar is a picture of a human. Only the head is shown, the human is almost smiling and has blue ring above the head.")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The default profile avatar is shown in Figure 1 below.</p><p${
          _scopeId
        }>👼<br${
          _scopeId
        }> Figure 1: The default avatar profile.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The default profile avatar is shown in Figure 1 below."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("👼"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 1: The default avatar profile.")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>No figures are used in a chapter; the chapter only consists of text.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "No figures are used in a chapter; the chapter only consists of text.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Figures are much easier to understand and faster to interpret than reading a long wall of text. It&#39;s also easier to remember a figure than it is to remember something described in text. It&#39;s also easier to have a discussion about a figure than it is about something only described in text. Each user reading a text creates their own image in their head about what they&#39;re reading, by using a figure all readers get the same picture in their head.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figures are much easier to understand and faster to interpret than reading a long wall of text. It's also easier to remember a figure than it is to remember something described in text. It's also easier to have a discussion about a figure than it is about something only described in text. Each user reading a text creates their own image in their head about what they're reading, by using a figure all readers get the same picture in their head.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Use many figures in your chapters.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Use many figures in your chapters.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="figures-don-t-have-captions" tabindex="-1"><a class="header-anchor" href="#figures-don-t-have-captions" aria-hidden="true">#</a> Figures don&#39;t have captions</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>🐵</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "🐵")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>🐵<br${
          _scopeId
        }> Figure 1: Picture of Peter&#39;s pet DK.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("🐵"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 1: Picture of Peter's pet DK.")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Figures don&#39;t have captions.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figures don't have captions.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Without a descriptive caption, the reader is not always sure what the figure represents, nor why it&#39;s there.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Without a descriptive caption, the reader is not always sure what the figure represents, nor why it's there.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Each figure should always have a descriptive caption that explains what the figure shows, no matter how easy it is to interpret it.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Each figure should always have a descriptive caption that explains what the figure shows, no matter how easy it is to interpret it.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="captions-aren-t-descriptive" tabindex="-1"><a class="header-anchor" href="#captions-aren-t-descriptive" aria-hidden="true">#</a> Captions aren&#39;t descriptive</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>🐵<br${
          _scopeId
        }> Figure 1: A monkey.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("🐵"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 1: A monkey.")
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>🐵<br${
          _scopeId
        }> Figure 1: What students transforms to if they eat too many bananas (a monkey).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("🐵"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 1: What students transforms to if they eat too many bananas (a monkey).")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The caption doesn&#39;t describe the figure good enough.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The caption doesn't describe the figure good enough.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The user doesn&#39;t know why the figure is there, how it&#39;s relevant to the text nor how to interpret the figure.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The user doesn't know why the figure is there, how it's relevant to the text nor how to interpret the figure.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Use a descriptive caption. If the figure consists of components, colors, arrows, etc., describe what each component, color, arrow, etc. represent.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Use a descriptive caption. If the figure consists of components, colors, arrows, etc., describe what each component, color, arrow, etc. represent.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="figures-don-t-have-figure-numbers" tabindex="-1"><a class="header-anchor" href="#figures-don-t-have-figure-numbers" aria-hidden="true">#</a> Figures don&#39;t have figure numbers</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>🐵</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "🐵")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>🐵<br${
          _scopeId
        }> Figure 1: What humans looked like just before we evolved from apes.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("🐵"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 1: What humans looked like just before we evolved from apes.")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Figures don&#39;t have figures number.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figures don't have figures number.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>You can&#39;t refer to a specific figure from the text, and the reader can&#39;t easily send the report to a friend and ask the friend to look at a specific figure in the report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "You can't refer to a specific figure from the text, and the reader can't easily send the report to a friend and ask the friend to look at a specific figure in the report.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Give each figure a unique figure number.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Give each figure a unique figure number.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="figures-aren-t-referred-to-properly" tabindex="-1"><a class="header-anchor" href="#figures-aren-t-referred-to-properly" aria-hidden="true">#</a> Figures aren&#39;t referred to properly</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Some text that doesn&#39;t mention the figure above/below at all...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Some text that doesn't mention the figure above/below at all...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Figure 5 below shows...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figure 5 below shows...")
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The figure below shows...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The figure below shows...")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Figure 5 below shows...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figure 5 below shows...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text refers to figures without using their figure numbers.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text refers to figures without using their figure numbers.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>If you don&#39;t refer to the figure from the main text at all, it&#39;s unclear when and why the reader should look at the figure. If you refer to a figure without using the figure numbers it&#39;s often ambiguous which figure you refer to. For example, <em${
          _scopeId
        }>the figure below</em> could refer to any of all the figures below the text, which are quite many in the beginning of the report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("If you don't refer to the figure from the main text at all, it's unclear when and why the reader should look at the figure. If you refer to a figure without using the figure numbers it's often ambiguous which figure you refer to. For example, "),
            (0,external_vue_.createVNode)("em", null, "the figure below"),
            (0,external_vue_.createTextVNode)(" could refer to any of all the figures below the text, which are quite many in the beginning of the report.")
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Always refer to figures using their figure numbers.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Always refer to figures using their figure numbers.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="the-figure-is-far-away" tabindex="-1"><a class="header-anchor" href="#the-figure-is-far-away" aria-hidden="true">#</a> The figure is far away</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(at the begging of the chapter)</p><p${
          _scopeId
        }>Figure 4 at the end of the chapter shows...</p><p${
          _scopeId
        }>(at the end of the chapter)</p><p${
          _scopeId
        }>[Actual Figure 4]</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "(at the begging of the chapter)"),
          (0,external_vue_.createVNode)("p", null, "Figure 4 at the end of the chapter shows..."),
          (0,external_vue_.createVNode)("p", null, "(at the end of the chapter)"),
          (0,external_vue_.createVNode)("p", null, "[Actual Figure 4]")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(at the begging of the chapter)</p><p${
          _scopeId
        }>Figure 4 below shows...</p><p${
          _scopeId
        }>[Actual Figure 4]</p><p${
          _scopeId
        }>...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "(at the begging of the chapter)"),
          (0,external_vue_.createVNode)("p", null, "Figure 4 below shows..."),
          (0,external_vue_.createVNode)("p", null, "[Actual Figure 4]"),
          (0,external_vue_.createVNode)("p", null, "...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text refers to a figure, and the figure is far away.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text refers to a figure, and the figure is far away.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The reader needs to stop reading, scroll to the figure, interpret the figure, and then scroll back to the text. This is inconvenient, and the reader loses her concentration, making the report very hard to read.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The reader needs to stop reading, scroll to the figure, interpret the figure, and then scroll back to the text. This is inconvenient, and the reader loses her concentration, making the report very hard to read.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Place figures close to the text referring to the figure.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Place figures close to the text referring to the figure.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="putting-the-figures-at-the-end" tabindex="-1"><a class="header-anchor" href="#putting-the-figures-at-the-end" aria-hidden="true">#</a> Putting the figures at the end</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>...</p><p${
          _scopeId
        }>(at the end of the chapter)</p><p${
          _scopeId
        }>Figure 8 below gives an overview of the architecture.</p><p${
          _scopeId
        }>[Actual Figure 8]</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "..."),
          (0,external_vue_.createVNode)("p", null, "(at the end of the chapter)"),
          (0,external_vue_.createVNode)("p", null, "Figure 8 below gives an overview of the architecture."),
          (0,external_vue_.createVNode)("p", null, "[Actual Figure 8]")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>(at the begging of the chapter)</p><p${
          _scopeId
        }>Figure 8 below gives an overview of the architecture.</p><p${
          _scopeId
        }>[Actual Figure 8]</p><p${
          _scopeId
        }>...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "(at the begging of the chapter)"),
          (0,external_vue_.createVNode)("p", null, "Figure 8 below gives an overview of the architecture."),
          (0,external_vue_.createVNode)("p", null, "[Actual Figure 8]"),
          (0,external_vue_.createVNode)("p", null, "...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The figures are put after most of the text, making the reader first read the text, and then look at the figures.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The figures are put after most of the text, making the reader first read the text, and then look at the figures.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Reading text is hard and takes time, interpreting figures is easy and can be done fast.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Reading text is hard and takes time, interpreting figures is easy and can be done fast.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Put figures (often) at the beginning of the text. They give a good understanding of the big picture, and then the reader can read the text to learn the details.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Put figures (often) at the beginning of the text. They give a good understanding of the big picture, and then the reader can read the text to learn the details.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="images-display-text" tabindex="-1"><a class="header-anchor" href="#images-display-text" aria-hidden="true">#</a> Images display text</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Figure 5 below is a screenshoot of the getAllBlogposts() function.</p><p${
          _scopeId
        }><img${
          (0,server_renderer.ssrRenderAttr)("src", code_as_image)
        } alt="Code in image"${
          _scopeId
        }></p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figure 5 below is a screenshoot of the getAllBlogposts() function."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("img", {
              src: code_as_image,
              alt: "Code in image"
            })
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Figure 5 below contains the code for the getAllBlogposts() function.</p><div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>function getAllBlogposts(){
   ...
}
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figure 5 below contains the code for the getAllBlogposts() function."),
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "function getAllBlogposts(){\n   ...\n}\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Code (text in general) is shown as images/screenshots instead of text.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Code (text in general) is shown as images/screenshots instead of text.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Searching does not work, zooming works poorly (images have limited resolution) and copy-pasting the text doesn&#39;t work.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Searching does not work, zooming works poorly (images have limited resolution) and copy-pasting the text doesn't work.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Always display code (and text) as text, not as images.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Always display code (and text) as text, not as images.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="use-contractions" tabindex="-1"><a class="header-anchor" href="#use-contractions" aria-hidden="true">#</a> Use contractions</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>If the client doesn&#39;t receive back a response within 5 seconds...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "If the client doesn't receive back a response within 5 seconds...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>If the client does not receive back a response within 5 seconds...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "If the client does not receive back a response within 5 seconds...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Contractions (didn&#39;t, can&#39;t, won&#39;t, etc.) are used.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Contractions (didn't, can't, won't, etc.) are used.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Contractions should not be used in reports.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Contractions should not be used in reports.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Never use contractions in a report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Never use contractions in a report.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="use-i-we-etc" tabindex="-1"><a class="header-anchor" href="#use-i-we-etc" aria-hidden="true">#</a> Use I, we, etc.</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>We use the database MySQL to...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "We use the database MySQL to...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>A MySQL database is used to...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "A MySQL database is used to...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Words such as I, we, us, our, etc. are used.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Words such as I, we, us, our, etc. are used.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The reader doesn&#39;t know who <em${
          _scopeId
        }>I</em>/<em${
          _scopeId
        }>we</em>/etc. are. Also, the report should often describe a solution/product, and that should be independent of who created it, so there should be no need to use I/we in a report unless you express you own opinions/decisions. Also, if you write <i${
          _scopeId
        }>This application is developed and maintained by me.</i>, then you need to update the report if you give away the project to someone else or if you invite someone else to work on the project with you.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The reader doesn't know who "),
            (0,external_vue_.createVNode)("em", null, "I"),
            (0,external_vue_.createTextVNode)("/"),
            (0,external_vue_.createVNode)("em", null, "we"),
            (0,external_vue_.createTextVNode)("/etc. are. Also, the report should often describe a solution/product, and that should be independent of who created it, so there should be no need to use I/we in a report unless you express you own opinions/decisions. Also, if you write "),
            (0,external_vue_.createVNode)("i", null, "This application is developed and maintained by me."),
            (0,external_vue_.createTextVNode)(", then you need to update the report if you give away the project to someone else or if you invite someone else to work on the project with you.")
          ])
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Avoid using I, we, etc. unless you are expressing your own opinions/decisions.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Avoid using I, we, etc. unless you are expressing your own opinions/decisions.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="don-t-properly-mark-up-the-text" tabindex="-1"><a class="header-anchor" href="#don-t-properly-mark-up-the-text" aria-hidden="true">#</a> Don&#39;t properly mark up the text</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>A bold paragraph is used as a header.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "A bold paragraph is used as a header.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The header won&#39;t appear in the table of content, the reader gets unsure about whether the bold paragraph is a paragraph or a header. You also risk ending up with the bold paragraph at the end of one page, and the text belonging to it on the top of next page.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The header won't appear in the table of content, the reader gets unsure about whether the bold paragraph is a paragraph or a header. You also risk ending up with the bold paragraph at the end of one page, and the text belonging to it on the top of next page.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Properly mark up the text: mark headers as headers, paragraphs as paragraphs, etc.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Properly mark up the text: mark headers as headers, paragraphs as paragraphs, etc.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="inconsistent-usage-of-white-space" tabindex="-1"><a class="header-anchor" href="#inconsistent-usage-of-white-space" aria-hidden="true">#</a> Inconsistent usage of white-space</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>First paragraph...<br${
          _scopeId
        }><br${
          _scopeId
        }>Second paragraph...<br${
          _scopeId
        }>Third paragraph...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("First paragraph..."),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)("Second paragraph..."),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)("Third paragraph...")
          ])
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>First paragraph...<br${
          _scopeId
        }><br${
          _scopeId
        }>Second paragraph...<br${
          _scopeId
        }><br${
          _scopeId
        }>Third paragraph...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("First paragraph..."),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)("Second paragraph..."),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)("Third paragraph...")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Different parts of the report use white-space differently around headers, lists, paragraphs, tables, figures, etc.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Different parts of the report use white-space differently around headers, lists, paragraphs, tables, figures, etc.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>It&#39;s hard to see the structure of the report when white-space is used inconsistently.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "It's hard to see the structure of the report when white-space is used inconsistently.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Be consistent with how you use white-space throughout the entire report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Be consistent with how you use white-space throughout the entire report.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="describe-things-where-they-shouldn-t-be-described" tabindex="-1"><a class="header-anchor" href="#describe-things-where-they-shouldn-t-be-described" aria-hidden="true">#</a> Describe things where they shouldn&#39;t be described</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The database chapter describes parts of the web application (e.g. how the web application communicates with the database, or how the source code in the web application that communicates with the database has been structured, etc.).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The database chapter describes parts of the web application (e.g. how the web application communicates with the database, or how the source code in the web application that communicates with the database has been structured, etc.).")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The database chapter only describes the database, the web application is not mentioned at all since the database doesn&#39;t use the web application.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The database chapter only describes the database, the web application is not mentioned at all since the database doesn't use the web application.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>One thing is described in a chapter where it doesn&#39;t make sense to describe it.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "One thing is described in a chapter where it doesn't make sense to describe it.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>When the reader is looking for some specific information, she won&#39;t find it in the chapter she expects to find it in. And when she wants to only learn about a specific thing by reading the corresponding chapter, she&#39;s also forced to read the unrelated thing you describe there.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "When the reader is looking for some specific information, she won't find it in the chapter she expects to find it in. And when she wants to only learn about a specific thing by reading the corresponding chapter, she's also forced to read the unrelated thing you describe there.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In a chapter, only describe the thing the chapter is about.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In a chapter, only describe the thing the chapter is about.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="spelling-names-wrong" tabindex="-1"><a class="header-anchor" href="#spelling-names-wrong" aria-hidden="true">#</a> Spelling names wrong</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The graphical user interface is implemented in html.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The graphical user interface is implemented in html.")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The graphical user interface is implemented in HTML.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The graphical user interface is implemented in HTML.")
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The framework express is used to implement the web application.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The framework express is used to implement the web application.")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The framework Express is used to implement the web application.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The framework Express is used to implement the web application.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The spelling of names (languages, frameworks, libraries, etc.) are wrong.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The spelling of names (languages, frameworks, libraries, etc.) are wrong.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>It&#39;s harder for the reader to read the text, and the reader is unsure what you refer to.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "It's harder for the reader to read the text, and the reader is unsure what you refer to.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Use the correct spelling of names. Feel free to name your own things whatever you want, but be sure to use the correct names others have given their solutions.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Use the correct spelling of names. Feel free to name your own things whatever you want, but be sure to use the correct names others have given their solutions.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="describing-others-work" tabindex="-1"><a class="header-anchor" href="#describing-others-work" aria-hidden="true">#</a> Describing others work</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The graphical user interface is implemented in HTML. HTML is a markup language that contains the tags &lt;a&gt;, &lt;br&gt;, &lt;p&gt;, &lt;link&gt;...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The graphical user interface is implemented in HTML. HTML is a markup language that contains the tags <a>, <br>, <p>, <link>...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The graphical user interface is implemented in HTML<sup${
          _scopeId
        }><a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer"${
          _scopeId
        }>1`)
        _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
        _push(`</a></sup>. HTML is a markup language used to define what different type of text represents, such as headers and paragraphs.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The graphical user interface is implemented in HTML"),
            (0,external_vue_.createVNode)("sup", null, [
              (0,external_vue_.createVNode)("a", {
                href: "https://html.spec.whatwg.org/",
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                (0,external_vue_.createTextVNode)("1"),
                (0,external_vue_.createVNode)(_component_OutboundLink)
              ])
            ]),
            (0,external_vue_.createTextVNode)(". HTML is a markup language used to define what different type of text represents, such as headers and paragraphs.")
          ])
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The web browser communicates with the web application by sending HTTP requests to it. HTTP is a protocol built on top of TCP, which is a transfer protocol for sending small packages (messages) from one computer to another. ...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The web browser communicates with the web application by sending HTTP requests to it. HTTP is a protocol built on top of TCP, which is a transfer protocol for sending small packages (messages) from one computer to another. ...")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The web browser uses HTTP<sup${
          _scopeId
        }><a href="https://tools.ietf.org/html/rfc2616" target="_blank" rel="noopener noreferrer"${
          _scopeId
        }>1`)
        _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
        _push(`</a></sup> to communicate with the web application. In HTTP, the client (the web browser) simply sends an HTTP request to the server (the web application), telling the server what it wants it to do, then the server do that and sends back an HTTP response.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The web browser uses HTTP"),
            (0,external_vue_.createVNode)("sup", null, [
              (0,external_vue_.createVNode)("a", {
                href: "https://tools.ietf.org/html/rfc2616",
                target: "_blank",
                rel: "noopener noreferrer"
              }, [
                (0,external_vue_.createTextVNode)("1"),
                (0,external_vue_.createVNode)(_component_OutboundLink)
              ])
            ]),
            (0,external_vue_.createTextVNode)(" to communicate with the web application. In HTTP, the client (the web browser) simply sends an HTTP request to the server (the web application), telling the server what it wants it to do, then the server do that and sends back an HTTP response.")
          ])
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Techniques used to implement the solution (for example HTTP, HTML, CSS, Express, etc.) has been described in detail.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Techniques used to implement the solution (for example HTTP, HTML, CSS, Express, etc.) has been described in detail.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The report should be about the solution you have created, not details about the techniques you have used to implement it. Many readers do probably already know these techniques, and reading about them is no fun, and you describing them in vain wastes your time.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The report should be about the solution you have created, not details about the techniques you have used to implement it. Many readers do probably already know these techniques, and reading about them is no fun, and you describing them in vain wastes your time.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Only describe what&#39;s unique to your solution. You can describe the techniques you are using (HTTP, HTML, etc.) very short and briefly, but for more information about these, provide references to their specifications/documentations and let the reader read more about them there instead. No use in you writing a tutorial about how other techniques work.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Only describe what's unique to your solution. You can describe the techniques you are using (HTTP, HTML, etc.) very short and briefly, but for more information about these, provide references to their specifications/documentations and let the reader read more about them there instead. No use in you writing a tutorial about how other techniques work.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="figures-are-referenced-after-the-figure" tabindex="-1"><a class="header-anchor" href="#figures-are-referenced-after-the-figure" aria-hidden="true">#</a> Figures are referenced after the figure</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>[...]</p><p${
          _scopeId
        }>🐵🐵<br${
          _scopeId
        }> Figure 5: Picture of two twins (Bob to the left, David to the right).</p><p${
          _scopeId
        }>Figure 5 above shows an example of two twins.</p><p${
          _scopeId
        }>[...]</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "[...]"),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("🐵🐵"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 5: Picture of two twins (Bob to the left, David to the right).")
          ]),
          (0,external_vue_.createVNode)("p", null, "Figure 5 above shows an example of two twins."),
          (0,external_vue_.createVNode)("p", null, "[...]")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>[...]</p><p${
          _scopeId
        }>Figure 5 below shows an example of two twins.</p><p${
          _scopeId
        }>🐵🐵<br${
          _scopeId
        }> Figure 5: Picture of two twins (Bob to the left, David to the right).</p><p${
          _scopeId
        }>[...]</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "[...]"),
          (0,external_vue_.createVNode)("p", null, "Figure 5 below shows an example of two twins."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("🐵🐵"),
            (0,external_vue_.createVNode)("br"),
            (0,external_vue_.createTextVNode)(" Figure 5: Picture of two twins (Bob to the left, David to the right).")
          ]),
          (0,external_vue_.createVNode)("p", null, "[...]")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>First a figure is shown to the reader, and then the reader is instructed to look at the figure.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "First a figure is shown to the reader, and then the reader is instructed to look at the figure.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Humans read text from top to bottom. If the text below the figure refers to the figure, the reader will look at the figure before she has been instructed to look at it, and she has no idea why she looks at the figure. Then when she gets to the text below the figure, she needs to go back up to the figure again, breaking the readers &quot;from top to bottom&quot; reading flow.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Humans read text from top to bottom. If the text below the figure refers to the figure, the reader will look at the figure before she has been instructed to look at it, and she has no idea why she looks at the figure. Then when she gets to the text below the figure, she needs to go back up to the figure again, breaking the readers \"from top to bottom\" reading flow.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The text instructing the reader to look at the figure should always be placed above the figure.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The text instructing the reader to look at the figure should always be placed above the figure.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="chapter-titles-ending-with-colon" tabindex="-1"><a class="header-anchor" href="#chapter-titles-ending-with-colon" aria-hidden="true">#</a> Chapter titles ending with colon</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><span style="${
          (0,server_renderer.ssrRenderStyle)({"font-weight":"bold","font-size":"150%"})
        }"${
          _scopeId
        }>Web Application:</span></p><p${
          _scopeId
        }>The web application...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("span", { style: {"font-weight":"bold","font-size":"150%"} }, "Web Application:")
          ]),
          (0,external_vue_.createVNode)("p", null, "The web application...")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }><span style="${
          (0,server_renderer.ssrRenderStyle)({"font-weight":"bold","font-size":"150%"})
        }"${
          _scopeId
        }>Web Application</span></p><p${
          _scopeId
        }>The web application...</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("span", { style: {"font-weight":"bold","font-size":"150%"} }, "Web Application")
          ]),
          (0,external_vue_.createVNode)("p", null, "The web application...")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Colon is written at the end of chapter titles.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Colon is written at the end of chapter titles.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The standard way of writing headers is not followed, making it harder to read the text.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The standard way of writing headers is not followed, making it harder to read the text.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Write headers the way headers are usually written; don&#39;t end chapter titles with colon.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Write headers the way headers are usually written; don't end chapter titles with colon.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="paragraphs-consist-of-a-single-sentence" tabindex="-1"><a class="header-anchor" href="#paragraphs-consist-of-a-single-sentence" aria-hidden="true">#</a> Paragraphs consist of a single sentence</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Users can create accounts on the website.</p><p${
          _scopeId
        }>The primary color on the website is yellow.</p><p${
          _scopeId
        }>Admins can see things ordinary users can&#39;t see.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Users can create accounts on the website."),
          (0,external_vue_.createVNode)("p", null, "The primary color on the website is yellow."),
          (0,external_vue_.createVNode)("p", null, "Admins can see things ordinary users can't see.")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Users can create accounts on the website. After a user has logged in to an account, the user can create blogposts belonging to that account. Newly created blogposts are not shown on the website by default, but must first be read and approved by an admin.</p><p${
          _scopeId
        }>For the graphical user interface the primary color is yellow. That color was chosen because it reminds the user of the sun and gives the user a warm and nice feeling.</p><p${
          _scopeId
        }>Admins can do some things ordinary users can&#39;t do on the website. They see and can use links and forms through which they get extra functionality, such as Delete button next to each blogpost they can click on to delete blogposts.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Users can create accounts on the website. After a user has logged in to an account, the user can create blogposts belonging to that account. Newly created blogposts are not shown on the website by default, but must first be read and approved by an admin."),
          (0,external_vue_.createVNode)("p", null, "For the graphical user interface the primary color is yellow. That color was chosen because it reminds the user of the sun and gives the user a warm and nice feeling."),
          (0,external_vue_.createVNode)("p", null, "Admins can do some things ordinary users can't do on the website. They see and can use links and forms through which they get extra functionality, such as Delete button next to each blogpost they can click on to delete blogposts.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Many paragraphs consist of a single sentence.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Many paragraphs consist of a single sentence.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Paragraphs consisting of a single sentence are usually no good paragraphs. Compare to a sentence consisting of a single word, or a list consisting of a single list item. Most paragraphs should consist of multiple (related) sentences, otherwise your report won&#39;t have a good structure.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Paragraphs consisting of a single sentence are usually no good paragraphs. Compare to a sentence consisting of a single word, or a list consisting of a single list item. Most paragraphs should consist of multiple (related) sentences, otherwise your report won't have a good structure.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Write headers the way headers are usually written; don&#39;t end chapter titles with colon.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Write headers the way headers are usually written; don't end chapter titles with colon.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="images-missing-border" tabindex="-1"><a class="header-anchor" href="#images-missing-border" aria-hidden="true">#</a> Images missing border</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", screenshot)
        } alt="Screenshot of the website."${
          _scopeId
        }><p${
          _scopeId
        }>Is this text part of the figure? Where does the figure end?</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: screenshot,
            alt: "Screenshot of the website."
          }),
          (0,external_vue_.createVNode)("p", null, "Is this text part of the figure? Where does the figure end?")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          (0,server_renderer.ssrRenderAttr)("src", screenshot)
        } alt="Screenshot of the website." style="${
          (0,server_renderer.ssrRenderStyle)({"border":"3px solid gray"})
        }"${
          _scopeId
        }><p${
          _scopeId
        }>Is this text part of the figure? Obviously not.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("img", {
            src: screenshot,
            alt: "Screenshot of the website.",
            style: {"border":"3px solid gray"}
          }),
          (0,external_vue_.createVNode)("p", null, "Is this text part of the figure? Obviously not.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Much of the image has the same color as the background of the report.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Much of the image has the same color as the background of the report.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>It&#39;s hard to see where the image starts and ends.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "It's hard to see where the image starts and ends.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Give images consisting of the reports background color a border.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Give images consisting of the reports background color a border.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="wall-of-text" tabindex="-1"><a class="header-anchor" href="#wall-of-text" aria-hidden="true">#</a> Wall of text</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ReportMistake, null, {
    "example-1-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>What happens when the user use the website is that the user first starts the web browser, then the web browser sends an HTTP request to the server. When the server receives the HTTP request, it carries out the request and generates and send back an HTTP response to the web browser. The HTTP response contains a webpage the web browser then displays.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "What happens when the user use the website is that the user first starts the web browser, then the web browser sends an HTTP request to the server. When the server receives the HTTP request, it carries out the request and generates and send back an HTTP response to the web browser. The HTTP response contains a webpage the web browser then displays.")
        ]
      }
    }),
    "example-1-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>What happens when the user use the website is that:</p><ol${
          _scopeId
        }><li${
          _scopeId
        }>The user starts the web browser.</li><li${
          _scopeId
        }>The web browser sends an HTTP request to the server.</li><li${
          _scopeId
        }>The server receives and carries out the HTTP request.</li><li${
          _scopeId
        }>The server generates and sends back an HTTP response to the web browser.</li><li${
          _scopeId
        }>The web browser displays the webpage in the HTTP response to the user.</li></ol>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "What happens when the user use the website is that:"),
          (0,external_vue_.createVNode)("ol", null, [
            (0,external_vue_.createVNode)("li", null, "The user starts the web browser."),
            (0,external_vue_.createVNode)("li", null, "The web browser sends an HTTP request to the server."),
            (0,external_vue_.createVNode)("li", null, "The server receives and carries out the HTTP request."),
            (0,external_vue_.createVNode)("li", null, "The server generates and sends back an HTTP response to the web browser."),
            (0,external_vue_.createVNode)("li", null, "The web browser displays the webpage in the HTTP response to the user.")
          ])
        ]
      }
    }),
    "example-2-bad": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>What happens when the user use the website is that the user first starts the web browser, then the web browser sends an HTTP request to the server. When the server receives the HTTP request, it carries out the request and generates and send back an HTTP response to the web browser. The HTTP response contains a webpage the web browser then displays.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "What happens when the user use the website is that the user first starts the web browser, then the web browser sends an HTTP request to the server. When the server receives the HTTP request, it carries out the request and generates and send back an HTTP response to the web browser. The HTTP response contains a webpage the web browser then displays.")
        ]
      }
    }),
    "example-2-good": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Figure 8 below shows what happens when the user uses the website.</p>`)
        _push((0,server_renderer.ssrRenderComponent)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant User\n\tparticipant Web Browser\n\tparticipant Server\n\tUser->>Web Browser: Start\n\tactivate User\n\tactivate Web Browser\n\tWeb Browser->>Server: HTTP request\n\tactivate Server\n\tServer->>Server: Carry out request\n\tServer-->>Web Browser: HTTP response\n\tdeactivate Server\n\tWeb Browser-->>User: Display webpage\n\tdeactivate Web Browser\n\tdeactivate User\n" }, null, _parent, _scopeId))
        _push(`<p${_scopeId}>Figure 8: What happens when the user uses the website.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Figure 8 below shows what happens when the user uses the website."),
          (0,external_vue_.createVNode)(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n\tparticipant User\n\tparticipant Web Browser\n\tparticipant Server\n\tUser->>Web Browser: Start\n\tactivate User\n\tactivate Web Browser\n\tWeb Browser->>Server: HTTP request\n\tactivate Server\n\tServer->>Server: Carry out request\n\tServer-->>Web Browser: HTTP response\n\tdeactivate Server\n\tWeb Browser-->>User: Display webpage\n\tdeactivate Web Browser\n\tdeactivate User\n" }),
          (0,external_vue_.createVNode)("p", null, "Figure 8: What happens when the user uses the website.")
        ]
      }
    }),
    mistake: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The student tries to explain everything using only text, often in a gigantic paragraph.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The student tries to explain everything using only text, often in a gigantic paragraph.")
        ]
      }
    }),
    problem: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Of all the different ways one can describe how something works (text in paragraphs, lists, figures, tables, etc.), text in paragraphs is the hardest and slowest one to read.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Of all the different ways one can describe how something works (text in paragraphs, lists, figures, tables, etc.), text in paragraphs is the hardest and slowest one to read.")
        ]
      }
    }),
    solution: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Try to explain as much as possible using lists, tables, figures, etc. Use paragraphs as a last resort.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Try to explain as much as possible using lists, tables, figures, etc. Use paragraphs as a last resort.")
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/report-writing/index.html.vue?vue&type=template&id=ca73dfe8

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/report-writing/index.html.vue

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

/***/ 9501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0157d02a",
  "path": "/lectures/report-writing/",
  "title": "Report Writing",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Report Writing"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What is a project?",
      "slug": "what-is-a-project",
      "children": [
        {
          "level": 3,
          "title": "The problem",
          "slug": "the-problem",
          "children": []
        },
        {
          "level": 3,
          "title": "The solution",
          "slug": "the-solution",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Report structure",
      "slug": "report-structure",
      "children": [
        {
          "level": 3,
          "title": "Chapter 1: Introduction",
          "slug": "chapter-1-introduction",
          "children": []
        },
        {
          "level": 3,
          "title": "Chapter 2: Solution",
          "slug": "chapter-2-solution",
          "children": []
        },
        {
          "level": 3,
          "title": "Database",
          "slug": "database",
          "children": []
        },
        {
          "level": 3,
          "title": "Web Application",
          "slug": "web-application",
          "children": []
        },
        {
          "level": 3,
          "title": "Other chapters",
          "slug": "other-chapters",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Readers are stupid!",
      "slug": "readers-are-stupid",
      "children": []
    },
    {
      "level": 2,
      "title": "Be explicit",
      "slug": "be-explicit",
      "children": []
    },
    {
      "level": 2,
      "title": "Common student mistakes",
      "slug": "common-student-mistakes",
      "children": [
        {
          "level": 3,
          "title": "Non unique solution name",
          "slug": "non-unique-solution-name",
          "children": []
        },
        {
          "level": 3,
          "title": "Weird solution name",
          "slug": "weird-solution-name",
          "children": []
        },
        {
          "level": 3,
          "title": "Components used before defined",
          "slug": "components-used-before-defined",
          "children": []
        },
        {
          "level": 3,
          "title": "Ambiguous explanations",
          "slug": "ambiguous-explanations",
          "children": []
        },
        {
          "level": 3,
          "title": "Inconsistent terms",
          "slug": "inconsistent-terms",
          "children": []
        },
        {
          "level": 3,
          "title": "Making text stand out",
          "slug": "making-text-stand-out",
          "children": []
        },
        {
          "level": 3,
          "title": "Acronyms without explanations",
          "slug": "acronyms-without-explanations",
          "children": []
        },
        {
          "level": 3,
          "title": "Acronyms are introduced wrong",
          "slug": "acronyms-are-introduced-wrong",
          "children": []
        },
        {
          "level": 3,
          "title": "Repeating information",
          "slug": "repeating-information",
          "children": []
        },
        {
          "level": 3,
          "title": "Chapters start with figures",
          "slug": "chapters-start-with-figures",
          "children": []
        },
        {
          "level": 3,
          "title": "Chapters missing figures",
          "slug": "chapters-missing-figures",
          "children": []
        },
        {
          "level": 3,
          "title": "Figures don't have captions",
          "slug": "figures-don-t-have-captions",
          "children": []
        },
        {
          "level": 3,
          "title": "Captions aren't descriptive",
          "slug": "captions-aren-t-descriptive",
          "children": []
        },
        {
          "level": 3,
          "title": "Figures don't have figure numbers",
          "slug": "figures-don-t-have-figure-numbers",
          "children": []
        },
        {
          "level": 3,
          "title": "Figures aren't referred to properly",
          "slug": "figures-aren-t-referred-to-properly",
          "children": []
        },
        {
          "level": 3,
          "title": "The figure is far away",
          "slug": "the-figure-is-far-away",
          "children": []
        },
        {
          "level": 3,
          "title": "Putting the figures at the end",
          "slug": "putting-the-figures-at-the-end",
          "children": []
        },
        {
          "level": 3,
          "title": "Images display text",
          "slug": "images-display-text",
          "children": []
        },
        {
          "level": 3,
          "title": "Use contractions",
          "slug": "use-contractions",
          "children": []
        },
        {
          "level": 3,
          "title": "Use I, we, etc.",
          "slug": "use-i-we-etc",
          "children": []
        },
        {
          "level": 3,
          "title": "Don't properly mark up the text",
          "slug": "don-t-properly-mark-up-the-text",
          "children": []
        },
        {
          "level": 3,
          "title": "Inconsistent usage of white-space",
          "slug": "inconsistent-usage-of-white-space",
          "children": []
        },
        {
          "level": 3,
          "title": "Describe things where they shouldn't be described",
          "slug": "describe-things-where-they-shouldn-t-be-described",
          "children": []
        },
        {
          "level": 3,
          "title": "Spelling names wrong",
          "slug": "spelling-names-wrong",
          "children": []
        },
        {
          "level": 3,
          "title": "Describing others work",
          "slug": "describing-others-work",
          "children": []
        },
        {
          "level": 3,
          "title": "Figures are referenced after the figure",
          "slug": "figures-are-referenced-after-the-figure",
          "children": []
        },
        {
          "level": 3,
          "title": "Chapter titles ending with colon",
          "slug": "chapter-titles-ending-with-colon",
          "children": []
        },
        {
          "level": 3,
          "title": "Paragraphs consist of a single sentence",
          "slug": "paragraphs-consist-of-a-single-sentence",
          "children": []
        },
        {
          "level": 3,
          "title": "Images missing border",
          "slug": "images-missing-border",
          "children": []
        },
        {
          "level": 3,
          "title": "Wall of text",
          "slug": "wall-of-text",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/report-writing/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ }),

/***/ 6732:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAACKCAYAAADMtgMFAAANW0lEQVR4nO3dsbGrOhCAYTqhEupwFxRBC5RABeTkxE6dkpIS7wveLHctS4BtfFbH5/fMN3PnYMQixAKS8C2KohAAwCb3AAAgd+4BAEDu3AMAgNy5BwAAuXMPAABy5x4AAOTOPQAAyJ17AACQO/cAACB37gEAQO7cAwCA3LkHAAC5cw8AAHLnHgAA5M49AADInXsAAJA79wAAIHfuAQBA7twDAIDcuQcAALlzDwAAcuceAADk7twCq6qSruuk73up69p75952uVyk73upqso9lm/S9/0d21a2lr2jruuHsr3r4a9ommY9jl3XvXQ+lWW5HsO2bX96H84rbBgGWZZF5nkW/TRN436Q3rEsi4iIzPPsHstvcblcdhty3/cyTdPaTmzS2lqmy/fEkmtd1zKO43pMRcS9rr5d27ayLItM07QeEz0Gt9tNyrJ8qpxlWeR6vf7eRNn3vYiI1HUtVVWtjbHrOveDtRf31h3jX0+Ue/UTM46jiMihk0ATYuzuLrVsGIa7i7GedEo/8zxHL9RN05AoA1VVnX6Xre0glgOqqpJpmmRZFrlcLpvllGW5nod73/2g9wvRHVmWZf3b5XKRrusOXzG86Cf1ePfXH7336ifWFvRz5CKpiS12gm4ts9u53W4Px0xPrGVZHo5dXdckysDZdaIXo2EYkt/RG6ppmjbLats2epx/2HmV4rwjL3k2Efw1z9ZP13XrOnsnQFG8nihtbLF2p084sYRNonx0Zp3YG6e9GyU9Tlt3svqdX58oM9mRl5Aoz62feZ7ler2u6+09Kn0qUdrHaxLlvjPrRO8Ax3Hc/W5VVSKy3bWVSX55r0L6vl8b9DzPaz9H27br8rCfy/aHxPrAUuvpY/DRkVA7yhn2Venf9TOO413Z4QjpVuexdjP0fS9d10WTQ7jPWl5Zluv+vtpVYWcaxMRit3XZtu3DdvfqJ1UP8zzf9SntnSyfSpTDMKzLX3n0rqrqrh3utTd7HFNsvdq/2XVjx+Ld2Oyx1vNAt63tUvsTtb5j52XYVquqWs+V2HE7OuCi/c2p/dDj9WsT5TAMcrvd1h21nerDMEjbtned7loRenDsyKatpHC9pmnkdrvJNE13nfWp/o/L5bKWbTv4p2laG2HY8a9l3243adtW6rq+uzOKHaSyLO8uErYuwhG9qqruGqNuJ1wv1qe2dwxi27f7buvJxmzrM+xU36ufWCyaTPXfWu7Wif+JRGn7KGOx7iVKrVNtz9qW5nmOXgTtiKz9flhvWrYddW/bdv2ObQOp2SLPxqbf123YWSlaV2HMdmBMy9SLYGy74fHRz9GBFz3PUsf51ydKtXVrrLfWIo9XDNshv7XMHrCwoYdJxY64h3PzRB7vcFLbDxtauG9lWSZHZTVJ2MQca+jhepoYjjyy2H2y2ynLcj0RwkdOG7Pd38vlssYU1ude/diy7fpapiaD1HpnJEr7JDOOo0zTJOM4Ji84W4lSj931er07dvo4GV5QtKzw73ryX6/Xh23YboFw32wfb5hoXo3NtoOyLNfYjtaJHgt9WgjXsftgj/uRNmzbcayu7P45z6B5v5C9PoStk+3IstjVNZUM9OQK7za1cdiR+b3tb+2bTVKx9TS+2BzA1Hq2wR+p91Qi2Ys5dieeuqrv1Y+NPWzo9u762X3YW2ZjC6cH6Uhq3/fRu9lUUrB/j62nicruT6qutxLPXlLSY2HLfCe28PzRi9ozMaXabDil6JW+zr0brWmaojcdP+z9Qj6dKGPLYifR1t2rNr7wYG9tY2vfUola2Ufio3X1bCNLJbe9mGP7mlpnr37UNE0Pd4727ih1d/eJR++yLNfEEXskTdWzvWOLbc/eCer+6D6emShj23klNntRDo9f2Bd6JFHqsQi7lGwiPitR6tjHPM8yDIN3kpTijEJySZRbE4nLspS+7x9Omq1tpPZtq8vANsRYLGcmSv2+fSSyj942cdmYbb+ZSt397e1nUfy7QIUDFXZAJdWf/KnBnKL4d2EIL46pet6a/G7309ZHajK0XsRi3Sh7x9k+vup2XonNdkNpOxmGIXrROtpvq5/U2zGvTOaPPWVpvK++7vgB7xeSS6K0o7RHY9/aRmrfbKPaG6kLYzkzURbFv4ErffzU5BAmJlu2HcHeGyHf28+i+PemTJh8bTyp6R+fTJT25Lbxp+pZP6ntperD9vvZgY7UK3pHjnO4nVdj08Ga8LPVPlLl931/l3j1uKbGD4624dQ5oYO+e/v9Q94vJJdE+crVbGsbqX3besRXP3FHqftsBzNSV+Ajd8Gv1E9R/P+aZ2q5PSaxvuZPJkp74TzyeJjqV9477nqxGoZhPQ5bI76v3FG+Gptd3nXd3awIe1F8pu01TXM3g8NeBM/uoyyKfxc857nO7xeSS6K0DSw1vaKqqrtEsrWNrX3ba7h2WsbRunq2kelj39Gr7V6/alEUD/W2Vz86xWlru3oXEutf+2SitCfzkTvK2IBIWDf6sXeKdvrPEc/0Uep2XoktVW+xsvb6VGPH307D0uWfSJRa5tHZIB/yfiGvJsq9u5ytZamTSJNBqtP7er3eJYO9RLA3gpxKErF+wr26erWPMpwusnecUjHXdf2wbK9+wnmaMVuTvz+VKG3fYTiX88iod+yuXBNMbIrZPM+H+9L2RrBj08Reie12u0Uvinre2XNkL1GGU4PCY2vvoPXDPMrA3lSZ2JwyOzIpEr8D3FqW6ty2BzxsJDrPzv5NT6bUQUrtm52TGJa5dfXfqqtnuw7swI396B1OOJfQfn8cx4fRy9gI8Vb9aPfC3h1t2D9ql6Wmc+0ts+0jPInDthVerLYSVWoOrJ26Fa5jX0zQjw6YXa/Xh4uM3f7WnMh3Y9P6C88DHam351XscT+Md5qmaHsK27Ju9+hPLMbm9sbOi1+bKKuqenjTQOev2e/ZW3RtQNM03R0c+wjZtu1dB/SyLOvJUtf13Ulgl9mGY38ezU4zCPfB3u1ogtF+vnDfbrfbQye+xhm+GROeAHvl9X3/8FbNkT6ZqqqiJ6qtH9u4bee+nX+YehskVj/DMDxsMzYKqvscJnNtI+FIqib2uq6Ty7RM+yZJbF/0mMReXbXrzvP8EHfq7Rdts2Ed6YyKrU+qj1TjDQeBUnenz8Smx0rfxrHfj13cdJmtS33snqbpbsDKzlcNt6uJ+Jl3vbfmDu89sf6KRJkaPY19V99Htg0ztl7qnVltZEe2V5alNE2zLt96LIq9N5vat1RfjX3XO7atvfKObiuMW3+EQhu0apomecerMduR7q1H97B+UscglihT7SNFE2Vq2dEyt7pS9uLW2O1+px4jdSBnmqb1V7wtTS5bAx62nR55XD0aW9u2UlWVlJF3tGPfL8sy+psFur2w3aTuGLXbg18Pgrsj/TaZ9O18raMJwSZFe1zs377NkW4Zrb+9t2700fvIz/Z9kH+l4nl6ld0aSNEG5jxa+LVs313qOzpw8u4Umt+IXziHO02CqTmMtiFm8mbD17GzNlKjy5osUn2UGbya91Fd123+nzlH22bTNN/xf+bg59kBD/tmjB0UcLwC/wl24DD2f/eEA0rhoN08z5u/dPQt+F8Y4SoctNJGRIL8WeEAVNd10Tv9rUEs733AJvcAACB37gEAQO7cAwCA3LkHAAC5cw8AAHLnHgAA5M49AADInXsAAJA79wAAIHfuAQBA7twDAIDcuQcAALlzDwAAcuceAADkzj0AAMidewAAkDv3AAAgd+4BAEDu3AMAgNy5BwAAuXMPAABy5x4AAOTOPQAAyJ17AACQO/cAACB37gEAQO7cAwCA3LkHIEVRSNM0crvdpGmau7+XZSnjOMo4jlKW5aF1AOBk7gFIURRiP/bvfd+vf+/7/tA6AHAy9wCkKApZlkVERJZluft713VrMuy67tA6AHAy9wCkKAqpqkr6vpfL5fKwrG3bhyS5tw4AnMg9AADInXsAAJA79wAAIHfuAQBA7twDAIDcuQcAALlzDwAAcuceAADkzj0AAMidewAAkDv3AAAgd+4BAEDu3AMAgNy5BwAAuXMPAABy5x4AAOTOPQAAyN3rK+svjHddx6+MA/hmr6+siXKaJhERud1uD/9TIgB8gXMK0v8tcRxH7x0CgLOdU1Bd1/yPiAC+1TkFaaLk/9gG8IXOKYhECeCLnVMQj94Avtg5BV0ul3XkO4OdAoAznVfYsiw8egP4RucV1ratiIj0fe+9UwBwpnMLrOtarterzPMs4zhKXdfeOwgA7zq/0KZpZBxH7i4BfIvzCivLUqZpkmmapGka7x0DgLOcV9j1ehURkaqqvHcKAM50XmEiIvM8e+8QAJztnIJ0wvk0Td47BABnO6cgXmEE8MXOKYhECeCLnVMQiRLAFzunIH4UA8AXO6cgnRrEL5wD+EKvr8z/mQPgj3h9Zf4XRgB/hHsAAJA79wAAIHfuAQBA7twDAIDcuQcAALlzDwAAcuceAADkzj0AAMidewAAkDv3AAAgd+4BAEDu3AMAgNy5BwAAuXMPAABy5x4AAOTOPQAAyJ17AACQO/cAACB37gEAQO7cAwCArP0HWli+LbCQG5wAAAAASUVORK5CYII=";

/***/ }),

/***/ 9400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/screenshot.d809c712.png";

/***/ })

};
;
//# sourceMappingURL=8710.app.js.map