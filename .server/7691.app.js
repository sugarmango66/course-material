"use strict";
exports.id = 7691;
exports.ids = [7691];
exports.modules = {

/***/ 6079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2021_12_15_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2021-12-15.html.vue?vue&type=template&id=0a221656


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="exam-2021-12-15" tabindex="-1"><a class="header-anchor" href="#exam-2021-12-15" aria-hidden="true">#</a> Exam 2021-12-15</h1><p>Here you find the questions, sample answers and marking guidelines for the exam 2021-12-15.</p><h2 id="information" tabindex="-1"><a class="header-anchor" href="#information" aria-hidden="true">#</a> Information</h2><p>Start by reading through all questions. Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required.</li><li>For grade 4, 60% of max score (18 points) is required.</li><li>For grade 5, 80% of max score (24 points) is required.</li></ul><p>During the test, you are only allowed to use:</p><ul><li>The computer you sit at to only answer the questions on this exam (you may not run any other program).</li><li>A dictionary to translate to/from English from/to your native language.</li><li>Pen and paper to sketch things (does not need to be submitted).</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are ununderstandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Place the following lines of code in such order they can be executed (read underscores as white-spaces/indentation (Inspera doesn&#39;t allow the text to begin with white-spaces 😞)).</p><ul><li><code>abs_number = absolute(input(&quot;Enter number: &quot;)</code></li><li><code>___if number &lt; 0:</code></li><li><code>___number = int(string)</code></li><li><code>print(abs_number)</code></li><li><code>___return number</code></li><li><code>______return -number</code></li><li><code>def absolute(string):</code></li></ul><p>You will get:</p><ul><li>1 point for all in correct order</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">absolute</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span>
    number <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
    <span class="token keyword">if</span> number <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>number
    <span class="token keyword">return</span> number
abs_number <span class="token operator">=</span> absolute<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter number: &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>abs_number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for all in correct order</li></ul></div></div><h2 id="question-2-1p" tabindex="-1"><a class="header-anchor" href="#question-2-1p" aria-hidden="true">#</a> Question 2 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>How many statements and expressions does the following code contain?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>number <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> number <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">:</span>
   number <span class="token operator">=</span> number <span class="token operator">*</span> number
is_high <span class="token operator">=</span> number <span class="token operator">&gt;</span> <span class="token number">100</span>
<span class="token keyword">if</span> is_high<span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Number of of statements: ...</p><p>Number of expressions: ...</p><p>You will get:</p><ul><li>1 point for both correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>Number of of statements: <code>8</code></p><p>Number of expressions: <code>13</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for both correct</li></ul></div></div><h2 id="question-3-1p" tabindex="-1"><a class="header-anchor" href="#question-3-1p" aria-hidden="true">#</a> Question 3 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What type of error does the code below contain? Syntax error, Logical error, Runtime error or no error at all? The purpose of the function is to compute the sum of the numbers it receives e.g. <code>get_sum(2, 3)</code> → <code>5</code>.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_sum</span><span class="token punctuation">(</span>number_1<span class="token punctuation">,</span> number_2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> number_1 <span class="token operator">*</span> number_2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>Logical error</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-4-1p" tabindex="-1"><a class="header-anchor" href="#question-4-1p" aria-hidden="true">#</a> Question 4 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What values will be stored in the variables <code>i</code> and <code>x</code> after the following code has been executed?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">0</span>
x <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> x <span class="token operator">+</span> i
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The variable <code>i</code> will store: ...</p><p>The variable <code>x</code> will store: ...</p><p>You will get:</p><ul><li>1 point for both correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>The variable <code>i</code> will store: <code>3</code></p><p>The variable <code>x</code> will store: <code>3</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for both correct</li></ul></div></div><h2 id="question-5-1p" tabindex="-1"><a class="header-anchor" href="#question-5-1p" aria-hidden="true">#</a> Question 5 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What is what in the code below?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">create_list</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> number<span class="token punctuation">,</span> number<span class="token punctuation">]</span>
<span class="token builtin">list</span> <span class="token operator">=</span> create_list<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Pair each code piece with its corresponding name.</p><p>Code pieces:</p><ul><li><code>[number, number, number]</code></li><li><code>5</code></li><li><code>create_list</code></li><li><code>number</code></li></ul><p>Names:</p><ul><li>Argument</li><li>Parameter</li><li>Expression</li><li>Function</li></ul><p><strong>Note:</strong> Some code pieces may match multiple names, but there is only one way to get all 4 pairs right.</p><p>You will get:</p><ul><li>1 point for all correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><ul><li>Argument: <code>5</code></li><li>Parameter: <code>number</code></li><li>Expression: <code>[number, number, number]</code></li><li>Function: <code>create_list</code></li></ul></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for all correct</li></ul></div></div><h2 id="question-6-1p" tabindex="-1"><a class="header-anchor" href="#question-6-1p" aria-hidden="true">#</a> Question 6 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Which one of the following statements is a bad suggestion on how to represent data?</p><ul><li>To represent the number of students in a class, one can use an integer, e.g. <code>number_of_students = 36</code>.</li><li>To represent a student with a name and an age, one can use a list containing a string and an integer, e.g. <code>student = [&quot;Alice&quot;, 21]</code>.</li><li>To represent a student with an age, one can use a dictionary with an integer, e.g. <code>student = {&quot;age&quot;: 21}</code>.</li><li>To represent the age of the oldest student in a class, one can use an integer, e.g. <code>highest_age_in_class = 29</code>.</li><li>To represent the names of many students, one can use a list with strings, e.g. <code>student_names = [&quot;Alice&quot;, &quot;Bob&quot;]</code>.</li><li>All other statements are good ways of representing data.</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>To represent a student with a name and an age, one can use a list containing a string and an integer, e.g. <code>student = [&quot;Alice&quot;, 21]</code>.</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-7-1p" tabindex="-1"><a class="header-anchor" href="#question-7-1p" aria-hidden="true">#</a> Question 7 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>The following expression:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Creates a range containing some integers. What is the sum of the integers in that range?</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>The sum is: <code>10</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-8-1p" tabindex="-1"><a class="header-anchor" href="#question-8-1p" aria-hidden="true">#</a> Question 8 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>In a Python program, when asking the user to enter a number using the <code>input()</code> function, we very often also use another function to be able to work with the number the user enters. Explain why we often need to use another function before we start working with the number the user enters, and name one of these other functions we can use.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>The <code>input()</code> function returns what the user has entered as a string, so even if the user enters the number <code>23</code>, we get it back as the string <code>&quot;23&quot;</code>. To be able to work with the number (use it in addition expressions, etc.), we need to have it as an integer or a float. We can for example use the <code>int()</code> function to convert it to an integer.</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0.5 points for <code>input()</code> always returning string, and we need the value to be integer or float</li><li>0.5 points for <code>int()</code> or <code>float()</code></li></ul></div></div><h2 id="question-9-1p" tabindex="-1"><a class="header-anchor" href="#question-9-1p" aria-hidden="true">#</a> Question 9 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What integers should be assigned to the variables <code>x</code> and <code>y</code> to slice out the values <code>&quot;a&quot;</code> and <code>&quot;b&quot;</code> in the code below?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span>
x <span class="token operator">=</span> ?
y <span class="token operator">=</span> ?
my_new_list <span class="token operator">=</span> my_list<span class="token punctuation">[</span>x<span class="token punctuation">:</span>y<span class="token punctuation">]</span>
<span class="token comment"># my_new_list should now be [&quot;a&quot;, &quot;b&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You will get:</p><ul><li>1 point for both correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p><code>x</code>: <code>0</code></p><p><code>y</code>: <code>2</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for both correct</li></ul></div></div><h2 id="question-10-1p" tabindex="-1"><a class="header-anchor" href="#question-10-1p" aria-hidden="true">#</a> Question 10 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Write the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    my_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token operator">*</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>As a list comprehension expression instead. Your own code should have the exact same meaning as the code above.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">*</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that is largely correct</li><li>Point reduction for errors: <ul><li>-0.1 points for naming the <code>my_list</code> variable wrong</li><li>-0.5 points for missing <code>[</code> and <code>]</code></li><li>-1 point for not creating the <code>my_list</code> variable</li></ul></li></ul></div></div><h2 id="question-11-1p" tabindex="-1"><a class="header-anchor" href="#question-11-1p" aria-hidden="true">#</a> Question 11 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Write the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> name <span class="token keyword">in</span> get_names<span class="token punctuation">(</span><span class="token string">&quot;students&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        my_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>As a list comprehension expression instead. Your own code should have the exact same meaning as the code above.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">for</span> name <span class="token keyword">in</span> get_names<span class="token punctuation">(</span><span class="token string">&quot;students&quot;</span><span class="token punctuation">)</span> <span class="token keyword">if</span> <span class="token number">3</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.1 points for each variable/function spelled wrong</li><li>-1 point for failing to create the <code>my_list</code> variable</li><li>-1 point for placing the <code>if</code>-part at wrong location</li><li>-1 point for mapping to wrong value</li><li>-1 point for missing <code>[</code> and <code>]</code></li><li>-0.25 points for naming the <code>my_list</code> variable wrong</li></ul></li></ul></div></div><h2 id="question-12-1p" tabindex="-1"><a class="header-anchor" href="#question-12-1p" aria-hidden="true">#</a> Question 12 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Here is a quite complex structure with information about different movies:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>movies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;action&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;GoldenEye&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">110</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mission Impossible&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">115</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Pearl Harbor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;drama&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Titanic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">180</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Love Actually&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Given this structure, write an <strong>expression</strong> that evaluates to the runtime of the movie with the name <code>Mission Impossible</code>, i.e. <code>115</code>.</p><p><strong>Note</strong>: Do not write a statement, and simply writing <code>115</code> is of course not OK; the value needs to be retrieved from the structure.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p><code>movies[&quot;action&quot;][1][&quot;runtime&quot;]</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0 points for answers being a statement</li><li>1 point for an answer that is an expression that works</li></ul></div></div><h2 id="question-13-1p" tabindex="-1"><a class="header-anchor" href="#question-13-1p" aria-hidden="true">#</a> Question 13 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Suggest how the following data in Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>books <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Harry Potter and the Sorcerer&#39;s Stone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;English&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;The Hobbit&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;English&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Can be expressed in XML format.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>books</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Harry Potter and the Sorcerer&#39;s Stone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>language</span><span class="token punctuation">&gt;</span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>language</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>The Hobbit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>language</span><span class="token punctuation">&gt;</span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>language</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>books</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.75 points for missing the <code>&lt;book&gt;</code> element</li><li>-0.25 points for surrounding values with double quotes</li><li>-1 point for using irrelevant element</li><li>-0.75 points for using <code>&lt;book1&gt;</code> and <code>&lt;book2&gt;</code> instead of <code>&lt;book&gt;</code></li><li>-0.5 points for using <code>&lt;movie&gt;</code> instead of <code>&lt;book&gt;</code></li><li>-1 point for surrounding values with <code>&lt;</code> and <code>&gt;</code></li><li>-1 point for surrounding tag names with double quotes</li></ul></li></ul></div></div><h2 id="question-14-1p" tabindex="-1"><a class="header-anchor" href="#question-14-1p" aria-hidden="true">#</a> Question 14 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Suggest how the following data in Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>books <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Harry Potter and the Sorcerer&#39;s Stone&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;English&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;The Hobbit&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;English&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Can be expressed in CSV format. Do not write any extra characters not needed, but use as few characters as possible.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-csv ext-csv line-numbers-mode"><pre class="language-csv"><code><span class="token value">Harry Potter and the Sorcerer&#39;s Stone</span><span class="token punctuation">,</span><span class="token value">English</span>
<span class="token value">The Hobbit</span><span class="token punctuation">,</span><span class="token value">English</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.5 points for writing a space after the delimiter</li><li>-0.5 points for surrounding the value with a quote character when not needed</li><li>-0.5 points for having a blank line between entries</li></ul></li></ul></div></div><h2 id="question-15-1p" tabindex="-1"><a class="header-anchor" href="#question-15-1p" aria-hidden="true">#</a> Question 15 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>When you need to use a loop in Python, explain when you should use a <code>for</code> loop, and when you should use a <code>while</code> loop.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>When the purpose of the loop is to iterate over values that are known before the loop starts (for example values in a list), then it&#39;s better to use the <code>for</code> loop.</p><p>When you can&#39;t compute a sequence of values to iterate over before the loops starts (for example when you should continue to ask the user to enter more data until the user doesn&#39;t want to enter any more data), then you should use the <code>while</code> loop.</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0.5 points for general description of when a <code>for</code> loop should be used <ul><li>Only 0.4 points if only an example is provided</li></ul></li><li>0.5 points for general description of when a <code>while</code> loop should be used <ul><li>Only 0.4 points if only an example is provided</li></ul></li><li>A few point reductions for answers that say strange things</li></ul><p><strong>Note</strong> Many students explain how the loops work as their answers. The question was not to explain how the loops work, but to explain when you should use which one.</p><p><strong>Note</strong> Many students give examples of when it&#39;s better to use the <code>for</code> loop, and when it&#39;s better to use the <code>while</code> loop. That would be an excellent answer if the question would have been <em>Give examples of when it&#39;s better to use the <code>for</code> loop, and when it&#39;s better to use the <code>while</code> loop</em>, but that is not the question.</p><p>Overall many answers have been very hard to read, but I have been quite generous with the number of points you have got on this question.</p></div></div><h2 id="question-16-1p" tabindex="-1"><a class="header-anchor" href="#question-16-1p" aria-hidden="true">#</a> Question 16 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What will be stored in the variable <code>sum</code> after the following code has been executed?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
    number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">2</span>

<span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">:</span>
        number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">1</span>

<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">list</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">3</span>

my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>

a<span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
a<span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
b<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
c<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>

<span class="token builtin">sum</span> <span class="token operator">=</span> my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><p><code>sum</code>: <code>6</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-17-1p" tabindex="-1"><a class="header-anchor" href="#question-17-1p" aria-hidden="true">#</a> Question 17 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Implement the function <code>get_month_name</code>, which receives an integer as argument representing the month of the year (<code>1</code> for <code>January</code>, <code>2</code> for <code>February</code>, etc.), and returns the name of that month in English. You only need to support the months showed in the table below.</p><table><thead><tr><th>Month of Year</th><th>Month Name</th></tr></thead><tbody><tr><td>1</td><td>January</td></tr><tr><td>2</td><td>February</td></tr><tr><td>3</td><td>March</td></tr><tr><td>4</td><td>April</td></tr><tr><td>5</td><td>May</td></tr></tbody></table><p>If the month of the year is none of the ones found in the table above, return the string <code>&quot;Invalid month&quot;</code>.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>get_month_name(3)   →   &quot;March&quot;
get_month_name(8)   →   &quot;Invalid month&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>month_names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;January&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;February&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;March&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;April&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;May&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">get_month_name</span><span class="token punctuation">(</span>month_of_year<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> month_of_year <span class="token keyword">and</span> month_of_year <span class="token operator">&lt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>month_names<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> month_names<span class="token punctuation">[</span>month_of_year <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Invalid month&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for a solution that works</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for each bad variable name</li><li>-0.1 points for each forgotten <code>:</code>, <code>=</code>, etc.</li><li>-0.1 points for using <code>(</code> and <code>)</code> to retrieve value from dict</li><li>-0.1 points for converting <code>month_of_year</code> to string</li><li>-0.2 points for not having quotes around strings</li><li>-0.2 points for having quotes around numbers</li><li>-0.25 points for not handling 0, -1, -2, etc.</li><li>-0.5 points for not checking if <code>month_of_year</code> is valid at all</li><li>-0.5 points for printing instead of returning result</li></ul></li></ul></div></div><h2 id="question-18-2p" tabindex="-1"><a class="header-anchor" href="#question-18-2p" aria-hidden="true">#</a> Question 18 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Write a program that keeps asking the user to enter an integer until the user enters <code>stop</code>. The program should then compute and print the sum of the last 3 integers the user entered. When running the program, it can look like this (bold text represents text entered by the user).</p><div style="${
    (0,server_renderer.ssrRenderStyle)({"font-family":"'Courier New'"})
  }"><p>Enter an integer or stop: <strong>2</strong><br> Enter an integer or stop: <strong>6</strong><br> Enter an integer or stop: <strong>4</strong><br> Enter an integer or stop: <strong>5</strong><br> Enter an integer or stop: <strong>2</strong><br> Enter an integer or stop: <strong>stop</strong><br> The sum of the last three entered integers is 11.</p></div><p><strong>Note</strong>: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, of course).</p><p><strong>Note</strong>: You can expect the user to actually enter a number or <code>stop</code> (no error handling needed).</p><p><strong>Note</strong>: You can expect the user to enter at least three numbers before entering <code>stop</code>.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

entered_text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

<span class="token keyword">while</span> entered_text <span class="token operator">!=</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">:</span>
    
    entered_text <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter an integer or stop: &quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> entered_text <span class="token operator">!=</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">:</span>
        numbers<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>entered_text<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">sum</span> <span class="token operator">=</span> numbers<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> number<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The sum of the last three entered integers is &quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>2 points for a program that largely works</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for unnecessary <code>break</code></li><li>-0.1 points for slicing out the last 3 numbers wrong</li><li>-0.1 points for introducing unnecessary variables</li><li>-0.1 points for each bad variable name</li><li>-0.1 points for each misspelled <code>while</code>, <code>print</code>, <code>True</code> etc.</li><li>-0.1 points for each forgotten <code>:</code>, <code>=</code>, etc.</li><li>-0.1 points for converting to <code>int</code> twice</li><li>-0.2 points for forgetting quotes around strings</li><li>-0.2 points for indentation error</li><li>-0.2 points for producing the wrong output</li><li>-0.2 points for being inconsistent with variable name convention</li><li>-0.2 points for calling functions using <code>[</code> and <code>]</code> instead of <code>(</code> and <code>)</code></li><li>-0.25 points for wrong condition in loop/not <code>break</code>ing correct</li><li>-0.25 points for not converting user input to <code>int</code>/<code>float</code></li><li>-0.25 points for having parentheses after <code>True</code></li><li>-0.25 points for adding to list wrong</li><li>-0.25 points for popping from list wrong</li><li>-0.5 points for creating list in loop</li><li>-1 point for program only creating a function, but never calling it</li></ul></li></ul></div></div><h2 id="question-19-2p" tabindex="-1"><a class="header-anchor" href="#question-19-2p" aria-hidden="true">#</a> Question 19 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Implement the function <code>are_all_of_equal_length</code>, which receives a list of strings, and returns:</p><ul><li><code>True</code> if all the strings in the list are of equal length</li><li><code>False</code> otherwise</li></ul><p>Write two different implementations of the function: one using a <code>while</code> loop, and another one using a <code>for</code> loop.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>are_all_of_equal_length([&quot;Peter&quot;, &quot;Alice&quot;, &quot;David&quot;])   →  True
are_all_of_equal_length([&quot;Peter&quot;, &quot;Alice&quot;, &quot;Lisa&quot;])    →  False
are_all_of_equal_length([])                            →  True
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># For all of the strings to be of equal length, all must have the same length as the first one.</span>
<span class="token keyword">def</span> <span class="token function">are_all_of_equal_length</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> string <span class="token keyword">in</span> strings<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">def</span> <span class="token function">are_all_of_equal_length</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">:</span>
    index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        index <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for the function with the <code>for</code> loop largely working</li><li>1 point for the function with the <code>while</code> loop largely working</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for each bad name</li><li>-0.1 points for unnecessary <code>else</code>/<code>pass</code></li><li>-0.2 points for indentation error</li><li>-0.2 using <code>range</code> in while</li><li>-0.2 points for being inconsistent with variable name convention</li><li>-0.2 points for forgetting to use <code>len</code></li><li>-0.25 points for going out of bounds with <code>index + 1</code></li><li>-0.25 points for not incrementing iteration variable in <code>while</code> loop</li><li>-0.25 points for not initializing iteration variable in <code>while</code> loop</li><li>-0.25 points for each implementation not handling empty list</li><li>-0.25 points for iterating over indexes in the <code>for</code> loop</li><li>-0.75 points for always returning <code>True</code>/<code>False</code> in first iteration</li></ul></li></ul></div></div><h2 id="question-20-2p" tabindex="-1"><a class="header-anchor" href="#question-20-2p" aria-hidden="true">#</a> Question 20 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Implement the function <code>keep_positive_numbers</code>, which receives a list with numbers, and should return a new list containing only the positive numbers (inclusive <code>0</code>) from the list it received.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>keep_positive_numbers([-2, 5, 3, -6, 5])   →  [5, 3, 5]
keep_positive_numbers([7, -7, -7, 8, -8, 0])  →  [7, 8, 0]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">keep_positive_numbers</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">:</span>
    positive_numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> numbers<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> number<span class="token punctuation">:</span>
            positive_numbers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>number<span class="token punctuation">)</span>
    <span class="token keyword">return</span> positive_numbers
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>2 points for a solution largely working</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for each unnecessary <code>else</code>/<code>pass</code></li><li>-0.1 points for each bad name</li><li>-0.25 points for each missed <code>def</code>, <code>:</code>, etc.</li><li>-0.25 points for iterating over indexes instead of values</li><li>-0.5 points for each indentation error</li><li>-0.5 points for adding indexes to the new list instead of the values</li><li>-0.5 points for never returning the new list</li><li>-0.5 points for creating the new list outside the function</li><li>-0.5 points for using <code>*</code> in the parameter list</li><li>-1.5 points for creating the new list inside the loop</li></ul></li></ul></div></div><h2 id="question-21-3p" tabindex="-1"><a class="header-anchor" href="#question-21-3p" aria-hidden="true">#</a> Question 21 (3p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Below is some data about houses owned by some humans.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Palace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Home&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Cabin&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s Home&quot;</span><span class="token punctuation">,</span>     <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s Cabin&quot;</span><span class="token punctuation">,</span>    <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>It&#39;s cold in the winter, and it costs money to heat the houses. To heat a single house costs:</p><ul><li>100 SEK each month...</li><li>...+ 10 SEK each month for each room in the house...</li><li>...+ 50 SEK each month for each window in the house</li></ul><p>Write code that first computes which human that must pay the highest heating cost per month for all the houses that human owns combined, and then prints the name of the house that human owns with the highest heating cost. The correct answer for the data given above is <code>Alice&#39;s Palace</code>.</p><p><strong>Note</strong>: Your code should still work as expected if one adds/removes houses to/from the list. <code>Alice</code> and <code>Bob</code> are not the only ones who can own a house.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>heat_base_cost_per_house <span class="token operator">=</span> <span class="token number">100</span>
heat_cost_per_room <span class="token operator">=</span> <span class="token number">10</span>
heat_cost_per_window <span class="token operator">=</span> <span class="token number">50</span>

<span class="token comment"># Compute the total costs for each human.</span>
costs_by_owner <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># {&quot;Alice&quot;: 123, ...}</span>

<span class="token keyword">for</span> house <span class="token keyword">in</span> houses<span class="token punctuation">:</span>
    
    <span class="token keyword">if</span> house<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span> <span class="token keyword">not</span> <span class="token keyword">in</span> costs_by_owner<span class="token punctuation">:</span>
        costs_by_owner<span class="token punctuation">[</span>house<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
    
    costs_by_owner<span class="token punctuation">[</span>house<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">(</span>
        heat_base_cost_per_house <span class="token operator">+</span>
        heat_cost_per_room <span class="token operator">*</span> house<span class="token punctuation">[</span><span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">]</span> <span class="token operator">+</span>
        heat_cost_per_window <span class="token operator">*</span> house<span class="token punctuation">[</span><span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>

<span class="token comment"># Find the owner with the highest cost.</span>
most_expensive_owner <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
most_expensive_cost <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

<span class="token keyword">for</span> owner <span class="token keyword">in</span> costs_by_owner<span class="token punctuation">:</span>
    cost <span class="token operator">=</span> costs_by_owner<span class="token punctuation">[</span>owner<span class="token punctuation">]</span>
    <span class="token keyword">if</span> most_expensive_cost <span class="token operator">&lt;</span> cost<span class="token punctuation">:</span>
        most_expensive_owner <span class="token operator">=</span> owner
        most_expensive_cost <span class="token operator">=</span> cost

<span class="token comment"># Find the house with highest cost owned by the owner with highest cost.</span>
houses_to_consider <span class="token operator">=</span> <span class="token punctuation">[</span>h <span class="token keyword">for</span> h <span class="token keyword">in</span> houses <span class="token keyword">if</span> h<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> most_expensive_owner<span class="token punctuation">]</span>

most_expensive_house <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
most_expensive_house_cost <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

<span class="token keyword">for</span> h <span class="token keyword">in</span> houses_to_consider<span class="token punctuation">:</span>
    
    cost <span class="token operator">=</span> <span class="token punctuation">(</span>
        heat_cost_per_house <span class="token operator">+</span>
        heat_cost_per_room <span class="token operator">*</span> h<span class="token punctuation">[</span><span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">]</span> <span class="token operator">+</span>
        heat_cost_per_window <span class="token operator">*</span> h<span class="token punctuation">[</span><span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> most_expensive_house_cost <span class="token operator">&lt;</span> cost<span class="token punctuation">:</span>
        most_expensive_house <span class="token operator">=</span> h
        most_expensive_house_cost <span class="token operator">=</span> cost

<span class="token keyword">print</span><span class="token punctuation">(</span>most_expensive_house<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for computing the costs for all owners</li><li>1 point for finding the owner with the highest cost</li><li>1 point for finding the most expensive house belonging to the owner with the highest cost</li><li>Point reduction for small mistakes or doing weird things: *</li></ul></div></div><h2 id="question-22-2p" tabindex="-1"><a class="header-anchor" href="#question-22-2p" aria-hidden="true">#</a> Question 22 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>The class <code>MultiplicationTest</code> represents a multiplication test the user can take. The one using the class gets to determine which multiplication table the test should cover (e.g. <code>4</code>), and the test should then contain the questions <code>0</code> to <code>9</code> (e.g <code>4 * 0</code>, <code>4 * 1</code>, ..., <code>4 * 9</code>). The class has the following constructor/methods:</p><table><thead><tr><th>Constructor/Method</th><th>Description</th></tr></thead><tbody><tr><td><code>MultiplicationTest(table)</code></td><td>Creates a new test for the given <code>table</code>(number).</td></tr><tr><td><code>is_all_questions_answered()</code></td><td>Returns <code>True</code> if all questions in the test has been answered, otherwise <code>False</code></td></tr><tr><td><code>get_current_question()</code></td><td>Returns a string with the current question to answer, e.g. <code>&quot;4 * 7&quot;</code></td></tr><tr><td><code>process_answer_to_current_question(answer)</code></td><td>Registers the number <code>answer</code> as the user&#39;s answer to the current question in the test. Will also set the next question in the test to be the current question in the test.</td></tr><tr><td><code>get_score()</code></td><td>Returns the percentage (number between <code>0</code> and <code>100</code>) of the correct answers the user entered.</td></tr></tbody></table><p>Write a program making use of the class. In the program, you should first ask the user which multiplication table to use. Then you should continue to show the current question in the test and ask the user to enter an answer for that question until all questions have been answered, after which you should print the result.</p><p>Sample usage:</p><div style="${
    (0,server_renderer.ssrRenderStyle)({"font-family":"monospace","padding-left":"2em"})
  }"><p>Enter multiplication table: <strong>4</strong><br> Enter the product of 4 * 0: <strong>-1</strong><br> Enter the product of 4 * 1: <strong>4</strong><br> Enter the product of 4 * 2: <strong>8</strong><br> Enter the product of 4 * 3: <strong>12</strong><br> Enter the product of 4 * 4: <strong>16</strong><br> Enter the product of 4 * 5: <strong>20</strong><br> Enter the product of 4 * 6: <strong>24</strong><br> Enter the product of 4 * 7: <strong>28</strong><br> Enter the product of 4 * 8: <strong>32</strong><br> Enter the product of 4 * 9: <strong>36</strong><br> You got 90.0% correct.</p></div><p><strong>Note</strong>: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, of course).</p><p><strong>Note</strong>: No error handling is needed; you can expect the user to always enter a number.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>table <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter multiplication table: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

test <span class="token operator">=</span> MultiplicationTest<span class="token punctuation">(</span>table<span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> test<span class="token punctuation">.</span>is_all_questions_answered<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    answer <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter the product of &quot;</span><span class="token operator">+</span>test<span class="token punctuation">.</span>get_current_question<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    test<span class="token punctuation">.</span>process_answer_to_current_question<span class="token punctuation">(</span>answer<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You got &quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>get_score<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;% correct.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>2 points for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.25 points for each unnecessary method call</li><li>-0.25 points for each printed output not looking as expected</li><li>-0.25 points for <code>int + string</code></li><li>-0.25 points for spelling name of variable wrong</li><li>-1 point if everything is kind of right, but not using a loop</li><li>-1.5 points for not using any object, but only calling functions</li></ul></li></ul></div></div><h2 id="question-23-2p" tabindex="-1"><a class="header-anchor" href="#question-23-2p" aria-hidden="true">#</a> Question 23 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>The class <code>MultiplicationTest</code> represents a multiplication test the user can take. The one using the class gets to determine which multiplication table the test should cover (e.g. <code>4</code>), and the test should then contain the questions <code>0</code> to <code>9</code> (e.g <code>4 * 0</code>, <code>4 * 1</code>, ..., <code>4 * 9</code>). The class has the following constructor/methods:</p><table><thead><tr><th>Constructor/Method</th><th>Description</th></tr></thead><tbody><tr><td><code>MultiplicationTest(table)</code></td><td>Creates a new test for the given <code>table</code> (number).</td></tr><tr><td><code>is_all_questions_answered()</code></td><td>Returns <code>True</code> if all questions in the test has been answered, otherwise <code>False</code></td></tr><tr><td><code>get_current_question()</code></td><td>Returns a string with the current question to answer, e.g. <code>&quot;4 * 7&quot;</code></td></tr><tr><td><code>process_answer_to_current_question(answer)</code></td><td>Registers the number <code>answer</code> as the user&#39;s answer to the current question in the test. Will also set the next question in the test to be the current question in the test.</td></tr><tr><td><code>get_score()</code></td><td>Returns the percentage (number between <code>0</code> and <code>100</code>) of the correct answers the user entered.</td></tr></tbody></table><p>Implement the <code>MultiplicationTest</code> class per the description above.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MultiplicationTest</span><span class="token punctuation">:</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> table<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>table <span class="token operator">=</span> table
        self<span class="token punctuation">.</span>current_question <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>number_of_correct_answers <span class="token operator">=</span> <span class="token number">0</span>
    
    <span class="token keyword">def</span> <span class="token function">is_all_questions_answered</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        number_of_questions <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>current_question <span class="token operator">==</span> number_of_questions
    
    <span class="token keyword">def</span> <span class="token function">get_current_question</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>table<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot; * &quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>current_question<span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">process_answer_to_current_question</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> answer<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>table <span class="token operator">*</span> self<span class="token punctuation">.</span>current_question <span class="token operator">==</span> answer<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>number_of_correct_answers <span class="token operator">+=</span> <span class="token number">1</span>
        self<span class="token punctuation">.</span>current_question <span class="token operator">+=</span> <span class="token number">1</span>
    
    <span class="token keyword">def</span> <span class="token function">get_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        number_of_questions <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>number_of_correct_answers <span class="token operator">/</span> number_of_questions <span class="token operator">*</span> <span class="token number">100</span>
    
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0.5 points for having the constructor, methods and all parameters correct</li><li>1.5 points for largely having the implementation of the constructor and all methods correct</li><li>Point reduction for errors: <ul><li>-0.25 points for each constructor/method that contains an error</li><li>-1.5 points for answers using variables or class variables instead of instance variables</li></ul></li></ul></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2021-12-15.html.vue?vue&type=template&id=0a221656

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2021-12-15.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2021_12_15_html = (__exports__);

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

/***/ 2407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-33b819ef",
  "path": "/courses/introduction-to-script-programming/exams/exam-2021-12-15.html",
  "title": "Exam 2021-12-15",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Information",
      "slug": "information",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 1 (1p)",
      "slug": "question-1-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 2 (1p)",
      "slug": "question-2-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 3 (1p)",
      "slug": "question-3-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 4 (1p)",
      "slug": "question-4-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 5 (1p)",
      "slug": "question-5-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 6 (1p)",
      "slug": "question-6-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 7 (1p)",
      "slug": "question-7-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 8 (1p)",
      "slug": "question-8-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 9 (1p)",
      "slug": "question-9-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 10 (1p)",
      "slug": "question-10-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 11 (1p)",
      "slug": "question-11-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 12 (1p)",
      "slug": "question-12-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 13 (1p)",
      "slug": "question-13-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 14 (1p)",
      "slug": "question-14-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 15 (1p)",
      "slug": "question-15-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 16 (1p)",
      "slug": "question-16-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 17 (1p)",
      "slug": "question-17-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 18 (2p)",
      "slug": "question-18-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 19 (2p)",
      "slug": "question-19-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 20 (2p)",
      "slug": "question-20-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 21 (3p)",
      "slug": "question-21-3p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 22 (2p)",
      "slug": "question-22-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 23 (2p)",
      "slug": "question-23-2p",
      "children": []
    }
  ],
  "filePathRelative": "courses/introduction-to-script-programming/exams/exam-2021-12-15.md",
  "git": {
    "updatedTime": 1639926155000
  }
}


/***/ })

};
;
//# sourceMappingURL=7691.app.js.map