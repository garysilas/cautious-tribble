# Goal

Resolve the Markdown diagnostics in `AGENTS.md` while preserving all existing instructions and their meaning.

# Skills read

- None. This is a Markdown-only maintenance task; the approved application skills do not apply.

# Existing code inspected

- `AGENTS.md`: multiple level-one headings trigger `MD025/single-title/single-h1`; the document is also missing its final newline, triggering `MD047/single-trailing-newline`.
- `package.json`: provides `lint` for ESLint but no Markdown lint command or Markdown linter dependency.

# Decisions or assumptions

- Keep `# AGENTS.md` as the sole level-one document title.
- Convert all remaining level-one section headings to level-two headings, retaining the existing numbering and all subheading relationships.
- Do not alter non-heading prose, directives, markdown content, or line encoding.
- Add exactly one trailing newline.
- Since no Markdown linter is configured, verify the result using a read-only heading/newline check in addition to the available project lint command.

# Files likely to change

- `AGENTS.md`

# Implementation requirements

- Change every section heading after the title from `#` to `##`.
- Preserve existing `##` subheadings as children of their current section.
- Preserve all content except the heading-level and end-of-file newline corrections.

# Security requirements

- No secrets, environment values, credentials, or application behavior may be changed.

# Acceptance criteria

- `AGENTS.md` has exactly one level-one heading: `# AGENTS.md`.
- All numbered sections remain present and correctly ordered.
- The file ends with exactly one newline.
- No application source files or configuration files change.

# Checks to run

- Run `npm run lint`.
- Run a read-only command to confirm only one line begins with `# ` and that the file ends in a newline.

# Exact manual test steps expected after implementation

1. Reopen `AGENTS.md` in the IDE.
2. Confirm the Markdown diagnostics no longer report `MD025` or `MD047`.
3. Confirm the `AGENTS.md` title remains level one and each numbered policy section is level two.
