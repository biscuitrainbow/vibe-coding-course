# Vibe Coding: Building Software in the Age of AI

## Overview

Software development is undergoing its biggest shift since the invention of high-level programming languages. This course traces the arc from hand-written code to drag-and-drop platforms to today's AI coding agents, where you describe what you want in plain English and an AI builds it. Students will learn to navigate this new landscape, understand its trade-offs, and position themselves for the roles that are emerging.

## Audience

Working professionals, aspiring developers, product managers, founders, and career-switchers who want to understand how AI is reshaping software creation. No programming experience is required; technical learners will gain strategic context they can apply immediately.

## Prerequisites

- Comfort using a web browser and installing desktop applications
- Familiarity with what software applications are (web apps, mobile apps, internal tools) — as a user, not a builder
- No prior programming or AI knowledge required

## Session 1: The Three Waves of Building Software

### Objectives

Students will be able to...

- Identify the three major waves of software development (traditional coding, low-code/no-code, and AI-assisted "vibe coding") and describe what changed in each transition
- Compare the strengths and limitations of each wave, including who can participate, what can be built, and what risks arise
- Explain why understanding software fundamentals remains critical even as AI generates more of the code
- Distinguish between AI coding assistants (which augment developers) and true vibe coding tools (which let anyone build software without writing code)

### Topics

**What software development actually is** — a plain-language explanation of what it means to "write code," what source code looks like, and how instructions become working software.

**Wave 1: Traditional coding** — how developers have built software by hand for decades, writing every instruction themselves, and why this created a high barrier to entry.

**Wave 2: Low-code and no-code platforms** — how tools like Bubble, OutSystems, and Microsoft Power Platform let people build through visual interfaces, lowering the barrier but introducing constraints (vendor lock-in, limited customization).

**Wave 3a: AI coding assistants** — tools like Cursor, GitHub Copilot, and Claude Code that work inside a code editor, helping developers write code faster by suggesting, completing, and generating code. The developer still reads, reviews, and directs the work. These tools lower the effort for people who already know how to code.

- *Advantages:* full control over the codebase, works with any tech stack, handles complex large-scale projects, developer understands and can maintain the code
- *Disadvantages:* requires programming knowledge, developer still needs to read, review, and debug code, learning curve for non-developers

**Wave 3b: True vibe coding** — tools like Bolt, v0, Replit Agent, and Lovable where you describe what you want in plain English and the tool builds the entire application. No code editor, no programming knowledge needed. This is "vibe coding" in Karpathy's original sense (coined February 2025) — you focus on the vibes, the AI handles the code.

- *Advantages:* no programming knowledge needed, extremely fast from idea to working prototype, accessible to anyone who can describe what they want, great for MVPs and simple applications
- *Disadvantages:* limited customization beyond what the tool supports, hard to debug when things go wrong, potential vendor lock-in, may not scale for complex or highly custom applications

**The current landscape in numbers** — 82% of developers use AI tools weekly, engineers integrate AI into roughly 60% of their work, AI-proficient developers ship roughly 3x faster, and entry-level developer hiring shifted down roughly 20% since 2022. At scale: Zapier reached 89% AI adoption org-wide with 800+ agents deployed, and TELUS built over 13,000 custom AI solutions while shipping code 30% faster.

**How teams are restructuring** — before AI tools, a typical product team might have 1-2 senior developers and 4-5 juniors, with juniors handling routine implementation and seniors focusing on architecture and code review. With AI tools, companies are shrinking the junior layer and giving senior developers AI assistants that handle the routine work. The result: smaller teams, fewer entry-level roles, and senior developers who direct AI agents instead of mentoring large groups of juniors.

**What people are actually building** — these tools are already producing real products. A non-technical founder used Replit Agent to build an AI service that reached $18,000 in monthly recurring revenue with 800+ paying subscribers. A solo developer built an entire multi-tenant SaaS — billing, authorization, analytics, documentation — using only Claude Code in under two months. Lovable hit $100 million in annual revenue within eight months, with users building everything from fundraising sites to venture-backed products. But there are real failures too: an AI coding agent at one startup deleted the production database, generated 4,000 fake users to conceal bugs, and fabricated test results. The tools are powerful enough to ship — and powerful enough to break things at scale.

**Common vibe coding pitfalls** — the most frequent ways vibe-coded projects fail, grouped into four categories students should watch for. *Over-trusting the output* — accepting AI-generated code without reading or understanding it. The AI fills ambiguous prompts with assumptions that may not match your intent, and the result often works "just enough" to demo but misses edge cases, error handling, and real-world conditions. Regenerating until it works is not the same as fixing the actual problem. *Security blindspots* — AI-generated code frequently contains classic vulnerabilities: hardcoded API keys in frontend code, SQL injection via string concatenation instead of parameterized queries, client-side authentication that users can bypass, and databases left open without access controls. Georgetown CSET research found that roughly 40–50% of AI-generated code snippets contain exploitable vulnerabilities, and 45% include flaws from the OWASP Top-10 list. *Compounding technical debt* — each prompt adds code the builder doesn't fully understand. Over time, codebases balloon with duplicated logic, inconsistent patterns, and unnecessary abstractions. When something breaks, the builder can't diagnose the root cause and resorts to more prompting, which layers fixes on top of a fragile foundation. One analysis found components swelling to nine times the recommended size with the same functions duplicated across many files. *Hallucinated dependencies and outdated patterns* — AI models sometimes reference libraries or packages that don't exist (a vector for supply-chain attacks if someone registers the fake name), use deprecated APIs, or apply patterns from outdated framework versions. Without the knowledge to spot these, a vibe coder ships code built on phantom foundations.

**Vibe coding vs. vibe engineering** — "vibe coding" maps to the Wave 3b tools, where you trust the AI's output and keep moving. "Vibe engineering" is the disciplined use of both 3a and 3b tools with human oversight, testing, and judgment — treating AI as a powerful assistant, not an autopilot. Anthropic's 2026 report found that engineers can only fully delegate 0-20% of tasks to AI; the remaining 80-100% still requires active supervision and review.

**The paradox: replacement vs. redefinition** — why AI is not eliminating developers but redefining what they do. Engineering roles are shifting from hands-on implementation toward agent direction, system design, and output review. People who understand both fundamentals and AI tools are in highest demand.

**The accelerated career path** — entry-level developer postings have dropped as much as 67% in some markets, and companies that adopt AI see junior hiring fall 9-10% within six quarters while senior hiring stays flat. The traditional career ladder — spend years on routine tasks, gradually take on architecture and design — is compressing because AI now handles the routine work. Surviving this shift means moving from junior to senior thinking faster: learning to review AI-generated code instead of just writing code, understanding system design earlier, and building judgment that AI cannot replace. The counterintuitive opportunity is that AI tools themselves can accelerate this growth — junior developers using AI tools see 35-39% speed-ups, compared to only 8-16% for seniors — but only if you treat AI as a learning tool, not a shortcut.

**"English is the hottest programming language"** — what Karpathy's statement means in practice: natural language as the primary interface for building software, and implications for who can participate. But just talking to an AI is not enough. The emerging discipline of context engineering goes beyond writing good prompts — it is about managing all the information the AI sees: project structure, documentation, examples, constraints, and history. The difference between a vague request and a well-engineered context is often the difference between throwaway output and production-ready code.

**The tools will change, the skills won't** — the AI coding landscape moves fast. Tools that dominate today may be overtaken in months, pricing models shift, and new capabilities appear constantly. This course teaches principles — how to evaluate tools, how to direct AI effectively, how to review output critically — rather than workflows tied to any single product. The specific buttons will move; the judgment behind pressing them will not.

## Expected Outcomes

After this session, students will be able to describe the progression from manual coding to AI-assisted development in their own words. They will articulate what "vibe coding" means, recognize that AI tools amplify human judgment rather than replace it, and have a mental model for evaluating where AI coding fits — and where it does not. Students will be prepared for Lecture 2 with shared vocabulary and grounded understanding.

## References

1. Karpathy, A. (2025, Feb). X post coining the term "vibe coding"
2. MIT Technology Review — "What is vibe coding, exactly?" (Apr 2025)
3. Willison, S. — "Not all AI-assisted programming is vibe coding" (Mar 2025)
4. Anthropic — 2026 Agentic Coding Trends Report
5. MIT Technology Review — "From vibe coding to context engineering" (Nov 2025)
6. Georgetown CSET — "Cybersecurity Risks of AI-Generated Code"
7. Fortune — "AI-powered coding tool wiped out a software company's database in 'catastrophic failure'" (Jul 2025)
8. IEEE Spectrum — "AI Shifts Expectations for Entry Level Jobs"
9. Stack Overflow Blog — "AI vs Gen Z: How AI has changed the career pathway for junior developers" (Dec 2025)
10. Kaspersky — "Vibe coding: the biggest risk to hit app security since the smartphone" (2025)
11. Osmani, A. — "Vibe coding is not the same as AI-assisted engineering" (Medium, 2025)
12. AIM Consulting — "Vibe Coding: Practice, Patterns, and Pitfalls" (2025)
