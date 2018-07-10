webpackJsonp([23194109765310],{521:function(n,a){n.exports={data:{markdownRemark:{html:'<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<p>Every time when there is an incoming request, the <a href="./APIReference-Handler">handler</a> will be called and parse out events from the request. Afterwards, the Event instance is attached to <a href="./APIReference-Context">context</a> so that you can access it via <code class="language-text">context.event</code>.<br>\nBottender help you recognize what kind of messages or payloads are sent from users. In this way, you are able to handle intents more easily.</p>\n<p>Check <a href="./APIReference-Event">Event Reference</a> to get more information about event.</p>\n<h2 id="pattern-matching"><a href="#pattern-matching" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pattern Matching</h2>\n<h3 id="string-comparison"><a href="#string-comparison" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String Comparison</h3>\n<p>Here\'s an example handler which only handles specific commands:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> <span class="token string">\'/start\'</span><span class="token punctuation">:</span>\n        <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Running....\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">case</span> <span class="token string">\'/help\'</span><span class="token punctuation">:</span>\n        <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`\n/start   start to run\n/help    quick help on &lt;command>\n        `</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token keyword">default</span><span class="token punctuation">:</span>\n        <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not a valid command.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="regular-expression"><a href="#regular-expression" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Regular Expression</h3>\n<p>Exactly matching looks a little rigid. Consider using some equality operators to determine whether receiving greeting words or not:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> text <span class="token punctuation">}</span> <span class="token operator">=</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>message<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>text <span class="token operator">===</span> <span class="token string">\'hello\'</span> <span class="token operator">||</span> text <span class="token operator">===</span> <span class="token string">\'hi\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>It only matches <code class="language-text">hello</code> and <code class="language-text">hi</code>. Neither <code class="language-text">Hello</code> nor <code class="language-text">hi~</code> would work in the above example.</p>\n<p>We can use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp">regular expressions</a> for more general pattern matching. It will be helpful when building rule-based logic.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> text <span class="token punctuation">}</span> <span class="token operator">=</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>message<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex">/^h(ello|i)/i</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now, not only <code class="language-text">hello</code>, <code class="language-text">hi</code> but also <code class="language-text">Hello</code>, <code class="language-text">hi~</code> will be matched.</p>\n<h2 id="leverage-nlu-technologies"><a href="#leverage-nlu-technologies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Leverage NLU Technologies</h2>\n<p>If you want to have more general intent recognition, you can leverage modern NLU (Natural Language Understanding) technologies. They can help you recognize the intent of user input sentences. There are several online services you can choose from, for example:</p>\n<ul>\n<li><a href="https://www.luis.ai/">LUIS.ai</a> from Microsoft</li>\n<li><a href="https://dialogflow.com/">Dialogflow</a> (formerly api.ai) from Google</li>\n<li><a href="https://wit.ai/">wit.ai</a> from Facebook</li>\n<li><a href="https://www.ibm.com/watson/">Watson</a> from IBM</li>\n</ul>',frontmatter:{title:"Intents",date:"October 13, 2017",author:null},fields:{path:"docs/Guides-Intents.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Intents/"}}}});
//# sourceMappingURL=path---docs-guides-intents-38123beea8ea50f44a2b.js.map