## Project: LaTeX (Persian) with xepersian

- **Primary package**: `xepersian` (MiKTeX on Windows)
- **Engine**: Compile with `xelatex`.
- **User preference**: Respond in English.

I will convert the Markdown file to LaTeX incrementally, compiling after each step to catch and fix errors as they arise. This follows the best practice of building a complex
  document step-by-step.


-----------------

---

### **Key Takeaway for Future Reference: Handling Mixed RTL and LTR Text in `xepersian`**

**The Problem:**
When short LTR (Left-to-Right) strings like `STP`, `g/mol`, or other acronyms are placed directly inside an RTL (Right-to-Left) Persian paragraph, the typesetting engine can get confused about the text directionality. This results in jumbled or incorrectly ordered output, where the LTR text and the surrounding Persian words are rendered improperly.

**The Solution:**
The correct way to handle this is to wrap the LTR text with the `\lr{...}` command, which is provided by the `xepersian` package.

**Example:**
- **Incorrect:** `...با فرض شرایط STP به حجم...`
- **Correct:** `...با فرض شرایط \lr{STP} به حجم...`

**How It Works:**
The `\lr{...}` command creates a small, self-contained **LTR island** inside the main RTL text flow. This explicitly tells the XeLaTeX engine to typeset the content within the braces from left to right, preventing the surrounding RTL context from interfering with it and ensuring the final output is correctly ordered.

**Rule of Thumb:**
Whenever embedding any non-mathematical English/Latin text, units, or acronyms within a Persian sentence, **always wrap it in `\lr{...}`** to ensure correct rendering and avoid text corruption.


---------------------
  
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
----------

# LaTeX for Persian Documents: Key Learnings

This document summarizes the key techniques and debugging solutions discovered during the session for creating Persian-language documents in LaTeX, particularly for chemical and biological quizzes.

## 1. Core Document Setup

- **Engine**: `xelatex` is required for compiling documents using the `xepersian` package.
- **Primary Package**: `\usepackage{xepersian}` is essential for all Persian text typesetting.
- **Fonts**: It is critical to set both a Persian and a Latin font in the preamble to avoid errors and ensure correct rendering of mixed-script text.
  ```latex
  \settextfont{ParsiMatn} % A reliable fallback for Persian
  \setlatintextfont{Times New Roman}
  ```

## 2. Handling Chemistry and Math

- **`mhchem` is Superior**: For chemical formulas and equations, the `mhchem` package is much more robust and syntactically cleaner than standard math mode. 
  - **Usage**: `\usepackage[version=4]{mhchem}`
  - **Formulas**: `\ce{H2O}`, `\ce{KClO3}`, `\ce{H+}`
  - **Equations**: `\[ \ce{N2(g) + 3H2(g) <=> 2NH3(g)} \]`
- **Display Math**: For standalone equations, the `\[ ... \]` environment should be used. Do not include surrounding text or punctuation inside the math delimiters.

## 3. Typesetting Mixed-Language Text (RTL/LTR)

- **Latin in Persian**: For short, non-mathematical Latin acronyms or words within a Persian paragraph, use `\lr{...}`. Example: `\lr{STP}`.
- **Critical Rule**: **Do not** wrap math environments (`$...$`, `\[... \]`) or complex commands like `\ce{...}` inside `\lr{...}`. This was a major source of compilation errors (`Extra }`).

## 4. Lists and Enumeration

- **Custom Labels**: To create custom list labels (e.g., Persian alphabetical lists), the `enumitem` package is necessary.
- **Syntax**: The correct syntax is `\begin{enumerate}[label=\alph*)]`. Forgetting to load `enumitem` will cause a `Missing number, treated as zero` error.

## 5. Common Errors and Debugging Workflow

The incremental compilation approach was key to isolating the following errors:

- **Error**: `Missing number, treated as zero`
  - **Cause**: Using custom list options like `[\alph*)]` without loading `\usepackage{enumitem}`.

- **Error**: `Extra }, or forgotten \endgroup`
  - **Cause**: Wrapping a math environment or another fragile command inside `\lr{...}`.

- **Error**: `Missing character: There is no ... in font ...`
  - **Cause**: Placing Persian text inside a math environment (`$...$`). LaTeX attempts to render the text using a math font that lacks the required Persian glyphs.

- **Error**: `Lonely \item`
  - **Cause**: A structural mistake in the document, such as a misplaced `\end{enumerate}`, which leaves an `\item` command outside of a valid list environment.


----------

# Important Lesson: Using `mhchem` with `xepersian`

## The Problem

When using the `mhchem` package, commands like `\ce{...}` were used to format chemical formulas. In some cases, particularly when providing molar masses in parentheses, this led to a `\mathrm allowed only in math mode` compilation error.

Example of incorrect code that caused the error:
```latex
... (\ce{Ca}=40, \ce{Cl}=35.5~\mathrm{g/mol})
```

The error occurred because `\ce` and the subsequent `\mathrm` were not inside a math environment.

## The Solution

The problem was solved by enclosing every `\ce{...}` command and its associated text within math delimiters (`$...$`).

**The key takeaway is that `\ce{...}` commands, in this context, must be wrapped in `$` signs to ensure they are processed correctly by the LaTeX engine.**

### Corrected Example

By placing `$` around the chemical formulas and the units, the compilation succeeds:

```latex
... ($\ce{Ca}=40$, $\ce{Cl}=35.5$ $\mathrm{g/mol}$)
```

This ensures that all parts of the expression are correctly interpreted in math mode, resolving the error.
