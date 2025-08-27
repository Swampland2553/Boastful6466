## Project: LaTeX (Persian) with xepersian

- **Primary package**: `xepersian` (MiKTeX on Windows)
- **Engine**: Compile with `xelatex`.
- **User preference**: Respond in English.

I will convert the Markdown file to LaTeX incrementally, compiling after each step to catch and fix errors as they arise. This follows the best practice of building a complex
  document step-by-step.


-----------------
# Session Learning Notes

This file summarizes the key lessons learned during the interactive LaTeX build session.

## 1. Handling Mixed RTL and LTR Text

**Lesson:** When embedding short left-to-right (LTR) phrases (like English words) within a right-to-left (RTL) context in a `xepersian` document, the LTR text must be wrapped with the `\lr{...}` command.

**Example:**
```latex
% Incorrect
متن فارسی (English Text) متن فارسی

% Correct
متن فارسی \lr{(English Text)} متن فارسی
```
This ensures correct typesetting and avoids font or directional issues.

## 2. Workaround for `\maketitle` Errors

**Issue:** Using `\maketitle` with `xepersian` can sometimes cause a `TeX capacity exceeded` error, likely due to an internal loop when processing complex RTL text in the title.

**Solution:** A reliable workaround is to bypass `\maketitle` entirely and format the title manually.

**Example:**
```latex
\begin{document}

\begin{center}
    \Large\textbf{Your Title Here}
\end{center}

% ... rest of the document
```

## 3. Importance of Literal Search

**Lesson:** My initial high-level cognitive scan of files can miss specific terms. To ensure accuracy, I must follow up any high-level analysis with a literal search using the `search_file_content` tool, even if my initial scan finds nothing. This is a mandatory verification step.

## 4. General Vigilance

**Lesson:** Be careful with typos, especially when mixing languages or transliterating (e.g., the `شayستگی‌های` vs. `شایستگی‌های` correction). Always double-check the output.

```
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
- Set main Persian font with `\settextfont{...}` ; font must be installed or compilation fails.
- Always set Latin font with `\setlatintextfont{...}` to avoid “Missing character” warnings in labels/Latin text.
- If using `\textbf`, ensure bold variant is available/declared for `xepersian`.
- Fallback: `ParsiMatn` works well for Persian and mixed scripts.
- Unsupported Unicode (e.g., emojis) will trigger “Missing character” warnings; remove or choose a font with coverage.

## Mixed Persian and Latin text
- Wrap Latin text inside Persian (RTL) context with `\lr{...}` to prevent directionality issues (even single letters like `y`).
- **CRITICAL**: Do not use `\lr{...}` inside math mode (`$ ... ). Units and Latin text inside math environments should be handled with `\text{...}` or `\mathrm{...}` instead.

## Math and notation
- Enclose math with `$ ...  ; ensure math is properly closed to avoid “Command \end{...} invalid in math mode”.
- Sets: use `\{` and `\}` for curly braces inside math.
- Units: place inside math and use `\mathrm{...}`, e.g., `$v = 10~\mathrm{m/s}.
- Avoid accidental double backslashes (e.g., `\\mathbb{R}` is wrong; use `\mathbb{R}`).
- **Note on `\text{...}` vs. `\mathrm{...}`**:
  - Use `\text{...}` (from the `amsmath` package) for words or multi-letter identifiers inside math mode that should respect the surrounding text font. Example: `$E = mc^2 \text{ (Einstein's formula)}## Project: LaTeX (Persian) with xepersian

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
- Set main Persian font with `\settextfont{...}` ; font must be installed or compilation fails.
- Always set Latin font with `\setlatintextfont{...}` to avoid “Missing character” warnings in labels/Latin text.
- If using `\textbf`, ensure bold variant is available/declared for `xepersian`.
- Fallback: `ParsiMatn` works well for Persian and mixed scripts.
- Unsupported Unicode (e.g., emojis) will trigger “Missing character” warnings; remove or choose a font with coverage.

## Mixed Persian and Latin text
- Wrap Latin text inside Persian (RTL) context with `\lr{...}` to prevent directionality issues (even single letters like `y`).
- **CRITICAL**: Do not use `\lr{...}` inside math mode (`$ ... ). Units and Latin text inside math environments should be handled with `\text{...}` or `\mathrm{...}` instead.

.
  - Use `\mathrm{...}` for units or chemical formulas that should always be upright (Roman) font, regardless of the surrounding text style. Example: `$\ce{H2O}## Project: LaTeX (Persian) with xepersian

- **Primary package**: `xepersian` (MiKTeX on Windows)
- **Engine**: Compile with `xelatex`.
- **User preference**: Respond in English.

I will convert the Markdown file to LaTeX incrementally, compiling after each step to catch and fix errors as they arise. This follows the best practice of building a complex
  document step-by-step.


-----------------

This session's key learning was how to resolve a deep package conflict between `titlesec` and `xepersian` when formatting starred sectioning commands in LaTeX.

**The Problem:**
- Attempting to format `\subsection*` with the `titlesec` package in a `xepersian` document leads to catastrophic compilation errors (e.g., `Missing \endcsname inserted`, `TeX capacity exceeded`).
- Standard `titlesec` solutions, including the `[explicit]` package option, fail to resolve the conflict, indicating a fundamental incompatibility in this specific context.

**The Debugging Process:**
1.  Initial attempts to use `\titleformat` and `\titleformat*` failed, pointing to a syntax or package loading issue.
2.  Isolating the problem by commenting out the `titlesec` commands for `\subsection*` resulted in a successful compilation, confirming these lines were the source of the error.
3.  Re-introducing the commands with the `[explicit]` package option also failed, revealing the conflict was deeper than just a syntax issue.

**The Solution: Manual Redefinition**
The most robust solution was to abandon `titlesec` for the problematic command and redefine it manually in the preamble. This bypasses the package conflict entirely.

**Implementation:**
The following code was added to the preamble to make `\subsection*` titles bold and large without using `titlesec`:

```latex
% Robust redefinition of \subsection* to make titles bold
\makeatletter
\let\origsubsection\subsection
\renewcommand\subsection{\@ifstar{\starsubsection}{\origsubsection}}
\newcommand\starsubsection[1]{\origsubsection*{\normalfont\large\bfseries #1}}
\makeatother
```

**Key Takeaway:**
When facing intractable errors from package conflicts (like `titlesec` vs. `xepersian`), the most effective strategy is often to stop using the problematic package feature for the specific command and implement the desired functionality manually. A robust redefinition using internal LaTeX commands (`\makeatletter`, `\@ifstar`, etc.) is a powerful and reliable alternative.

------------------



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
- Set main Persian font with `\settextfont{...}` ; font must be installed or compilation fails.
- Always set Latin font with `\setlatintextfont{...}` to avoid “Missing character” warnings in labels/Latin text.
- If using `\textbf`, ensure bold variant is available/declared for `xepersian`.
- Fallback: `ParsiMatn` works well for Persian and mixed scripts.
- Unsupported Unicode (e.g., emojis) will trigger “Missing character” warnings; remove or choose a font with coverage.

## Mixed Persian and Latin text
- Wrap Latin text inside Persian (RTL) context with `\lr{...}` to prevent directionality issues (even single letters like `y`).
- **CRITICAL**: Do not use `\lr{...}` inside math mode (`$ ... ). Units and Latin text inside math environments should be handled with `\text{...}` or `\mathrm{...}` instead.

, `$v = 10 \mathrm{m/s}## Project: LaTeX (Persian) with xepersian

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
- Set main Persian font with `\settextfont{...}` ; font must be installed or compilation fails.
- Always set Latin font with `\setlatintextfont{...}` to avoid “Missing character” warnings in labels/Latin text.
- If using `\textbf`, ensure bold variant is available/declared for `xepersian`.
- Fallback: `ParsiMatn` works well for Persian and mixed scripts.
- Unsupported Unicode (e.g., emojis) will trigger “Missing character” warnings; remove or choose a font with coverage.

## Mixed Persian and Latin text
- Wrap Latin text inside Persian (RTL) context with `\lr{...}` to prevent directionality issues (even single letters like `y`).
- **CRITICAL**: Do not use `\lr{...}` inside math mode (`$ ... ). Units and Latin text inside math environments should be handled with `\text{...}` or `\mathrm{...}` instead.

.
  - **CRITICAL**: Do not use these commands for regular text that is *not* inside a math environment (`$ ... ## Project: LaTeX (Persian) with xepersian

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
- Set main Persian font with `\settextfont{...}` ; font must be installed or compilation fails.
- Always set Latin font with `\setlatintextfont{...}` to avoid “Missing character” warnings in labels/Latin text.
- If using `\textbf`, ensure bold variant is available/declared for `xepersian`.
- Fallback: `ParsiMatn` works well for Persian and mixed scripts.
- Unsupported Unicode (e.g., emojis) will trigger “Missing character” warnings; remove or choose a font with coverage.

## Mixed Persian and Latin text
- Wrap Latin text inside Persian (RTL) context with `\lr{...}` to prevent directionality issues (even single letters like `y`).
- **CRITICAL**: Do not use `\lr{...}` inside math mode (`$ ... ). Units and Latin text inside math environments should be handled with `\text{...}` or `\mathrm{...}` instead.

 or `\[ ... \]`). It is unnecessary and can lead to errors. If it's normal text, just type it directly.


## Lists and numbering
- Persian alphabetical labels: use `\alph*`. Do not use `\asbuk*` (Cyrillic).
- `enumitem`: avoid invalid options like `rightmargin=*` (causes “Missing number, treated as zero”).
- Avoid `\persian{}` directly in `label=...` (can cause `Argument of \enit@refstar@i has an extra }`).

## Tables and layout
- `tabularx` (especially `>{\RaggedRight}X`) can conflict with `xepersian` and cause errors like “Extra }, or forgotten \endgroup”. Prefer one of:
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
- “Argument of \enit@refstar@i has an extra }” → avoid `\persian{}` inside `label=...` with `enumitem`.
- “Undefined control sequence” from `\asbuk*` → use `\alph*` for Persian alphabetical lists.
- “Command \end{...} invalid in math mode” → unterminated math (` missing) earlier.
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
- Math: use `$...; escape braces as `\{` and `\}` inside math.
- Acrobat compatibility: prefer `mdframed` over `tcolorbox`.

## Additional notes
- Be mindful of escaped backslashes in source text.
- `xepersian` usually handles number localization; avoid manual `\persian{}` in sensitive contexts (e.g., list labels).
- For mixed Persian/Latin content: use math mode for variables/numbers (without `\lr{...}`) and `\lr{...}` for Latin words in RTL text (outside math mode only).
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
  - **Equations**: `\[ \ce{N2(g) + 3H2(g) <=> 2NH3(g)} \]
- **Display Math**: For standalone equations, the `\[ ... \]` environment should be used. Do not include surrounding text or punctuation inside the math delimiters.

## 3. Typesetting Mixed-Language Text (RTL/LTR)

- **Latin in Persian**: For short, non-mathematical Latin acronyms or words within a Persian paragraph, use `\lr{...}`. Example: `\lr{STP}`.
- **Critical Rule**: **Do not** wrap math environments (`$..., `\[... \]`) or complex commands like `\ce{...}` inside `\lr{...}`. This was a major source of compilation errors (`Extra }`).

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
  - **Cause**: Placing Persian text inside a math environment (`$...). LaTeX attempts to render the text using a math font that lacks the required Persian glyphs.

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

The problem was solved by enclosing every `\ce{...}` command and its associated text within math delimiters (`$...).

**The key takeaway is that `\ce{...}` commands, in this context, must be wrapped in ` signs to ensure they are processed correctly by the LaTeX engine.**

### Corrected Example

By placing ` around the chemical formulas and the units, the compilation succeeds:

```latex
... ($\\ce{Ca}=40$, $\\ce{Cl}=35.5$ $\\mathrm{g/mol}$)
```

This ensures that all parts of the expression are correctly interpreted in math mode, resolving the error.

----------

# Critical Lesson: Never Use `\lr{...}` Inside Math Mode

## The Problem

A common mistake when working with Persian documents containing mathematical expressions with units is to wrap units with `\lr{...}` even when they are inside math mode (`$ ... ). This causes compilation errors and incorrect rendering.

**Example of INCORRECT usage:**
```latex
$10^{-5}$ \lr{J}     % Wrong: \lr{...} outside math is OK
$10^{-5} \lr{J}$     % WRONG: \lr{...} inside math mode causes errors
```

## The Solution

**Inside math mode (`$ ... ), never use `\lr{...}` for units or Latin text.** Instead:

- Use `\text{...}` for units: `$10^{-5} \text{ J}
- Use `\mathrm{...}` for upright text: `$10^{-5} \mathrm{J}
- Write variables and numbers directly: `$m = 2 \text{ kg}

**Example of CORRECT usage:**
```latex
الف) $10^{-7} J$                    % Correct: simple unit in math
ب) $10^{-5} \text{ J}$              % Correct: unit with \text{...}
ج) $\\rho = 800 \text{ kg/m}^3$      % Correct: complex unit with \text{...}
```

## Key Rules

1. **Outside math mode**: Use `\lr{...}` for Latin text in Persian context
2. **Inside math mode**: Never use `\lr{...}` - use `\text{...}` or `\mathrm{...}` instead
3. **Mixed expressions**: Keep math and text separate:
   ```latex
   برای محاسبه انرژی از فرمول $E = mc^2$ استفاده می‌کنیم.
   ```

This rule prevents compilation errors and ensures proper rendering of mathematical expressions with units in Persian documents.

----------

# Font Issues with Special Mathematical Characters

## The Problem

When using special Unicode characters like superscripts (³, ²) or special symbols (⁻¹) directly in text, the Persian font (like ParsiMatn) may not support these characters, leading to "Missing character" warnings:

```
Missing character: There is no ³ in font Parsi Matn/OT:script=latn;language=dflt;script=arab;mapping=persian-tex-text;!
Missing character: There is no ² in font Parsi Matn/OT:script=latn;language=dflt;script=arab;mapping=persian-tex-text;!
Missing character: There is no ⁻ in font Parsi Matn/OT:script=latn;language=dflt;script=arab;mapping=persian-tex-text;!
```

**Example of PROBLEMATIC usage:**
```latex
$\rho = 800 \text{ kg/m³}$          % ³ character not supported by Persian font
$N_A = 6 \times 10^{23} \text{ mol⁻¹}$  % ⁻¹ characters not supported
```

## The Solution

**Always use LaTeX's mathematical notation instead of Unicode special characters:**

- Use `^3` instead of `³`
- Use `^2` instead of `²` 
- Use `^{-1}` instead of `⁻¹`

**Example of CORRECT usage:**
```latex
$\rho = 800 \text{ kg/m}^3$              % Correct: ^3 instead of ³
$N_A = 6 \times 10^{23} \text{ mol}^{-1}$ % Correct: ^{-1} instead of ⁻¹
$g = 10 \text{ m/s}^2$                   % Correct: ^2 instead of ²
```

## Key Rules

1. **Never use Unicode superscripts/subscripts** (³, ², ⁻¹, etc.) in LaTeX documents
2. **Always use LaTeX notation** (`^3`, `^2`, `^{-1}`, etc.) for mathematical expressions
3. **This applies both inside and outside math mode** - LaTeX notation is always preferred
4. **Font compatibility**: LaTeX mathematical notation works with any font, while Unicode special characters depend on font support

This approach ensures compatibility across all fonts and prevents missing character warnings.
```

### **Advanced Debugging: A Critical `xepersian` Conflict**

This section details a critical and subtle error encountered when using display math environments (`\[ ... \]`) within a `xepersian` document.

**The Problem: `Bad math environment delimiter`**

A persistent `Bad math environment delimiter` error occurred even when using the correct `\[ ... \]` syntax for display math. The error was not immediately obvious from the code.

**The Root Cause and Solution:**

The error was not caused by the math environment itself, but by the command used for vertical spacing immediately before it.

*   **Incorrect Method:** Using `\[10pt]` to add vertical space. The `[` in this command was misinterpreted by the LaTeX compiler as the beginning of a math environment, which was never properly closed, leading to the error.
    ```latex
    % INCORRECT - Causes "Bad math environment delimiter"
    \item Some text
    \[10pt] % This is the source of the error
    \[ a = b + c \]
    ```

*   **Correct Method:** The proper command for adding vertical space is `\vspace{...}`. This command does not conflict with math environments.
    ```latex
    % CORRECT
    \item Some text
    \vspace{10pt}
    \[ a = b + c \]
    ```

**Key Takeaway:** Never use `\[...]` to add vertical spacing between paragraphs or before environments. Always use `\vspace{...}` or other dedicated spacing commands like `\medskip`.

--- 

### **Best Practice: Package Loading Order**

To prevent potential conflicts between packages, it is a recommended best practice to load math-related packages (`amsmath`, `amssymb`, etc.) **before** loading the `xepersian` package.

**Example Preamble:**
```latex
\documentclass[12pt]{article}

% Load math packages FIRST
\usepackage{amsmath,amssymb}
\usepackage[margin=1in]{geometry}

% Load xepersian LAST
\usepackage{xepersian}

% Font setup...
\settextfont{ParsiMatn}
\setlatintextfont{Times New Roman}

\begin{document}
...
\end{document}
```