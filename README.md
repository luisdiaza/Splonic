Front-End Coding Challenge for Splash
Technologies used: HTML5, CSS3, JavaScript, JQuery, ScrollReveal

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">

  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><p><a href="https://scrollrevealjs.org"><img src="https://camo.githubusercontent.com/bcba2683fa4ffc9961ff5e350c14a8d433f2df8a/68747470733a2f2f7363726f6c6c72657665616c6a732e6f72672f6173736574732f7363726f6c6c72657665616c2d7265706f2d6865616465722e706e67" alt="ScrollReveal — Easy scroll animations for web and mobile browsers." data-canonical-src="https://scrollrevealjs.org/assets/scrollreveal-repo-header.png" style="max-width:100%;"></a></p>
<p><a href="https://scrollrevealjs.org"><img src="https://camo.githubusercontent.com/2541acda98c5f3555cfc765e24f3845cb714a77e/68747470733a2f2f7363726f6c6c72657665616c6a732e6f72672f6173736574732f7363726f6c6c72657665616c2d64656d6f2e706e67" alt="ScrollReveal Demo" data-canonical-src="https://scrollrevealjs.org/assets/scrollreveal-demo.png" style="max-width:100%;"></a></p>
<hr>
<p><a href="https://github.com/jlmakes/scrollreveal.js/blob/master/LICENSE.md"><img src="https://camo.githubusercontent.com/0d26b531e3752dd7fd705963ff7f16bb16a76267/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d3132383363332e737667" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-1283c3.svg" style="max-width:100%;"></a>
<a href="https://npmjs.org/package/scrollreveal"><img src="https://camo.githubusercontent.com/a9af335e0af95dd4bf41e19296bbfc92359cefd9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7363726f6c6c72657665616c2e7376673f7374796c653d666c6174" alt="NPM version" data-canonical-src="https://img.shields.io/npm/v/scrollreveal.svg?style=flat" style="max-width:100%;"></a>
<a href="https://npmjs.org/package/scrollreveal"><img src="https://camo.githubusercontent.com/b8b5bc73f707792ef03cec562c41284a88f959c0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7363726f6c6c72657665616c2e7376673f7374796c653d666c6174" alt="NPM downloads" data-canonical-src="https://img.shields.io/npm/dm/scrollreveal.svg?style=flat" style="max-width:100%;"></a></p>
<ul>
<li>3.3KB minified and Gzipped</li>
<li>No dependencies</li>
<li>From the <a href="https://camo.githubusercontent.com/3fb3047c452fd259059a0f7fc1921e8fe82e1bbd/687474703a2f2f692e696d6775722e636f6d2f6f584a6d64747a2e676966" target="_blank"><img src="https://camo.githubusercontent.com/3fb3047c452fd259059a0f7fc1921e8fe82e1bbd/687474703a2f2f692e696d6775722e636f6d2f6f584a6d64747a2e676966" alt="heart" data-canonical-src="http://i.imgur.com/oXJmdtz.gif" style="max-width:100%;"></a> of <a href="https://twitter.com/jlmakes">@jlmakes</a></li>
</ul>
<hr>
<h2><a id="user-content-1-getting-started" class="anchor" href="#1-getting-started" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Getting Started</h2>
<h4><a id="user-content-11-installation" class="anchor" href="#11-installation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.1. Installation</h4>
<p>The simplest method is to copy paste this snippet just before your closing <code>&lt;/body&gt;</code> tag.</p>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>https://unpkg.com/scrollreveal/dist/scrollreveal.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
<p>But you can also:</p>
<ul>
<li><a href="https://github.com/jlmakes/scrollreveal.js/archive/master.zip">Download ZIP</a></li>
<li><code>npm install scrollreveal</code></li>
<li><code>bower install scrollreveal</code></li>
</ul>
<h4><a id="user-content-12-the-basics" class="anchor" href="#12-the-basics" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.2. The Basics</h4>
<p>The <code>reveal()</code> method is the primary API, and makes it easy to create and manage various types of animations.</p>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><span class="pl-c">&lt;!--</span> HTML <span class="pl-c">--&gt;</span></span>
&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>&gt; Bar &lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> JavaScript</span>
<span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.foo<span class="pl-pds">'</span></span>);
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.bar<span class="pl-pds">'</span></span>);</pre></div>
<h2><a id="user-content-2-configuration" class="anchor" href="#2-configuration" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Configuration</h2>
<p>Passing a configuration object to <code>ScrollReveal()</code> changes the defaults for all reveals, and passing <code>reveal()</code> a configuration object customizes that reveal set further.</p>
<h4><a id="user-content-21-practical-example" class="anchor" href="#21-practical-example" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.1. Practical Example</h4>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> Changing the defaults</span>
<span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>({ reset<span class="pl-k">:</span> <span class="pl-c1">true</span> });

<span class="pl-c"><span class="pl-c">//</span> Customizing a reveal set</span>
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.foo<span class="pl-pds">'</span></span>, { duration<span class="pl-k">:</span> <span class="pl-c1">200</span> });</pre></div>
<h4><a id="user-content-22-the-starting-defaults" class="anchor" href="#22-the-starting-defaults" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.2. The Starting Defaults</h4>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> 'bottom', 'left', 'top', 'right'</span>
origin<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bottom<span class="pl-pds">'</span></span>,

<span class="pl-c"><span class="pl-c">//</span> Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.</span>
distance<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>20px<span class="pl-pds">'</span></span>,

<span class="pl-c"><span class="pl-c">//</span> Time in milliseconds.</span>
duration<span class="pl-k">:</span> <span class="pl-c1">500</span>,
delay<span class="pl-k">:</span> <span class="pl-c1">0</span>,

<span class="pl-c"><span class="pl-c">//</span> Starting angles in degrees, will transition from these values to 0 in all axes.</span>
rotate<span class="pl-k">:</span> { x<span class="pl-k">:</span> <span class="pl-c1">0</span>, y<span class="pl-k">:</span> <span class="pl-c1">0</span>, z<span class="pl-k">:</span> <span class="pl-c1">0</span> },

<span class="pl-c"><span class="pl-c">//</span> Starting opacity value, before transitioning to the computed opacity.</span>
opacity<span class="pl-k">:</span> <span class="pl-c1">0</span>,

<span class="pl-c"><span class="pl-c">//</span> Starting scale value, will transition from this value to 1</span>
scale<span class="pl-k">:</span> <span class="pl-c1">0.9</span>,

<span class="pl-c"><span class="pl-c">//</span> Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.</span>
easing<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>cubic-bezier(0.6, 0.2, 0.1, 1)<span class="pl-pds">'</span></span>,

<span class="pl-c"><span class="pl-c">//</span> `&lt;html&gt;` is the default reveal container. You can pass either:</span>
<span class="pl-c"><span class="pl-c">//</span> DOM Node, e.g. document.querySelector('.fooContainer')</span>
<span class="pl-c"><span class="pl-c">//</span> Selector, e.g. '.fooContainer'</span>
container<span class="pl-k">:</span> <span class="pl-c1">window</span>.<span class="pl-smi">document</span>.<span class="pl-c1">documentElement</span>,

<span class="pl-c"><span class="pl-c">//</span> true/false to control reveal animations on mobile.</span>
mobile<span class="pl-k">:</span> <span class="pl-c1">true</span>,

<span class="pl-c"><span class="pl-c">//</span> true:  reveals occur every time elements become visible</span>
<span class="pl-c"><span class="pl-c">//</span> false: reveals occur once as elements become visible</span>
reset<span class="pl-k">:</span> <span class="pl-c1">false</span>,

<span class="pl-c"><span class="pl-c">//</span> 'always' — delay for all reveal animations</span>
<span class="pl-c"><span class="pl-c">//</span> 'once'   — delay only the first time reveals occur</span>
<span class="pl-c"><span class="pl-c">//</span> 'onload' - delay only for animations triggered by first load</span>
useDelay<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>always<span class="pl-pds">'</span></span>,

<span class="pl-c"><span class="pl-c">//</span> Change when an element is considered in the viewport. The default value</span>
<span class="pl-c"><span class="pl-c">//</span> of 0.20 means 20% of an element must be visible for its reveal to occur.</span>
viewFactor<span class="pl-k">:</span> <span class="pl-c1">0.2</span>,

<span class="pl-c"><span class="pl-c">//</span> Pixel values that alter the container boundaries.</span>
<span class="pl-c"><span class="pl-c">//</span> e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.</span>
<span class="pl-c"><span class="pl-c">//</span> --</span>
<span class="pl-c"><span class="pl-c">//</span> Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png</span>
viewOffset<span class="pl-k">:</span> { top<span class="pl-k">:</span> <span class="pl-c1">0</span>, right<span class="pl-k">:</span> <span class="pl-c1">0</span>, bottom<span class="pl-k">:</span> <span class="pl-c1">0</span>, left<span class="pl-k">:</span> <span class="pl-c1">0</span> },

<span class="pl-c"><span class="pl-c">//</span> Callbacks that fire for each triggered element reveal, and reset.</span>
<span class="pl-en">beforeReveal</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">domEl</span>) {},
<span class="pl-en">beforeReset</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">domEl</span>) {},

<span class="pl-c"><span class="pl-c">//</span> Callbacks that fire for each completed element reveal, and reset.</span>
<span class="pl-en">afterReveal</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">domEl</span>) {},
<span class="pl-en">afterReset</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">domEl</span>) {}</pre></div>
<h2><a id="user-content-3-advanced" class="anchor" href="#3-advanced" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Advanced</h2>
<h4><a id="user-content-31-sequenced-animations" class="anchor" href="#31-sequenced-animations" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.1. Sequenced Animations</h4>
<p>You can pass a sequence interval (in milliseconds) to the <code>reveal()</code> method, making sequenced animations a breeze.</p>
<blockquote>
<p><strong>Note:</strong> The interval is the time until the next element in the sequence begins its reveal, which is separate from the time until the element’s animation completes. In this example, the animation duration is 2 seconds, but the sequence interval is 50 milliseconds.</p>
</blockquote>
<div class="highlight highlight-source-js"><pre><span class="pl-c"><span class="pl-c">//</span> interval passed to reveal</span>
<span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>({ duration<span class="pl-k">:</span> <span class="pl-c1">2000</span> });
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.box<span class="pl-pds">'</span></span>, <span class="pl-c1">50</span>);

<span class="pl-c"><span class="pl-c">//</span> or...</span>

<span class="pl-c"><span class="pl-c">//</span> interval and custom config passed to reveal</span>
<span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.box<span class="pl-pds">'</span></span>, { duration<span class="pl-k">:</span> <span class="pl-c1">2000</span> }, <span class="pl-c1">50</span>);</pre></div>
<p><a href="https://cloud.githubusercontent.com/assets/2044842/13556788/a7dda6c6-e3e2-11e5-93fa-d6a227cbb5dc.gif" target="_blank"><img src="https://cloud.githubusercontent.com/assets/2044842/13556788/a7dda6c6-e3e2-11e5-93fa-d6a227cbb5dc.gif" alt="sequencer" style="max-width:100%;"></a></p>
<h4><a id="user-content-32-working-with-dom-nodes" class="anchor" href="#32-working-with-dom-nodes" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.2. Working With DOM Nodes</h4>
<p>You are not just limited to using selectors with <code>reveal()</code>, it also accepts a Node or Node List as the first argument.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>foo<span class="pl-pds">'</span></span>));
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-c1">document</span>.<span class="pl-c1">querySelectorAll</span>(<span class="pl-s"><span class="pl-pds">'</span>.bar<span class="pl-pds">'</span></span>));</pre></div>
<h4><a id="user-content-33-custommultiple-containers" class="anchor" href="#33-custommultiple-containers" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.3. Custom/Multiple Containers</h4>
<p>The default container is the viewport, but you can assign any container to any reveal set.</p>
<blockquote>
<p><strong>Tip:</strong> ScrollReveal works just as well with horizontally scrolling containers too!</p>
</blockquote>
<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>fooContainer<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt; Foo 1 &lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt; Foo 2 &lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt; Foo 3 &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;

&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>barContainer<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>&gt; Bar 1 &lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>&gt; Bar 2 &lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>bar<span class="pl-pds">"</span></span>&gt; Bar 3 &lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();

<span class="pl-c"><span class="pl-c">//</span> as a DOM node...</span>
<span class="pl-k">var</span> fooContainer <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>fooContainer<span class="pl-pds">'</span></span>);
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.foo<span class="pl-pds">'</span></span>, { container<span class="pl-k">:</span> fooContainer });

<span class="pl-c"><span class="pl-c">//</span> as a selector...</span>
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.bar<span class="pl-pds">'</span></span>, { container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>#barContainer<span class="pl-pds">'</span></span> });</pre></div>
<h4><a id="user-content-34-asynchronous-content" class="anchor" href="#34-asynchronous-content" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.4. Asynchronous Content</h4>
<p>The <code>sync()</code> method updates asynchronously loaded content with any existing reveal sets.</p>
<p><em>Example:</em></p>
<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><span class="pl-c">&lt;!--</span> index.html <span class="pl-c">--&gt;</span></span>
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>fooContainer<span class="pl-pds">"</span></span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt;foo&lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt;foo&lt;/<span class="pl-ent">div</span>&gt;
  &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt;foo&lt;/<span class="pl-ent">div</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;

<span class="pl-c"><span class="pl-c">&lt;!--</span> ajax.html <span class="pl-c">--&gt;</span></span>
&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt;foo async&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt;foo async&lt;/<span class="pl-ent">div</span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>foo<span class="pl-pds">"</span></span>&gt;foo async&lt;/<span class="pl-ent">div</span>&gt;</pre></div>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> fooContainer, content, sr, xmlhttp;

fooContainer <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>fooContainer<span class="pl-pds">'</span></span>);

sr <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();
<span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.foo<span class="pl-pds">'</span></span>, { container<span class="pl-k">:</span> fooContainer });

<span class="pl-c"><span class="pl-c">//</span> Setup a new asynchronous request...</span>
xmlhttp <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();
<span class="pl-smi">xmlhttp</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {
  <span class="pl-k">if</span> (<span class="pl-smi">xmlhttp</span>.<span class="pl-c1">readyState</span> <span class="pl-k">==</span> <span class="pl-c1">XMLHttpRequest</span>.<span class="pl-c1">DONE</span>) {
    <span class="pl-k">if</span> (<span class="pl-smi">xmlhttp</span>.<span class="pl-c1">status</span> <span class="pl-k">==</span> <span class="pl-c1">200</span>) {

      <span class="pl-c"><span class="pl-c">//</span> Turn our response into HTML...</span>
      <span class="pl-k">var</span> content <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">'</span>div<span class="pl-pds">'</span></span>);
      <span class="pl-smi">content</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-smi">xmlhttp</span>.<span class="pl-c1">responseText</span>;
      content <span class="pl-k">=</span> <span class="pl-smi">content</span>.<span class="pl-c1">childNodes</span>;

      <span class="pl-c"><span class="pl-c">//</span> Add each element to the DOM...</span>
      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">content</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {
        <span class="pl-smi">fooContainer</span>.<span class="pl-c1">appendChild</span>(content[ i ]);
      };

      <span class="pl-c"><span class="pl-c">//</span> Finally!</span>
      <span class="pl-smi">sr</span>.<span class="pl-en">sync</span>();
    }
  }
}

<span class="pl-smi">xmlhttp</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">'</span>GET<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>ajax.html<span class="pl-pds">'</span></span>, <span class="pl-c1">true</span>);
<span class="pl-smi">xmlhttp</span>.<span class="pl-c1">send</span>();</pre></div>
<h2><a id="user-content-4-tips" class="anchor" href="#4-tips" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. Tips</h2>
<h4><a id="user-content-41-order-matters" class="anchor" href="#41-order-matters" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.1. Order Matters</h4>
<p>It’s important that <code>reveal()</code> calls be made as close to last in your page as possible, so that:</p>
<ul>
<li>Elements on the page have loaded</li>
<li>Any other 3rd party libraries have had a chance to run</li>
<li>Any other styles added to your elements wont be overwritten</li>
</ul>
<p><em>Example:</em></p>
<div class="highlight highlight-text-html-basic"><pre>&lt;!DOCTYPE html&gt;
&lt;<span class="pl-ent">html</span>&gt;
  &lt;<span class="pl-ent">head</span>&gt;
    <span class="pl-c"><span class="pl-c">&lt;!--</span> load and instantiate ScrollReveal first <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>js/scrollreveal.min.js<span class="pl-pds">"</span></span>&gt;<span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();</span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;
  &lt;/<span class="pl-ent">head</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;

    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooContainer<span class="pl-pds">"</span></span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> make reveal calls last <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.fooReveal<span class="pl-pds">'</span></span>, { container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>.fooContainer<span class="pl-pds">'</span></span> });</span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;

  &lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>
<h4><a id="user-content-42-improve-user-experience" class="anchor" href="#42-improve-user-experience" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.2. Improve User Experience</h4>
<p>In most cases, your elements will start at <code>opacity: 0</code> so they can fade in. However, since JavaScript loads after the page begins rendering, you might see your elements flickering as they begin rendering before being hidden by ScrollReveal's JavaScript.</p>
<p>The ideal solution is to <strong>set your reveal elements visibility to hidden</strong> in the <code>&lt;head&gt;</code> of your page, to ensure they render hidden while your JavaScript loads:</p>
<p><em>Continuing our example from 4.1.</em></p>
<div class="highlight highlight-text-html-basic"><pre>&lt;!DOCTYPE html&gt;
&lt;<span class="pl-ent">html</span>&gt;
  &lt;<span class="pl-ent">head</span>&gt;
    <span class="pl-c"><span class="pl-c">&lt;!--</span> load and instantiate ScrollReveal first <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>js/scrollreveal.min.js<span class="pl-pds">"</span></span>&gt;<span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Add class to &lt;html&gt; if ScrollReveal is supported</span></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Note: this method is deprecated, and only works in version 3</span></span>
<span class="pl-s1">      <span class="pl-k">if</span> (<span class="pl-smi">sr</span>.<span class="pl-en">isSupported</span>()) {</span>
<span class="pl-s1">        <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">'</span>sr<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">      }</span>
<span class="pl-s1"></span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;

    &lt;<span class="pl-ent">style</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">/*</span> Ensure elements load hidden before ScrollReveal runs <span class="pl-c">*/</span></span></span>
<span class="pl-s1">      <span class="pl-e">.sr</span> <span class="pl-e">.fooReveal</span> { <span class="pl-c1"><span class="pl-c1">visibility</span></span>: <span class="pl-c1">hidden</span>; }</span>
<span class="pl-s1"></span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">style</span>&gt;

  &lt;/<span class="pl-ent">head</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;

    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooContainer<span class="pl-pds">"</span></span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;

    <span class="pl-c"><span class="pl-c">&lt;!--</span> make reveal calls last <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.fooReveal<span class="pl-pds">'</span></span>, { container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>.fooContainer<span class="pl-pds">'</span></span> });</span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;

  &lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>
<blockquote>
<p><strong>Note:</strong> If you prefer not to put styles in the <code>&lt;head&gt;</code> of your page, including this style in your primary stylesheet will still help with element flickering since your CSS will likely load before your JavaScript.</p>
</blockquote>
<h4><a id="user-content-43-add-perspective-to-3d-rotation" class="anchor" href="#43-add-perspective-to-3d-rotation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.3. Add Perspective to 3D Rotation</h4>
<p>ScrollReveal supports 3d rotation out of the box, but you may want to emphasize the effect by specifying a perspective property on your container.</p>
<p><em>Continuing our example from 4.2.</em></p>
<div class="highlight highlight-text-html-basic"><pre>&lt;!DOCTYPE html&gt;
&lt;<span class="pl-ent">html</span>&gt;
  &lt;<span class="pl-ent">head</span>&gt;
    <span class="pl-c"><span class="pl-c">&lt;!--</span> load and instantiate ScrollReveal first <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>js/scrollreveal.min.js<span class="pl-pds">"</span></span>&gt;<span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;
    &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c1">window</span>.<span class="pl-smi">sr</span> <span class="pl-k">=</span> <span class="pl-en">ScrollReveal</span>();</span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Add class to &lt;html&gt; if ScrollReveal is supported</span></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> Note: this method is deprecated, and only works in version 3</span></span>
<span class="pl-s1">      <span class="pl-k">if</span> (<span class="pl-smi">sr</span>.<span class="pl-en">isSupported</span>()) {</span>
<span class="pl-s1">        <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">'</span>sr<span class="pl-pds">'</span></span>);</span>
<span class="pl-s1">      }</span>
<span class="pl-s1"></span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;

    &lt;<span class="pl-ent">style</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">/*</span> Ensure elements load hidden before ScrollReveal runs <span class="pl-c">*/</span></span></span>
<span class="pl-s1">      <span class="pl-e">.sr</span> <span class="pl-e">.fooReveal</span> { <span class="pl-c1"><span class="pl-c1">visibility</span></span>: <span class="pl-c1">hidden</span>; }</span>
<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">/*</span> add perspective to your container <span class="pl-c">*/</span></span></span>
<span class="pl-s1">      <span class="pl-e">.fooContainer</span> { <span class="pl-c1"><span class="pl-c1">perspective</span></span>: <span class="pl-c1">800<span class="pl-k">px</span></span>; }</span>
<span class="pl-s1"></span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">style</span>&gt;

  &lt;/<span class="pl-ent">head</span>&gt;
  &lt;<span class="pl-ent">body</span>&gt;

    &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooContainer<span class="pl-pds">"</span></span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
      &lt;<span class="pl-ent">div</span> <span class="pl-e">class</span>=<span class="pl-s"><span class="pl-pds">"</span>fooReveal<span class="pl-pds">"</span></span>&gt; Foo &lt;/<span class="pl-ent">div</span>&gt;
    &lt;/<span class="pl-ent">div</span>&gt;

  <span class="pl-c"><span class="pl-c">&lt;!--</span> make reveal calls last <span class="pl-c">--&gt;</span></span>
    &lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">      <span class="pl-c"><span class="pl-c">//</span> use rotation in reveal configuration</span></span>
<span class="pl-s1">      <span class="pl-smi">sr</span>.<span class="pl-en">reveal</span>(<span class="pl-s"><span class="pl-pds">'</span>.fooReveal<span class="pl-pds">'</span></span>, { container<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>.fooContainer<span class="pl-pds">'</span></span>, rotate<span class="pl-k">:</span> {x<span class="pl-k">:</span> <span class="pl-c1">65</span>} });</span>
<span class="pl-s1">    </span><span class="pl-s1">&lt;</span>/<span class="pl-ent">script</span>&gt;

  &lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>
<h2><a id="user-content-5-appendix" class="anchor" href="#5-appendix" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. Appendix</h2>
<p>Open source under the <a href="https://github.com/jlmakes/scrollreveal.js/blob/master/LICENSE.md">MIT License</a>. ©2014–2016 Julian Lloyd.</p>
<h4><a id="user-content-51-browser-compatibility" class="anchor" href="#51-browser-compatibility" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5.1. Browser Compatibility</h4>
<p>ScrollReveal works on any JavaScript enabled browser that supports both <a href="http://caniuse.com/#search=transform">CSS Transform</a> and <a href="http://caniuse.com/#search=transitions">CSS Transition</a>. This includes Internet Explorer 10+, and most modern desktop and mobile browsers.</p>
<h4><a id="user-content-52-issues-and-reporting-bugs" class="anchor" href="#52-issues-and-reporting-bugs" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5.2. Issues and Reporting Bugs</h4>
<p><strong>Please search existing issues, before creating a new one;</strong> every issue is labeled and attended carefully. If you open a duplicate issue, it will be closed immediately.</p>
<p>If you cannot find your issue/bug in a previous ticket, please include details such as your browser, any other 3rd party JavaScript libraries you are using, and ideally a code sample demonstrating the problem. (Try <a href="http://jsbin.com/nuqapopefo/1/edit?html,output">JSBin</a>)</p>
<h4><a id="user-content-53-pull-requests" class="anchor" href="#53-pull-requests" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5.3. Pull Requests</h4>
<p>Feeling inspired? Please contribute! Optimizations, compatibility and bug fixes are greatly preferred over new features, but don’t be shy. One thing sorely missing from ScrollReveal right now is a test suite.</p>
<h4><a id="user-content-54-showcase" class="anchor" href="#54-showcase" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5.4. Showcase</h4>
<p>Here are some cool sites using ScrollReveal:</p>
<ul>
<li><a href="https://www.sequoiacap.com">Sequoia Capital</a></li>
<li><a href="http://petravic.us/">Andrius Petravic</a></li>
<li><a href="http://www.ispg.co/">ISPG Co.</a></li>
<li><a href="https://www.whiterabbitexpress.com/">White Rabit Express</a></li>
</ul>
<p>Want to see your page here? Please send me your work (or of others) using ScrollReveal on Twitter (<a href="https://twitter.com/jlmakes">@jlmakes</a>)</p>
<h4><a id="user-content-55-special-thanks" class="anchor" href="#55-special-thanks" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5.5. Special Thanks</h4>
<p>ScrollReveal was inspired by the talented <a href="https://twitter.com/crnacura">Manoela Ilic</a> and her <a href="http://tympanus.net/codrops/2013/07/18/on-scroll-effect-layout/">cbpScroller.js</a>.</p>
</article>
  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>






  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>



    </div>
  </div>

  </div>


<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.15182s from github-fe-134ed95.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>



    <script crossorigin="anonymous" integrity="sha256-c3IPAnuzF/zrEYwlknXaS+Xvo0TCRqEjQaaMMWjO6qc=" src="https://assets-cdn.github.com/assets/frameworks-73720f027bb317fceb118c259275da4be5efa344c246a12341a68c3168ceeaa7.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-GN/IkMekqEwUJ/XFXLI40SgKITaRc3nE7ro5WulQaG8=" src="https://assets-cdn.github.com/assets/github-18dfc890c7a4a84c1427f5c55cb238d1280a2136917379c4eeba395ae950686f.js"></script>




  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>
