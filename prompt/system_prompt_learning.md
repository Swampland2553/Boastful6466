Okay, the domain/topic is: "Debugging LaTeX documents using XePersian for Persian typesetting."

Here are the "Problem-Solving Learnings & Heuristics" specific to this domain, based on our interaction:

1.  Font Availability is Paramount:
    *   Heuristic: When a fontspec error like The font "X" cannot be found occurs with XePersian:
        *   First, verify the font name specified in \settextfont{X} is correct and that the font is actually accessible to the XeTeX engine.
        *   As a quick diagnostic or fallback, suggest switching to a widely available and commonly used Persian font (e.g., Amiri) via \settextfont{Amiri}.
        *   If a specific custom font X is required, ensure the user understands that the font file (e.g., X.ttf or X.otf) must either be installed system-wide or, more reliably for Overleaf/portability, uploaded to the project directory and referenced by its exact filename (e.g., \settextfont{X.ttf}).

2.  XePersian/Bidi Loading Order is Critical (Load Late):
    *   Heuristic: When encountering Package bidi Error: Oops! you have loaded package [P] after bidi package... (where [P] is any other package like amsmath, geometry, etc.):
        *   The primary strategy is to move \usepackage{xepersian} and its associated font setup commands (\settextfont{...}, \SepMark{...}, etc.) to be as late as possible in the document preamble, *after* most other \usepackage calls.
        *   This is because xepersian (which loads bidi) needs to modify the behavior of many other packages to work correctly with right-to-left text, and it can do this most effectively if those packages are already loaded.

3.  Compiler Prerequisite:
    *   Heuristic: Before diving into xepersian-specific errors, always confirm or remind the user that documents using xepersian *must* be compiled with XeLaTeX (or LuaLaTeX with appropriate setup, though XeLaTeX is more common for xepersian). A standard pdfLaTeX compiler will not work.

4.  Isolate Errors by Log Analysis:
    *   Heuristic: When presented with a LaTeX log, focus on the *first* significant error message related to fontspec, bidi, xepersian, or an "Undefined control sequence". Subsequent errors are often cascades from the initial problem. Address errors sequentially.

5.  Number Formatting Strategy for XePersian (Decimals, Order, Separator):
    *   Heuristic: For Persian numbers with custom decimal separators (e.g., rendering 2.5 as ۲/۵):
        *   Preamble Setup: Ensure \usepackage{xepersian} is loaded, a Persian font is set with \settextfont{FontName}, and the decimal separator is defined using \SepMark{/} (or desired char) *after* \settextfont.
        *   Input Method: Input decimal numbers in the .tex source using *Latin digits* and a standard dot (e.g., 2.5).
        *   Directionality & Rendering:
            *   If automatic rendering (just typing 2.5 in text) results in incorrect digit order (e.g., ۵.۲ or ۵/۲) or the wrong separator/digit shape:
                *   First, try wrapping the Latin number in \lr{} (e.g., \lr{2.5}). This often fixes the order. Observe if digits become Persian and the separator changes as desired.
                *   If \lr{2.5} yields Latin digits (e.g., 2.5 output) or correct Persian digits but still the wrong separator (e.g., ۲.۵ output when / is expected): The most robust, albeit manual, workaround is to type the *exact desired Persian output* within \lr{}. Example: \lr{۲/۵} to get ۲/۵.
        *   Standard Commands Note: Commands like \PersianNumber and \DefaultDigits *should* offer more control. If they are reported as "Undefined control sequence" (see Heuristic #6), this indicates a deeper issue, and simpler methods (\lr{} or manual input) become necessary.
        6.  Troubleshooting Undefined XePersian Commands:
    *   Heuristic: If standard xepersian commands (e.g., \PersianNumber, \DefaultDigits) are reported as "Undefined control sequence" even though \usepackage{xepersian} is present and the log shows xepersian loading:
        *   Verify no outdated xepersian.sty or related files are in the local project directory (especially on Overleaf), as these can override system versions.
        *   Suggest clearing the TeX system's cache (e.g., texhash or Overleaf's "Clear Cache" option if available).
        *   Consider testing in a minimal new project to isolate the issue to the environment vs. the specific document. This points to a problem beyond typical document errors.

7.  List Environment Customization (`enumerate` labels):
    *   Heuristic: When \begin{enumerate}[<label_option>] (e.g., [الف)]) causes an error like missing \item or similar list malfunction:
        *   Recognize that this custom label syntax often requires the enumitem package.
        *   A quick fix is to remove the option (e.g., use plain \begin{enumerate}). xepersian will then apply its default Persian list numbering (e.g., "الف.", "ب.").
        *   If specific custom labels (like "الف)") are essential, advise adding \usepackage{enumitem} and using its syntax for label customization.

8.  Title Area Formatting (`\maketitle` and blank pages):
    *   Heuristic: If a blank page appears before the title or there are unexpected spacing issues around \maketitle:
        *   Avoid wrapping \maketitle in a center environment. Place centering commands for title elements *inside* the title definition if needed, or apply \centering to specific lines after \maketitle.
        *   Be cautious with manual \vspace commands immediately before or after \maketitle as they can interact unexpectedly with page breaking. Standard class options or packages like titling are generally safer for title customization.