# Slidev Presentation Creator Skill - Design

## Purpose

A Claude Code skill that converts detailed course outline markdown into complete, ready-to-run Slidev presentation projects with professional design, branding, and UI knowledge built in.

## Input

Course outline markdown files (like `lecture-1-introduction.md`) containing:
- Detailed paragraphs with topics
- Statistics and numbers
- Comparisons (advantages/disadvantages)
- Key statements and definitions
- References

## Workflow

1. **Read source document** - Parse markdown, identify sections, topics, stats, key points
2. **Content extraction & summarization** - Per topic:
   - Extract core idea (1 headline per slide)
   - Pull key points (3-5 bullets max)
   - Identify stats/numbers for data slides
   - Identify comparisons for two-column layouts
   - Extract quotes or key statements
3. **Brand/Theme setup** - Apply existing brand OR create cohesive professional theme
4. **Slide composition** - Match content type to appropriate Slidev layout
5. **Project generation** - Output complete Slidev project

## Content-to-Layout Mapping

| Content Type | Slidev Layout | Style |
|---|---|---|
| Title/opening | `cover` | Visual, bold |
| Section transition | `section` | Clean divider |
| Concept/definition | `center` or `default` | Minimal, one idea |
| Statistics/numbers | `fact` or `two-cols` | Data-rich |
| Comparisons (pros/cons) | `two-cols-header` | Side-by-side |
| Key quotes/statements | `quote` or `statement` | Prominent |
| Lists/steps | `default` with `v-clicks` | Progressive reveal |
| Closing | `end` | Clean wrap-up |

## Design Principles

- One idea per slide
- Max 5 bullets per slide
- Headlines < 8 words, bullets < 15 words
- Bold key terms, color for emphasis
- Generous whitespace
- Progressive reveal with v-clicks for lists
- Content-driven layout selection

## Brand/Theme Handling

### With existing brand
- Accept: primary color, accent color, font family, logo path
- Generate custom UnoCSS config + scoped styles

### Without existing brand
- Generate professional color palette (primary + accent + neutral)
- Select complementary Google Fonts (sans + mono)
- Create cohesive visual identity

## Output Structure

```
presentation/
  slides.md          # All slides with layouts
  package.json       # Slidev deps, theme, scripts
  uno.config.ts      # Custom theme colors/shortcuts
  styles/
    index.css        # Global brand styles
  public/
    logo.svg         # If provided
  components/        # Custom Vue components if needed
```

## Skill Location

`~/.claude/skills/slidev-presentation-creator/SKILL.md`
