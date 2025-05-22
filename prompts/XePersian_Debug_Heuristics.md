Okay, the domain/topic is: "Debugging LaTeX documents using XePersian for Persian typesetting."

Reflecting on all our interactions, including the specific challenges and solutions encountered during this current session regarding Table of Contents numbering, here is the revised, enhanced, and expanded list of "Problem-Solving Learnings & Heuristics":

1.  **Font Availability is Paramount:**
    *   Heuristic: When a `fontspec` error like `The font "X" cannot be found` occurs with XePersian:
        *   First, verify the font name specified in `\settextfont{X}` is correct and that the font is actually accessible to the XeTeX engine.
        *   As a quick diagnostic or fallback, suggest switching to a widely available and commonly used Persian font (e.g., Amiri) via `\settextfont{Amiri}`.
        *   If a specific custom font X is required, ensure the user understands that the font file (e.g., X.ttf or X.otf) must either be installed system-wide or, more reliably for Overleaf/portability, uploaded to the project directory and referenced by its exact filename (e.g., `\settextfont{X.ttf}`).
    *   Heuristic: For "Missing character" warnings with Persian text in specific elements (e.g., a logo defined with `\logo{\textsf{\textbf{...}}}`):
        *   The font used by the formatting command (e.g., `\textsf`) likely lacks Persian glyphs.
        *   **Solution 1 (Simplest):** Remove the problematic font-switching command (e.g., change `\textsf{\textbf{دبیرستان پیام}}` to `\textbf{دبیرستان پیام}` to use the main document font).
        *   **Solution 2 (Targeted Font Switch):** Use `\fontspec` to temporarily switch to a known Persian-supporting font for that element: `{\fontspec{Amiri}\textbf{دبیرستان پیام}}`.
        *   **Solution 3 (Global Font Definition):** If a specific font style (e.g., sans-serif) is desired globally for Persian, ensure it's set up correctly using `fontspec` commands like `\setsansfont{PersianSansSerifFontName}` in the preamble.

2.  **XePersian/Bidi Loading Order is Critical (Load Late):**
    *   Heuristic: When encountering `Package bidi Error: Oops! you have loaded package [P] after bidi package...` (where `[P]` is any other package like `amsmath`, `geometry`, etc.):
        *   The primary strategy is to move `\usepackage{xepersian}` and its associated font setup commands (`\settextfont{...}`, `\SepMark{...}`, etc.) to be as late as possible in the document preamble, *after* most other `\usepackage` calls (e.g., `amsmath`, `geometry`, `enumitem`).
        *   This is because `xepersian` (which loads `bidi`) needs to modify the behavior of many other packages to work correctly with right-to-left text, and it can do this most effectively if those packages are already loaded. (See also Heuristic #11 for `\AtBeginDocument` usage).

3.  **Compiler Prerequisite (XeLaTeX):**
    *   Heuristic: Before diving into `xepersian`-specific errors, always confirm or remind the user that documents using `xepersian` *must* be compiled with XeLaTeX (or LuaLaTeX with appropriate setup, though XeLaTeX is more common for `xepersian`). A standard `pdflatex` compiler will not work.

4.  **Isolate Errors by Log Analysis & Systematic Debugging:**
    *   Heuristic: When presented with a LaTeX log, focus on the *first* significant error message.
        *   Pay close attention to messages related to `fontspec`, `bidi`, `xepersian`, or "Undefined control sequence". Subsequent errors are often cascades from the initial problem. Address errors sequentially.
    *   Heuristic: **Before suspecting complex package interactions (like those with XePersian or bidi), always double-check for common LaTeX syntax errors: mismatched `\begin{...}`/`\end{...}` pairs, typos in command names, or missing/extra braces.** These often manifest as "Runaway argument?", "File ended while scanning use of \...", or similar structural errors.
    *   Heuristic: For persistent "Missing \endgroup inserted." errors at `\end{frame}` in Beamer documents using XePersian:
        *   **Priority 1: Add the `[fragile]` option to the `\begin{frame}[fragile]` command for the problematic frame.** This often resolves issues with complex content parsing.
        *   **Priority 2: Simplify the `\frametitle{...}`.** Remove any complex commands like `\textcolor`, `\textbf`, or other macros from *within* the `\frametitle` argument. Use Beamer's theme settings (`\setbeamercolor`, `\setbeamerfont`) in the preamble for consistent title appearance. If Persian text in the frametitle is suspected, test with plain ASCII text first.
        *   **Priority 3 (Systematic Content Simplification):** If the error persists, systematically comment out content *within* the problematic frame. Start with the most complex elements or recently added parts (blocks, complex environments, lists, formatting). This helps pinpoint the exact line or environment causing the unclosed group.
    *   Heuristic: When debugging features that rely on auxiliary files (e.g., Table of Contents, cross-references, bibliographies), especially on Overleaf, **always clear cached files** after making changes to preamble definitions or relevant content. Old `.aux`/`.toc` files can cause persistent errors or prevent changes from appearing. Recompile multiple times (2-3) after clearing cache.
    *   Heuristic: If user-provided examples (images, descriptions) of desired output seem to contradict the code being developed or standard LaTeX behavior (e.g., an image showing `subsection_num-section_num` when the code implements `section_num-subsection_num`), **explicitly seek clarification on the intended *logic* of the numbering/formatting.** Do not assume the visual example perfectly reflects a standard implementation or the user's full intent.

5.  **Number Formatting Strategy for XePersian (Decimals, Order, Separator - for inline text):**
    *   Heuristic: For rendering Persian numbers *in inline text*, especially with custom decimal separators (e.g., `۲/۵` for `2.5`):
        *   **Preamble Setup:**
            *   Ensure `\usepackage{xepersian}` is loaded.
            *   Set a Persian font with `\settextfont{FontName}`.
            *   Define the *desired output decimal separator* using `\SepMark{/}` (or your chosen character) *after* `\settextfont`. This command primarily affects how LaTeX-generated numbers (like counters, or numbers formatted by specific packages like `siunitx` with appropriate options) are displayed.
        *   **Direct Input of Numbers (Including Decimals) in Source Code for Inline Text:**
            *   **Context:** When typing numbers (including those intended as decimals, like "1.5 hours") directly into your `.tex` file within Persian text, and you've set a custom decimal separator (e.g., `\SepMark{/}`).
            *   **Most Robust Method (Recommended):**
                *   **Input using Latin digits and the desired output separator directly in the source code.**
                *   Example: To achieve the output `۱/۵ ساعت` (for 1.5 hours), type `1/5 ساعت` in your `.tex` file.
                *   **Reasoning:** This method leverages XePersian's number processing capabilities most effectively. XePersian, with `\SepMark{/}` active, will:
                    1.  Recognize the Latin digits (`1`, `5`).
                    2.  Convert them to the active Persian font's digits (e.g., `۱`, `۵`).
                    3.  Use the specified separator (`/`) as it appears in the source.
            *   **Common Pitfalls & Clarifications:**
                *   **Avoid typing Persian digits with a dot in the source (e.g., `۱.۵ ساعت`) if `\SepMark{/}` is active and you want a slash output.** This input might render as `۱.۵` or cause unexpected behavior because the dot is not the defined `SepMark`.
                *   **Avoid typing Latin digits with a dot in the source (e.g., `1.5 ساعت`) if `\SepMark{/}` is active and you want a slash output.** While `\SepMark` *can* sometimes influence the output of such numbers, it's less reliable for directly typed numbers than explicitly using the desired separator in the source. The primary role of `\SepMark` is for LaTeX-generated numbers (counters, etc.).
                *   **Typing Persian digits with the desired separator in the source (e.g., `۱/۵ ساعت`):** This *might* work if the font correctly renders it, but it bypasses XePersian's number conversion logic for the digits themselves. The Latin-digit-plus-separator method (`1/5 ساعت`) is generally preferred for consistency and leveraging XePersian's features.
            *   **If `\lr{}` is considered:**
                *   Using `\lr{1/5}` might sometimes result in Latin digits in the output, depending on font settings and context. Direct input of `1/5` (without `\lr{}`) within Persian text is usually more straightforward for achieving Persian digits with the custom separator.
                *   `\lr{۱/۵}` (Persian digits inside `\lr{}`) forces LTR rendering of already-Persian characters, which is usually what `\lr{}` is for, but doesn't help with the core number conversion if that's the issue.
        *   **Standard XePersian Number Commands:**
            *   `\PersianNumber{1.23}` can offer explicit control.
            *   `\DefaultDigits` is often unnecessary with modern `xepersian` if a Persian font is active. If it causes an "Undefined control sequence" error, try removing it.

6.  **Troubleshooting Undefined XePersian Commands (General & Specific):**
    *   Heuristic: If standard `xepersian` or `bidi` commands (e.g., `\PersianNumber`, `\DefaultDigits`, `\textlatin`) are reported as "Undefined control sequence":
        *   **Necessity Check:** First, consider if the command is strictly necessary. For instance, `\DefaultDigits` might be redundant. `\setDefaultStream{RTL}` is also often unnecessary.
        *   **Outdated Files/Cache:** Verify no outdated `.sty` files are in the project directory. Clear TeX system cache (e.g., `texhash` or Overleaf's "Clear Cache").
        *   **Minimal Test:** Test in a minimal new project.
        *   **`\textlatin`/`\textpersian` in Counter Redefinitions:** If `\textlatin` or `\textpersian` cause "Undefined control sequence" when used in counter redefinitions (e.g., `\renewcommand{\thesubsection}{...}`), even within `\AtBeginDocument{...}` (see Heuristic #11):
            *   **Preferred Alternative (Direct Font Switch):** Define a specific font family for the target script (e.g., `\newfontfamily\latinfont{Latin Modern Roman}`) in the preamble and use it directly within the redefinition: `{\latinfont\arabic{counter}}`.
            *   **Alternative (Rely on Main Font):** For Persian numerals, using `\arabic{counter}` (which `xepersian` renders in the active Persian font) or `\thecounter` (e.g., `\thesection`) is usually sufficient.

7.  **List Environment Customization (`enumerate` labels):**
    *   Heuristic: When `\begin{enumerate}[<label_option>]` (e.g., `[الف)]`) causes errors:
        *   It often requires `\usepackage{enumitem}` (loaded *before* `xepersian`).
        *   A quick fix is to remove the option; `xepersian` will apply default Persian numbering.
        *   For custom Persian alphabetic labels, avoid direct Persian characters in `label=...`. XePersian (recent versions) may not provide predefined counters like `\farsialph` for `enumitem`. Default numbering or custom macros are alternatives.

8.  **Title Area Formatting (`\maketitle` and blank pages):**
    *   Heuristic: If a blank page appears before the title or there are spacing issues:
        *   Avoid wrapping `\maketitle` in a `center` environment.
        *   Be cautious with manual `\vspace` around `\maketitle`.

9.  **Managing Oversized Content (e.g., TikZ, tables, complex Beamer blocks):**
    *   Heuristic: For content wider than `\textwidth` or taller than `\textheight`:
        *   Use `\usepackage{adjustbox}`.
        *   Wrap content with `\begin{adjustbox}{max width=\linewidth, max height=0.X\textheight, center} ... \end{adjustbox}`.
        *   For Beamer with complex content in `adjustbox`, use `[fragile]` option on the frame. If errors like "Missing \endgroup" persist, try wrapping the content inside `adjustbox` with a `minipage` or use an `lrbox` to save and then scale the content. Simplify or split content as a last resort.

10. **Achieving Widescreen (PowerPoint-like) Beamer Slides:**
    *   Heuristic: For widescreen Beamer slides (e.g., 16:9):
        *   Use `\documentclass[aspectratio=169]{beamer}`.

11. **Customizing Sectioning Number Display (e.g., in Table of Contents) with XePersian:**
    *   Heuristic: When customizing the display format of sectioning counters (`\thesection`, `\thesubsection`, etc.):
        *   **Redefinition Point:** Place `\renewcommand{\theXYZ}{...}` commands within `\AtBeginDocument{...}` in the preamble. This ensures `xepersian` and `bidi` are sufficiently initialized.
            *   Example: `\AtBeginDocument{% \renewcommand{\thesubsection}{\thesection-\arabic{subsection}}% }`
        *   **Generating Numerals:**
            *   `\arabic{counter}` (e.g., `\arabic{section}`) produces raw Arabic numerals (1, 2, 3). With `xepersian` and a Persian font active, these will typically render as Persian digits.
            *   `\thecounter` (e.g., `\thesection`) produces the *current representation* of that counter, which `xepersian` often defaults to Persian numerals for main sections.
        *   **Achieving Latin Numerals for Counters:**
            *   **Preferred Method (Direct Font Switch):** If `\textlatin{\arabic{counter}}` is problematic (see Heuristic #6), define a Latin font in the preamble (e.g., `\newfontfamily\mylatinfont{Latin Modern Roman}`) and use it in the redefinition: `\renewcommand{\thesubsection}{{\mylatinfont\arabic{section}-\arabic{subsection}}}`.
        *   **Achieving Persian Numerals for Counters (if default isn't desired):**
            *   Usually, `\thesection` and `\arabic{subsection}` (when the main font is Persian) suffice. For example, `\renewcommand{\thesubsection}{\thesection-\arabic{subsection}}` would typically yield "۱-۱", "۱-۲".
        *   **Cache Clearing (Critical):** Remember to clear cached files on Overleaf (or run `texhash` and delete `.aux` files locally) and recompile multiple times (2-3 times is common), as ToC generation and counter displays depend heavily on auxiliary files. (Reinforces Heuristic #4).
        *   **Verify Logic vs. Visuals:** Confirm the desired *logical structure* of the numbering (e.g., "section-subsection" like `\arabic{section}-\arabic{subsection}` vs. "subsection-section" like `\arabic{subsection}-\arabic{section}`) if visual examples provided by the user are ambiguous or seem non-standard. (Reinforces Heuristic #4).
