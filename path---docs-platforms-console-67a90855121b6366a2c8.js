webpackJsonp([7500716215872],{528:function(n,a){n.exports={data:{markdownRemark:{html:'<h2 id="build-your-first-console-bot"><a href="#build-your-first-console-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build Your First Console Bot</h2>\n<p>Import <code class="language-text">ConsoleBot</code> from <code class="language-text">bottender</code> package and create a bot instance:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> ConsoleBot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleBot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then, define your handler function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'received text.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isPayload<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'received payload.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>call <code class="language-text">createRuntime</code> to start the interactive mode:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">createRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="interaction"><a href="#interaction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interaction</h2>\n<h3 id="sending-text"><a href="#sending-text" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending Text</h3>\n<p>Send text to the bot. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&gt; MY_TEXT</code></pre>\n      </div>\n<h3 id="sending-payload"><a href="#sending-payload" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sending Payload</h3>\n<p>Send payload to the bot. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&gt; /payload THIS_IS_MY_COOL_PAYLOAD</code></pre>\n      </div>\n<h2 id="fallback-unsupported-methods"><a href="#fallback-unsupported-methods" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fallback Unsupported Methods</h2>\n<p><code class="language-text">ConsoleBot</code> only has native support for <code class="language-text">sendText</code>. After setting <code class="language-text">fallbackMethods</code> to <code class="language-text">true</code>, bot can call any methods on the context and fallback all of response to text:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  fallbackMethods<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendImage</span><span class="token punctuation">(</span><span class="token string">\'https://example.com/vr.jpg\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendButtonTemplate</span><span class="token punctuation">(</span><span class="token string">\'What do you want to do next?\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'web_url\'</span><span class="token punctuation">,</span>\n      url<span class="token punctuation">:</span> <span class="token string">\'https://petersapparel.parseapp.com\'</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'Show Website\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'postback\'</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'Start Chatting\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> <span class="token string">\'USER_DEFINED_PAYLOAD\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>It will get responses like below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Bot &gt; Hello World\nBot &gt; sendImage: [&quot;https://example.com/vr.jpg&quot;]\nBot &gt; sendButtonTemplate: [&quot;What do you want to do next?&quot;,[{&quot;type&quot;:&quot;web_url&quot;,&quot;url&quot;:&quot;https://petersapparel.parseapp.com&quot;,&quot;title&quot;:&quot;Show Website&quot;},{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;Start Chatting&quot;,&quot;payload&quot;:&quot;USER_DEFINED_PAYLOAD&quot;}]]</code></pre>\n      </div>\n<p>It\'s helpful when you want to test bots of any platforms on the console.</p>\n<h2 id="exit-runtime"><a href="#exit-runtime" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exit Runtime</h2>\n<p>To exit console runtime, just type <code class="language-text">/exit</code> or <code class="language-text">/quit</code> as message.</p>\n<h2 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h2>\n<ul>\n<li><a href="https://github.com/Yoctol/bottender/blob/master/examples/console-hello-world/index.js">console-hello-world</a> example.</li>\n</ul>',frontmatter:{title:"Console",date:"March 13, 2018",author:null},fields:{path:"docs/Platforms-Console.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Platforms-Console/"}}}});
//# sourceMappingURL=path---docs-platforms-console-67a90855121b6366a2c8.js.map