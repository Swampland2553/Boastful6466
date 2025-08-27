### Working offline
- **Requirements**
  - **LaTeX distribution**: MiKTeX (Windows) or MacTeX (macOS)
  - **Text editor**: TeXmaker (recommended)
- **Benefits**
  - **Better control**: Cleaner project/file organization
  - **No internet needed**: Compile entirely offline
----------


```latex
\documentclass{article}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{amsfonts}
\usepackage{mathtools}
\usepackage{float}
\usepackage{array}
\usepackage{booktabs}
\usepackage{hyperref}
\usepackage[margin=1in]{geometry}
\usepackage{graphicx}
\usepackage{subcaption}
\usepackage{wrapfig}

\begin{document}

\section{ \texttt{\textbackslash lVert}  }

\verb|\lvert|

\end{document}



```

-----------


### File types and outputs
- **Source files** end with `.tex`
- **Compilation produces** both the `.tex` source and a `.pdf` output

### Core LaTeX concepts
- **Commands use backslashes**: e.g., `\section{...}`
- **Declare a document class**: e.g., `\documentclass{article}`
- **Every document needs** `\begin{document}` … `\end{document}`
- **You must compile** to see changes in the output

### Line breaks and paragraphs
- **Soft line break**: `\\` inserts a new line (no new paragraph)
- **Hard line break / new paragraph**: leave a blank line; LaTeX indents the new paragraph automatically

### Math mode
- **Inline math**: wrap with `$ ... $`
- **Display math**: wrap with `\[ ... \]` (centers on its own line)
  - Note: Avoid `$$ ... $$` in LaTeX; use `\[ ... \]` instead for better spacing and compatibility
- **Behavior**
  - Variables are italicized by default in math mode
  - Math symbols generally work only inside math mode

### Minimal document structure
```latex
\documentclass[11pt]{article}
\begin{document}
% content goes here
\end{document}
```

- Compile this file to generate a PDF.

### Superscripts
- **Caret `^`** introduces a superscript.
- **Group multi-character superscripts with braces `{}`**.
  - Examples: `x^2`, `x^{34}`, `x^{3x^4 + 5}`

### Subscripts
- **Underscore `_`** introduces a subscript.
- **Group multi-character subscripts with braces `{}`**.
  - Examples: `x_1`, `x_{12}`, `x_{1_{2_3}}`

### Greek letters
- **Lowercase**: `\pi`, `\alpha`, `\theta`
- **Uppercase**: `\Pi`, `\Gamma`, `\Theta`
- **Add a space after control words** when followed by text: `\pi r`, not `\pir`

### Trigonometric functions
- **Built-in operators**: `\sin`, `\cos`, `\tan`, `\sec`, `\csc`, `\cot`
- **Inverse**: `\sin^{-1}x` or `\arcsin x`

### Logarithms
- **Common log**: `\log x`
- **Natural log**: `\ln x`
- **With base**: `\log_{5} x` or `\log_{5}(x)`

### Roots
- **Square root**: `\sqrt{x}`
- **n-th root**: `\sqrt[n]{x}`
- **Nested roots**: `\sqrt{1 + \sqrt{x}}`

### Fractions
- **Basic fraction**: `\frac{numerator}{denominator}`
- **Force display style (larger) inside inline math**: `\displaystyle\frac{num}{den}`
  - Note: If using `amsmath`, `\dfrac{num}{den}` is a convenient shorthand.

### Math mode
- **Always write math inside math delimiters**:
  - Inline: `\( ... \)` or `$ ... $`
  - Display: `\[ ... \]` (avoid `$$ ... $$` in LaTeX)
- **Inline vs display** affects size/placement (e.g., fractions and limits are larger in display mode).

### Brackets and delimiters
- **Basic brackets**
  - Parentheses: `( ... )`
  - Square brackets: `[ ... ]`
  - Curly braces: `\{ ... \}` (must escape because `{}` are used for grouping)
- **Auto-sized delimiters**
  - Use `\left` … `\right` around tall content (fractions, matrices, etc.):
    - `\left( \frac{1}{x} \right)`, `\left[ ... \right]`, `\left\{ ... \right\}`, `\left\langle ... \right\rangle`, `\left| ... \right|`
  - Invisible mate for one-sided delimiters: `\left. ... \right|_{x=1}`
  - Alternatives: `\lvert ... \rvert`, `\lVert ... \rVert`; for fine control use `\bigl`, `\bigr`, `\Bigl`, `\Bigr`, etc.
-------------------

### What they are
- **`\lvert … \rvert`**: Left and right single vertical bars (absolute value).
- **`\lVert … \rVert`**: Left and right double vertical bars (norm).
- They scale with the content when paired with `\left` and `\right`. Without those, they’re standard size.

### Minimal examples

```latex
\[
\lvert -3 \rvert = 3, \qquad
\left\lvert \frac{1}{x^2} \right\rvert, \qquad
\left\lVert \begin{bmatrix}1\\-2\\3\end{bmatrix} \right\rVert
\]
```

```latex
Inline: Let $a = \lvert x-y \rvert$ and $b = \left\lVert \mathbf{v} \right\rVert_2$.
```

### With `\big`, `\Big`, etc. (manual sizing)

```latex
\[
\bigl\lvert x \bigr\rvert,\quad
\Bigl\lVert A \Bigr\rVert,\quad
\biggl\lvert \frac{x}{1-x} \biggr\rvert
\]
```

### Best practice with `mathtools` (paired delimiters)

```latex
\usepackage{mathtools}

\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}
\DeclarePairedDelimiter{\norm}{\lVert}{\rVert}

% Usage
\[
\abs{-3} = 3, \qquad
\norm{\mathbf{v}}, \qquad
\abs*{\frac{1}{x^2}} \text{ and } \norm*{\tfrac{x}{1+x}}
\]
```
- `*` makes them auto-size (requires `mathtools`).
- Without `*`, they stay standard size, which is often better inline.



























----------------
### Special symbols
- **Literal dollar sign**: `\$`
- **Real numbers**: `\mathbb{R}` (requires `amsfonts` or `amssymb`)
- **Set membership**: `\in`

### Document formatting
- **Paragraph indent**: set the length, e.g. `\setlength{\parindent}{0pt}`
- **Line breaks**: `\\` or with extra space `\\[6pt]` (use sparingly; prefer proper structuring)
- **Math mode**
  - Inline: `\( ... \)` or `$ ... $`
  - Display: `\[ ... \]` (avoid `$$ ... $$` in LaTeX)
  - Auto-sizing with `\left...\right` helps readability around tall expressions

### Common packages (load in the preamble)
```latex
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{amsfonts}
```

### Multilingual documents
- **Persian/Arabic**: Use `xepersian` package with `xelatex` engine
- **Mixed RTL/LTR text**: Wrap Latin text in Persian context with `\lr{...}` (outside math mode only)
- **Units in math**: Use `\text{...}` for units inside math mode, never `\lr{...}`

### Unmatched delimiters (evaluation bars, one-sided)
- Use an invisible delimiter on the missing side:
  - `\left.\frac{dy}{dx}\right|_{x=1}`
  - `\left. f(x) \right]_{0}^{1}` (when pairing with `]`, etc.)

### Tables (basics)
- Float wrapper + tabular:
```latex
\begin{table}[H] % requires \usepackage{float}
\centering
\caption{Caption here}\label{tab:example}
\begin{tabular}{|c|c|c|}
\hline
A & B & C \\ \hline
1 & 2 & 3 \\ \hline
\end{tabular}
\end{table}
```

-----------------------


```latex
\begin{table}[H] % requires \usepackage{float}


\centering
\caption{Caption here}\label{tab:example}


\begin{tabular}{|c|m{10cm}|c|} % \usepackage{array} % enables m{<width>} and helpers


\hline
Avv &  Session behavior for GEMINI CLI

 Granular reporting policy
- **Deconstruct tasks**: Break every task into the smallest actionable steps.
- **Announce every step**: Before acting, state the exact step you will take.
- **Report outcomes immediately**: After each step, state the result (success/failure), any output, and the next step.
- **No batching**: Do not combine steps; even trivial actions must be reported individually.
- **Over-communicate**: Maintain a continuous stream of updates; no action is too small to log.

 Core instruction: Critical thinking and best practices
- **Be critical**: Do not agree to user commands that are unsafe, low quality, or poor practice.
- **Challenge and propose**: Challenge risky or suboptimal requests; propose safer, higher-quality alternatives.
- **Quality and security first**: Favor code quality, security, and sound architecture over speed.
- **Verify with web search**: When creating plans or choosing approaches, use WebSearch to check current best practices and patterns; prefer up-to-date, reputable sources.
- **Explain rationale**: Briefly justify chosen approaches and call out trade-offs.
- **Gate destructive actions**: Require explicit confirmation for destructive or high-risk operations. & C \\ \hline
1 &  \makebox[\linewidth][c]{2}  & 3 \\ \hline


\end{tabular}



\end{table}
```

--------------------------------


















- **Column specifiers**: `l` (left), `c` (center), `r` (right); `|` adds vertical rules.
- **Rules**: `\hline` for horizontal lines.
- Tip: For higher-quality tables, consider `\usepackage{booktabs}` and avoid vertical rules.

### LaTeX Tables — Clean Reference

- **Column alignment**
  - `c`: center
  - `l`: left
  - `r`: right
  - `p{<width>}`: paragraph column with wrapping (e.g., `p{4cm}`)

- **Core syntax**
  - Column separator: `&`
  - Row break: `\\`
  - Horizontal line: `\hline`
  - Vertical lines: add `|` in the column spec (e.g., `{|l|c|r|}`)

- **Table structure and labeling**
  - Use `\begin{table} ... \end{table}` to create a floating table (auto-numbered).
  - Add a title with `\caption{...}` (can be placed above or below).
  - Center the table with `\centering`.

- **Row spacing**
  - Increase spacing with `\renewcommand{\arraystretch}{1.5}` (place before the `tabular`).

- **Positioning**
  - Force position with `[H]` (requires the `float` package).
  - Otherwise, LaTeX will place tables optimally.

- **Math and long text**
  - Math (including fractions) works inside tables.
  - Use `p{<width>}` columns to wrap long text.

- **Merging cells**
  - Possible to merge columns/rows (e.g., with `\multicolumn`, `\multirow`; not detailed here).

- **Packages**
  - Essential: `float` (for `[H]`).
  - Others may be needed for advanced layouts.

- **Tip**
  - Pay attention to spacing and alignment, especially with math and long paragraphs.

---

### LaTeX Text Formatting — Quick Reference

- **Basic styles**
  - Italic: `\textit{...}`
  - Bold: `\textbf{...}`
  - Small caps: `\textsc{...}`
  - Typewriter: `\texttt{...}`

- **Text sizes**
  - Environments: `\begin{large}...\end{large}`, `\begin{Large}...\end{Large}`, `\begin{huge}...\end{huge}`, `\begin{Huge}...\end{Huge}`
  - Declarations: `\normalsize`, `\small`, `\scriptsize`, `\tiny`

- **Note**
  - Use environments for scoped size changes; use declarations to change size from the point of use onward.

- **Common pairing**
  - For tables with larger row spacing and centered layout:
    - `\centering` + `\renewcommand{\arraystretch}{1.5}` inside the `table` environment.

- **Example column spec**
  - `\begin{tabular}{|l|c|p{5cm}|}` creates left, centered, and wrapped columns with vertical lines.

- **Readability reminder**
  - Keep column specs consistent and choose widths deliberately for wrapped text.

- **Summary of essentials**
  - Alignment: `l c r p{...}`
  - Structure: `&`, `\\`, `\hline`, `|`
  - Floats: `\begin{table}`, `\caption`, `\centering`, `[H]` (with `float`)
  - Spacing: `\renewcommand{\arraystretch}{...}`
  - Text styles/sizes: `\textbf{}`, `\textit{}`, `\texttt{}`, `\textsc{}`, size environments/declarations

I’m reorganizing your notes into a concise, readable English cheat sheet with short examples and best-practice hints.

### LaTeX Text Alignment — Quick Guide
- **Environments (scoped and readable)**
  - Center:

    ```latex
    \begin{center}
    ... 
    \end{center}
    ```

  - Left:

    ```latex
    \begin{flushleft}
    ...
    \end{flushleft}
    ```

  - Right:

    ```latex
    \begin{flushright}
    ...
    \end{flushright}
    ```
- **Inline declarations (use within a group `{ ... }`)**
  - `\centering`  `\raggedright`  `\raggedleft`
  - Example:
    
    ```latex
    {\centering This paragraph is centered.\par}
    ```

- **Tip**
  - Prefer environments for clarity and maintainability; use declarations only when you need local inline control.

### Document Structure
- **Title Block**

  ```latex
  \title{Title}
  \author{Author Name}
  \date{\today} % or a custom date
  \maketitle
  ```

- **Sections (auto-numbered)**
  - `\section{...}`
  - `\subsection{...}`
  - (Optional) Unnumbered with a star: `\section*{...}`

### Links and Logos
- **Enable hyperlinks**

  ```latex
  \usepackage{hyperref}
  ```

- **URLs and links**
  - URL: `\url{https://example.com}`
  - Link with text: `\href{https://example.com}{Example}`
- **LaTeX logo and spacing**
  - Write `\LaTeX\` (note the trailing backslash) or `\LaTeX{}` to ensure proper following space.

### Packages: Margins and Math
- **Margin control**
  - One-inch margins with `geometry`:

    ```latex
    \usepackage[margin=1in]{geometry}
    ```

  - Alternative: `fullpage` (simple fixed margins).
- **Math packages (common set)**

  ```latex
  \usepackage{amsmath, amsfonts, amssymb}
  ```

- **Tip**
- Use `geometry` for flexible page layout; load math packages early for consistent symbols and environments.

- Using environments (`\begin ... \end`) generally improves readability and localizes effects compared to single declarations that persist.



### LaTeX Macros (Custom Commands) — Clear Guide

- **Preferred syntax**
  - Define new command:

    ```latex
    \newcommand{\cmd}{content}
    ```

  - Redefine existing:

    ```latex
    \renewcommand{\cmd}{new content}
    ```

  - Define only if undefined:
    ```latex
    \providecommand{\cmd}{content}
    ```
  - Note: `\def` is a low-level TeX primitive (no checks). Prefer `\newcommand` for safety.

- **With arguments**
  - Positional args:
    ```latex
    \newcommand{\vect}[1]{\mathbf{#1}}   % use as \vect{x}
    \newcommand{\pair}[2]{\langle #1, #2\rangle}
    ```
- Optional first argument with default:
    ```latex
        \newcommand{\norm}[2][2]{\lVert #2 \rVert_{#1}} % \norm{x} or \norm[\infty]{x}
    ```
  - Starred form (no paragraph breaks allowed in args): `\newcommand*{...}{...}`

- **Robustness (advanced)**
  - For commands used in moving args (e.g., captions), consider:
    ```latex
    \DeclareRobustCommand{\R}{\mathbb{R}}
    ```

---------------

# TeX macro examples — explained with small snippets and what they produce

Great — below are short, focused examples that show what each macro command does and how you’d *use* the resulting macro. I give the LaTeX code, a one-line explanation, and what it prints (or what error you’d get).

---

## 1) Define a new command: `\newcommand{\cmd}{content}`

```tex
\newcommand{\vect}[1]{\mathbf{#1}}

% usage:
\vect{x}   % expands to \mathbf{x}
```

What it does: creates `\vect` that takes 1 argument and makes it bold in math mode.
Printed result (if used in math): **x** (i.e. `\mathbf{x}`).

If you later try to define `\vect` again with `\newcommand{\vect}{...}`, LaTeX will raise an error: *“Command \vect already defined.”* — this is a safety check.

---

## 2) Redefine existing command: `\renewcommand{\cmd}{new content}`

```tex
\newcommand{\greet}{Hello}
% later...
\renewcommand{\greet}{Hi there!}

% usage:
\greet   % prints "Hi there!"
```

What it does: replaces the previous definition. If `\greet` did **not** exist, `\renewcommand` would cause an error: *“Command \greet undefined.”*

---

## 3) Define only if undefined: `\providecommand{\cmd}{content}`

```tex
% Suppose a package may already define \TODO.
\providecommand{\TODO}[1]{\textbf{TODO: #1}}

% If \TODO was already defined by some package, this line does nothing.
% If it was not defined, you now have a definition.
```

Use when writing packages or shared documents: it avoids clobbering somebody else’s macro, but provides a fallback if it’s absent.

---

## 4) Low-level `\def` (NOT recommended for general use)

```tex
\def\pair#1#2{\langle #1, #2\rangle}

% usage:
\pair{a}{b}   % expands to ⟨a, b⟩
```

What to know: `\def` directly defines/overwrites a macro without error checks (no argument-count checking, no `\protect` behavior). That makes it powerful but unsafe for general LaTeX documents — prefer `\newcommand` / `\renewcommand` which do checks.

---

## 5) Positional arguments (examples)

```tex
\newcommand{\vect}[1]{\mathbf{#1}}
\newcommand{\pair}[2]{\langle #1, #2\rangle}

% usage
$\vect{x}$       % produces bold x
$\pair{u}{v}$    % produces ⟨u, v⟩
```

Arguments inside the definition are referenced as `#1`, `#2`, … up to `#9`.

---

## 6) Optional first argument with default

```tex
\newcommand{\norm}[2][2]{\lVert #2 \rVert_{#1}}

% usage examples:
\norm{x}           % defaults to \lVert x \rVert_{2}
\norm[\infty]{x}   % gives \lVert x \rVert_{\infty}
```

Syntax: the optional argument (here `#1`) is declared with `[2]` after the macro name; the actual required argument becomes `#2`.

---

## 7) Starred form: `\newcommand*{...}{...}`

* `\newcommand{\foo}{...}`  — allows paragraph tokens inside an argument.
* `\newcommand*{\foo}{...}` — forbids paragraph breaks inside arguments (argument must not contain an actual `\par`).

Example to illustrate difference:

```tex
\newcommand{\wrap}[1]{\textit{#1}}   % unstarred
\newcommand*{\wraps}[1]{\textit{#1}} % starred

% This is allowed for \wrap:
\wrap{First paragraph.

Second paragraph.}   % allowed (argument contains a paragraph)

% This will cause an error for \wraps:
\wraps{First paragraph.

Second paragraph.}  % error: argument contains a paragraph token
```

When to use the starred form: if your macro is *not* meant to accept paragraph breaks (which is common for short inline macros), use the starred form to catch accidental multi-paragraph input.

---

## 8) Robustness: `\DeclareRobustCommand{\R}{\mathbb{R}}`

Some macros are *fragile* (they break when used in moving arguments such as `\caption{...}` or section titles) and require `\protect` unless they are robust. `\DeclareRobustCommand` makes a command robust so it usually works safely in captions, section headers, etc.

```tex
\DeclareRobustCommand{\R}{\mathbb{R}}

% usage in a caption or section:
\section{The set $\R$}        % safe when \R is robust
\caption{A figure about $\R$} % safe when \R is robust
```

If you used `\newcommand{\R}{\mathbb{R}}` and LaTeX complains when `\R` appears inside `\caption{}`, you can either use `\protect\R` in the caption or make `\R` robust with `\DeclareRobustCommand`.

---

## 9) A compact real-world example file

```tex
\documentclass{article}
\usepackage{amsmath,amssymb}

\DeclareRobustCommand{\R}{\mathbb{R}}
\newcommand{\vect}[1]{\mathbf{#1}}
\newcommand{\pair}[2]{\langle #1, #2\rangle}
\newcommand{\norm}[2][2]{\lVert #2 \rVert_{#1}}

\begin{document}

Here is a vector: $\vect{x}$.

Inner product notation: $\pair{u}{v}$.

Default norm: $\norm{v}$, sup norm: $\norm[\infty]{v}$.

Section title using a robust macro:
\section{Sets in $\R$}

\end{document}
```

This demonstrates typical usage: math macros, optional argument, and robust macro used in a section title.

---

## Quick tips / best practices

* Prefer `\newcommand` / `\renewcommand` / `\providecommand` for safety and clear intent.
* Use `\providecommand` in shared packages to avoid clobbering user macros.
* Avoid `\def` unless you truly know what you’re doing.
* Use optional arguments for sensible defaults (norms, sizes).
* Use `\newcommand*{...}` when your macro arguments should not contain paragraph breaks.
* Use `\DeclareRobustCommand` for macros that will appear in captions, section headings, or other moving arguments so you don’t need to `\protect` them.

---

If you want, I can:

* produce a tiny downloadable `.tex` file with these examples, or
* show more advanced examples (e.g., commands with delimited arguments, verbatim-like macros, or macros that switch behavior depending on whether they are in math mode). Which would you like?


-----------------------------------------------------


# What a *macro* is — plain and simple

A **macro** in LaTeX is just a name you create that stands for some LaTeX code. Think of it like a *shortcut* or a *little function* you write once and then use many times.

Simple analogies:

* Like a keyboard shortcut: press one key and it types a whole phrase.
* Like a function in programming: you give it a name, maybe arguments, and it does something.
* Like a variable: you store a piece of text and reuse it.

Why use macros? Short list:

* **Save typing** — write `\authorname` once instead of typing your full name everywhere.
* **Avoid mistakes** — change the macro once to update every occurrence.
* **Make documents clearer** — `\vect{x}` is easier to read than `\mathbf{x}` everywhere.
* **Encapsulate formatting** — switch styles globally by changing the macro.

---

# Where you put macros

Put macro definitions in the *preamble* of your `.tex` file — i.e. before `\begin{document}`. Then the whole document can use them.

---

# Very small examples (with plain English results)

1. Plain text shortcut

```tex
\newcommand{\authorname}{Alice Smith}
```

Use: `\authorname` → prints: **Alice Smith**

2. Macro with one argument (like a function)

```tex
\newcommand{\greet}[1]{Hello, #1!}
```

Use: `\greet{Bob}` → prints: **Hello, Bob!**

3. Macro with two arguments

```tex
\newcommand{\pair}[2]{\langle #1, #2\rangle}
```

Use: `\pair{u}{v}` → prints: **⟨u, v⟩**

4. Optional first argument (a default)

```tex
\newcommand{\norm}[2][2]{\lVert #2 \rVert_{#1}}
```

Use: `\norm{x}` → prints: **‖x‖₂**
Use: `\norm[\infty]{x}` → prints: **‖x‖∞**

5. Replace an existing macro

```tex
\renewcommand{\greet}[1]{Hi, #1.}
```

Now `\greet{Bob}` → **Hi, Bob.**
(Use `\renewcommand` only when the name already existed and you want to change it.)

6. Define-if-missing (safe fallback)

```tex
\providecommand{\TODO}[1]{\textbf{TODO: #1}}
```

If some package already defined `\TODO`, this line does nothing. If not, you get a fallback definition.

7. Low-level (don’t use unless you know TeX)

```tex
\def\pair#1#2{\langle #1,#2\rangle}
```

`\def` overwrites without checks. Prefer `\newcommand`/`\renewcommand` for safety.

---

# A complete tiny `.tex` file you can try

```tex
\documentclass{article}
\usepackage{amsmath,amssymb}

% === macros (in preamble) ===
\newcommand{\authorname}{Alice Smith}               % no args
\newcommand{\greet}[1]{Hello, #1!}                 % 1 arg
\newcommand{\pair}[2]{\langle #1, #2\rangle}       % 2 args
\newcommand{\norm}[2][2]{\lVert #2 \rVert_{#1}}    % optional arg with default

\begin{document}

Author: \authorname

\greet{Reader}

Vector pair example: $\pair{u}{v}$

Default norm: $\norm{x}$, infinity norm: $\norm[\infty]{x}$

\end{document}
```

If you compile that, the document prints the author name, the greeting, the pair, and the norms — all using your macros.

---

# A few practical tips & best practices

* Put macros in the preamble (so they’re available everywhere).
* Use **descriptive names** (e.g., `\mysectiontitle`), not cryptic single letters — reduces collisions with packages.
* If you share your document with others, prefer `\providecommand` for fallbacks so you don't break other people’s definitions.
* Avoid `\def` unless you need TeX primitives; `\newcommand`/`\renewcommand` are safer.
* If you want to change styling sitewide (e.g., make all vectors bold), change the macro once instead of editing every vector.
* If a macro is only for one part of the document, you can limit its scope by defining it inside a `{ ... }` group, but usually put shared ones in the preamble.

---

# Quick checklist to get started

1. Ask: “Do I repeat this text/formatting a lot?” → make a macro.
2. Put `\newcommand{\name}{...}` in the preamble.
3. Use `\name` in the document.
4. Want to change how it looks? Edit the macro in one place.

---

If you found this useful I can:

* create a **very tiny example** showing before/after (same phrase typed many times vs. macro),
* or make a **step-by-step annotated `.tex` file** that I explain line-by-line.

Tell me which of those you want and I’ll produce it directly.




-------
  Headline Summary

  The warning \Underfull \hbox (badness 10000) means LaTeX was forced to typeset a line of text (a horizontal box, or \hbox) that has too
  little content to fill the required width. Because it couldn't stretch the spaces between words enough to fill the line, it gave up and
  assigned the maximum penalty score ("badness" 10000), signaling an "infinitely bad" line from a typesetting perspective.

  ---

  Phase 1: The Core Concepts (Deep Thinking)

  To understand the warning, you need to understand three things: TeX's Box Model, Glue, and the Badness penalty system.

  1. The Box Model: Everything is a Box

  LaTeX doesn't see text as just a string of characters. It sees everything as fitting inside boxes.
   * A single character (A) is a box.
   * A horizontal sequence of characters and spaces forms a horizontal box, or \hbox. Think of a single line of text in a paragraph as an
     `\hbox`.
   * A vertical stack of boxes forms a vertical box, or \vbox. A whole page is a giant \vbox.

  When LaTeX builds a paragraph, its main job is to take a long \hbox of words and break it into a stack of smaller \hboxes (the lines),
  where each line has the same target width (\textwidth).

  2. Glue: The Flexible Spacer

  How does LaTeX make every line perfectly justified? It can't just change the size of the letters. The secret is glue: flexible,
  stretchable, and shrinkable space.

   * The primary source of glue is the space between words.
   * This glue has a natural size, a stretch capacity, and a shrink capacity.
   * To make a line wider, LaTeX stretches the glue. To make it narrower, it shrinks the glue.

  3. Badness: The Penalty for Ugliness

  LaTeX is an optimization engine. Its goal is to break paragraphs into lines with the "least ugly" result. It quantifies ugliness with a
  numerical score called badness.

   * A perfectly typeset line has a badness of 0.
   * If LaTeX has to stretch or shrink the glue slightly, the badness score increases. The more it has to stretch, the higher the badness.
   * The scale goes from 0 to 10000.
   * Badness 10000 is the maximum penalty. It means the glue had to be stretched beyond its capacity. LaTeX considers this an "infinitely" bad
     line—a sign that it completely failed to typeset the line according to its rules.

  An `\Underfull` box is one where the glue had to be stretched. An `\Overfull` box (a different warning) is one where the content was too
  big and had to be compressed.

  ---

  Phase 2: A Clear Example

  Let's generate the exact warning. The most common cause is forcing a line break where it doesn't belong.

   \documentclass{article}
   \usepackage[margin=1in]{geometry}

   \begin{document}

   This is a normal line of text that will be justified correctly by LaTeX without any issues.
   Now, let's force a line break right here: \\
   word.

   \end{document}

  Analysis of the Example:

   1. You type word. on a new line after \\.
   2. LaTeX sees the \\ and is forced to end the current line and start a new one.
   3. The new line now contains only one piece of content: the box for the word "word.".
   4. LaTeX's goal is to make this line fill the entire text width (e.g., 6.5 inches).
   5. There is no inter-word glue to stretch. There is nothing to fill the vast empty space to the right of "word.".
   6. LaTeX recognizes that it cannot fill this \hbox. It declares the box underfull and assigns the maximum penalty: badness 10000.

  You will get the console output: Underfull \hbox (badness 10000) in paragraph at lines 7-8

  And the visual output will be ugly:

  > This is a normal line of text that will be justified correctly by LaTeX without any issues. Now, let's force a line break right here:
  > word.

  ---

  Phase 3: How to Fix It (From Worst to Best)

  The solution is almost never to just ignore the warning. It's a sign of a real problem.

  Solution 1: The Wrong Way (Don't do this)
  Many beginners use \\ to shape paragraphs. This is the primary cause of the warning. `\\` is for ending lines in specific environments
  like tables or addresses, not for ending lines in a normal paragraph.

  Solution 2: The Simple Way - Let LaTeX Do Its Job
  The best solution is often to remove the forced line break and let LaTeX's line-breaking algorithm work as intended. If you want to start
  a new paragraph, leave a blank line in your source code.

  Bad:
   Some text. \\ More text.

  Good:
   Some text.

   More text.

  Solution 3: The Correct Way to Force a Break
  If you absolutely must force a line break without creating a new paragraph, use \newline. Unlike \\, \newline does not fill the rest of
  the line with whitespace, so it won't create an underfull box. However, the line will not be justified.

  Solution 4: The "Sloppy" Way
  If you have a paragraph that is genuinely difficult to typeset (e.g., with lots of long, unbreakable words), you can tell LaTeX to be less
  strict.

   * `\sloppy` command: Place \sloppy before the paragraph. It tells LaTeX to relax its standards for badness, allowing for more stretching of
     spaces to avoid more serious errors like words sticking out into the margin.
   * `sloppypar` environment: For a more controlled approach, wrap the difficult paragraph in \begin{sloppypar} ...
     \end{get_project_root_path}.

  Solution 5: The Professional Way - microtype
  For the best-looking paragraphs, the microtype package is the gold standard. It provides "font expansion" and "protrusion," which are
  subtle adjustments to the shapes and spacing of characters themselves. This gives LaTeX more flexibility to typeset lines perfectly, often
  eliminating underfull/overfull box warnings without you having to do anything.

  Simply adding \usepackage{microtype} to your preamble can dramatically improve the look of your document and reduce these warnings.

  Final Synthesis

   * What it means: \Underfull \hbox (badness 10000) is LaTeX's cry for help. It means you've created a line that is mostly empty space, and
     it couldn't find a way to justify it properly.
   * Common Cause: Misusing \\ to break lines within a paragraph.
   * Your Action Plan:
       1. Find the line number mentioned in the warning.
       2. Look for a \\ command. Remove it.
       3. If you need a new paragraph, use a blank line in your code.
       4. If the paragraph is truly difficult, consider rewording it or using the sloppypar environment.
       5. For a project-wide improvement, load the microtype package.

Using: 2 GEMINI.md files                                                                                      YOLO mode (ctrl + y to toggle)
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ > space, and                                                                                                                             │
│        it couldn't find a way to justify it properly.                                                                                    │
│      * Common Cause: Misusing  to break lines within a paragraph.                                                                        │
│      * Your Action Plan:                                                                                                                 │
│          1. Find the line number mentioned in the warning.                                                                               │
│          2. Look for a  command. Remove it.                                                                                              │
│          3. If you need a new paragraph, use a blank line in your code.                                                                  │
│          4. If the paragraph is truly difficult, consider rewording it or using the sloppypar environment.                               │
│          5. For a project-wide improvement, load the microtype package.                                                                  │
│   \\                                                                                                                                     │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
~\Videos\sing-box\Gemini\gemini_CLI                   no sandbox (see /docs)                     gemini-2.5-pro (99% context left)| 182.8 MB










--------------------------
### LaTeX Graphics — Practical Reference

- **Required package (in the preamble)**
  ```latex
    \usepackage{graphicx}
  ```

- **Insert an image**
  ```latex
    \includegraphics[options]{filename} % omit extension if possible
  ```
  - Common options:
    - `scale=0.5`
    - `width=0.5\textwidth` (or better inside floats: `0.5\linewidth`)
    - `width=3.5in`
    - `height=5in`
    - Combine with `keepaspectratio`

- **Figure environment (numbering, caption, cross-ref)**
  ```latex
    \begin{figure}[htbp] % or [H] with 'float' package
    \centering
    \includegraphics[width=0.8\linewidth]{images/plot}
    \caption{Descriptive caption}
    \label{fig:plot} % place after \caption
    \end{figure}
  ```
  - Placement keys: `h` (here), `t` (top), `b` (bottom), `p` (page of floats), `!` (override), `H` (exact, needs `float`).
  - Figures are auto-numbered; reference with `Figure~\ref{fig:plot}`.

- **File location**
  - Images do not need to be in the same folder as the `.tex` file. Use relative paths or set search paths:
    ```latex
    \graphicspath{{images/}{figs/}}
    ```

- **Good practices**
  - Use `\centering` inside `figure`.
  - Prefer `\linewidth` for width inside floats/minipages.
  - Put all packages in the preamble (between `\documentclass{...}` and `\begin{document}`).
  - For exact placement `[H]`, load:
    ```latex
    \usepackage{float}
    ```

- **Extras (optional)**
  - Subfigures: `\usepackage{subcaption}`
  - Wrap text around figures: `\usepackage{wrapfig}`

- **Minimal working example**
  ```latex
    \documentclass{article}
    \usepackage[margin=1in]{geometry}
    \usepackage{graphicx}
    \usepackage{float}

    \begin{document}
    \begin{figure}[H]
    \centering
    \includegraphics[width=0.6\linewidth]{example-image}
    \caption{An example image}
    \label{fig:example}
    \end{figure}
    Figure~\ref{fig:example} shows a placeholder graphic.
    \end{document}
  ```

- **Key reminders**
  - Place `\label` immediately after `\caption`.
  - Use `\newcommand` (not `\def`) for safer macro definitions.
  - Manage image paths with `\graphicspath` to avoid copying files into the document folder.

I’m rewriting your LaTeX debugging notes into a compact, structured English guide with clear sections, examples, and best-practice tips.

### LaTeX Debugging — Practical Playbook

- **Common error types**
  - **Missing pairs**
    - `\left` without matching `\right`
    - `\begin{...}` without `\end{...}`
    - Missing `{}` around arguments
    - Unmatched `$ ... $` (inline math)
  - **Package-related**
    - “Undefined control sequence” → likely missing package
    - `align` requires:

      ```latex
      \usepackage{amsmath}
      ```

    - Common math set:

      ```latex
      \usepackage{amsmath, amsfonts, amssymb}
      ```

  - **Math mode pitfalls**
    - Do not use `$` inside `align` (it’s already math mode)
    - No blank lines inside `align`
    - Spaces are ignored in math; force spacing with `\,`, `\;`, `\quad`
    - Text in math: `\text{...}` (from `amsmath`)

- **Systematic debugging workflow**
  - **Read errors carefully**
    - Start with the first error; later ones are often cascading
    - Line numbers can be off by a few lines (look near the reported line)
  - **Minimize to isolate**
    - Comment out blocks with `%` or temporarily wrap with:
      ```latex
        \iffalse
        ... large block ...
        \fi
      ```
    - Build a minimal working example (MWE)
  - **Editor aids**
    - Enable line numbers
    - Use bracket/brace matching highlights
    - Indent nested environments for readability
  - **Quick checks**
    - Count `{` and `}`; ensure all environments are closed
    - Ensure required packages are in the preamble (before `\begin{document}`)
    - Remove stray `_` or `^` outside math mode
    - In tables: each row has the correct number of `&`
  - **Research**
    - Google the exact error message with “LaTeX”
    - Open package docs: `texdoc amsmath` (or the relevant package)

- **Correct usage examples**
  - **Matching delimiters**
    ```latex
    \left( \frac{a}{b} \right)
    ```
  - **Proper align block**
    ```latex
        \usepackage{amsmath}
        ...
        \begin{align}
        a &= b + c \\
        d &= e
        \end{align}
    ```
  - **Fixing undefined commands**
    ```latex
        % Undefined control sequence: \mathbb -> load amsfonts
        \usepackage{amsfonts}
    ```

- **Mindset**
  - Be patient and methodical; fix errors one at a time.
  - Most issues come from missing packages, unbalanced delimiters, or environment misuse.

### TeXmaker — Practical Cheat Sheet

- **Compile options**
  - F1 to compile (Quick Build).
  - Quick Build button in the toolbar.
  - PDF viewer: built-in (recommended for quick checks) or external.
  - “View PDF” does not recompile; run compile first.

- **Interface essentials**
  - Structure panel (navigate sections).
  - Symbol selector (insert common symbols).
  - Toolbar shortcuts (compile, view, clean).
  - Built-in PDF viewer (fast preview, keeps context).

- **Preferences to set (editor-only)**
  - Font family/size for readability.
  - Word wrapping (toggle as needed).
  - Auto-completion (speed up typing).
  - Line numbering (debugging).
  - Auto-backup options.
  - Choose PDF viewer (built-in/external).

- **Helpful features**
  - Symbol insertion panel with click-to-insert.
  - Auto-completion suggestions for commands.
  - Section/formatting buttons.
  - Line numbers and error panel for easier debugging.

### File Management

- **Auxiliary files**
  - Generated on compile: `.aux`, `.log`, `.synctex.gz`, etc.
  - Safe to clean automatically; not needed for the final PDF.
  - SyncTeX (`.synctex.gz`) enables source–PDF navigation when supported.

- **Backups**
  - Optional auto-backup (e.g., every 10 minutes) creates `.bak` files.
  - Frequent compilation provides additional checkpoints.

### Best Practices

- **Compilation workflow**
  - Compile frequently (F1/Quick Build).
  - Review the PDF after changes to catch issues early.
  - Start fixing from the first error in the log; later errors often cascade.

- **Viewer settings**
  - Prefer the built-in viewer for quick iteration.
  - External viewer is fine if you need advanced viewing features.
  - Remember: viewing a PDF does not trigger compilation.

- **Editor setup for efficiency**
  - Increase editor font size for comfort.
  - Enable line numbers and word wrap as needed.
  - Keep auto-completion on for common commands and environments.

### TeXmaker vs Overleaf (context)

- **Overleaf**
  - Cloud-based, real-time collaboration, auto-compile.
  - Error messages/logs can be less granular.

- **TeXmaker**
  - Clear local logs and structured error panel.
  - Faster local iteration and more user-friendly for debugging.

- **Tip**
  - Use TeXmaker when you need precise, step-by-step debugging; use Overleaf for collaboration and sharing.


### TeXmaker — Useful Interface Features

- **User Tags (snippets)**
  - Store up to 10 custom snippets.
  - Access with Shift+F1 … Shift+F10.
  - Ideal for frequently used code (preambles, figures, tables).

- **Wizards**
  - Quick Start for new document scaffolding.
  - Table wizard to generate `tabular` boilerplate.
  - Beamer presentation templates.

- **Help resources**
  - Built-in LaTeX reference, user manual, and command docs.

### Overleaf — Key Interface Elements

- **Project management**
  - Create new projects from scratch or templates.
  - Rename files and set the project’s Main file.
  - Template library for articles, theses, posters, beamer, etc.

- **View options**
  - Source editor or Rich Text (limited; use Source for precision).
  - Adjustable split panes; collapse/expand panels.
  - Live PDF preview with auto-compile (can be toggled).

- **File structure**
  - Left-side file tree for navigation and organization.
  - Create folders for images, sections, bibliography.
  - Right-click to rename/move; mark Main file for compilation.

### Best Practices for Organization and Workflow

- **File naming**
  - Avoid spaces; prefer lowercase with underscores (e.g., `my_paper.tex`).
  - If you rename `main.tex`, set the correct Main file in Overleaf.
  - Keep assets in folders: `figures/`, `sections/`, `bib/`.

- **Interface organization**
  - Adjust panel sizes; use full screen when needed.
  - Toggle between Source/Rich Text only if necessary (prefer Source).
  - Keep PDF preview visible while editing for quick feedback.

- **Documentation and snippets**
  - Store reusable code: TeXmaker User Tags or an external notes app (e.g., Google Keep).
  - Use built-in references (TeXmaker) and Overleaf’s template library for quick starts.

- **General workflow**
  - Compile often and review the PDF to catch issues early.
  - Keep the project tidy: clean auxiliary files locally; organize folders on Overleaf.
  - Leverage autocomplete, wizards, and snippets to reduce repetitive typing.

- Rewrote and structured the notes for clarity and speed-of-use, adding practical tips on file naming, setting the Main file in Overleaf, and using TeXmaker’s User Tags and wizards to streamline workflows.

### LaTeX Calculus Notation — Clean Reference

- **Functions**
  ```latex
        \[ f(x) = (x-3)^2 + \frac{1}{2} \]
  ```

- **Domain and range (upright labels)**
  - Upright letters:
    ```latex
        \[ \mathrm{D}_f = (-\infty,\infty), \qquad \mathrm{R}_f = \left[\tfrac{1}{2},\infty\right) \]
    ```
  - Alternative operator-style:
    ```latex
        \[ \operatorname{Dom}(f)=\mathbb{R}, \qquad \operatorname{Ran}(f)=\left[\tfrac{1}{2},\infty\right) \]
    ```
  - Infinity: `\infty`

- **Limits**
  - Basic:
    ```latex
        \[ \lim_{x \to a} f(x) \]
    ```
  - One‑sided:
    ```latex
        \[ \lim_{x \to a^-} f(x), \qquad \lim_{x \to a^+} f(x) \]
    ```
  - Derivative definition:
    ```latex
        \[ \lim_{x \to a} \frac{f(x)-f(a)}{x-a} \]
    ```
  - Inline sizing (only if needed):
    ```latex
        $\displaystyle \lim_{x\to a} \frac{f(x)-f(a)}{x-a}$
    ```

- **Integrals**
  - Basic:
    ```latex
        \[ \int \sin x \, \mathrm{d}x \]
    ```
  - With limits:
    ```latex
        \[ \int_a^b f(x)\, \mathrm{d}x \]
    ```
  - Spacing and differentials:
    - Use `\,` before the differential.
    - Prefer upright differential: `\mathrm{d}x`.
  - Trig functions are commands: `\sin`, `\cos`, `\tan`, etc.
  - For inline math with large fractions/integrals, use `\displaystyle`:
    ```latex
        $\displaystyle \int \frac{1}{1+x^2}\, \mathrm{d}x$
    ```
  - Indefinite integrals: remember `+ C`.

- **Sizing and spacing tips**
  - Display math: prefer `\[ ... \]` over `$$ ... $$`.
  - `\displaystyle` for larger symbols in inline math.
  - Force small space with `\,`; larger: `\;`, `\quad`.

- **Upright multi-letter identifiers**
  - Use `\mathrm{...}` or `\operatorname{...}` to avoid italicizing words:
    ```latex
        \[ \operatorname{Var}(X), \quad \mathrm{D}_f, \quad \mathrm{R}_f \]
    ```

- **Packages (if needed)**
  - For `\mathbb{R}` and friends:
    ```latex
        \usepackage{amsfonts, amssymb}
    ```

### Advanced Calculus Notation in LaTeX — Clear Guide

- **Definite integrals**
  - Display math (limits above/below automatically):
    ```latex
        \[ \int_{a}^{b} f(x)\,\mathrm{d}x \]
    ```
  - Inline (force limits above/below):
    ```latex
        $\int\limits_{a}^{b} f(x)\,\mathrm{d}x$
    ```
  - Multi‑character limits need braces:
    ```latex
        \[ \int_{2a}^{b} f(x)\,\mathrm{d}x \]
    ```
  - Evaluation notation:
    ```latex
        \[ \left[ \frac{x^3}{3} \right]_{a}^{b} \quad\text{or}\quad \Bigl.\frac{x^3}{3}\Bigr|_{a}^{b} \]
    ```

- **Summations**
  - Display:
    ```latex
        \[ \sum_{n=1}^{\infty} a_n \]
    ```
  - Inline (bigger symbols if needed):
    ```latex
        $\displaystyle \sum_{n=1}^{\infty} a_n$
    ```
  - Series example:
    ```latex
    \[ a + ar + ar^2 + \cdots + ar^n \]
    ```
  - Equivalent with sigma:
    ```latex
        \[ \sum_{k=0}^{n} ar^k \]
    ```

- **Vectors**
  - Arrow notation and basis vectors:
    ```latex
        \[ \vec{v} = \mathbf{i} + \mathbf{j} \quad\text{(or } \hat{\imath} + \hat{\jmath}\text{)} \]
    ```
  - Component/angle brackets:
    ```latex
        \[ \langle v_1, v_2 \rangle \]
    ```
  - Column vector (optional):
    ```latex
        \[ \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} \]
    ```

- **Spacing and dots**
  - Small space: `\,` (e.g., `\int f(x)\, \mathrm{d}x`)
  - Multiplication dot: `\cdot`; times sign: `\times`
  - Dots: `\cdots` (centered), `\ldots` (on baseline, e.g., lists)

- **Greek letters**
  - Upper vs lower case:
    ```latex
        \[ \Delta, \ \delta \]
    ```

- **Display style tips**
  - Prefer `\[ ... \]` for display math (instead of `$$ ... $$`).
  - Use `\displaystyle` only in inline math when you need larger symbols:
    ```latex
        $\displaystyle \int_{a}^{b} f(x)\,\mathrm{d}x$
    ```

- **Best‑practice reminders**
  - Use braces for multi‑symbol limits/subscripts.
  - In display math, `\int` and `\sum` already place limits above/below; inline needs `\limits`/`\displaystyle` if desired.
  - Add thin space before differentials and use upright `\mathrm{d}x`.

-----------------

  What is itemize?

  In short, `itemize` is the standard LaTeX environment for creating bulleted lists.

  Instead of manually typing a bullet character (like - or *), managing indentation, and forcing line breaks with \\, you simply tell LaTeX
  that you are starting a list, and it handles all the formatting for you.

  Basic Syntax

  The structure is very simple:

   \begin{itemize}
     \item First item in the list.
     \item Second item in the list.
     \item And so on...
   \end{itemize}

   * \begin{itemize}: This command starts the list environment.
   * \item: This command starts a new list item. LaTeX automatically adds the bullet point and the correct amount of space.
   * \end{itemize}: This command ends the list environment.

  Key Advantages

  This is why it's so much better than manual formatting:

   1. Automatic Formatting: It automatically adds the bullet points, indents the list correctly, and ensures the proper vertical spacing
      between items and the surrounding text.
   2. Worry-Free Line Breaks: If a single list item is very long, LaTeX will wrap the text to the next line and indent it perfectly, without
      causing any \Underfull \hbox warnings.
   3. Nesting: You can easily create nested lists (lists within lists), and LaTeX will automatically change the bullet style for each level
      (e.g., from a solid dot, to a dash, to an asterisk).

  A Complete Example

  Here is a full, working example you can compile:

   \documentclass{article}
   \begin{document}

   Here are the topics we will cover:

   \begin{itemize}
     \item The basic structure of a LaTeX document.
     \item How to create lists, which is a very important skill for organizing information clearly and effectively.
     \item How to add mathematical equations.
   \end{itemize}

   The presentation will conclude with a Q\&A session.

   \end{document}

  Example of a Nested List

  This shows how the bullet styles change automatically.

   \documentclass{article}
   \begin{document}

   \begin{itemize}
     \item Chapter 1: Introduction
     \item Chapter 2: Main Topics
       \begin{itemize}
         \item Section 2.1: The First Topic
         \item Section 2.2: The Second Topic
           \begin{itemize}
             \item A sub-point about the second topic.
           \end{itemize}
       \end{itemize}
     \item Chapter 3: Conclusion
   \end{itemize}

   \end{document}
   --------


   ------

     1. The enumerate Environment (Numbered Lists)

  This environment is for creating ordered lists where each item is automatically numbered. When you nest enumerate lists, the numbering
  style changes automatically for each level.

  Syntax:
   \begin{enumerate}
     \item First item.
     \item Second item.
   \end{enumerate}

  Example:

  Here is a full, working example showing a nested list.

   \documentclass{article}
   \begin{document}

   Here is the plan for the project, in order:

   \begin{enumerate}
     \item \textbf{Initial Research Phase:} Gather all necessary materials.
     \item \textbf{Development Phase:} Build the core components.
       \begin{enumerate}
         \item Design the user interface.
         \item Write the back-end logic. (This is a long item, and you can see how LaTeX handles the line wrapping and indentation
   automatically for you).
         \item Develop the database schema.
       \end{enumerate}
     \item \textbf{Testing Phase:} Ensure everything works correctly.
     \item \textbf{Deployment:} Launch the project.
   \end{enumerate}

   \end{document}

  Output of the Example:

  When you compile this, you will get a list numbered like this:
   1. Initial Research Phase: ...
   2. Development Phase: ...
      (a) Design the user interface.
      (b) Write the back-end logic. ...
      (c) Develop the database schema.
   3. Testing Phase: ...
   4. Deployment: ...

  Notice how the nested list automatically used (a), (b), (c) for its numbering.

  ---

  2. The description Environment (Custom Labels)

  This environment is perfect for creating glossaries or definition lists. You specify the label for each item yourself, and LaTeX formats
  it in bold.

  Syntax:
  The key difference is that the \item command takes an argument in square brackets [...] which becomes the label.

   \begin{description}
     \item[LabelOne] The definition for the first item.
     \item[LabelTwo] The definition for the second item.
   \end{description}

  Example:

  Here is a full, working example defining some LaTeX terms.

   \documentclass{article}
   \begin{document}

   Here is a glossary of common LaTeX terms:

   \begin{description}
     \item[Package] A file that can be imported into a LaTeX document (using \texttt{\textbackslash usepackage}) to add new commands,
   features, or change document styling.

     \item[Environment] A block of code started with \texttt{\textbackslash begin\{...\} } and ended with \texttt{\textbackslash
   end\{...\} }. Environments are used to apply special formatting to a section of content, such as creating lists, theorems, or
   figures.

     \item[Compiler] A program (like pdfLaTeX, XeLaTeX, or LuaLaTeX) that reads your \texttt{.tex} source file and produces a viewable
   document, typically a PDF.
   \end{description}

   \end{document}

  Output of the Example:

  This will produce a list where each term you provided in the \item[...] command is displayed in bold, followed by its definition, neatly
  indented.

  > Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A file that can be imported...
  >
  > Environment &nbsp; A block of code started with...
  >
  > Compiler &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A program (like pdfLaTeX)..
  ----------


   \begin{itemize}

\item $x_1$
  \item $x_{12}$
  \item $x_{1_{2_3}}$
  \item$\left. c \right|_{x=1}$ \\[6pt]
this one
 \item $\left. \dfrac{dy}{dx} \right|_{x=1}$

\end{itemize}

--------------

\begin{table}[H] % requires \usepackage{float}


\centering
\caption{Caption here}\label{tab:example}


\begin{tabular}{|c|m{5cm}|c|} % \usepackage{array} % enables m{<width>} and helpers


\hline
Avv 
&    
\begin{itemize}
     \item First item in the list.
     \item Second item in the list.
     \item And so on
   \end{itemize} 
   & 
   C \\ 
   \hline
   1 
   & 
   \makebox[\linewidth][c]{2}  
   & 
   3 \\ 
   \hline
 
   -----------
