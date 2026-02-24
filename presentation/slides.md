---
theme: default
title: "The Three Waves of Building Software"
info: "Vibe Coding Course — Lecture 1"
fonts:
  sans: Plus Jakarta Sans
  mono: Fira Code
highlighter: shiki
drawings:
  persist: false
mdc: true
---

# The Three Waves of Building Software

Vibe Coding: Building Software in the Age of AI

<div class="abs-br m-6 text-sm opacity-50">
Lecture 1
</div>

<!--
Welcome to the first session of the Vibe Coding course. Today we trace the entire arc of how software gets built — from hand-written code decades ago, through drag-and-drop platforms, to today's AI tools that let you describe what you want in plain English. By the end you'll have a shared vocabulary and mental model for the rest of the course.
-->

---
layout: default
---

# What You'll Learn

<div class="flex flex-col gap-5 mt-6">
  <div class="flex items-start gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0 mt-2"></span> <div><div class="font-bold text-base">How We Got Here</div><div class="text-sm text-dark/60">From hand-written code to drag-and-drop builders to AI that writes entire apps</div></div></div>
  <div class="flex items-start gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0 mt-2"></span> <div><div class="font-bold text-base">Two Kinds of AI Tools</div><div class="text-sm text-dark/60">Coding assistants that augment developers vs app builders that let anyone ship</div></div></div>
  <div class="flex items-start gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0 mt-2"></span> <div><div class="font-bold text-base">Vibes vs Engineering</div><div class="text-sm text-dark/60">The behaviors that create debt and the disciplines that prevent it</div></div></div>
  <div class="flex items-start gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0 mt-2"></span> <div><div class="font-bold text-base">What This Means for You</div><div class="text-sm text-dark/60">How AI is reshaping teams, careers, and where the opportunity is</div></div></div>
</div>

<!--
Four threads run through today's session. First, we'll trace how software development evolved across three waves — each one opening the door wider while introducing new risks. Then we'll zoom into Wave 3 and distinguish the two camps: AI coding assistants for developers versus AI app builders for everyone. Third, we'll look at what goes wrong when you use these tools on autopilot — the vibe coding trap — and what disciplined usage looks like instead. Finally, we'll cover the real numbers: adoption data, team restructuring, career shifts, and where the opportunity is. We'll revisit these at the close.
-->

---
layout: statement
---

# Software development is the art of translating human intent into machine instructions

The gap between thinking in logic and writing syntax defines who can — and cannot — build.

<!--
Before we talk about waves, we need a shared baseline. Software development means writing instructions — source code — that a computer can execute. Source code is just text files. A compiler or interpreter translates those instructions into running software. The fundamental barrier has always been the gap between knowing what you want the computer to do and being able to express it in a programming language's syntax. That gap is what each wave tries to close.
-->

---
layout: section
---

# The Three Waves

From hand-written code to plain-English instructions

<!--
Let's start at the beginning. Software development has gone through three major waves, each lowering the barrier to who can build and what they can create.
-->

---
layout: default
class: green-slide
---

<div class="flex flex-col justify-center h-full">

<div class="text-4xl font-800 mb-6" style="margin:0 0 1.5rem 0">The Three Waves at a Glance</div>

<div class="grid grid-cols-3 gap-5">

<div class="content-card">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-xs text-gray-400">1960s–2010s</span>
    <span class="tool-badge !text-xs !px-2 !py-0.5">Wave 1</span>
  </div>
  <div class="font-bold text-lg mb-2">Traditional Coding</div>
  <ul class="text-sm space-y-1 text-dark/60">
    <li>Developers write source code</li>
    <li>Full control and flexibility</li>
    <li>Steep learning curve</li>
    <li>Years to become proficient</li>
    <li>Only 0.3% can participate</li>
  </ul>
</div>

<div class="content-card">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-xs text-gray-400">2010s–2020s</span>
    <span class="tool-badge !text-xs !px-2 !py-0.5">Wave 2</span>
  </div>
  <div class="font-bold text-lg mb-2">Low-Code / No-Code</div>
  <ul class="text-sm space-y-1 text-dark/60">
    <li>Visual drag-and-drop builders</li>
    <li>Pre-built components and logic</li>
    <li>Faster for standard use cases</li>
    <li>Vendor lock-in tradeoff</li>
    <li>Customization hits a ceiling</li>
  </ul>
</div>

<div class="content-card">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-xs text-gray-400">2023–Present</span>
    <span class="tool-badge !text-xs !px-2 !py-0.5">Wave 3</span>
  </div>
  <div class="font-bold text-lg mb-2">AI-Assisted Development</div>
  <ul class="text-sm space-y-1 text-dark/60">
    <li>Natural language as interface</li>
    <li>AI generates entire codebases</li>
    <li>Copilots for developers</li>
    <li>Autonomous app builders</li>
    <li>Anyone can build software</li>
  </ul>
</div>

</div>

</div>

<!--
Here's the full timeline of all three waves. Notice how each wave progressively lowers the barrier to who can build software, while introducing new tradeoffs. Wave 3 splits into two distinct approaches — assistants for developers and vibe coding for everyone.
-->

---
layout: default
---

<div class="absolute inset-0 grid grid-cols-[45%_55%] overflow-hidden">

<div class="flex flex-col bg-[#C6E94E] relative overflow-hidden">
  <div class="absolute -top-10 -left-10 w-48 h-48 bg-[#A8C840] opacity-25 rounded-full"></div>
  <div class="absolute bottom-12 left-6 w-36 h-20 bg-[#A8C840] opacity-15 -skew-x-12 rounded-2xl"></div>
  <div class="relative z-10 px-14 pt-12">
    <p class="text-sm font-600 tracking-widest uppercase opacity-60 mb-2">Wave 1</p>
    <h1 class="text-4xl font-800 leading-tight">Traditional Coding</h1>
  </div>
  <div class="flex-1 flex items-center justify-center px-10">
    <img src="/placeholder.jpg" class="max-h-full max-w-full rounded-xl object-contain" alt="Traditional coding" />
  </div>
</div>

<div class="flex flex-col justify-center px-14 py-10 bg-white h-full">
  <div class="mb-4">
    <div class="big-number" style="font-size:4.5rem; line-height:1">0.3%</div>
    <p class="text-sm text-dark/70 mt-2 font-500">of the global population can write production software</p>
  </div>
  <div class="space-y-4">
    <div>
      <div class="font-bold text-base mb-1">Hand-Written Code</div>
      <div class="text-sm text-dark/60 leading-snug">Developers write every instruction manually in languages like Python, JavaScript, or Java.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Decades of Dominance</div>
      <div class="text-sm text-dark/60 leading-snug">Still the backbone of all software today — full control, full flexibility, full complexity.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">High Barrier</div>
      <div class="text-sm text-dark/60 leading-snug">Years of learning required. Every business competes for a tiny talent pool.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Limited Reach</div>
      <div class="text-sm text-dark/60 leading-snug">Only a fraction of the population can participate in building software.</div>
    </div>
  </div>
</div>

</div>

<!--
Wave 1 is traditional hand-written code. For decades this was the only way software got built. Developers write every line manually in languages like Python, JavaScript, or Java. This gives complete control and flexibility, but the learning curve is steep — it takes years to become proficient. The result is that only about 0.3% of the global population can write production software. Every business that needs custom software competes for a tiny talent pool.
-->

---
layout: default
---

<div class="absolute inset-0 grid grid-cols-[45%_55%] overflow-hidden">

<div class="flex flex-col bg-[#C6E94E] relative overflow-hidden">
  <div class="absolute -top-10 -left-10 w-48 h-48 bg-[#A8C840] opacity-25 rounded-full"></div>
  <div class="absolute bottom-12 left-6 w-36 h-20 bg-[#A8C840] opacity-15 -skew-x-12 rounded-2xl"></div>
  <div class="relative z-10 px-14 pt-12">
    <div class="text-sm font-600 tracking-widest uppercase opacity-60 mb-2">Wave 2</div>
    <div class="text-4xl font-800 leading-tight" style="margin:0">Low-Code / No-Code</div>
  </div>
  <div class="flex-1 flex items-center justify-center px-10">
    <img src="/placeholder.jpg" class="max-h-full max-w-full rounded-xl object-contain" alt="Low-code platforms" />
  </div>
</div>

<div class="flex flex-col justify-center px-14 py-10 bg-white h-full">
  <div class="mb-4">
    <div class="big-number" style="font-size:4.5rem; line-height:1">10x</div>
    <div class="text-sm text-dark/70 mt-2 font-500">more people can build compared to Wave 1</div>
  </div>
  <div class="space-y-4">
    <div>
      <div class="font-bold text-base mb-1">Visual Builders</div>
      <div class="text-sm text-dark/60 leading-snug">Drag-and-drop interfaces with pre-built components — Bubble, OutSystems, Retool, Power Platform.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Lower Barrier</div>
      <div class="text-sm text-dark/60 leading-snug">Non-developers can build real internal tools and simple apps without writing code.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Vendor Lock-In</div>
      <div class="text-sm text-dark/60 leading-snug">You're tied to the platform's ecosystem. If pricing changes or it shuts down, migration is painful.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Customization Ceiling</div>
      <div class="text-sm text-dark/60 leading-snug">Great for standard use cases, but complex or highly custom applications quickly hit limits.</div>
    </div>
  </div>
</div>

</div>

<!--
Wave 2 brought visual tools — drag and drop interfaces where you assemble applications from pre-built components. Platforms like Bubble, OutSystems, and Microsoft Power Platform lowered the barrier significantly. Non-developers can build real internal tools and simple apps. But there are clear constraints: you're locked into the platform's ecosystem, customization hits a ceiling, and if the vendor changes pricing or shuts down, migration is painful.
-->

---
layout: quote
---

# "English is the hottest programming language"

— Andrej Karpathy

<!--
Andrej Karpathy's statement captures the shift perfectly. Natural language is becoming the primary interface for building software. This has massive implications for who can participate in software creation. But — and this is where it gets nuanced — just talking to an AI is not enough.
-->

---
layout: section
---

# Wave 3: AI-Assisted Development

The biggest shift in how software gets built since the invention of programming itself

<!--
Wave 3 is fundamentally different from the first two waves. Instead of giving people better tools to write code or visual builders to avoid code, AI can now generate code from natural language. This wave splits into two camps: AI coding assistants that augment developers, and vibe coding tools that let anyone build software by describing what they want.
-->

---
layout: default
---

<div class="flex flex-col justify-center h-full">

<div class="text-3xl font-800 mb-5" style="margin:0 0 1.25rem 0">The Rise of AI Coding</div>

<div class="relative">
  <div class="absolute left-1 top-0 bottom-0 w-0.5 bg-[#C6E94E]/40"></div>

  <div class="flex gap-4 mb-4 relative">
    <div class="w-2.5 h-2.5 rounded-full bg-gray-300 mt-1.5 z-10 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-sm">2014–2021 — Niche AI Era</div>
      <div class="text-xs text-dark/40 mb-0.5">Kite, TabNine, GPT-3, Codex, Copilot</div>
      <div class="text-sm text-dark/60">From early ML autocomplete to the first LLM-powered code generation. AI coding exists but stays niche.</div>
    </div>
  </div>

  <div class="flex gap-4 mb-4 relative">
    <div class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] mt-1.5 z-10 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-sm">2022 — LLM Chat</div>
      <div class="text-xs text-dark/40 mb-0.5">ChatGPT</div>
      <div class="text-sm text-dark/60">Chat-based AI reaches 100M users. Developers write, explain, and debug code through conversation.</div>
    </div>
  </div>

  <div class="flex gap-4 mb-4 relative">
    <div class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] mt-1.5 z-10 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-sm">2023 — AI Coding Assistant</div>
      <div class="text-xs text-dark/40 mb-0.5">Claude, Cursor, v0</div>
      <div class="text-sm text-dark/60">Multiple AI models and dedicated code editors launch. Competition drives rapid improvement.</div>
    </div>
  </div>

  <div class="flex gap-4 mb-4 relative">
    <div class="w-2.5 h-2.5 rounded-full bg-[#A8C840] mt-1.5 z-10 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-sm">2024 — AI App Builder</div>
      <div class="text-xs text-dark/40 mb-0.5">Bolt.new, Lovable, Replit Agent</div>
      <div class="text-sm text-dark/60">Full-stack apps from prompts. Non-developers ship real products. Platforms hit $100M ARR in months.</div>
    </div>
  </div>

  <div class="flex gap-4 relative">
    <div class="w-2.5 h-2.5 rounded-full bg-[#A8C840] mt-1.5 z-10 flex-shrink-0"></div>
    <div>
      <div class="font-bold text-sm">2025+ — Vibe Coding</div>
      <div class="text-xs text-dark/40 mb-0.5">Claude Code, Copilot Agent Mode</div>
      <div class="text-sm text-dark/60">"Vibe coding" enters the vocabulary. AI evolves from tools to autonomous coding agents.</div>
    </div>
  </div>

</div>

</div>

<!--
The timeline of AI coding tools shows how fast this space has moved. From early ML autocomplete in 2014 to vibe coding platforms reaching $100M ARR in months — the pace of change is accelerating, not slowing down.
-->

---
layout: default
---

# Wave 3a: AI Coding Assistants

<div class="p-6">

<div class="flex gap-6">
<div class="flex-1">

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Lives inside your code editor</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Suggests, completes, and generates code</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Developer stays in control</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Lowers effort, not the knowledge bar</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Chat, autocomplete, and inline edits</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Fits into existing workflows and git</div>
</div>

</div>
<img src="/placeholder.jpg" class="w-2/5 rounded-xl object-cover opacity-80" alt="AI coding assistants" />
</div>

</div>

<div class="absolute bottom-14 left-14 flex items-center gap-2">
  <span class="text-sm text-gray-400 mr-1">Tools:</span>
  <span class="tool-badge">Cursor</span>
  <span class="tool-badge">GitHub Copilot</span>
  <span class="tool-badge">Claude Code</span>
</div>

<!--
Wave 3 splits into two distinct categories. Wave 3a is AI coding assistants — tools like Cursor, GitHub Copilot, and Claude Code that live inside a developer's code editor. They suggest code completions, generate functions from comments, and help debug errors. Crucially, the developer is still in the driver's seat. They read every line, review the suggestions, and make the final decisions. These tools lower the effort for people who already know how to code, but they don't eliminate the need to understand code.
-->

---
layout: default
---

# Wave 3a: Tradeoffs

<div class="grid grid-cols-2 gap-x-8 gap-y-7 mt-4">

<div class="font-bold text-xl text-[#7AB648]">Advantages</div>
<div class="font-bold text-xl text-[#C8644A]">Disadvantages</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Full Control</div>
  <div class="text-sm text-dark/60 ml-4">You own every line of code and can modify anything at any level of the stack.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Requires Programming Knowledge</div>
  <div class="text-sm text-dark/60 ml-4">You still need to understand code to use these tools effectively.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Any Tech Stack</div>
  <div class="text-sm text-dark/60 ml-4">Works with whatever languages, frameworks, and infrastructure you choose.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Must Debug AI Output</div>
  <div class="text-sm text-dark/60 ml-4">AI suggestions aren't always correct — you need to read and verify every change.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Handles Scale</div>
  <div class="text-sm text-dark/60 ml-4">Suited for large, complex codebases and production-grade applications.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Steep Learning Curve</div>
  <div class="text-sm text-dark/60 ml-4">Non-developers can't just pick these up — coding fundamentals are a prerequisite.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Developer Understands the Code</div>
  <div class="text-sm text-dark/60 ml-4">You can maintain, extend, and troubleshoot because you know what's happening.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Subtle Bugs</div>
  <div class="text-sm text-dark/60 ml-4">AI can introduce hard-to-spot errors that require experience to catch.</div>
</div>

</div>

<!--
The tradeoffs for AI coding assistants mirror traditional coding with a productivity boost. You keep full control and can use any technology, but you still need to know how to code. The AI accelerates your work but can also introduce subtle bugs that require experience to catch. It's a power tool for skilled builders, not an autopilot.
-->

---
layout: default
---

# Wave 3b: AI App Builder

<div class="p-6">

<div class="flex gap-6">
<div class="flex-1">

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Describe what you want in plain English</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Tool builds the entire application</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> No code editor, no programming needed</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Karpathy coined "vibe coding" (Feb 2025)</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Visual-first, prompt-driven workflow</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Deploy straight from the platform</div>
</div>

</div>
<img src="/placeholder.jpg" class="w-2/5 rounded-xl object-cover opacity-80" alt="Vibe coding" />
</div>

</div>

<div class="absolute bottom-14 left-14 flex items-center gap-2">
  <span class="text-sm text-gray-400 mr-1">Tools:</span>
  <span class="tool-badge">Bolt</span>
  <span class="tool-badge">v0</span>
  <span class="tool-badge">Replit Agent</span>
  <span class="tool-badge">Lovable</span>
</div>

<!--
Wave 3b is true vibe coding — the term Andrej Karpathy coined in February 2025. Tools like Bolt, v0, Replit Agent, and Lovable let you describe what you want in natural language, and the tool builds the entire application. There's no code editor, no terminal, no programming knowledge required. You focus on the vibes — what the product should look and feel like — and the AI handles all the code. This is a fundamentally different experience from AI coding assistants.
-->

---
layout: default
---

# Wave 3b: Tradeoffs

<div class="grid grid-cols-2 gap-x-8 gap-y-7 mt-4">

<div class="font-bold text-xl text-[#7AB648]">Advantages</div>
<div class="font-bold text-xl text-[#C8644A]">Disadvantages</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> No Coding Required</div>
  <div class="text-sm text-dark/60 ml-4">Anyone who can describe an idea can build a working app.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Limited Customization</div>
  <div class="text-sm text-dark/60 ml-4">Hard to go beyond what the platform supports out of the box.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Idea to Prototype in Minutes</div>
  <div class="text-sm text-dark/60 ml-4">Ship a working MVP faster than ever before.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Hard to Debug</div>
  <div class="text-sm text-dark/60 ml-4">When things break, you can't read or fix the code yourself.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Accessible to Everyone</div>
  <div class="text-sm text-dark/60 ml-4">Designers, PMs, and founders can build without a dev team.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Vendor Lock-in</div>
  <div class="text-sm text-dark/60 ml-4">Your app lives on the platform — moving it elsewhere is painful.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Great for MVPs</div>
  <div class="text-sm text-dark/60 ml-4">Perfect for validating ideas and simple internal tools.</div>
</div>

<div>
  <div class="font-bold text-base mb-1 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Doesn't Scale</div>
  <div class="text-sm text-dark/60 ml-4">Complex apps with custom logic quickly outgrow these tools.</div>
</div>

</div>

<!--
True vibe coding dramatically lowers the barrier — anyone who can describe what they want can build software. The speed from idea to working prototype is remarkable. But the tradeoffs are real: customization is limited to what the tool supports, debugging is difficult when the AI produces broken output, you're locked into the platform, and complex or highly custom applications may exceed what these tools can handle. It's a spectrum — great for MVPs and simple tools, risky for complex production systems.
-->

---
layout: section
class: '!bg-[#C8644A]'
---

# Easy Start, Real Problems

<div class="text-lg text-black/70 mt-2">Speed always comes with tradeoffs — know them before they find you.</div>

<!--
Every tool that makes something faster also hides complexity somewhere. The easier it is to get started, the harder it can be to finish. Speed creates blind spots: you skip steps you don't understand, build on foundations you can't inspect, and accumulate debt you don't notice until it's too late. This isn't unique to AI — it's a universal pattern in technology. Let's look at the specific ways it shows up.
-->

---
layout: default
---

# Easy Start, Real Problems

<div class="grid grid-cols-2 gap-x-8 gap-y-7 mt-6">

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Hallucinated Code</div>
    <div class="text-sm text-dark/60 ml-4">Suggests things that don't exist — looks right, fails at runtime.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Confidently Wrong</div>
    <div class="text-sm text-dark/60 ml-4">Plausible output with subtle errors that pass a quick glance.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Context Amnesia</div>
    <div class="text-sm text-dark/60 ml-4">Forgets earlier decisions, contradicts its own architecture.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Prototype Prison</div>
    <div class="text-sm text-dark/60 ml-4">10 minutes to build, 10 hours to make it production-ready.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Feature Ceiling</div>
    <div class="text-sm text-dark/60 ml-4">Simple changes become impossible without understanding the code.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Skill Atrophy</div>
    <div class="text-sm text-dark/60 ml-4">Auto-accepting erodes your ability to reason about what you build.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Maintenance Trap</div>
    <div class="text-sm text-dark/60 ml-4">Can't iterate on code you don't understand.</div>
  </div>

  <div>
    <div class="font-bold text-base flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Breaks in the Wild</div>
    <div class="text-sm text-dark/60 ml-4">Works in preview, falls apart on real devices and edge cases.</div>
  </div>

</div>

---
layout: section
---

# The Vibe Coding Trap

<!--
We introduced vibe coding as a category of tools. But it's also a set of behaviors — patterns that feel productive but create the problems we just saw. Here's what vibe coding actually looks like in practice.
-->

---
layout: default
---

# The Vibe Coding Trap

<div class="grid grid-cols-2 gap-x-12 mt-6">
<div class="flex flex-col gap-5">

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> "Accept All"</div>
<div class="text-sm text-dark/60 ml-5">You stop reading diffs — every AI suggestion gets accepted without review.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Copy-Paste Debugging</div>
<div class="text-sm text-dark/60 ml-5">Error message goes straight back to the AI with zero analysis.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Prompt Until It Works</div>
<div class="text-sm text-dark/60 ml-5">Bug won't fix? Ask for random changes until it disappears.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Beyond Comprehension</div>
<div class="text-sm text-dark/60 ml-5">The codebase grows past what you can explain or navigate.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Skip the Fundamentals</div>
<div class="text-sm text-dark/60 ml-5">Why learn how it works when AI can generate the answer?</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#C8644A] inline-block flex-shrink-0"></span> Ship the Demo</div>
<div class="text-sm text-dark/60 ml-5">It works on screen — close enough. Testing can wait.</div>
</div>

</div>
<div class="flex items-center justify-center h-full min-h-[300px]">
<img src="/placeholder.jpg" class="rounded-xl object-cover w-full h-full" />
</div>
</div>

<!--
These behaviors come straight from Karpathy's original description of vibe coding — "you just see things, say things, run things, and copy paste things, and it mostly works." He described this as fine for throwaway weekend projects. The trap is when these habits carry over to real work. Each one maps to a problem from the previous slide: "Accept All" leads to hallucinated code shipping to production. Copy-paste debugging means you never understand the root cause. Prompting until it works creates fragile fixes. Beyond comprehension is how you end up in prototype prison. Recognizing these patterns is the first step — and the bridge to vibe engineering.
-->

---
layout: section
---

# From Vibes to Engineering

<!--
So if those are the vibe coding behaviors, what does the disciplined version look like? Let's talk about vibe engineering — using AI tools with intention, oversight, and craft.
-->

---
layout: default
---

# From Vibes to Engineering

<div class="grid grid-cols-2 gap-x-12 mt-6">
<div class="flex items-center justify-center h-full min-h-[300px]">
<img src="/placeholder.jpg" class="rounded-xl object-cover w-full h-full" />
</div>
<div class="flex flex-col gap-5">

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Disciplined Tooling</div>
<div class="text-sm text-dark/60 ml-5">Combine Wave 3a + 3b tools — autocomplete and agents working together.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Human Oversight</div>
<div class="text-sm text-dark/60 ml-5">Review, test, and validate — never ship what you haven't verified.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Architecture First</div>
<div class="text-sm text-dark/60 ml-5">Plan before prompting — structure prevents prototype prison.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Test Everything</div>
<div class="text-sm text-dark/60 ml-5">Automated tests catch what quick glances miss.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Own Your Code</div>
<div class="text-sm text-dark/60 ml-5">Understand every line — if you can't explain it, don't ship it.</div>
</div>

<div>
<div class="font-bold text-base flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#7AB648] inline-block flex-shrink-0"></span> Continuous Learning</div>
<div class="text-sm text-dark/60 ml-5">Use AI to learn faster, not to skip learning entirely.</div>
</div>

</div>
</div>

<!--
Vibe engineering flips every root cause into a discipline. Instead of blind trust, you have human oversight and testing. Instead of speed over structure, you plan your architecture before prompting. Instead of autopilot mode, you own your code and use AI to learn faster. Anthropic's own research found that only 0 to 20 percent of engineering tasks can be fully delegated to AI — the rest still requires your judgment, your review, your understanding. That's the difference between vibe coding and vibe engineering.
-->

---
layout: section
---

# The Landscape Today

<!--
Now that we understand the three waves, let's look at where things actually stand. The adoption numbers, the team changes, and the real-world results — both successes and failures.
-->

---
layout: default
class: green-slide
---

# By the Numbers

<div class="grid grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
  <div class="content-card text-center">
    <div class="stat-value">82%</div>
    <div class="text-sm text-dark/60 mt-1">of developers use AI tools weekly</div>
  </div>
  <div class="content-card text-center">
    <div class="stat-value">60%</div>
    <div class="text-sm text-dark/60 mt-1">of work integrates AI assistance</div>
  </div>
  <div class="content-card text-center">
    <div class="stat-value">3x</div>
    <div class="text-sm text-dark/60 mt-1">faster shipping for AI-proficient devs</div>
  </div>
  <div class="content-card text-center">
    <div class="stat-value">~20%</div>
    <div class="text-sm text-dark/60 mt-1">drop in entry-level hiring since 2022</div>
  </div>
</div>

<!--
The numbers paint a clear picture of how fast adoption is moving. 82% of developers now use AI tools on a weekly basis. Engineers integrate AI into roughly 60% of their daily work. Developers proficient with AI tools ship approximately 3x faster than those who don't use them. And entry-level developer hiring has shifted down roughly 20% since 2022 — a trend we'll explore more when we talk about career implications.
-->

---
layout: default
class: green-slide
---

# AI at Enterprise Scale

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Google</span></h3>
<div class="big-number text-3xl!">25%+</div>
<div class="text-sm text-dark/60">of new code is AI-generated — engineers review and accept, velocity up ~10%</div>
</div>

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Microsoft</span></h3>
<div class="big-number text-3xl!">20-30%</div>
<div class="text-sm text-dark/60">of internal codebases written entirely by AI — Satya Nadella, 2025</div>
</div>

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Cursor</span></h3>
<div class="big-number text-3xl!">$1.2B</div>
<div class="text-sm text-dark/60">ARR in 17 months — fastest B2B SaaS to scale ever, built by ~20 engineers</div>
</div>

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Y Combinator</span></h3>
<div class="big-number text-3xl!">95%</div>
<div class="text-sm text-dark/60">of code is AI-generated in 25% of W25 batch — "the age of vibe coding is here"</div>
</div>

</div>

<!--
Google confirmed over 25% of new code is AI-generated. Microsoft's Satya Nadella revealed 20 to 30% of internal codebases are written entirely by AI. Cursor hit 1.2 billion in ARR in 17 months — the fastest B2B SaaS to scale in history, built by roughly 20 engineers. At Y Combinator, 25% of the Winter 2025 batch reported 95% of their code was AI-generated. Garry Tan called it the dominant way to code.
-->

---
layout: default
---

<div class="flex h-full absolute inset-0">
  <div class="w-[35%] h-full">
    <img src="/sam-altman.png" class="h-full w-full object-cover" />
  </div>
  <div class="w-[65%] flex flex-col justify-center px-12">
    <h1 class="text-3xl! leading-snug font-bold">"I think we will see the first one-person billion-dollar company — probably pretty soon"</h1>
    <p class="mt-6 text-lg opacity-80">— Sam Altman, CEO of OpenAI</p>
  </div>
</div>

<!--
Sam Altman predicted the first one-person billion-dollar company is coming soon. Dario Amodei, CEO of Anthropic, said it could happen by 2026. The tools now exist for a single person to build, launch, and scale products that once required entire teams.
-->

---
layout: default
class: green-slide
---

# Rise of the Solo Developer

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Base44</span></h3>
<div class="big-number text-3xl!">$80M</div>
<div class="text-sm text-dark/60">acquired by Wix in 6 months — solo founder Maor Shlomo, 250K users (TechCrunch)</div>
</div>

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Pieter Levels</span></h3>
<div class="big-number text-3xl!">$3M+/yr</div>
<div class="text-sm text-dark/60">zero employees — PhotoAI, NomadList, RemoteOK built solo with Cursor + Claude</div>
</div>

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Cal AI</span></h3>
<div class="big-number text-3xl!">5M+</div>
<div class="text-sm text-dark/60">downloads — 18-year-old founder, $30M projected revenue, started as 2-person team (CNBC)</div>
</div>

<div class="content-card">
<h3 class="font-bold text-lg mb-1"><span class="text-[#A8C840]">Formula Bot</span></h3>
<div class="big-number text-3xl!">$226K/mo</div>
<div class="text-sm text-dark/60">non-technical founder built on paternity leave with zero code — turned down Sequoia &amp; YC</div>
</div>

</div>

<!--
The AI era is creating a new kind of founder. Base44 was built by a single developer who reached 250,000 users in six months and sold to Wix for 80 million dollars — covered by TechCrunch. Pieter Levels runs a portfolio earning over 3 million dollars a year with zero employees, all built with Cursor and Claude. An 18-year-old built Cal AI — a calorie tracking app with over 5 million downloads projecting 30 million in revenue, covered by CNBC. And David Bressler, a non-technical founder on paternity leave, built Formula Bot to 226,000 dollars a month with zero coding — and turned down offers from Sequoia Capital and Y Combinator. Sam Altman has a betting pool for the first one-person billion-dollar company. Dario Amodei predicted it would happen by 2026.
-->

---
layout: default
class: green-slide
---

<div class="absolute inset-0 grid grid-cols-[55%_45%] overflow-hidden">

<div class="relative flex flex-col justify-center px-14 bg-[#C6E94E] overflow-hidden">
  <div class="absolute -top-10 -left-10 w-48 h-48 bg-[#A8C840] opacity-25 rounded-full"></div>
  <div class="absolute bottom-12 left-6 w-36 h-20 bg-[#A8C840] opacity-15 -skew-x-12 rounded-2xl"></div>
  <div class="relative z-10">
    <h1 class="text-5xl font-800 leading-tight mb-6">The Paradox</h1>
    <p class="text-lg leading-relaxed text-dark/70">AI is not eliminating developers — it is redefining what they do. The role is shifting from writing every line to directing, reviewing, and thinking in systems.</p>
  </div>
</div>

<div class="relative">
  <img src="/placeholder.jpg" class="absolute inset-0 w-full h-full object-cover brightness-50" alt="The paradox" />
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="absolute inset-0 flex flex-col justify-center gap-6 px-6">
    <div class="bg-white/95 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
      <div class="font-bold text-lg mb-1">From Implementation to Direction</div>
      <div class="text-sm text-dark/60 leading-relaxed">Engineers tell AI what to build and review what it produces — hands shift from keyboard to oversight.</div>
    </div>
    <div class="bg-white/95 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
      <div class="font-bold text-lg mb-1">From Syntax to Systems Thinking</div>
      <div class="text-sm text-dark/60 leading-relaxed">Writing code matters less than understanding architecture, debugging AI output, and making judgment calls.</div>
    </div>
    <div class="bg-white/95 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
      <div class="font-bold text-lg mb-1">More Builders, Higher Stakes</div>
      <div class="text-sm text-dark/60 leading-relaxed">Anyone can ship software now, but quality, security, and reliability still require human judgment that AI cannot replace.</div>
    </div>
  </div>
</div>

</div>

<!--
Here's the paradox at the center of this shift: AI is not eliminating developers. It is redefining what developers do. Engineering roles are shifting from hands-on implementation toward agent direction — telling AI what to build and reviewing what it produces. From writing code line by line to reviewing AI-generated output critically. From syntax fluency to system-level thinking. People who understand both fundamentals and AI tools are in the highest demand.
-->

---
layout: section
---

# What This Means for You

<!--
Let's bring this home. What does all of this mean practically for you — whether you're a working professional, an aspiring developer, a founder, or a career-switcher?
-->

---
layout: default
---

<div class="absolute inset-0 grid grid-cols-[45%_55%] overflow-hidden">

<div class="flex flex-col bg-[#C6E94E] relative overflow-hidden">
  <div class="absolute -top-10 -left-10 w-48 h-48 bg-[#A8C840] opacity-25 rounded-full"></div>
  <div class="absolute bottom-12 left-6 w-36 h-20 bg-[#A8C840] opacity-15 -skew-x-12 rounded-2xl"></div>
  <div class="relative z-10 px-14 pt-12">
    <p class="text-sm font-600 tracking-widest uppercase opacity-60 mb-2">Career Impact</p>
    <h1 class="text-4xl font-800 leading-tight">The Accelerated Career Path</h1>
  </div>
  <div class="flex-1 flex items-center justify-center px-10">
    <img src="/placeholder.jpg" class="max-h-full max-w-full rounded-xl object-contain" alt="Career path" />
  </div>
</div>

<div class="flex flex-col justify-center px-14 py-10 bg-white h-full">
  <div class="mb-4">
    <div class="big-number" style="font-size:4.5rem; line-height:1">67%</div>
    <p class="text-sm text-dark/70 mt-2 font-500">drop in entry-level developer postings in some markets</p>
  </div>
  <div class="space-y-4">
    <div>
      <div class="font-bold text-base mb-1">Junior Hiring Declining</div>
      <div class="text-sm text-dark/60 leading-snug">AI adoption cuts junior hiring 9-10% per six quarters — AI handles the routine work juniors used to do.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Senior Demand Holds</div>
      <div class="text-sm text-dark/60 leading-snug">Senior hiring stays flat — experience, architecture skills, and judgment are still valued.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">Compressed Ladder</div>
      <div class="text-sm text-dark/60 leading-snug">The traditional career path — years on routine tasks before design work — is compressing fast.</div>
    </div>
    <div>
      <div class="font-bold text-base mb-1">New Opportunity</div>
      <div class="text-sm text-dark/60 leading-snug">Juniors using AI see 35-39% speed gains vs. 8-16% for seniors — AI levels the playing field.</div>
    </div>
  </div>
</div>

</div>

<!--
The career implications are real and measurable. Entry-level developer postings have dropped as much as 67% in some markets. Companies that adopt AI see junior hiring fall 9-10% within six quarters, while senior hiring stays flat. The traditional career ladder — spend years on routine tasks, gradually take on architecture and design — is compressing because AI now handles the routine work. This doesn't mean there's no path for new developers, but it means the path looks different.
-->

---
layout: default
---

# How Teams Are Restructuring

<div class="grid grid-cols-2 gap-8 mt-4 flex-1 h-[calc(100%-6rem)]">

<div class="flex flex-col">
<h3 class="text-xl font-bold mb-2">Before AI</h3>
<div class="flex-1 flex items-center justify-center">

```mermaid {scale: 0.7}
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#E8F5C8', 'primaryBorderColor': '#A8C840', 'lineColor': '#CBD5E1', 'primaryTextColor': '#000000'}}}%%
graph RL
    A["&nbsp;&nbsp;Senior Dev&nbsp;&nbsp;"] --> B["&nbsp;&nbsp;&nbsp;&nbsp;Junior 1&nbsp;&nbsp;&nbsp;&nbsp;"]
    A --> C["&nbsp;&nbsp;&nbsp;&nbsp;Junior 2&nbsp;&nbsp;&nbsp;&nbsp;"]
    A --> D["&nbsp;&nbsp;&nbsp;&nbsp;Junior 3&nbsp;&nbsp;&nbsp;&nbsp;"]
    A --> E["&nbsp;&nbsp;&nbsp;&nbsp;Junior 4&nbsp;&nbsp;&nbsp;&nbsp;"]
    style A fill:#A8C840,color:#000
    style B fill:#94a3b8,color:#fff
    style C fill:#94a3b8,color:#fff
    style D fill:#94a3b8,color:#fff
    style E fill:#94a3b8,color:#fff
```

</div>
</div>

<div class="flex flex-col">
<h3 class="text-xl font-bold mb-2">After AI</h3>
<div class="flex-1 flex items-center justify-center">

```mermaid {scale: 0.7}
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#E8F5C8', 'primaryBorderColor': '#A8C840', 'lineColor': '#CBD5E1', 'primaryTextColor': '#000000'}}}%%
graph RL
    A["&nbsp;&nbsp;Senior Dev&nbsp;&nbsp;"] --> B["&nbsp;&nbsp;AI Agent 1&nbsp;&nbsp;"]
    A --> C["&nbsp;&nbsp;AI Agent 2&nbsp;&nbsp;"]
    A --> D["&nbsp;&nbsp;&nbsp;&nbsp;Junior 1&nbsp;&nbsp;&nbsp;&nbsp;"]
    style A fill:#A8C840,color:#000
    style B fill:#1e293b,color:#fff
    style C fill:#1e293b,color:#fff
    style D fill:#94a3b8,color:#fff
```

</div>
</div>

</div>

<!--
The team structure shift is significant. Before AI tools, a typical product team had one or two senior developers overseeing four to five juniors. Juniors handled routine implementation — wiring up forms, writing CRUD endpoints, fixing straightforward bugs. Seniors focused on architecture, code review, and design decisions. With AI tools, companies are shrinking the junior layer because AI handles the routine work that juniors used to do. Senior developers now direct AI agents instead of mentoring large groups of juniors. The result is smaller, flatter teams with fewer entry-level positions.
-->

---
layout: fact
---

# 35-39%
speed-up for juniors using AI tools

vs. only 8-16% for senior developers

<!--
Here's the counterintuitive opportunity: junior developers using AI tools see 35-39% speed improvements, compared to only 8-16% for seniors. AI tools level the playing field more for less experienced developers. But — and this is critical — this only works if you treat AI as a learning tool, not a shortcut. If you blindly accept AI output without understanding it, you're building on sand. If you use AI to learn faster, review its reasoning, and build genuine understanding, you can compress years of growth into months.
-->

---
layout: default
---

# The Tools Will Change. The Skills Won't.

<div class="p-6">

<div class="flex gap-6">
<div class="flex-1">

<div class="flex flex-col gap-3">
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> How to evaluate tools critically</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> How to direct AI effectively</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> How to review output with judgment</div>
  <div class="flex items-center gap-3"><span class="w-2.5 h-2.5 rounded-full bg-[#C6E94E] flex-shrink-0"></span> Principles over product-specific workflows</div>
</div>

</div>
<img src="/placeholder.jpg" class="w-2/5 rounded-xl object-cover opacity-80" alt="Skills that last" />
</div>

</div>

<!--
The AI coding landscape moves fast. Tools that dominate today may be overtaken in months. Pricing models shift. New capabilities appear constantly. This course teaches principles rather than workflows tied to any single product. How to evaluate tools, how to direct AI effectively, how to review output critically. The specific buttons will move; the judgment behind pressing them will not. That judgment is what we're building throughout this course.
-->

---
layout: default
---

# Key Takeaways

<div class="space-y-4 mt-6">

<div class="flex items-start gap-4">
  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
  <div><strong>Three waves</strong> — hand-written code, low-code, AI-assisted</div>
</div>

<div class="flex items-start gap-4">
  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
  <div><strong>Wave 3 splits</strong> — assistants (3a) vs vibe coding (3b)</div>
</div>

<div class="flex items-start gap-4">
  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
  <div><strong>AI amplifies</strong> human judgment, doesn't replace it</div>
</div>

<div class="flex items-start gap-4">
  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
  <div><strong>Career paths</strong> are compressing — adapt early</div>
</div>

<div class="flex items-start gap-4">
  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
  <div><strong>Learn principles</strong>, not just today's tools</div>
</div>

</div>

<!--
Let's revisit our learning objectives. You can now identify the three major waves: traditional coding, low-code/no-code, and AI-assisted development — which splits into coding assistants and true vibe coding. You understand the strengths and limitations of each. You see why fundamentals matter even as AI generates more code — because oversight, debugging, and system thinking can't be delegated. And you can distinguish between AI assistants that augment developers and vibe coding tools that let anyone build. These concepts form the foundation for everything we'll cover in the remaining sessions.
-->

---
layout: end
---

<div class="text-center">
  <div class="text-2xl font-light opacity-90 mb-2">Next Session</div>
  <div class="text-4xl font-bold">Hands-On with AI Coding Tools</div>
  <div class="text-xl font-light opacity-70 mt-4">Questions?</div>
</div>

<!--
In our next session, we'll move from concepts to practice. You'll get hands-on time with both AI coding assistants and vibe coding tools, building something real and experiencing the differences firsthand. See you then.
-->
