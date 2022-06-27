"use strict";
exports.id = 9735;
exports.ids = [9735];
exports.modules = {

/***/ 4563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2022_06_13_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2022-06-13.html.vue?vue&type=template&id=1ffd98c8



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExamQuestion = (0,external_vue_.resolveComponent)("ExamQuestion")

  _push(`<!--[--><h1 id="exam-2022-06-13" tabindex="-1"><a class="header-anchor" href="#exam-2022-06-13" aria-hidden="true">#</a> Exam 2022-06-13</h1><p>Here you find sample answers and marking guidelines to the questions on the exam 2022-06-13.</p><hr><p>Start by reading through all questions.</p><p>Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required</li><li>For grade 4, 60% of max score (18 points) is required</li><li>For grade 5, 80% of max score (24 points) is required</li></ul><p>You are not allowed to use anything but:</p><ul><li>The computer you sit at to only answer the questions on this exam</li><li>A dictionary to translate to/from English from/to your native language</li><li>Pen and paper to sketch with (should not be submitted)</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Each answer that contains multiple obvious errors, such as:</p><ul><li>A sentence starting with a lower case character</li><li>A sentence not ending with a period, question mark, or any other suitable character</li><li>A sentence that is incomplete</li><li>A sentence that is incomprehensible</li></ul><p>Will automatically lose 0.25 points. The ability to express yourself in text clearly is very important for an engineer, and therefor part of the examination.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="client-side" tabindex="-1"><a class="header-anchor" href="#client-side" aria-hidden="true">#</a> Client-side</h2><h3 id="question-1-2p" tabindex="-1"><a class="header-anchor" href="#question-1-2p" aria-hidden="true">#</a> Question 1 (2p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>In an SPA, the content on the page should change when anchor elements are clicked. One SPA tries to make that happen with the code shown below.</p><div class="language-html ext-html line-numbers-mode"${
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
        }>&quot;</span>UTF-8<span class="token punctuation"${
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
        }>&gt;</span></span>SPA<span class="token tag"${
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
        }>&lt;</span>script</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span><span class="token script"${
          _scopeId
        }><span class="token language-javascript"${
          _scopeId
        }>
        
        document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;DOMContentLoaded&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token comment"${
          _scopeId
        }>// When clicking on an anchor element, change the content</span>
            <span class="token comment"${
          _scopeId
        }>// on the page.</span>
            <span class="token keyword"${
          _scopeId
        }>const</span> anchors <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>querySelectorAll</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;a&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
            <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> anchor <span class="token keyword"${
          _scopeId
        }>of</span> anchors<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                anchor<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;click&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                    <span class="token function"${
          _scopeId
        }>changeToPage</span><span class="token punctuation"${
          _scopeId
        }>(</span>anchor<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getAttribute</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;href&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            <span class="token punctuation"${
          _scopeId
        }>}</span>
            
            <span class="token comment"${
          _scopeId
        }>// Start by showing the start page.</span>
            <span class="token function"${
          _scopeId
        }>changeToPage</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;/&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>changeToPage</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>uri</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token comment"${
          _scopeId
        }>// Hide all pages.</span>
            <span class="token keyword"${
          _scopeId
        }>const</span> pageDivs <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>querySelectorAll</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;.page&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> pageDiv <span class="token keyword"${
          _scopeId
        }>of</span> pageDivs<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                pageDiv<span class="token punctuation"${
          _scopeId
        }>.</span>style<span class="token punctuation"${
          _scopeId
        }>.</span>display <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&#39;none&#39;</span>
            <span class="token punctuation"${
          _scopeId
        }>}</span>
            
            <span class="token comment"${
          _scopeId
        }>// Show the page associated with the given URI.</span>
            <span class="token keyword"${
          _scopeId
        }>let</span> pageId
            
            <span class="token keyword"${
          _scopeId
        }>switch</span><span class="token punctuation"${
          _scopeId
        }>(</span>uri<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                <span class="token keyword"${
          _scopeId
        }>case</span> <span class="token string"${
          _scopeId
        }>&#39;/&#39;</span><span class="token operator"${
          _scopeId
        }>:</span>
                    pageId <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&#39;start-page&#39;</span>
                <span class="token keyword"${
          _scopeId
        }>break</span>
                <span class="token keyword"${
          _scopeId
        }>case</span> <span class="token string"${
          _scopeId
        }>&#39;/about&#39;</span><span class="token operator"${
          _scopeId
        }>:</span>
                    pageId <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&#39;about-page&#39;</span>
                <span class="token keyword"${
          _scopeId
        }>break</span>
            <span class="token punctuation"${
          _scopeId
        }>}</span>
            
            document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getElementById</span><span class="token punctuation"${
          _scopeId
        }>(</span>pageId<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>.</span>style<span class="token punctuation"${
          _scopeId
        }>.</span>display <span class="token operator"${
          _scopeId
        }>=</span> <span class="token string"${
          _scopeId
        }>&#39;block&#39;</span>
            
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
        }>&lt;</span>a</span> <span class="token attr-name"${
          _scopeId
        }>href</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>/<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>Home page<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>a</span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
    <span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;</span>a</span> <span class="token attr-name"${
          _scopeId
        }>href</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>/about<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>About page<span class="token tag"${
          _scopeId
        }><span class="token tag"${
          _scopeId
        }><span class="token punctuation"${
          _scopeId
        }>&lt;/</span>a</span><span class="token punctuation"${
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
        }>&quot;</span>page<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>id</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>start-page<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
        This is the start page!
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
        }>&lt;</span>div</span> <span class="token attr-name"${
          _scopeId
        }>class</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>page<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span> <span class="token attr-name"${
          _scopeId
        }>id</span><span class="token attr-value"${
          _scopeId
        }><span class="token punctuation attr-equals"${
          _scopeId
        }>=</span><span class="token punctuation"${
          _scopeId
        }>&quot;</span>about-page<span class="token punctuation"${
          _scopeId
        }>&quot;</span></span><span class="token punctuation"${
          _scopeId
        }>&gt;</span></span>
        This is the about page!
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
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>31</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>32</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>33</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>34</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>35</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>36</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>37</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>38</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>39</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>40</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>41</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>42</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>43</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>44</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>45</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>46</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>47</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>48</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>49</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>50</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>51</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>52</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>53</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>54</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>55</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>56</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>57</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>58</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>59</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>60</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>61</span><br${
          _scopeId
        }></div></div><ol${
          _scopeId
        }><li${
          _scopeId
        }>When testing the SPA, changing the page content when clicking on one of the two anchors doesn&#39;t work. Why? And what in the code needs to be changed to make it work?</li><li${
          _scopeId
        }>After having fixed the problem above and uploaded the SPA to a server (for example one running NGINX) without any additional configuration (i.e. a <code${
          _scopeId
        }>GET</code> request for <code${
          _scopeId
        }>/</code> send back the SPA above), users start complaining about that bookmarking pages and the back button in the web browser don&#39;t work. Explain what you changes you need to do to the code and the server to make these things work. No need to mention implementation details, just list the changes that needs to be made.</li></ol>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In an SPA, the content on the page should change when anchor elements are clicked. One SPA tries to make that happen with the code shown below."),
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
                (0,external_vue_.createTextVNode)("\n"),
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
                    (0,external_vue_.createTextVNode)("UTF-8"),
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
                (0,external_vue_.createTextVNode)("SPA"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("title")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token script" }, [
                  (0,external_vue_.createVNode)("span", { class: "token language-javascript" }, [
                    (0,external_vue_.createTextVNode)("\n        \n        document"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'DOMContentLoaded'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// When clicking on an anchor element, change the content"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// on the page."),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" anchors "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" document"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "querySelectorAll"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'a'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" anchor "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                    (0,external_vue_.createTextVNode)(" anchors"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n                anchor"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'click'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n                    "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "changeToPage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("anchor"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getAttribute"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'href'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n                "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Start by showing the start page."),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "changeToPage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n        \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "changeToPage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token parameter" }, "uri"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Hide all pages."),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" pageDivs "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" document"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "querySelectorAll"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'.page'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" pageDiv "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                    (0,external_vue_.createTextVNode)(" pageDivs"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n                pageDiv"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("style"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("display "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'none'"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Show the page associated with the given URI."),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                    (0,external_vue_.createTextVNode)(" pageId\n            \n            "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "switch"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("uri"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                    (0,external_vue_.createTextVNode)("\n                "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "case"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/'"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)("\n                    pageId "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'start-page'"),
                    (0,external_vue_.createTextVNode)("\n                "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "break"),
                    (0,external_vue_.createTextVNode)("\n                "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "case"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'/about'"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                    (0,external_vue_.createTextVNode)("\n                    pageId "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'about-page'"),
                    (0,external_vue_.createTextVNode)("\n                "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "break"),
                    (0,external_vue_.createTextVNode)("\n            "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n            \n            document"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "getElementById"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("pageId"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("style"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("display "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "'block'"),
                    (0,external_vue_.createTextVNode)("\n            \n        "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                    (0,external_vue_.createTextVNode)("\n        \n    ")
                  ])
                ]),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("script")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("head")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n"),
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
                    (0,external_vue_.createTextVNode)("a")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "href"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("/"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("Home page"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("a")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "<"),
                    (0,external_vue_.createTextVNode)("a")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "href"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("/about"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("About page"),
                (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                  (0,external_vue_.createVNode)("span", { class: "token tag" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "</"),
                    (0,external_vue_.createTextVNode)("a")
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
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("page"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("start-page"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n        This is the start page!\n    "),
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
                    (0,external_vue_.createTextVNode)("div")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "class"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("page"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createTextVNode)(),
                  (0,external_vue_.createVNode)("span", { class: "token attr-name" }, "id"),
                  (0,external_vue_.createVNode)("span", { class: "token attr-value" }, [
                    (0,external_vue_.createVNode)("span", { class: "token punctuation attr-equals" }, "="),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\""),
                    (0,external_vue_.createTextVNode)("about-page"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "\"")
                  ]),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ">")
                ]),
                (0,external_vue_.createTextVNode)("\n        This is the about page!\n    "),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "31"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "32"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("ol", null, [
            (0,external_vue_.createVNode)("li", null, "When testing the SPA, changing the page content when clicking on one of the two anchors doesn't work. Why? And what in the code needs to be changed to make it work?"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("After having fixed the problem above and uploaded the SPA to a server (for example one running NGINX) without any additional configuration (i.e. a "),
              (0,external_vue_.createVNode)("code", null, "GET"),
              (0,external_vue_.createTextVNode)(" request for "),
              (0,external_vue_.createVNode)("code", null, "/"),
              (0,external_vue_.createTextVNode)(" send back the SPA above), users start complaining about that bookmarking pages and the back button in the web browser don't work. Explain what you changes you need to do to the code and the server to make these things work. No need to mention implementation details, just list the changes that needs to be made.")
            ])
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ol${
          _scopeId
        }><li${
          _scopeId
        }>The web browser&#39;s default behavior when a link is clicked is to fetch the webpage the link leads to. That happens now, so the web browser loads a new page. we don&#39;t want that default behavior, and must therefor tell the web browser to not do it by adding the <code${
          _scopeId
        }>event</code> parameter to our <code${
          _scopeId
        }>click</code> handler function, and in it call <code${
          _scopeId
        }>event.preventDefault()</code></li><li${
          _scopeId
        }><ul${
          _scopeId
        }><li${
          _scopeId
        }>Configure the server to always send back the webpage above no matter if the URI is <code${
          _scopeId
        }>/</code> or <code${
          _scopeId
        }>/about</code></li><li${
          _scopeId
        }>Instead of hard coding <code${
          _scopeId
        }>/</code> in <code${
          _scopeId
        }>changeToPage(&#39;/&#39;)</code>, we should pass it the actual URI the user is using</li><li${
          _scopeId
        }>When a link is clicked, we need to tell the web browser to create a new history entry with the new URI</li><li${
          _scopeId
        }>We need to listen for when the user changes the current history entry (i.e. when the user clicks on the back/forward button), and when that happen call <code${
          _scopeId
        }>changeToPage()</code> and pass it the URI in the new current history entry</li></ul></li></ol>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ol", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The web browser's default behavior when a link is clicked is to fetch the webpage the link leads to. That happens now, so the web browser loads a new page. we don't want that default behavior, and must therefor tell the web browser to not do it by adding the "),
              (0,external_vue_.createVNode)("code", null, "event"),
              (0,external_vue_.createTextVNode)(" parameter to our "),
              (0,external_vue_.createVNode)("code", null, "click"),
              (0,external_vue_.createTextVNode)(" handler function, and in it call "),
              (0,external_vue_.createVNode)("code", null, "event.preventDefault()")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Configure the server to always send back the webpage above no matter if the URI is "),
                  (0,external_vue_.createVNode)("code", null, "/"),
                  (0,external_vue_.createTextVNode)(" or "),
                  (0,external_vue_.createVNode)("code", null, "/about")
                ]),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("Instead of hard coding "),
                  (0,external_vue_.createVNode)("code", null, "/"),
                  (0,external_vue_.createTextVNode)(" in "),
                  (0,external_vue_.createVNode)("code", null, "changeToPage('/')"),
                  (0,external_vue_.createTextVNode)(", we should pass it the actual URI the user is using")
                ]),
                (0,external_vue_.createVNode)("li", null, "When a link is clicked, we need to tell the web browser to create a new history entry with the new URI"),
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("We need to listen for when the user changes the current history entry (i.e. when the user clicks on the back/forward button), and when that happen call "),
                  (0,external_vue_.createVNode)("code", null, "changeToPage()"),
                  (0,external_vue_.createTextVNode)(" and pass it the URI in the new current history entry")
                ])
              ])
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for problem on (1)</li><li${
          _scopeId
        }>0.5 points for solution to (1)</li><li${
          _scopeId
        }>0.25 points for each correct mentioned list item in (2)</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for problem on (1)"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for solution to (1)"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for each correct mentioned list item in (2)")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-2-1p" tabindex="-1"><a class="header-anchor" href="#question-2-1p" aria-hidden="true">#</a> Question 2 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>When the JavaScript expression <code${
          _scopeId
        }>document.querySelector(&#39;#page&#39;)</code> is evaluated, the method returns <code${
          _scopeId
        }>null</code>, even though the HTML code further down on the page contains <code${
          _scopeId
        }>&lt;div id=&quot;page&quot;&gt;...&lt;/div&gt;</code>. Explain what the most likely reason for the problem is, and how you would solve it.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("When the JavaScript expression "),
            (0,external_vue_.createVNode)("code", null, "document.querySelector('#page')"),
            (0,external_vue_.createTextVNode)(" is evaluated, the method returns "),
            (0,external_vue_.createVNode)("code", null, "null"),
            (0,external_vue_.createTextVNode)(", even though the HTML code further down on the page contains "),
            (0,external_vue_.createVNode)("code", null, "<div id=\"page\">...</div>"),
            (0,external_vue_.createTextVNode)(". Explain what the most likely reason for the problem is, and how you would solve it.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        
      } else {
        return []
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for explaining the problem</li><li${
          _scopeId
        }>0.5 points for suggesting a correct fix</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for explaining the problem"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for suggesting a correct fix")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-3-1p" tabindex="-1"><a class="header-anchor" href="#question-3-1p" aria-hidden="true">#</a> Question 3 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Name a client-side JS event that can fire on a webpage in addition to <code${
          _scopeId
        }>DOMContentLoaded</code> and <code${
          _scopeId
        }>click</code>, and explain when that event fires.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Name a client-side JS event that can fire on a webpage in addition to "),
            (0,external_vue_.createVNode)("code", null, "DOMContentLoaded"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("code", null, "click"),
            (0,external_vue_.createTextVNode)(", and explain when that event fires.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The event <code${
          _scopeId
        }>submit</code> fires on a <code${
          _scopeId
        }>&lt;form&gt;</code> element when that <code${
          _scopeId
        }>&lt;form&gt;</code> element is submitted (for example when the user has clicked on a submit button in the <code${
          _scopeId
        }>&lt;form&gt;</code>).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The event "),
            (0,external_vue_.createVNode)("code", null, "submit"),
            (0,external_vue_.createTextVNode)(" fires on a "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" element when that "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(" element is submitted (for example when the user has clicked on a submit button in the "),
            (0,external_vue_.createVNode)("code", null, "<form>"),
            (0,external_vue_.createTextVNode)(").")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for correct name <ul${
          _scopeId
        }><li${
          _scopeId
        }>(only 0.25 points if name is spelled wrong)</li></ul></li><li${
          _scopeId
        }>0.5 points for correct explanation</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for correct name "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "(only 0.25 points if name is spelled wrong)")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0.5 points for correct explanation")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-4-1p" tabindex="-1"><a class="header-anchor" href="#question-4-1p" aria-hidden="true">#</a> Question 4 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The two code pieces below don&#39;t have the same functionality. Explain what the practical difference between them is.</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;DOMContentLoaded&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> anchors <span class="token operator"${
          _scopeId
        }>=</span> document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>querySelector</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;a&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> anchor <span class="token keyword"${
          _scopeId
        }>of</span> anchors<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        anchor<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;click&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>event</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>onAnchorClicked</span><span class="token punctuation"${
          _scopeId
        }>(</span>anchor<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
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
        }></div></div><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }>document<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;DOMContentLoaded&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    document<span class="token punctuation"${
          _scopeId
        }>.</span>body<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>addEventListener</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;click&#39;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>event</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token comment"${
          _scopeId
        }>// event.target.closest(&#39;a&#39;) finds the anchor element closest to</span>
        <span class="token comment"${
          _scopeId
        }>// the element the user clicked on (either the element itself, or</span>
        <span class="token comment"${
          _scopeId
        }>// one of its ancestors (parent, or parent&#39;s parent, etc.), or null,</span>
        <span class="token comment"${
          _scopeId
        }>// if the element itself and none of its parents are an anchor element).</span>
        <span class="token keyword"${
          _scopeId
        }>const</span> anchor <span class="token operator"${
          _scopeId
        }>=</span> event<span class="token punctuation"${
          _scopeId
        }>.</span>target<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>closest</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&#39;a&#39;</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>anchor <span class="token operator"${
          _scopeId
        }>!=</span> <span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>onAnchorClicked</span><span class="token punctuation"${
          _scopeId
        }>(</span>anchor<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
<span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div><p${
          _scopeId
        }><strong${
          _scopeId
        }>Note</strong>: Do not explain how the code works, but do explain how their functionality differ. That is a very important difference on a dynamic webpage.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The two code pieces below don't have the same functionality. Explain what the practical difference between them is."),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'DOMContentLoaded'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" anchors "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "querySelector"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'a'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" anchor "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" anchors"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        anchor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'click'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "event"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onAnchorClicked"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("anchor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createTextVNode)("document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'DOMContentLoaded'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    document"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("body"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "addEventListener"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'click'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "event"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// event.target.closest('a') finds the anchor element closest to"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// the element the user clicked on (either the element itself, or"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// one of its ancestors (parent, or parent's parent, etc.), or null,"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// if the element itself and none of its parents are an anchor element)."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" anchor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" event"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("target"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "closest"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "'a'"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("anchor "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "onAnchorClicked"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("anchor"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        \n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createVNode)("strong", null, "Note"),
            (0,external_vue_.createTextVNode)(": Do not explain how the code works, but do explain how their functionality differ. That is a very important difference on a dynamic webpage.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The second code piece also catches clicks on anchor elements added to the DOM after the <code${
          _scopeId
        }>DOMContentLoaded</code> event fires.</p><p${
          _scopeId
        }>Below is a longer explanation for the ones who don&#39;t understand.</p><p${
          _scopeId
        }>The first code piece listens for clicks on all anchor elements that exist when the <code${
          _scopeId
        }>DOMContentLoaded</code> event fires. If anchor elements are added to the DOM after that, clicks on those anchor elements won&#39;t fire our click listener.</p><p${
          _scopeId
        }>The second code piece will catch clicks on any element, and then check if that element (or one of its ancestors) is an anchor element, and if so fire our click listeners. This way we don&#39;t only listen to clicks on anchor elements that exist when the <code${
          _scopeId
        }>DOMContentLoaded</code> event fires, but also on anchor elements that are added to the DOM afterwards.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The second code piece also catches clicks on anchor elements added to the DOM after the "),
            (0,external_vue_.createVNode)("code", null, "DOMContentLoaded"),
            (0,external_vue_.createTextVNode)(" event fires.")
          ]),
          (0,external_vue_.createVNode)("p", null, "Below is a longer explanation for the ones who don't understand."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The first code piece listens for clicks on all anchor elements that exist when the "),
            (0,external_vue_.createVNode)("code", null, "DOMContentLoaded"),
            (0,external_vue_.createTextVNode)(" event fires. If anchor elements are added to the DOM after that, clicks on those anchor elements won't fire our click listener.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The second code piece will catch clicks on any element, and then check if that element (or one of its ancestors) is an anchor element, and if so fire our click listeners. This way we don't only listen to clicks on anchor elements that exist when the "),
            (0,external_vue_.createVNode)("code", null, "DOMContentLoaded"),
            (0,external_vue_.createTextVNode)(" event fires, but also on anchor elements that are added to the DOM afterwards.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct explanation of the difference (&quot;The second code piece also catches clicks on anchor elements added to the DOM after the <code${
          _scopeId
        }>DOMContentLoaded</code> event fires.&quot;) <ul${
          _scopeId
        }><li${
          _scopeId
        }>(or 0.5 points for explaining how the code works, but not mentioning &quot;The second code piece also catches clicks on anchor elements added to the DOM after the <code${
          _scopeId
        }>DOMContentLoaded</code> event fires.&quot;)</li></ul></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("1 point for correct explanation of the difference (\"The second code piece also catches clicks on anchor elements added to the DOM after the "),
              (0,external_vue_.createVNode)("code", null, "DOMContentLoaded"),
              (0,external_vue_.createTextVNode)(" event fires.\") "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("(or 0.5 points for explaining how the code works, but not mentioning \"The second code piece also catches clicks on anchor elements added to the DOM after the "),
                  (0,external_vue_.createVNode)("code", null, "DOMContentLoaded"),
                  (0,external_vue_.createTextVNode)(" event fires.\")")
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="containers" tabindex="-1"><a class="header-anchor" href="#containers" aria-hidden="true">#</a> Containers</h2><h3 id="question-5-1p" tabindex="-1"><a class="header-anchor" href="#question-5-1p" aria-hidden="true">#</a> Question 5 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In Docker, explain what port mapping is, and why developers often need to use it.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In Docker, explain what port mapping is, and why developers often need to use it.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A container in Docker does by default have all its ports closed, so nothing from outside the container can connect to the applications running in the container. Using port mapping, a programmer can tell the host computer that some ports on the host computer, like port <code${
          _scopeId
        }>8000</code>, should lead to ports in the container, like port <code${
          _scopeId
        }>1000</code>. The programmer can this way, for example, use port <code${
          _scopeId
        }>8000</code> on the host computer to connect to port <code${
          _scopeId
        }>1000</code> on the container.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("A container in Docker does by default have all its ports closed, so nothing from outside the container can connect to the applications running in the container. Using port mapping, a programmer can tell the host computer that some ports on the host computer, like port "),
            (0,external_vue_.createVNode)("code", null, "8000"),
            (0,external_vue_.createTextVNode)(", should lead to ports in the container, like port "),
            (0,external_vue_.createVNode)("code", null, "1000"),
            (0,external_vue_.createTextVNode)(". The programmer can this way, for example, use port "),
            (0,external_vue_.createVNode)("code", null, "8000"),
            (0,external_vue_.createTextVNode)(" on the host computer to connect to port "),
            (0,external_vue_.createVNode)("code", null, "1000"),
            (0,external_vue_.createTextVNode)(" on the container.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for ports on host machine maps to ports on container <ul${
          _scopeId
        }><li${
          _scopeId
        }>(only 0.25 points for not being clear about when talking about ports on host machine and when talking about port on the container)</li></ul></li><li${
          _scopeId
        }>0.5 points for ports on containers are closed by default/only way to communicate with the app running in the container from the host machine</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for ports on host machine maps to ports on container "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "(only 0.25 points for not being clear about when talking about ports on host machine and when talking about port on the container)")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0.5 points for ports on containers are closed by default/only way to communicate with the app running in the container from the host machine")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="scaling" tabindex="-1"><a class="header-anchor" href="#scaling" aria-hidden="true">#</a> Scaling</h2><h3 id="question-6-2p" tabindex="-1"><a class="header-anchor" href="#question-6-2p" aria-hidden="true">#</a> Question 6 (2p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Explain the difference between <em${
          _scopeId
        }>horizontal scaling</em> and <em${
          _scopeId
        }>vertical scaling</em>.</p><p${
          _scopeId
        }>If you don&#39;t think about scaling when implementing your application, which scaling approach will be easiest for you to apply? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Explain the difference between "),
            (0,external_vue_.createVNode)("em", null, "horizontal scaling"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("em", null, "vertical scaling"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, "If you don't think about scaling when implementing your application, which scaling approach will be easiest for you to apply? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Vertical scaling is when you run your application on a more powerful computer (faster CPU, more RAM, more storage memory, etc.). If you don&#39;t think about scaling, using this scaling approach is easiest, because you don&#39;t need to think about anything special when you implement your application.</p><p${
          _scopeId
        }>Horizontal scaling is when you run your application on multiple computers. This scaling approach is harder, because you need to make sure that your application is stateless, and that all your application instances share the same state (for example store the state in a database all application instances are connected to instead of storing it in global variables).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Vertical scaling is when you run your application on a more powerful computer (faster CPU, more RAM, more storage memory, etc.). If you don't think about scaling, using this scaling approach is easiest, because you don't need to think about anything special when you implement your application."),
          (0,external_vue_.createVNode)("p", null, "Horizontal scaling is when you run your application on multiple computers. This scaling approach is harder, because you need to make sure that your application is stateless, and that all your application instances share the same state (for example store the state in a database all application instances are connected to instead of storing it in global variables).")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for description of vertical scaling</li><li${
          _scopeId
        }>0.5 points for description of horizontal scaling</li><li${
          _scopeId
        }>1 point for justifying why horizontal scaling is harder <ul${
          _scopeId
        }><li${
          _scopeId
        }>(many use <em${
          _scopeId
        }>sessions</em> as argument for why horizontal scaling is harder, but using sticky sessions, you don&#39;t need to change any of the code in your application, so not really a valid argument, but I have accepted it to some degree anyway)</li></ul></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for description of vertical scaling"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for description of horizontal scaling"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("1 point for justifying why horizontal scaling is harder "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, [
                  (0,external_vue_.createTextVNode)("(many use "),
                  (0,external_vue_.createVNode)("em", null, "sessions"),
                  (0,external_vue_.createTextVNode)(" as argument for why horizontal scaling is harder, but using sticky sessions, you don't need to change any of the code in your application, so not really a valid argument, but I have accepted it to some degree anyway)")
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="server-side" tabindex="-1"><a class="header-anchor" href="#server-side" aria-hidden="true">#</a> Server-side</h2><h3 id="question-7-3p" tabindex="-1"><a class="header-anchor" href="#question-7-3p" aria-hidden="true">#</a> Question 7 (3p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Explain what a three-layered architecture is, which parts it consists of and what each part is used for. Then also explain how web applications use a three-layered architecture.</p><p${
          _scopeId
        }>Don&#39;t write any code.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what a three-layered architecture is, which parts it consists of and what each part is used for. Then also explain how web applications use a three-layered architecture."),
          (0,external_vue_.createVNode)("p", null, "Don't write any code.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A three-layered architecture is a way organize the code of an application in three different layers, each with their own responsibilities:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>The <em${
          _scopeId
        }>Data Access Layer</em> contains the code for storing and retrieving the application&#39;s data. It usually provides CRUD (Create, Read, Update and Delete) operations for this</li><li${
          _scopeId
        }>The <em${
          _scopeId
        }>Business Logic Layer</em> contains the code for carrying out the tasks the user wants to do (i.e. the application&#39;s functionality), such as computing how much the user should pay for the products put in a shopping bag, verify payments, etc. It typically contains authorization checks (for example, only allowing the user to use the application if the user has a paid membership or if the test period is not over yet) and validation checks (for example, checking if the data the user sends to the application is in correct format). Is uses the Data Access Layer when needed</li><li${
          _scopeId
        }>The <em${
          _scopeId
        }>Presentation Layer</em> is responsible for implementing an interface through which the application can be used, for example a graphical user interface that humans can use. When the user interacts with the application through the interface, for example clicks on a button, the Presentation Layer asks the Business Logic Layer to execute the task that is associated with the button</li></ul><p${
          _scopeId
        }>In web applications, the Presentation Layer is responsible for receiving HTTP requests, and then ask the Business Logic Layer to carry out the requests. The Data Access Layer often store the data in a database. The Presentation Layer is also responsible for generating the HTTP response to send back, containing the HTML and CSS code the web browser use to display the webpage in the response to the user.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "A three-layered architecture is a way organize the code of an application in three different layers, each with their own responsibilities:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("em", null, "Data Access Layer"),
              (0,external_vue_.createTextVNode)(" contains the code for storing and retrieving the application's data. It usually provides CRUD (Create, Read, Update and Delete) operations for this")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("em", null, "Business Logic Layer"),
              (0,external_vue_.createTextVNode)(" contains the code for carrying out the tasks the user wants to do (i.e. the application's functionality), such as computing how much the user should pay for the products put in a shopping bag, verify payments, etc. It typically contains authorization checks (for example, only allowing the user to use the application if the user has a paid membership or if the test period is not over yet) and validation checks (for example, checking if the data the user sends to the application is in correct format). Is uses the Data Access Layer when needed")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("The "),
              (0,external_vue_.createVNode)("em", null, "Presentation Layer"),
              (0,external_vue_.createTextVNode)(" is responsible for implementing an interface through which the application can be used, for example a graphical user interface that humans can use. When the user interacts with the application through the interface, for example clicks on a button, the Presentation Layer asks the Business Logic Layer to execute the task that is associated with the button")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "In web applications, the Presentation Layer is responsible for receiving HTTP requests, and then ask the Business Logic Layer to carry out the requests. The Data Access Layer often store the data in a database. The Presentation Layer is also responsible for generating the HTTP response to send back, containing the HTML and CSS code the web browser use to display the webpage in the response to the user.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for what it is</li><li${
          _scopeId
        }>0.25 points for what each part&#39;s name is</li><li${
          _scopeId
        }>0.25 points for what each part is used for</li><li${
          _scopeId
        }>0.5 points for how web app use it (HTTP, HTML, CSS in Presentation Layer, and description of the other layers)</li><li${
          _scopeId
        }>0.5 points for good quality answers (many details, not using different names to describe the same thing, using the correct name on things, write proper and easy to read sentences, clearly explain which layer making use of which other layer, use singular and plural correctly, etc.)</li></ul><div class="custom-container warning"${
          _scopeId
        }><p class="custom-container-title"${
          _scopeId
        }>Note!</p><p${
          _scopeId
        }>Answering <em${
          _scopeId
        }>Explain what a three-layered architecture is</em> with something like <em${
          _scopeId
        }>It&#39;s an architecture</em>, or <em${
          _scopeId
        }>It&#39;s an architecture consisting of three layers</em> is of course not a good way to do it. Anyone gets that understanding by just reading the name. You have to explain what it&#39;s an architecture of, and what that means (what is a layer? what does a layer consist of? Etc.).</p><p${
          _scopeId
        }>The Presentation Layer doesn&#39;t have to make use of HTML and HTTP. This architecture can not only be used in web applications, but other type of applications too.</p><p${
          _scopeId
        }>The Data Access Layer does not have to store data in a database. It&#39;s not called <em${
          _scopeId
        }>Database Access Layer</em>.</p><p${
          _scopeId
        }>Some students write the layers are independent of each other/know nothing about each others. That is not true. If it would be true, then would, for example, the Presentation Layer have no way of using the Business Logic Layer.</p><p${
          _scopeId
        }>Many students write that the Presentation Layer receives HTTP requests, and then sends the requests to the Business Logic Layer. It really sounds like you&#39;re saying <em${
          _scopeId
        }>the Business Logic Layer obtains the HTTP request</em>, and that is wrong; the Business Logic Layer shouldn&#39;t know the Presentation Layer makes use of HTTP at all, and therefor it can&#39;t receive HTTP requests from it. Saying that the Business Logic Layers <em${
          _scopeId
        }>carries out</em> the request, or similar, is OK, because that does not imply the Business Logic Layers receives the HTTP request.</p></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for what it is"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for what each part's name is"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for what each part is used for"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for how web app use it (HTTP, HTML, CSS in Presentation Layer, and description of the other layers)"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for good quality answers (many details, not using different names to describe the same thing, using the correct name on things, write proper and easy to read sentences, clearly explain which layer making use of which other layer, use singular and plural correctly, etc.)")
          ]),
          (0,external_vue_.createVNode)("div", { class: "custom-container warning" }, [
            (0,external_vue_.createVNode)("p", { class: "custom-container-title" }, "Note!"),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Answering "),
              (0,external_vue_.createVNode)("em", null, "Explain what a three-layered architecture is"),
              (0,external_vue_.createTextVNode)(" with something like "),
              (0,external_vue_.createVNode)("em", null, "It's an architecture"),
              (0,external_vue_.createTextVNode)(", or "),
              (0,external_vue_.createVNode)("em", null, "It's an architecture consisting of three layers"),
              (0,external_vue_.createTextVNode)(" is of course not a good way to do it. Anyone gets that understanding by just reading the name. You have to explain what it's an architecture of, and what that means (what is a layer? what does a layer consist of? Etc.).")
            ]),
            (0,external_vue_.createVNode)("p", null, "The Presentation Layer doesn't have to make use of HTML and HTTP. This architecture can not only be used in web applications, but other type of applications too."),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("The Data Access Layer does not have to store data in a database. It's not called "),
              (0,external_vue_.createVNode)("em", null, "Database Access Layer"),
              (0,external_vue_.createTextVNode)(".")
            ]),
            (0,external_vue_.createVNode)("p", null, "Some students write the layers are independent of each other/know nothing about each others. That is not true. If it would be true, then would, for example, the Presentation Layer have no way of using the Business Logic Layer."),
            (0,external_vue_.createVNode)("p", null, [
              (0,external_vue_.createTextVNode)("Many students write that the Presentation Layer receives HTTP requests, and then sends the requests to the Business Logic Layer. It really sounds like you're saying "),
              (0,external_vue_.createVNode)("em", null, "the Business Logic Layer obtains the HTTP request"),
              (0,external_vue_.createTextVNode)(", and that is wrong; the Business Logic Layer shouldn't know the Presentation Layer makes use of HTTP at all, and therefor it can't receive HTTP requests from it. Saying that the Business Logic Layers "),
              (0,external_vue_.createVNode)("em", null, "carries out"),
              (0,external_vue_.createTextVNode)(" the request, or similar, is OK, because that does not imply the Business Logic Layers receives the HTTP request.")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-8-1p" tabindex="-1"><a class="header-anchor" href="#question-8-1p" aria-hidden="true">#</a> Question 8 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>In a three-layered architecture, name or explain one security vulnerability in respective layer you need to think of.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "In a three-layered architecture, name or explain one security vulnerability in respective layer you need to think of.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>Presentation Layer: Cross-Site Scripting</li><li${
          _scopeId
        }>Business Logic Layer: Broken Authorization</li><li${
          _scopeId
        }>Data Access Layer: SQL Injection</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "Presentation Layer: Cross-Site Scripting"),
            (0,external_vue_.createVNode)("li", null, "Business Logic Layer: Broken Authorization"),
            (0,external_vue_.createVNode)("li", null, "Data Access Layer: SQL Injection")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.33 points for each correct name/explanation</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.33 points for each correct name/explanation")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-9-1p" tabindex="-1"><a class="header-anchor" href="#question-9-1p" aria-hidden="true">#</a> Question 9 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A website with user accounts and blogposts (a blogpost belongs to one user account (usually the one who created it, but admins can create blogpost belonging to other user accounts)) is built with a three layered architecture. The function <code${
          _scopeId
        }>updateBlogpostById()</code> below comes from the DAL.</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// ...</span>

<span class="token keyword"${
          _scopeId
        }>export</span> <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>updateBlogpostById</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>accountId<span class="token punctuation"${
          _scopeId
        }>,</span> blogpostId<span class="token punctuation"${
          _scopeId
        }>,</span> content<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> query <span class="token operator"${
          _scopeId
        }>=</span> <span class="token template-string"${
          _scopeId
        }><span class="token template-punctuation string"${
          _scopeId
        }>\`</span><span class="token string"${
          _scopeId
        }>
        UPDATE
            blogposts
        SET
            content = ?
        WHERE
            id = ? AND
            accountId = ?
        LIMIT 1
    </span><span class="token template-punctuation string"${
          _scopeId
        }>\`</span></span>
    <span class="token keyword"${
          _scopeId
        }>const</span> values <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span>content<span class="token punctuation"${
          _scopeId
        }>,</span> blogpostId<span class="token punctuation"${
          _scopeId
        }>,</span> accountId<span class="token punctuation"${
          _scopeId
        }>]</span>
    
    db<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>run</span><span class="token punctuation"${
          _scopeId
        }>(</span>query<span class="token punctuation"${
          _scopeId
        }>,</span> values<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> result</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;DATABASE_ERROR&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }></div></div><p${
          _scopeId
        }>Is the code good or bad? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("A website with user accounts and blogposts (a blogpost belongs to one user account (usually the one who created it, but admins can create blogpost belonging to other user accounts)) is built with a three layered architecture. The function "),
            (0,external_vue_.createVNode)("code", null, "updateBlogpostById()"),
            (0,external_vue_.createTextVNode)(" below comes from the DAL.")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "updateBlogpostById"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("accountId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" blogpostId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" content"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" query "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token template-string" }, [
                  (0,external_vue_.createVNode)("span", { class: "token template-punctuation string" }, "`"),
                  (0,external_vue_.createVNode)("span", { class: "token string" }, "\n        UPDATE\n            blogposts\n        SET\n            content = ?\n        WHERE\n            id = ? AND\n            accountId = ?\n        LIMIT 1\n    "),
                  (0,external_vue_.createVNode)("span", { class: "token template-punctuation string" }, "`")
                ]),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" values "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("content"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" blogpostId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" accountId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    \n    db"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "run"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("query"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" values"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" result")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"DATABASE_ERROR\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Is the code good or bad? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The code is bad, because just the <code${
          _scopeId
        }>blogpostId</code> should be enough to identify the blogpost that should be updated; the <code${
          _scopeId
        }>accountId</code> is not needed for that.</p><p${
          _scopeId
        }>Most likely the id of the logged in account has been passed along here to make sure that a user does not update a blogpost created by another user, but that is a business logic rule that should be checked in the Business Logic Layer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The code is bad, because just the "),
            (0,external_vue_.createVNode)("code", null, "blogpostId"),
            (0,external_vue_.createTextVNode)(" should be enough to identify the blogpost that should be updated; the "),
            (0,external_vue_.createVNode)("code", null, "accountId"),
            (0,external_vue_.createTextVNode)(" is not needed for that.")
          ]),
          (0,external_vue_.createVNode)("p", null, "Most likely the id of the logged in account has been passed along here to make sure that a user does not update a blogpost created by another user, but that is a business logic rule that should be checked in the Business Logic Layer.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for <code${
          _scopeId
        }>accountId</code> should not be in the <code${
          _scopeId
        }>WHERE</code> clause</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("1 point for "),
              (0,external_vue_.createVNode)("code", null, "accountId"),
              (0,external_vue_.createTextVNode)(" should not be in the "),
              (0,external_vue_.createVNode)("code", null, "WHERE"),
              (0,external_vue_.createTextVNode)(" clause")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-10-1p" tabindex="-1"><a class="header-anchor" href="#question-10-1p" aria-hidden="true">#</a> Question 10 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A website with user accounts and blogposts (a blogpost belongs to one user account (usually the one who created it, but admins can create blogpost belonging to other user accounts)) is built with a three layered architecture. The function <code${
          _scopeId
        }>createBlogpost()</code> below comes from the BLL.</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// ...</span>

<span class="token keyword"${
          _scopeId
        }>export</span> <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>createBlogpost</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>accountId<span class="token punctuation"${
          _scopeId
        }>,</span> content<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> errors <span class="token operator"${
          _scopeId
        }>=</span> blogpostValidator<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>getValidationErrorsNewBlogpost</span><span class="token punctuation"${
          _scopeId
        }>(</span>
        content
    <span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span> <span class="token operator"${
          _scopeId
        }>&lt;</span> errors<span class="token punctuation"${
          _scopeId
        }>.</span>length<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>errors<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token keyword"${
          _scopeId
        }>return</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
    dal<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>createBlogpost</span><span class="token punctuation"${
          _scopeId
        }>(</span>accountId<span class="token punctuation"${
          _scopeId
        }>,</span> content<span class="token punctuation"${
          _scopeId
        }>,</span> callback<span class="token punctuation"${
          _scopeId
        }>)</span>
    
<span class="token punctuation"${
          _scopeId
        }>}</span>

<span class="token comment"${
          _scopeId
        }>// ...</span>
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
        }></div></div><p${
          _scopeId
        }>Is the code good or bad? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("A website with user accounts and blogposts (a blogpost belongs to one user account (usually the one who created it, but admins can create blogpost belonging to other user accounts)) is built with a three layered architecture. The function "),
            (0,external_vue_.createVNode)("code", null, "createBlogpost()"),
            (0,external_vue_.createTextVNode)(" below comes from the BLL.")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "export"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "createBlogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("accountId"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" content"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" errors "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" blogpostValidator"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getValidationErrorsNewBlogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("\n        content\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" errors"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("errors"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n    dal"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "createBlogpost"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("accountId"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" content"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n\n"),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ..."),
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
          ]),
          (0,external_vue_.createVNode)("p", null, "Is the code good or bad? Justify your answer.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>The code is bad, because the Business Logic Layer has no info about which user that requested the blogpost to be created (only which account the blogpost should belong to), so it has no way to check its authorization rules.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "The code is bad, because the Business Logic Layer has no info about which user that requested the blogpost to be created (only which account the blogpost should belong to), so it has no way to check its authorization rules.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for no authorization info is missing</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for no authorization info is missing")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> REST API</h2><h3 id="question-11-1p" tabindex="-1"><a class="header-anchor" href="#question-11-1p" aria-hidden="true">#</a> Question 11 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Match each HTTP status code with its reason phrase.</p><p${
          _scopeId
        }>Status codes: <code${
          _scopeId
        }>200</code> <code${
          _scopeId
        }>201</code> <code${
          _scopeId
        }>204</code> <code${
          _scopeId
        }>400</code> <code${
          _scopeId
        }>401</code></p><p${
          _scopeId
        }>Reason Phrases: <code${
          _scopeId
        }>No Content</code> <code${
          _scopeId
        }>OK</code> <code${
          _scopeId
        }>Created</code> <code${
          _scopeId
        }>Bad Request</code> <code${
          _scopeId
        }>Unauthorized</code></p><p${
          _scopeId
        }>All needs to be matched correct to get any points.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Match each HTTP status code with its reason phrase."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Status codes: "),
            (0,external_vue_.createVNode)("code", null, "200"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "201"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "204"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "400"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "401")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Reason Phrases: "),
            (0,external_vue_.createVNode)("code", null, "No Content"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "OK"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "Created"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "Bad Request"),
            (0,external_vue_.createTextVNode)(),
            (0,external_vue_.createVNode)("code", null, "Unauthorized")
          ]),
          (0,external_vue_.createVNode)("p", null, "All needs to be matched correct to get any points.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>200</code>: <code${
          _scopeId
        }>OK</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>201</code>: <code${
          _scopeId
        }>Created</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>204</code>: <code${
          _scopeId
        }>No Content</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>400</code>: <code${
          _scopeId
        }>Bad Request</code></li><li${
          _scopeId
        }><code${
          _scopeId
        }>401</code>: <code${
          _scopeId
        }>Unauthorized</code></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "200"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "OK")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "201"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Created")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "204"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "No Content")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "400"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Bad Request")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "401"),
              (0,external_vue_.createTextVNode)(": "),
              (0,external_vue_.createVNode)("code", null, "Unauthorized")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for all correct</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for all correct")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-12-1p" tabindex="-1"><a class="header-anchor" href="#question-12-1p" aria-hidden="true">#</a> Question 12 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Does it make sense to use the <code${
          _scopeId
        }>Content-Type</code> header in an HTTP <code${
          _scopeId
        }>GET</code> request? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Does it make sense to use the "),
            (0,external_vue_.createVNode)("code", null, "Content-Type"),
            (0,external_vue_.createTextVNode)(" header in an HTTP "),
            (0,external_vue_.createVNode)("code", null, "GET"),
            (0,external_vue_.createTextVNode)(" request? Justify your answer.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>No, the <code${
          _scopeId
        }>Content-Type</code> header indicates which format the body of the request is written in, but <code${
          _scopeId
        }>GET</code> requests do not send any resource to the server, and hence should not contain any body at all, so using the <code${
          _scopeId
        }>Content-Type</code> header in a <code${
          _scopeId
        }>GET</code> request makes no sense.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("No, the "),
            (0,external_vue_.createVNode)("code", null, "Content-Type"),
            (0,external_vue_.createTextVNode)(" header indicates which format the body of the request is written in, but "),
            (0,external_vue_.createVNode)("code", null, "GET"),
            (0,external_vue_.createTextVNode)(" requests do not send any resource to the server, and hence should not contain any body at all, so using the "),
            (0,external_vue_.createVNode)("code", null, "Content-Type"),
            (0,external_vue_.createTextVNode)(" header in a "),
            (0,external_vue_.createVNode)("code", null, "GET"),
            (0,external_vue_.createTextVNode)(" request makes no sense.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-13-3p" tabindex="-1"><a class="header-anchor" href="#question-13-3p" aria-hidden="true">#</a> Question 13 (3p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain how a JWT works. Be as detailed as possible.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain how a JWT works. Be as detailed as possible.")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>A JSON Web Token consists of 3 parts in the format <code${
          _scopeId
        }>AAA.BBB.CCC</code>.</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>AAA</code> part is called the header. It&#39;s a JSON object encoded in the Base64 format. The JSON object contains meta information about the token, such that it is a JSON Web Token and which hashing algorithm that is used to compute the <code${
          _scopeId
        }>CCC</code> part.</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>BBB</code> part is called the payload. It contains the data the token represents (the claims). It&#39;s a JSON object encoded in the Base64 format.</p><p${
          _scopeId
        }>The <code${
          _scopeId
        }>CCC</code> part is called the signature, and it contains a hash value of the hashing algorithm defined in the header. Simply use the hashing algorithm on <code${
          _scopeId
        }>AAA.BBB</code> and your own chosen salt, and you end up with the <code${
          _scopeId
        }>CCC</code> part.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("A JSON Web Token consists of 3 parts in the format "),
            (0,external_vue_.createVNode)("code", null, "AAA.BBB.CCC"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "AAA"),
            (0,external_vue_.createTextVNode)(" part is called the header. It's a JSON object encoded in the Base64 format. The JSON object contains meta information about the token, such that it is a JSON Web Token and which hashing algorithm that is used to compute the "),
            (0,external_vue_.createVNode)("code", null, "CCC"),
            (0,external_vue_.createTextVNode)(" part.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "BBB"),
            (0,external_vue_.createTextVNode)(" part is called the payload. It contains the data the token represents (the claims). It's a JSON object encoded in the Base64 format.")
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The "),
            (0,external_vue_.createVNode)("code", null, "CCC"),
            (0,external_vue_.createTextVNode)(" part is called the signature, and it contains a hash value of the hashing algorithm defined in the header. Simply use the hashing algorithm on "),
            (0,external_vue_.createVNode)("code", null, "AAA.BBB"),
            (0,external_vue_.createTextVNode)(" and your own chosen salt, and you end up with the "),
            (0,external_vue_.createVNode)("code", null, "CCC"),
            (0,external_vue_.createTextVNode)(" part.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for <code${
          _scopeId
        }>A.B.C</code> format <ul${
          _scopeId
        }><li${
          _scopeId
        }>(only 0.25 points for saying it consists of 3 parts)</li></ul></li><li${
          _scopeId
        }>0.33 points for respective part name</li><li${
          _scopeId
        }>0.5 points for respective part description <ul${
          _scopeId
        }><li${
          _scopeId
        }>(only 0.25 points for respective description not mentioning details like Base64/JSON)</li></ul></li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for "),
              (0,external_vue_.createVNode)("code", null, "A.B.C"),
              (0,external_vue_.createTextVNode)(" format "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "(only 0.25 points for saying it consists of 3 parts)")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, "0.33 points for respective part name"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.5 points for respective part description "),
              (0,external_vue_.createVNode)("ul", null, [
                (0,external_vue_.createVNode)("li", null, "(only 0.25 points for respective description not mentioning details like Base64/JSON)")
              ])
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-14-1p" tabindex="-1"><a class="header-anchor" href="#question-14-1p" aria-hidden="true">#</a> Question 14 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Does it make sense to put a claim named <code${
          _scopeId
        }>isAdmin</code> with a value of <code${
          _scopeId
        }>true</code> or <code${
          _scopeId
        }>false</code> in an ID Token? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Does it make sense to put a claim named "),
            (0,external_vue_.createVNode)("code", null, "isAdmin"),
            (0,external_vue_.createTextVNode)(" with a value of "),
            (0,external_vue_.createVNode)("code", null, "true"),
            (0,external_vue_.createTextVNode)(" or "),
            (0,external_vue_.createVNode)("code", null, "false"),
            (0,external_vue_.createTextVNode)(" in an ID Token? Justify your answer.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Yes, if that&#39;s something the application using the REST API needs to know about the logged in user, it makes sense. Most likely the application will show some extra GUI features if the logged in user is an admin, and if so it should be able to obtain that information through the ID token.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Yes, if that's something the application using the REST API needs to know about the logged in user, it makes sense. Most likely the application will show some extra GUI features if the logged in user is an admin, and if so it should be able to obtain that information through the ID token.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-15-1p" tabindex="-1"><a class="header-anchor" href="#question-15-1p" aria-hidden="true">#</a> Question 15 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Does it make sense to put a claim named <code${
          _scopeId
        }>isAdmin</code> with a value of <code${
          _scopeId
        }>true</code> or <code${
          _scopeId
        }>false</code> in an Access Token? Justify your answer.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Does it make sense to put a claim named "),
            (0,external_vue_.createVNode)("code", null, "isAdmin"),
            (0,external_vue_.createTextVNode)(" with a value of "),
            (0,external_vue_.createVNode)("code", null, "true"),
            (0,external_vue_.createTextVNode)(" or "),
            (0,external_vue_.createVNode)("code", null, "false"),
            (0,external_vue_.createTextVNode)(" in an Access Token? Justify your answer.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Yes, if that&#39;s something the web application implementing the REST API needs to know about the user to be able to figure out what the user should be allowed to request, then putting that information in the Access Token makes sense.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Yes, if that's something the web application implementing the REST API needs to know about the user to be able to figure out what the user should be allowed to request, then putting that information in the Access Token makes sense.")
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for correct answer and valid justification</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for correct answer and valid justification")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2><h3 id="question-16-1p" tabindex="-1"><a class="header-anchor" href="#question-16-1p" aria-hidden="true">#</a> Question 16 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what SOP is, and briefly explain how it works (i.e. what the difference is from not having SOP).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what SOP is, and briefly explain how it works (i.e. what the difference is from not having SOP).")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The Same-Origin Policy (SOP) is a policy web browsers follow to improve security. Without the policy, client-side code would be allowed to send any HTTP request to any web application it wants, but with the policy, client-side code coming from one web application (the &quot;origin&quot; of the code) is only allowed to communicate with (i.e. send HTTP requests to/read HTTP responses from) other web applications in a very limited way. In short, only <code${
          _scopeId
        }>GET</code> and <code${
          _scopeId
        }>POST</code> requests are allowed to be sent to other web applications, only a few different HTTP request headers are allowed to be used, and the client-side code is not allowed to read HTTP responses.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The Same-Origin Policy (SOP) is a policy web browsers follow to improve security. Without the policy, client-side code would be allowed to send any HTTP request to any web application it wants, but with the policy, client-side code coming from one web application (the \"origin\" of the code) is only allowed to communicate with (i.e. send HTTP requests to/read HTTP responses from) other web applications in a very limited way. In short, only "),
            (0,external_vue_.createVNode)("code", null, "GET"),
            (0,external_vue_.createTextVNode)(" and "),
            (0,external_vue_.createVNode)("code", null, "POST"),
            (0,external_vue_.createTextVNode)(" requests are allowed to be sent to other web applications, only a few different HTTP request headers are allowed to be used, and the client-side code is not allowed to read HTTP responses.")
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.5 points for a policy web browsers use to improve security</li><li${
          _scopeId
        }>0.5 points for explaining the policy</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "0.5 points for a policy web browsers use to improve security"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for explaining the policy")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-17-2p" tabindex="-1"><a class="header-anchor" href="#question-17-2p" aria-hidden="true">#</a> Question 17 (2p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${_scopeId}>Explain what CORS is, and explain how it works (be as detailed as possible).</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Explain what CORS is, and explain how it works (be as detailed as possible).")
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Cross-Origin Resource Sharing is a way for client-side code to get around the restrictions web browsers enforce with SOP. When client-side code from one origin sends a HTTP request to another origin, the web browser can use CORS to check with the receiving server if it allows client-side from another origin to send HTTP requests to it.</p><p${
          _scopeId
        }>For &quot;simple&quot; requests (requests from client-side code SOP allows to be sent to another origin, but it doesn&#39;t allow the client-side code to read the response), the web browser will send the HTTP request the client-side code wants to send, and if the server has added some HTTP headers to the response indicating the client-side code is allowed to read the response, the web browser will allow the client-side code to read the response.</p><p${
          _scopeId
        }>For other requests from client-side code to another origin, the web browser will first send its own <code${
          _scopeId
        }>OPTIONS</code> request (known as the preflight request), and in the response to that request the server can add HTTP headers to indicate if the client-side code should be allowed to send the request it wants to send or not, and if the headers indicate the client-side code is allowed to send it, the web browser will send the request, and then let the client-side code read the response.</p><p${
          _scopeId
        }>For the server to indicate if the client-side code should be allowed to send the request/read the response, the following HTTP headers can be used:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>Access-Control-Allow-Origin</code>: The value indicates which origin the client-side code may have to accept sending the request</li><li${
          _scopeId
        }><code${
          _scopeId
        }>Access-Control-Allow-Methods</code>: The value indicates which method the client-side code may use in the cross-origin request</li><li${
          _scopeId
        }><code${
          _scopeId
        }>Access-Control-Allow-Headers</code>: The value indicates which headers the client-side code may use in the cross-origin request</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "Cross-Origin Resource Sharing is a way for client-side code to get around the restrictions web browsers enforce with SOP. When client-side code from one origin sends a HTTP request to another origin, the web browser can use CORS to check with the receiving server if it allows client-side from another origin to send HTTP requests to it."),
          (0,external_vue_.createVNode)("p", null, "For \"simple\" requests (requests from client-side code SOP allows to be sent to another origin, but it doesn't allow the client-side code to read the response), the web browser will send the HTTP request the client-side code wants to send, and if the server has added some HTTP headers to the response indicating the client-side code is allowed to read the response, the web browser will allow the client-side code to read the response."),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("For other requests from client-side code to another origin, the web browser will first send its own "),
            (0,external_vue_.createVNode)("code", null, "OPTIONS"),
            (0,external_vue_.createTextVNode)(" request (known as the preflight request), and in the response to that request the server can add HTTP headers to indicate if the client-side code should be allowed to send the request it wants to send or not, and if the headers indicate the client-side code is allowed to send it, the web browser will send the request, and then let the client-side code read the response.")
          ]),
          (0,external_vue_.createVNode)("p", null, "For the server to indicate if the client-side code should be allowed to send the request/read the response, the following HTTP headers can be used:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "Access-Control-Allow-Origin"),
              (0,external_vue_.createTextVNode)(": The value indicates which origin the client-side code may have to accept sending the request")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "Access-Control-Allow-Methods"),
              (0,external_vue_.createTextVNode)(": The value indicates which method the client-side code may use in the cross-origin request")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "Access-Control-Allow-Headers"),
              (0,external_vue_.createTextVNode)(": The value indicates which headers the client-side code may use in the cross-origin request")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>0.25 points for used by <strong${
          _scopeId
        }>client-side code and web browsers</strong> (just writing <em${
          _scopeId
        }>website</em> is not enough)</li><li${
          _scopeId
        }>0.25 points for a workaround for SOP/sending cross-site requests</li><li${
          _scopeId
        }>0.25 points for description of simple request</li><li${
          _scopeId
        }>0.5 points for description of preflight request</li><li${
          _scopeId
        }>0.25 points for each description (name not required) of a CORS header (max 3)</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("0.25 points for used by "),
              (0,external_vue_.createVNode)("strong", null, "client-side code and web browsers"),
              (0,external_vue_.createTextVNode)(" (just writing "),
              (0,external_vue_.createVNode)("em", null, "website"),
              (0,external_vue_.createTextVNode)(" is not enough)")
            ]),
            (0,external_vue_.createVNode)("li", null, "0.25 points for a workaround for SOP/sending cross-site requests"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for description of simple request"),
            (0,external_vue_.createVNode)("li", null, "0.5 points for description of preflight request"),
            (0,external_vue_.createVNode)("li", null, "0.25 points for each description (name not required) of a CORS header (max 3)")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="code-writing" tabindex="-1"><a class="header-anchor" href="#code-writing" aria-hidden="true">#</a> Code Writing</h2><h3 id="question-18-1p" tabindex="-1"><a class="header-anchor" href="#question-18-1p" aria-hidden="true">#</a> Question 18 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>To represent a human in JavaScript, one can use an object like:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> human <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>{</span>
    id<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    name<span class="token operator"${
          _scopeId
        }>:</span> <span class="token string"${
          _scopeId
        }>&quot;Alice&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span>
    age<span class="token operator"${
          _scopeId
        }>:</span> <span class="token number"${
          _scopeId
        }>10</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div><p${
          _scopeId
        }>Implement the JavaScript function <code${
          _scopeId
        }>getIdOfOldestHuman(humans)</code>, which receives an array with human objects, and returns the id of the oldest human. Return <code${
          _scopeId
        }>-1</code> if there are no human objects in the array.</p>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, "To represent a human in JavaScript, one can use an object like:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" human "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    id"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    name"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Alice\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)("\n    age"),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, ":"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "10"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the JavaScript function "),
            (0,external_vue_.createVNode)("code", null, "getIdOfOldestHuman(humans)"),
            (0,external_vue_.createTextVNode)(", which receives an array with human objects, and returns the id of the oldest human. Return "),
            (0,external_vue_.createVNode)("code", null, "-1"),
            (0,external_vue_.createTextVNode)(" if there are no human objects in the array.")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getIdOfOldestHuman</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>humans</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>humans<span class="token punctuation"${
          _scopeId
        }>.</span>length <span class="token operator"${
          _scopeId
        }>==</span> <span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token operator"${
          _scopeId
        }>-</span><span class="token number"${
          _scopeId
        }>1</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
    <span class="token keyword"${
          _scopeId
        }>let</span> oldestHuman <span class="token operator"${
          _scopeId
        }>=</span> humans<span class="token punctuation"${
          _scopeId
        }>[</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    
    <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> human <span class="token keyword"${
          _scopeId
        }>of</span> humans<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>oldestHuman<span class="token punctuation"${
          _scopeId
        }>.</span>age <span class="token operator"${
          _scopeId
        }>&lt;</span> human<span class="token punctuation"${
          _scopeId
        }>.</span>age<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            oldestHuman <span class="token operator"${
          _scopeId
        }>=</span> human
        <span class="token punctuation"${
          _scopeId
        }>}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
    <span class="token keyword"${
          _scopeId
        }>return</span> oldestHuman<span class="token punctuation"${
          _scopeId
        }>.</span>id
    
<span class="token punctuation"${
          _scopeId
        }>}</span>
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
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getIdOfOldestHuman"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "humans"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("humans"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" oldestHuman "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" humans"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" human "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" humans"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("oldestHuman"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("age "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "<"),
                (0,external_vue_.createTextVNode)(" human"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("age"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            oldestHuman "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(" human\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" oldestHuman"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("id\n    \n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>1 point for a solution that largely works</li><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>.size</code> instead of <code${
          _scopeId
        }>.length</code></li><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>var</code> instead of <code${
          _scopeId
        }>let</code>/<code${
          _scopeId
        }>const</code></li><li${
          _scopeId
        }>-0.1 points for each indentation error</li><li${
          _scopeId
        }>-0.1 points for being inconsistent with how <code${
          _scopeId
        }>;</code> is used</li><li${
          _scopeId
        }>-0.1 points for using the condition <code${
          _scopeId
        }>humans.length &lt; 0</code></li><li${
          _scopeId
        }>-0.2 points for creating variable inside loop that should be created outside loop</li><li${
          _scopeId
        }>-0.2 points for never initializing <code${
          _scopeId
        }>oldestHuman</code>/initializing it wrong</li><li${
          _scopeId
        }>-0.2 points for <code${
          _scopeId
        }>human &gt; oldestHuman</code> instead of <code${
          _scopeId
        }>human.age &gt; oldestHuman.age</code></li><li${
          _scopeId
        }>-0.2 points for checking <code${
          _scopeId
        }>humans.length == 0</code> in the loop</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "1 point for a solution that largely works"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, ".size"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, ".length")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, "var"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, "let"),
              (0,external_vue_.createTextVNode)("/"),
              (0,external_vue_.createVNode)("code", null, "const")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for each indentation error"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for being inconsistent with how "),
              (0,external_vue_.createVNode)("code", null, ";"),
              (0,external_vue_.createTextVNode)(" is used")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using the condition "),
              (0,external_vue_.createVNode)("code", null, "humans.length < 0")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.2 points for creating variable inside loop that should be created outside loop"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.2 points for never initializing "),
              (0,external_vue_.createVNode)("code", null, "oldestHuman"),
              (0,external_vue_.createTextVNode)("/initializing it wrong")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.2 points for "),
              (0,external_vue_.createVNode)("code", null, "human > oldestHuman"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, "human.age > oldestHuman.age")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.2 points for checking "),
              (0,external_vue_.createVNode)("code", null, "humans.length == 0"),
              (0,external_vue_.createTextVNode)(" in the loop")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-19-1p" tabindex="-1"><a class="header-anchor" href="#question-19-1p" aria-hidden="true">#</a> Question 19 (1p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>Implement the client-side JavaScript function <code${
          _scopeId
        }>incrementBy3(number)</code>, which receives a number and should send back the sum of that number and <code${
          _scopeId
        }>3</code>. Sample usage:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }><code${
          _scopeId
        }>incrementBy3(5)</code> ---&gt; <code${
          _scopeId
        }>8</code></li></ul><p${
          _scopeId
        }>Then implement the function <code${
          _scopeId
        }>createIncrementer(amount)</code>, which should send back a new function that one can call to increment a number by the specified <code${
          _scopeId
        }>amount</code>.</p><p${
          _scopeId
        }>Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> incrementBy3 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>createIncrementer</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>3</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> eight <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>incrementBy3</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> twelve <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>incrementBy3</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>9</span><span class="token punctuation"${
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
        }></div></div><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>const</span> incrementBy1 <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>createIncrementer</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> six <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>incrementBy1</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>5</span><span class="token punctuation"${
          _scopeId
        }>)</span>
<span class="token keyword"${
          _scopeId
        }>const</span> ten <span class="token operator"${
          _scopeId
        }>=</span> <span class="token function"${
          _scopeId
        }>incrementBy1</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>9</span><span class="token punctuation"${
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the client-side JavaScript function "),
            (0,external_vue_.createVNode)("code", null, "incrementBy3(number)"),
            (0,external_vue_.createTextVNode)(", which receives a number and should send back the sum of that number and "),
            (0,external_vue_.createVNode)("code", null, "3"),
            (0,external_vue_.createTextVNode)(". Sample usage:")
          ]),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("code", null, "incrementBy3(5)"),
              (0,external_vue_.createTextVNode)(" ---> "),
              (0,external_vue_.createVNode)("code", null, "8")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Then implement the function "),
            (0,external_vue_.createVNode)("code", null, "createIncrementer(amount)"),
            (0,external_vue_.createTextVNode)(", which should send back a new function that one can call to increment a number by the specified "),
            (0,external_vue_.createVNode)("code", null, "amount"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, "Sample usage:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" incrementBy3 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "createIncrementer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" eight "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "incrementBy3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" twelve "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "incrementBy3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "9"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" incrementBy1 "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "createIncrementer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" six "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "incrementBy1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "5"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" ten "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "incrementBy1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "9"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>incrementBy3</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>number</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> number <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>3</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>createIncrementer</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>amount</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>return</span> <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>incrementByAmount</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>number</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token keyword"${
          _scopeId
        }>return</span> number <span class="token operator"${
          _scopeId
        }>+</span> amount
    <span class="token punctuation"${
          _scopeId
        }>}</span>
<span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "incrementBy3"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "3"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n")
              ])
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "2"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "3"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "createIncrementer"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "amount"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "incrementByAmount"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "number"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "return"),
                (0,external_vue_.createTextVNode)(" number "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(" amount\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }><p${
          _scopeId
        }>0.2 points for <code${
          _scopeId
        }>incrementBy3()</code></p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>0.8 points for <code${
          _scopeId
        }>createIncrementer()</code></p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for each badly named variable</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for each unnecessary created variable</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>1 point for a solution that largely works</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for each bad name</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for each misspelled name</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for each parameter named wrong (names were given in the question)</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>var</code> when could use <code${
          _scopeId
        }>let</code></p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for not naming <code${
          _scopeId
        }>click</code> event correct</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for each line not properly indented</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for not naming <code${
          _scopeId
        }>innerText</code>/<code${
          _scopeId
        }>innerHTML</code> correct</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for storing the function in global variable without <code${
          _scopeId
        }>const</code></p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.1 points for doing string concatenation with <code${
          _scopeId
        }>1</code> on each click</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.2 points for each global variable created/assigned in the function</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.25 points for not showing the <code${
          _scopeId
        }>startNumber</code> in the button immediately</p></li><li${
          _scopeId
        }><p${
          _scopeId
        }>-0.25 points for not showing the incremented number in the button when the user clicks on the button</p></li></ul><p${
          _scopeId
        }>lkj</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>-0.1 points for using <code${
          _scopeId
        }>let</code> when could use <code${
          _scopeId
        }>const</code></li><li${
          _scopeId
        }>-0.1 for using <code${
          _scopeId
        }>anArray.length()</code> instead of <code${
          _scopeId
        }>anArray.length</code></li><li${
          _scopeId
        }>-0.1 points for not having semicolon after all statements (if that&#39;s the convention you use)</li><li${
          _scopeId
        }>-0.1 points for having same code in <code${
          _scopeId
        }>if</code> and <code${
          _scopeId
        }>else</code> (factor it out)</li><li${
          _scopeId
        }>-0.1 points for naming <code${
          _scopeId
        }>isSumGreaterThan100</code> wrong</li><li${
          _scopeId
        }>-0.25 for implementing <code${
          _scopeId
        }>!isSumGreaterThan100()</code></li><li${
          _scopeId
        }>-0.25 for implementing <code${
          _scopeId
        }>isSumGreaterThan_OR_EQUAL_TO_100()</code></li><li${
          _scopeId
        }>-0.25 for iterating over indexes instead of values</li><li${
          _scopeId
        }>-0.25 for using variable that doesn&#39;t exist/hasn&#39;t been initialized</li><li${
          _scopeId
        }>-0.25 points for each syntax error</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("0.2 points for "),
                (0,external_vue_.createVNode)("code", null, "incrementBy3()")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("0.8 points for "),
                (0,external_vue_.createVNode)("code", null, "createIncrementer()")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.1 points for each badly named variable")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.1 points for each unnecessary created variable")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "1 point for a solution that largely works")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.1 points for each bad name")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.1 points for each misspelled name")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.1 points for each parameter named wrong (names were given in the question)")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("-0.1 points for using "),
                (0,external_vue_.createVNode)("code", null, "var"),
                (0,external_vue_.createTextVNode)(" when could use "),
                (0,external_vue_.createVNode)("code", null, "let")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("-0.1 points for not naming "),
                (0,external_vue_.createVNode)("code", null, "click"),
                (0,external_vue_.createTextVNode)(" event correct")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.1 points for each line not properly indented")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("-0.1 points for not naming "),
                (0,external_vue_.createVNode)("code", null, "innerText"),
                (0,external_vue_.createTextVNode)("/"),
                (0,external_vue_.createVNode)("code", null, "innerHTML"),
                (0,external_vue_.createTextVNode)(" correct")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("-0.1 points for storing the function in global variable without "),
                (0,external_vue_.createVNode)("code", null, "const")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("-0.1 points for doing string concatenation with "),
                (0,external_vue_.createVNode)("code", null, "1"),
                (0,external_vue_.createTextVNode)(" on each click")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.2 points for each global variable created/assigned in the function")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("-0.25 points for not showing the "),
                (0,external_vue_.createVNode)("code", null, "startNumber"),
                (0,external_vue_.createTextVNode)(" in the button immediately")
              ])
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createVNode)("p", null, "-0.25 points for not showing the incremented number in the button when the user clicks on the button")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "lkj"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for using "),
              (0,external_vue_.createVNode)("code", null, "let"),
              (0,external_vue_.createTextVNode)(" when could use "),
              (0,external_vue_.createVNode)("code", null, "const")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 for using "),
              (0,external_vue_.createVNode)("code", null, "anArray.length()"),
              (0,external_vue_.createTextVNode)(" instead of "),
              (0,external_vue_.createVNode)("code", null, "anArray.length")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.1 points for not having semicolon after all statements (if that's the convention you use)"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for having same code in "),
              (0,external_vue_.createVNode)("code", null, "if"),
              (0,external_vue_.createTextVNode)(" and "),
              (0,external_vue_.createVNode)("code", null, "else"),
              (0,external_vue_.createTextVNode)(" (factor it out)")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.1 points for naming "),
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan100"),
              (0,external_vue_.createTextVNode)(" wrong")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 for implementing "),
              (0,external_vue_.createVNode)("code", null, "!isSumGreaterThan100()")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("-0.25 for implementing "),
              (0,external_vue_.createVNode)("code", null, "isSumGreaterThan_OR_EQUAL_TO_100()")
            ]),
            (0,external_vue_.createVNode)("li", null, "-0.25 for iterating over indexes instead of values"),
            (0,external_vue_.createVNode)("li", null, "-0.25 for using variable that doesn't exist/hasn't been initialized"),
            (0,external_vue_.createVNode)("li", null, "-0.25 points for each syntax error")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h3 id="question-20-4p" tabindex="-1"><a class="header-anchor" href="#question-20-4p" aria-hidden="true">#</a> Question 20 (4p)</h3>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExamQuestion, null, {
    question: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<p${
          _scopeId
        }>The function <code${
          _scopeId
        }>getMovieByTitle(title, callback)</code> can be used to fetch a movie with a specific title asynchronously from the server like this:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token string"${
          _scopeId
        }>&quot;Shrek&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Couldn&#39;t fetch the movie.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Do something with the movie.</span>
        <span class="token comment"${
          _scopeId
        }>// movie = {id: 3, title: &quot;Shrek&quot;}</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div><p${
          _scopeId
        }>Implement the function <code${
          _scopeId
        }>getMoviesByTitles(titles, callback)</code>, which receives an array with movie titles and that should fetch the movies with those titles from the server, and send them back in an array by passing them to the callback function, or, if something goes wrong, pass the callback function the error it gets from <code${
          _scopeId
        }>getMovieByTitle(title, callback)</code>.</p><p${
          _scopeId
        }>Sample usage:</p><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token function"${
          _scopeId
        }>getMoviesByTitles</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token punctuation"${
          _scopeId
        }>[</span><span class="token string"${
          _scopeId
        }>&quot;Shrek&quot;</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token string"${
          _scopeId
        }>&quot;Goldeneye&quot;</span><span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movies</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Couldn&#39;t fetch the movies.</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        <span class="token comment"${
          _scopeId
        }>// Do something with the movies.</span>
        <span class="token comment"${
          _scopeId
        }>// movies = [</span>
        <span class="token comment"${
          _scopeId
        }>//   {id: 2, title: &quot;Shrek&quot;},</span>
        <span class="token comment"${
          _scopeId
        }>//   {id: 5, title: &quot;Goldeneye&quot;}</span>
        <span class="token comment"${
          _scopeId
        }>// ]</span>
    <span class="token punctuation"${
          _scopeId
        }>}</span>
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
        }></div></div><p${
          _scopeId
        }>Important details:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>The callback function should be called only once</li><li${
          _scopeId
        }>As soon as any function gives an error, the callback function should be called with that error (the other argument should be <code${
          _scopeId
        }>null</code>)</li><li${
          _scopeId
        }>If all movies are successfully fetched, the callback function should be called with <code${
          _scopeId
        }>null</code> as the error, and the movies array as the second argument</li><li${
          _scopeId
        }>The order of the movies in the movies array is not important</li></ul><p${
          _scopeId
        }>Implement two different versions of the function:</p><ul${
          _scopeId
        }><li${
          _scopeId
        }>One version that fetches the movies in sequential order (one at a time)</li><li${
          _scopeId
        }>One version that fetches the movies in parallel</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("The function "),
            (0,external_vue_.createVNode)("code", null, "getMovieByTitle(title, callback)"),
            (0,external_vue_.createTextVNode)(" can be used to fetch a movie with a specific title asynchronously from the server like this:")
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Shrek\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch the movie."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do something with the movie."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// movie = {id: 3, title: \"Shrek\"}"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, [
            (0,external_vue_.createTextVNode)("Implement the function "),
            (0,external_vue_.createVNode)("code", null, "getMoviesByTitles(titles, callback)"),
            (0,external_vue_.createTextVNode)(", which receives an array with movie titles and that should fetch the movies with those titles from the server, and send them back in an array by passing them to the callback function, or, if something goes wrong, pass the callback function the error it gets from "),
            (0,external_vue_.createVNode)("code", null, "getMovieByTitle(title, callback)"),
            (0,external_vue_.createTextVNode)(".")
          ]),
          (0,external_vue_.createVNode)("p", null, "Sample usage:"),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMoviesByTitles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Shrek\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Goldeneye\""),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movies")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Couldn't fetch the movies."),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Do something with the movies."),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// movies = ["),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "//   {id: 2, title: \"Shrek\"},"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "//   {id: 5, title: \"Goldeneye\"}"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// ]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
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
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("p", null, "Important details:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "The callback function should be called only once"),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("As soon as any function gives an error, the callback function should be called with that error (the other argument should be "),
              (0,external_vue_.createVNode)("code", null, "null"),
              (0,external_vue_.createTextVNode)(")")
            ]),
            (0,external_vue_.createVNode)("li", null, [
              (0,external_vue_.createTextVNode)("If all movies are successfully fetched, the callback function should be called with "),
              (0,external_vue_.createVNode)("code", null, "null"),
              (0,external_vue_.createTextVNode)(" as the error, and the movies array as the second argument")
            ]),
            (0,external_vue_.createVNode)("li", null, "The order of the movies in the movies array is not important")
          ]),
          (0,external_vue_.createVNode)("p", null, "Implement two different versions of the function:"),
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "One version that fetches the movies in sequential order (one at a time)"),
            (0,external_vue_.createVNode)("li", null, "One version that fetches the movies in parallel")
          ])
        ]
      }
    }),
    "sample-answer": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Sequential</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getMoviesByTitles</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>titles<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> fetchedMovies <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    
    <span class="token function"${
          _scopeId
        }>fetchMovie</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token number"${
          _scopeId
        }>0</span><span class="token punctuation"${
          _scopeId
        }>)</span>
    
    <span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>fetchMovie</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>titleIndex</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>titleIndex <span class="token operator"${
          _scopeId
        }>==</span> titles<span class="token punctuation"${
          _scopeId
        }>.</span>length<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>,</span> fetchedMovies<span class="token punctuation"${
          _scopeId
        }>)</span>
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span>titles<span class="token punctuation"${
          _scopeId
        }>[</span>titleIndex<span class="token punctuation"${
          _scopeId
        }>]</span><span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                
                <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                    <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                    fetchedMovies<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>push</span><span class="token punctuation"${
          _scopeId
        }>(</span>movie<span class="token punctuation"${
          _scopeId
        }>)</span>
                    <span class="token function"${
          _scopeId
        }>fetchMovie</span><span class="token punctuation"${
          _scopeId
        }>(</span>titleIndex <span class="token operator"${
          _scopeId
        }>+</span> <span class="token number"${
          _scopeId
        }>1</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token punctuation"${
          _scopeId
        }>}</span>
                
            <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span>
        
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
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
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }></div></div><div class="language-javascript ext-js line-numbers-mode"${
          _scopeId
        }><pre class="language-javascript"${
          _scopeId
        }><code${
          _scopeId
        }><span class="token comment"${
          _scopeId
        }>// Parallel</span>
<span class="token keyword"${
          _scopeId
        }>function</span> <span class="token function"${
          _scopeId
        }>getMoviesByTitles</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>titles<span class="token punctuation"${
          _scopeId
        }>,</span> callback</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
    
    <span class="token keyword"${
          _scopeId
        }>const</span> fetchedMovies <span class="token operator"${
          _scopeId
        }>=</span> <span class="token punctuation"${
          _scopeId
        }>[</span><span class="token punctuation"${
          _scopeId
        }>]</span>
    <span class="token keyword"${
          _scopeId
        }>let</span> hasSentBackError <span class="token operator"${
          _scopeId
        }>=</span> <span class="token boolean"${
          _scopeId
        }>false</span>
    
    <span class="token keyword"${
          _scopeId
        }>for</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>const</span> title <span class="token keyword"${
          _scopeId
        }>of</span> titles<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
        
        <span class="token function"${
          _scopeId
        }>getMovieByTitle</span><span class="token punctuation"${
          _scopeId
        }>(</span>title<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>function</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token parameter"${
          _scopeId
        }>error<span class="token punctuation"${
          _scopeId
        }>,</span> movie</span><span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
            
            <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>error <span class="token operator"${
          _scopeId
        }>&amp;&amp;</span> <span class="token operator"${
          _scopeId
        }>!</span>hasSentBackError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                
                hasSentBackError <span class="token operator"${
          _scopeId
        }>=</span> <span class="token boolean"${
          _scopeId
        }>true</span>
                <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span>error<span class="token punctuation"${
          _scopeId
        }>,</span> <span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>)</span>
                
            <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token keyword"${
          _scopeId
        }>else</span> <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token operator"${
          _scopeId
        }>!</span>hasSentBackError<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                
                fetchedMovies<span class="token punctuation"${
          _scopeId
        }>.</span><span class="token function"${
          _scopeId
        }>push</span><span class="token punctuation"${
          _scopeId
        }>(</span>movie<span class="token punctuation"${
          _scopeId
        }>)</span>
                
                <span class="token keyword"${
          _scopeId
        }>if</span><span class="token punctuation"${
          _scopeId
        }>(</span>fetchedMovies<span class="token punctuation"${
          _scopeId
        }>.</span>length <span class="token operator"${
          _scopeId
        }>==</span> titles<span class="token punctuation"${
          _scopeId
        }>.</span>length<span class="token punctuation"${
          _scopeId
        }>)</span><span class="token punctuation"${
          _scopeId
        }>{</span>
                    <span class="token function"${
          _scopeId
        }>callback</span><span class="token punctuation"${
          _scopeId
        }>(</span><span class="token keyword"${
          _scopeId
        }>null</span><span class="token punctuation"${
          _scopeId
        }>,</span> fetchedMovies<span class="token punctuation"${
          _scopeId
        }>)</span>
                <span class="token punctuation"${
          _scopeId
        }>}</span>
                
            <span class="token punctuation"${
          _scopeId
        }>}</span>
            
        <span class="token punctuation"${
          _scopeId
        }>}</span><span class="token punctuation"${
          _scopeId
        }>)</span>
        
    <span class="token punctuation"${
          _scopeId
        }>}</span>
    
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
        }><span class="line-number"${
          _scopeId
        }>23</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>24</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>25</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>26</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>27</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>28</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>29</span><br${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>30</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Sequential"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMoviesByTitles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("titles"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" fetchedMovies "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "fetchMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "0"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "fetchMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, "titleIndex"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("titleIndex "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" titles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" fetchedMovies"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("titles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createTextVNode)("titleIndex"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                \n                "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                    fetchedMovies"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "push"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "fetchMovie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("titleIndex "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token number" }, "1"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n                \n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n        \n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br")
            ])
          ]),
          (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
              (0,external_vue_.createVNode)("code", null, [
                (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Parallel"),
                (0,external_vue_.createTextVNode)("\n"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMoviesByTitles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("titles"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" callback")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" fetchedMovies "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                (0,external_vue_.createTextVNode)("\n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "let"),
                (0,external_vue_.createTextVNode)(" hasSentBackError "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "false"),
                (0,external_vue_.createTextVNode)("\n    \n    "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                (0,external_vue_.createTextVNode)(" title "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "of"),
                (0,external_vue_.createTextVNode)(" titles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n        \n        "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "getMovieByTitle"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("title"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "function"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token parameter" }, [
                  (0,external_vue_.createTextVNode)("error"),
                  (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                  (0,external_vue_.createTextVNode)(" movie")
                ]),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n            \n            "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "&&"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                (0,external_vue_.createTextVNode)("hasSentBackError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                \n                hasSentBackError "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token boolean" }, "true"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("error"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                \n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "else"),
                (0,external_vue_.createTextVNode)(),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "!"),
                (0,external_vue_.createTextVNode)("hasSentBackError"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                \n                fetchedMovies"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "push"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("movie"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                \n                "),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "if"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createTextVNode)("fetchedMovies"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length "),
                (0,external_vue_.createVNode)("span", { class: "token operator" }, "=="),
                (0,external_vue_.createTextVNode)(" titles"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                (0,external_vue_.createTextVNode)("length"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "{"),
                (0,external_vue_.createTextVNode)("\n                    "),
                (0,external_vue_.createVNode)("span", { class: "token function" }, "callback"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                (0,external_vue_.createVNode)("span", { class: "token keyword" }, "null"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                (0,external_vue_.createTextVNode)(" fetchedMovies"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n                "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n                \n            "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n            \n        "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                (0,external_vue_.createTextVNode)("\n        \n    "),
                (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "}"),
                (0,external_vue_.createTextVNode)("\n    \n"),
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
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "19"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "20"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "21"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "22"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "23"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "24"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "25"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "26"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "27"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "28"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "29"),
              (0,external_vue_.createVNode)("br"),
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "30"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    "marking-guidelines": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<ul${
          _scopeId
        }><li${
          _scopeId
        }>2 points for the sequential function</li><li${
          _scopeId
        }>2 points for the parallel function</li><li${
          _scopeId
        }>0 points for a function that assumes callback function runs synchronously (called immediately)</li></ul>`)
      } else {
        return [
          (0,external_vue_.createVNode)("ul", null, [
            (0,external_vue_.createVNode)("li", null, "2 points for the sequential function"),
            (0,external_vue_.createVNode)("li", null, "2 points for the parallel function"),
            (0,external_vue_.createVNode)("li", null, "0 points for a function that assumes callback function runs synchronously (called immediately)")
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2022-06-13.html.vue?vue&type=template&id=1ffd98c8

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/web-development-advanced-concepts/exams/exam-2022-06-13.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2022_06_13_html = (__exports__);

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

/***/ 9426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-492c81c0",
  "path": "/courses/web-development-advanced-concepts/exams/exam-2022-06-13.html",
  "title": "Exam 2022-06-13",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Client-side",
      "slug": "client-side",
      "children": [
        {
          "level": 3,
          "title": "Question 1 (2p)",
          "slug": "question-1-2p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 2 (1p)",
          "slug": "question-2-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 3 (1p)",
          "slug": "question-3-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 4 (1p)",
          "slug": "question-4-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Containers",
      "slug": "containers",
      "children": [
        {
          "level": 3,
          "title": "Question 5 (1p)",
          "slug": "question-5-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Scaling",
      "slug": "scaling",
      "children": [
        {
          "level": 3,
          "title": "Question 6 (2p)",
          "slug": "question-6-2p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Server-side",
      "slug": "server-side",
      "children": [
        {
          "level": 3,
          "title": "Question 7 (3p)",
          "slug": "question-7-3p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 8 (1p)",
          "slug": "question-8-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 9 (1p)",
          "slug": "question-9-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 10 (1p)",
          "slug": "question-10-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "REST API",
      "slug": "rest-api",
      "children": [
        {
          "level": 3,
          "title": "Question 11 (1p)",
          "slug": "question-11-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 12 (1p)",
          "slug": "question-12-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 13 (3p)",
          "slug": "question-13-3p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 14 (1p)",
          "slug": "question-14-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 15 (1p)",
          "slug": "question-15-1p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Security",
      "slug": "security",
      "children": [
        {
          "level": 3,
          "title": "Question 16 (1p)",
          "slug": "question-16-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 17 (2p)",
          "slug": "question-17-2p",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Code Writing",
      "slug": "code-writing",
      "children": [
        {
          "level": 3,
          "title": "Question 18 (1p)",
          "slug": "question-18-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 19 (1p)",
          "slug": "question-19-1p",
          "children": []
        },
        {
          "level": 3,
          "title": "Question 20 (4p)",
          "slug": "question-20-4p",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "courses/web-development-advanced-concepts/exams/exam-2022-06-13.md",
  "git": {
    "updatedTime": 1656323293000
  }
}


/***/ })

};
;
//# sourceMappingURL=9735.app.js.map