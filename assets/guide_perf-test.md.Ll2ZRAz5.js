import{_ as s,o as i,c as a,R as t}from"./chunks/framework.HemA9V-5.js";const n="/assets/Example.Cart.Add@SENT.gFfM7ajb.png",l="/assets/Example.Cart.Add@PROCESSED.8iI1ra1D.png",e="/assets/Example.Order.Create@SENT.tQfijkgN.png",h="/assets/Example.Order.Create@PROCESSED.YAYWEtCE.png",m=JSON.parse('{"title":"性能评测","description":"","frontmatter":{},"headers":[],"relativePath":"guide/perf-test.md","filePath":"guide/perf-test.md","lastUpdated":1703828922000}'),p={name:"guide/perf-test.md"},k=t(`<h1 id="性能评测" tabindex="-1">性能评测 <a class="header-anchor" href="#性能评测" aria-label="Permalink to &quot;性能评测&quot;">​</a></h1><ul><li>测试代码：<a href="https://github.com/Ahoo-Wang/Wow/tree/main/example" target="_blank" rel="noreferrer">Example</a></li><li>测试场景：加入购物车、下单</li><li>命令发送等待模式（<code>WaitStrategy</code>）：<code>SENT</code>、<code>PROCESSED</code></li></ul><h2 id="部署环境" tabindex="-1">部署环境 <a class="header-anchor" href="#部署环境" aria-label="Permalink to &quot;部署环境&quot;">​</a></h2><ul><li><a href="https://github.com/Ahoo-Wang/Wow/tree/main/deploy/example/perf/redis.yaml" target="_blank" rel="noreferrer">Redis</a></li><li><a href="https://github.com/Ahoo-Wang/Wow/tree/main/deploy/example/perf/mongo.yaml" target="_blank" rel="noreferrer">MongoDB</a></li><li><a href="https://github.com/Ahoo-Wang/Wow/tree/main/deploy/example/perf/kafka.yaml" target="_blank" rel="noreferrer">Kafka</a></li><li><a href="https://github.com/Ahoo-Wang/Wow/tree/main/deploy/example/perf/config/mongo_kafka_redis.yaml" target="_blank" rel="noreferrer">Application-Config</a></li><li><a href="https://github.com/Ahoo-Wang/Wow/tree/main/deploy/example/perf/deployment.yaml" target="_blank" rel="noreferrer">Application-Deployment</a></li></ul><h2 id="压测报告" tabindex="-1">压测报告 <a class="header-anchor" href="#压测报告" aria-label="Permalink to &quot;压测报告&quot;">​</a></h2><h3 id="加入购物车" tabindex="-1">加入购物车 <a class="header-anchor" href="#加入购物车" aria-label="Permalink to &quot;加入购物车&quot;">​</a></h3><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">POST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {{host}}/cart/{{$uuid}}/add_cart_item</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Stage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCESSED</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 30000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Request-Id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {{$uuid}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{$uuid}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;quantity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">%</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    client.test(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;Request executed successfully&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> function()</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        client.assert(response.status</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> ===</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 200,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;Response status is not 200&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span></code></pre></div><ul><li><a href="../public/images/perf/Example.Cart.Add@SENT.pdf">详细报告(PDF)-SENT</a></li><li><a href="../public/images/perf/Example.Cart.Add@PROCESSED.pdf">详细报告(PDF)-PROCESSED</a></li></ul><blockquote><p>命令等待策略（<code>WaitStrategy</code>）为<code>SENT</code>模式，加入购物车命令（<code>AddCartItem</code>）写请求 API 经过 2 分钟的压测，平均 TPS 为 <em>59625</em>，峰值为 <em>82312</em>，平均响应时间为 <em>29</em> 毫秒。</p></blockquote><p><img src="`+n+'" alt="AddCartItem-SENT"></p><blockquote><p>命令等待策略（<code>WaitStrategy</code>）为<code>PROCESSED</code>模式，加入购物车命令（<code>AddCartItem</code>）写请求 API 经过 2 分钟的压测，平均 TPS 为 <em>18696</em>，峰值为 <em>24141</em>，平均响应时间为 <em>239</em> 毫秒。</p></blockquote><p><img src="'+l+`" alt="AddCartItem-PROCESSED"></p><h3 id="下单" tabindex="-1">下单 <a class="header-anchor" href="#下单" aria-label="Permalink to &quot;下单&quot;">​</a></h3><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">POST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {{host}}/customer/{{$uuid}}/tenant/{{$uuid}}/order</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Content-Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Stage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PROCESSED</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Wait-Timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 30000</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Command-Request-Id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {{$uuid}}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;fromCart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;productId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{$uuid}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;price&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;quantity&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;country&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;china&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;province&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shanghai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;city&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shanghai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;district&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;huangpu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;detail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;renmin road 1000&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">%</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    client.test(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;Request executed successfully&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> function()</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        client.assert(response.status</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> ===</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> 200,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;Response status is not 200&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">%}</span></span></code></pre></div><ul><li><a href="../public/images/perf/Example.Order.Create@SENT.pdf">详细报告(PDF)-SENT</a></li><li><a href="../public/images/perf/Example.Order.Create@PROCESSED.pdf">详细报告(PDF)-PROCESSED</a></li></ul><blockquote><p>命令等待策略（<code>WaitStrategy</code>）为<code>SENT</code>模式，下单命令（<code>CreateOrder</code>）写请求 API 经过 2 分钟的压测，平均 TPS 为 <em>47838</em>，峰值为 <em>86200</em>，平均响应时间为 <em>217</em> 毫秒。</p></blockquote><p><img src="`+e+'" alt="CreateOrder-SENT"></p><blockquote><p>命令等待策略（<code>WaitStrategy</code>）为<code>PROCESSED</code>模式，下单命令（<code>CreateOrder</code>）写请求 API 经过 2 分钟的压测，平均 TPS 为 <em>18230</em>，峰值为 <em>25506</em>，平均响应时间为 <em>268</em> 毫秒。</p></blockquote><p><img src="'+h+'" alt="CreateOrder-PROCESSED"></p>',19),r=[k];function o(d,E,c,g,y,u){return i(),a("div",null,r)}const C=s(p,[["render",o]]);export{m as __pageData,C as default};
