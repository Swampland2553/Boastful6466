## Project: LaTeX (Persian) with xepersian

- **Primary package**: `xepersian` (MiKTeX on Windows)
- **Engine**: Compile with `xelatex`.
- **User preference**: Respond in English.

## Fonts
- Set main Persian font with `\settextfont{...}`; font must be installed or compilation fails.
- Always set Latin font with `\setlatintextfont{...}` to avoid “Missing character” warnings in labels/Latin text.
- If using `\textbf`, ensure bold variant is available/declared for `xepersian`.
- Fallback: `ParsiMatn` works well for Persian and mixed scripts.
- Unsupported Unicode (e.g., emojis) will trigger “Missing character” warnings; remove or choose a font with coverage.

## Mixed Persian and Latin text
- Wrap Latin text inside Persian (RTL) context with `\lr{...}` to prevent directionality issues (even single letters like `y`).
- Do not use `\lr{}` inside math mode.

## Math and notation
- Enclose math with `$ ... $`; ensure math is properly closed to avoid “Command \\end{...} invalid in math mode”.
- Sets: use `\{` and `\}` for curly braces inside math.
- Units: place inside math and use `\mathrm{...}`, e.g., `$v = 10~\mathrm{m/s}$`.
- Avoid accidental double backslashes (e.g., `\\mathbb{R}` is wrong; use `\mathbb{R}`).

## Lists and numbering
- Persian alphabetical labels: use `\alph*`. Do not use `\asbuk*` (Cyrillic).
- `enumitem`: avoid invalid options like `rightmargin=*` (causes “Missing number, treated as zero”).
- Avoid `\persian{}` directly in `label=...` (can cause `Argument of \enit@refstar@i has an extra }`).

## Tables and layout
- `tabularx` (especially `>{\RaggedRight}X`) can conflict with `xepersian` and cause errors like “Extra }, or forgotten \\endgroup”. Prefer one of:
  - Standard `tabular` with fixed-width `p{...}` columns
  - `tabular*` with `@{\\extracolsep{\\fill}}` for flexible width
  - `longtable` for multipage tables
- `\dotfill` can cause directionality errors (“Not allowed in LR mode”) in certain contexts (e.g., inside `p{...}` columns) under `xepersian`.

## Packages and compatibility
- Adobe Acrobat: `tcolorbox` can cause display errors. Prefer alternatives.
- Colors: when using `mdframed` with color options, explicitly load `xcolor`.
- `xepersian` conflicts:
  - `mdframed` may produce “Undefined control sequence” (e.g., `\mdf@frametitle`). Use the simpler `framed` package when needed.
  - Complex `framed` environment definitions can cause “Illegal parameter number...” or “TeX capacity exceeded”. Prefer a simple environment, e.g., `\newenvironment{myenv}{\begin{quote}}{\end{quote}}`.
  - `titlesec` and `enumitem` may conflict with `xepersian`.

## Debugging workflow
1. Check the log for concrete errors (missing font, unterminated math, invalid option).
2. Fix the specific cause (change font, correct math delimiters, remove invalid `enumitem` options).
3. Simplify/Isolate: remove or simplify nearby constructs/packages (`titlesec`, `enumitem`, problematic table environments) to localize the fault.
4. Iterate: recompile after each change.
5. Consider RTL/LTR interactions as a frequent root cause.

## Common errors and resolutions
- “Font not found” → install the font or choose an installed font; set both `\settextfont` and `\setlatintextfont`.
- “Missing character” → character unsupported by chosen font; remove or select a font with coverage.
- “Missing number, treated as zero” → invalid `enumitem` option (e.g., `rightmargin=*`); remove/fix.
- “Argument of \\enit@refstar@i has an extra }” → avoid `\persian{}` inside `label=...` with `enumitem`.
- “Undefined control sequence” from `\asbuk*` → use `\alph*` for Persian alphabetical lists.
- “Command \\end{...} invalid in math mode” → unterminated math (`$` missing) earlier.
- Acrobat display errors → avoid `tcolorbox`.
- `mdframed` under `xepersian` failing → prefer `framed` or very simple environments.
- `\dotfill` inside certain columns under `xepersian` → directionality-related; reconsider layout.
- “Unable to open” PDF (e.g., locked file) → close viewers or delete the locked file before recompiling.

## Number and locale notes
- When explicitly required, use English numerals and `.` as decimal separator.
- In Persian contexts, the decimal separator is `٫`.

## Large document strategy
- Tools have small context windows. For large sources: split into sequential chunks and process chunk-by-chunk.
- Prefer a single atomic write when generating outputs to avoid fragile multi-step replacements.

## Task template: Convert document to LaTeX (mobile-friendly)
- Output: complete LaTeX document.
- Numerals and symbols: use English digits/operators and `.` as decimal separator when required by the task.
- Layout: single-column (`article`), avoid wide/fixed-width elements; use legible font sizes for mobile.
- Math: use `$...$`; escape braces as `\{` and `\}` inside math.
- Acrobat compatibility: prefer `mdframed` over `tcolorbox`.

## Additional notes
- Be mindful of escaped backslashes in source text.
- `xepersian` usually handles number localization; avoid manual `\persian{}` in sensitive contexts (e.g., list labels).
- For mixed Persian/Latin content, prefer math mode for variables/numbers and `\lr{}` for Latin words in RTL text.
