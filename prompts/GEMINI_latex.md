Deconstruct every task into its most granular, microscopic steps imaginable. Each step, no matter how trivial, must be reported. I expect a relentless, non-stop stream of updates. Think of it as a military operation where every single footstep is announced. No action is too small to report. Overdo it.


Before making any file modifications with write_file or replace, always read the file first to confirm the context.

## Lessons Learned About Using Persian Fonts in LaTeX

### Existing Knowledge (Translated from Persian)

*   For using Persian fonts in LaTeX with the MiKTeX distribution on Windows, the best method is to use the `xepersian` package.
*   The `xepersian` package allows you to use any OpenType or TrueType font installed on your system.
*   To use a specific font, you must use the `\settextfont{Font Name}` command in your document's preamble.
*   To compile LaTeX documents that use `xepersian`, the `xelatex` engine must be used.
*   If you use commands like `\textbf` for bolding text, you must specify to `xepersian` which font to use for the bolded text. Otherwise, you might encounter a "Missing character" error.
*   When mixing Persian and Latin text, it may be necessary to place the Latin text within the `\lr{}` command to avoid issues with text directionality.
*   Some LaTeX packages, like `tcolorbox`, might conflict with Adobe Acrobat and cause errors in the PDF display. In such cases, try using alternative packages like `framed` or `mdframed`.
*   If you encounter a "Command \checkbox already defined" error, it means one of the packages you are using has already defined this command. To fix this, change the name of your custom command to something unique (e.g., `\mycheckbox`).
*   When choosing a font, ensure that your selected font supports all the characters you need. Otherwise, you will encounter a "Missing character" error. The "Amiri" font is a good choice for documents containing both Persian and Latin text.

### New Lessons from Recent Interaction

*   **Font Availability is Crucial:** The `xelatex` compilation will fail if the font specified with `\settextfont` (e.g., "XB Niloofar") is not installed on the system. The error message will clearly state that the font cannot be found.
*   **Have a Fallback Font:** It's useful to have a common alternative font in mind. "Amiri" is a good fallback for Persian, as it's often included in standard distributions.
*   **Character Support Varies:** Even if a font works, it may not support all Unicode characters, especially emojis (e.g., 🎯, 🚀, ✨). This will result in "Missing character" warnings during compilation, and the characters will be absent from the final PDF. The solution is to either remove the unsupported characters or find a font that includes them.
*   **Package Conflicts Can Be an Issue:** LaTeX packages can conflict with each other. In this session, `titlesec` and `enumitem` appeared to conflict with the `xepersian` environment, causing a compilation error.
*   **Debugging Strategy:** A good debugging strategy for LaTeX compilation is:
    1.  Check the log for specific errors (like "font not found" or "Missing \endcsname").
    2.  Attempt to fix the specific error (e.g., change the font).
    3.  If the error is vague or persists, simplify the document by removing recently added or complex packages (`titlesec`, `enumitem`, etc.) to isolate the source of the conflict.
    4.  Recompile after each change to see if the issue is resolved.
*   **Invalid `enumitem` Options:** The option `rightmargin=*` is not a valid length for the `enumitem` package and will cause a "Missing number, treated as zero" compilation error. It should be removed from list environment options.
*   **`\persian{}` Command in Labels:** Avoid using the `\persian{}` command directly within the `label` option of `enumitem` environments (e.g., `label=\persian{*}`). This can conflict with the package's internal workings and cause errors like `Argument of \enit@refstar@i has an extra }`. `xepersian` typically handles number localization automatically.
*   **Unterminated Math Mode:** A `Command \end{...} invalid in math mode` error is often caused by an unterminated math expression, where a closing `$` is missing. Carefully check all mathematical expressions in the vicinity of the error.
*   **Correct Alphabetical Command:** For Persian alphabetical list numbering (e.g., ا, ب, ج), use the `\alph*` command within the `label` option of an `enumitem` environment. The `\asbuk*` command is for Cyrillic and will cause an "Undefined control sequence" error.
*   **Correctly Handling Mixed Text:** It is crucial to wrap Latin text (like English words) that appears within a right-to-left Persian context using the `\lr{}` command. This prevents rendering issues, such as misplaced or inverted parentheses.
*   **Resolving "File Locked" Errors:** If the `xelatex` compilation fails with an "Unable to open" error for the PDF, it is likely because the file is locked by another program (like a PDF viewer). The fix is to close the program or delete the locked PDF before running the compilation again.
*   **User Communication Preference:** The user prefers responses in English, regardless of the language of their query.
*   **Set Latin Font Explicitly:** When using `xepersian`, even if a main font is set with `\settextfont`, it's important to also set the Latin font with `\setlatintextfont`. This prevents "Missing character" warnings for list labels and other Latin text, ensuring consistent font usage throughout the document.
*   **Escaped Backslashes:** Be mindful of escaped backslashes in LaTeX code. For example, `\\mathbb{R}` will be interpreted as a literal string, not the command `\mathbb{R}`. This can lead to rendering errors in the final PDF. Always double-check for and correct unnecessary escaping.
*   **`\lr{}` in Math Mode:** Avoid using the `\lr{}` command inside a math environment (`$...$`). It can conflict with the math mode and cause compilation errors. For Latin text within a Persian document, it is better to use `$` to enclose the variables and numbers.
*   **`xcolor` Package:** When using packages like `mdframed` with color options, the `xcolor` package must be explicitly loaded in the preamble.
*   **Set Notation:** Use `\{` and `\}` to typeset curly braces for sets in LaTeX, not `\\{` and `\\}`.
*   **`mdframed` and `xepersian` Conflict:** The `mdframed` package can conflict with `xepersian`, leading to "Undefined control sequence" errors related to `\mdf@frametitle`. A workaround is to use the simpler `framed` package.
*   **`framed` Package and `xepersian`:** When using the `framed` package with `xepersian`, complex environment definitions can lead to "Illegal parameter number in definition of \FrameCommand" or "TeX capacity exceeded" errors. The most reliable solution is to use a simple environment definition, such as `\newenvironment{myenv}{\begin{quote}}{\end{quote}}`, and avoid complex formatting within the environment definition.
*   **Units in `xepersian`:** When working with `xepersian`, units of measurement (e.g., "m/s") should be placed inside the math environment (`$ ... Deconstruct every task into its most granular, microscopic steps imaginable. Each step, no matter how trivial, must be reported. I expect a relentless, non-stop stream of updates. Think of it as a military operation where every single footstep is announced. No action is too small to report. Overdo it.


Before making any file modifications with write_file or replace, always read the file first to confirm the context.

## Lessons Learned About Using Persian Fonts in LaTeX

### Existing Knowledge (Translated from Persian)

*   For using Persian fonts in LaTeX with the MiKTeX distribution on Windows, the best method is to use the `xepersian` package.
*   The `xepersian` package allows you to use any OpenType or TrueType font installed on your system.
*   To use a specific font, you must use the `\settextfont{Font Name}` command in your document's preamble.
*   To compile LaTeX documents that use `xepersian`, the `xelatex` engine must be used.
*   If you use commands like `\textbf` for bolding text, you must specify to `xepersian` which font to use for the bolded text. Otherwise, you might encounter a "Missing character" error.
*   When mixing Persian and Latin text, it may be necessary to place the Latin text within the `\lr{}` command to avoid issues with text directionality.
*   Some LaTeX packages, like `tcolorbox`, might conflict with Adobe Acrobat and cause errors in the PDF display. In such cases, try using alternative packages like `framed` or `mdframed`.
*   If you encounter a "Command \checkbox already defined" error, it means one of the packages you are using has already defined this command. To fix this, change the name of your custom command to something unique (e.g., `\mycheckbox`).
*   When choosing a font, ensure that your selected font supports all the characters you need. Otherwise, you will encounter a "Missing character" error. The "Amiri" font is a good choice for documents containing both Persian and Latin text.

### New Lessons from Recent Interaction

*   **Font Availability is Crucial:** The `xelatex` compilation will fail if the font specified with `\settextfont` (e.g., "XB Niloofar") is not installed on the system. The error message will clearly state that the font cannot be found.
*   **Have a Fallback Font:** It's useful to have a common alternative font in mind. "Amiri" is a good fallback for Persian, as it's often included in standard distributions.
*   **Character Support Varies:** Even if a font works, it may not support all Unicode characters, especially emojis (e.g., 🎯, 🚀, ✨). This will result in "Missing character" warnings during compilation, and the characters will be absent from the final PDF. The solution is to either remove the unsupported characters or find a font that includes them.
*   **Package Conflicts Can Be an Issue:** LaTeX packages can conflict with each other. In this session, `titlesec` and `enumitem` appeared to conflict with the `xepersian` environment, causing a compilation error.
*   **Debugging Strategy:** A good debugging strategy for LaTeX compilation is:
    1.  Check the log for specific errors (like "font not found" or "Missing \endcsname").
    2.  Attempt to fix the specific error (e.g., change the font).
    3.  If the error is vague or persists, simplify the document by removing recently added or complex packages (`titlesec`, `enumitem`, etc.) to isolate the source of the conflict.
    4.  Recompile after each change to see if the issue is resolved.
*   **Invalid `enumitem` Options:** The option `rightmargin=*` is not a valid length for the `enumitem` package and will cause a "Missing number, treated as zero" compilation error. It should be removed from list environment options.
*   **`\persian{}` Command in Labels:** Avoid using the `\persian{}` command directly within the `label` option of `enumitem` environments (e.g., `label=\persian{*}`). This can conflict with the package's internal workings and cause errors like `Argument of \enit@refstar@i has an extra }`. `xepersian` typically handles number localization automatically.
*   **Unterminated Math Mode:** A `Command \end{...} invalid in math mode` error is often caused by an unterminated math expression, where a closing `$` is missing. Carefully check all mathematical expressions in the vicinity of the error.
*   **Correct Alphabetical Command:** For Persian alphabetical list numbering (e.g., ا, ب, ج), use the `\alph*` command within the `label` option of an `enumitem` environment. The `\asbuk*` command is for Cyrillic and will cause an "Undefined control sequence" error.
*   **Correctly Handling Mixed Text:** It is crucial to wrap Latin text (like English words) that appears within a right-to-left Persian context using the `\lr{}` command. This prevents rendering issues, such as misplaced or inverted parentheses.
*   **Resolving "File Locked" Errors:** If the `xelatex` compilation fails with an "Unable to open" error for the PDF, it is likely because the file is locked by another program (like a PDF viewer). The fix is to close the program or delete the locked PDF before running the compilation again.
*   **User Communication Preference:** The user prefers responses in English, regardless of the language of their query.
*   **Set Latin Font Explicitly:** When using `xepersian`, even if a main font is set with `\settextfont`, it's important to also set the Latin font with `\setlatintextfont`. This prevents "Missing character" warnings for list labels and other Latin text, ensuring consistent font usage throughout the document.
*   **Escaped Backslashes:** Be mindful of escaped backslashes in LaTeX code. For example, `\\mathbb{R}` will be interpreted as a literal string, not the command `\mathbb{R}`. This can lead to rendering errors in the final PDF. Always double-check for and correct unnecessary escaping.
*   **`\lr{}` in Math Mode:** Avoid using the `\lr{}` command inside a math environment (`$...$`). It can conflict with the math mode and cause compilation errors. For Latin text within a Persian document, it is better to use `$` to enclose the variables and numbers.
*   **`xcolor` Package:** When using packages like `mdframed` with color options, the `xcolor` package must be explicitly loaded in the preamble.
*   **Set Notation:** Use `\{` and `\}` to typeset curly braces for sets in LaTeX, not `\\{` and `\\}`.
*   **`mdframed` and `xepersian` Conflict:** The `mdframed` package can conflict with `xepersian`, leading to "Undefined control sequence" errors related to `\mdf@frametitle`. A workaround is to use the simpler `framed` package.
) and formatted with `\mathrm{...}` to prevent them from being affected by right-to-left text direction. For example, instead of `$v = 10$ m/s`, use `$v = 10~\mathrm{m/s}Deconstruct every task into its most granular, microscopic steps imaginable. Each step, no matter how trivial, must be reported. I expect a relentless, non-stop stream of updates. Think of it as a military operation where every single footstep is announced. No action is too small to report. Overdo it.


Before making any file modifications with write_file or replace, always read the file first to confirm the context.

## Lessons Learned About Using Persian Fonts in LaTeX

### Existing Knowledge (Translated from Persian)

*   For using Persian fonts in LaTeX with the MiKTeX distribution on Windows, the best method is to use the `xepersian` package.
*   The `xepersian` package allows you to use any OpenType or TrueType font installed on your system.
*   To use a specific font, you must use the `\settextfont{Font Name}` command in your document's preamble.
*   To compile LaTeX documents that use `xepersian`, the `xelatex` engine must be used.
*   If you use commands like `\textbf` for bolding text, you must specify to `xepersian` which font to use for the bolded text. Otherwise, you might encounter a "Missing character" error.
*   When mixing Persian and Latin text, it may be necessary to place the Latin text within the `\lr{}` command to avoid issues with text directionality.
*   Some LaTeX packages, like `tcolorbox`, might conflict with Adobe Acrobat and cause errors in the PDF display. In such cases, try using alternative packages like `framed` or `mdframed`.
*   If you encounter a "Command \checkbox already defined" error, it means one of the packages you are using has already defined this command. To fix this, change the name of your custom command to something unique (e.g., `\mycheckbox`).
*   When choosing a font, ensure that your selected font supports all the characters you need. Otherwise, you will encounter a "Missing character" error. The "Amiri" font is a good choice for documents containing both Persian and Latin text.

### New Lessons from Recent Interaction

*   **Font Availability is Crucial:** The `xelatex` compilation will fail if the font specified with `\settextfont` (e.g., "XB Niloofar") is not installed on the system. The error message will clearly state that the font cannot be found.
*   **Have a Fallback Font:** It's useful to have a common alternative font in mind. "Amiri" is a good fallback for Persian, as it's often included in standard distributions.
*   **Character Support Varies:** Even if a font works, it may not support all Unicode characters, especially emojis (e.g., 🎯, 🚀, ✨). This will result in "Missing character" warnings during compilation, and the characters will be absent from the final PDF. The solution is to either remove the unsupported characters or find a font that includes them.
*   **Package Conflicts Can Be an Issue:** LaTeX packages can conflict with each other. In this session, `titlesec` and `enumitem` appeared to conflict with the `xepersian` environment, causing a compilation error.
*   **Debugging Strategy:** A good debugging strategy for LaTeX compilation is:
    1.  Check the log for specific errors (like "font not found" or "Missing \endcsname").
    2.  Attempt to fix the specific error (e.g., change the font).
    3.  If the error is vague or persists, simplify the document by removing recently added or complex packages (`titlesec`, `enumitem`, etc.) to isolate the source of the conflict.
    4.  Recompile after each change to see if the issue is resolved.
*   **Invalid `enumitem` Options:** The option `rightmargin=*` is not a valid length for the `enumitem` package and will cause a "Missing number, treated as zero" compilation error. It should be removed from list environment options.
*   **`\persian{}` Command in Labels:** Avoid using the `\persian{}` command directly within the `label` option of `enumitem` environments (e.g., `label=\persian{*}`). This can conflict with the package's internal workings and cause errors like `Argument of \enit@refstar@i has an extra }`. `xepersian` typically handles number localization automatically.
*   **Unterminated Math Mode:** A `Command \end{...} invalid in math mode` error is often caused by an unterminated math expression, where a closing `$` is missing. Carefully check all mathematical expressions in the vicinity of the error.
*   **Correct Alphabetical Command:** For Persian alphabetical list numbering (e.g., ا, ب, ج), use the `\alph*` command within the `label` option of an `enumitem` environment. The `\asbuk*` command is for Cyrillic and will cause an "Undefined control sequence" error.
*   **Correctly Handling Mixed Text:** It is crucial to wrap Latin text (like English words) that appears within a right-to-left Persian context using the `\lr{}` command. This prevents rendering issues, such as misplaced or inverted parentheses.
*   **Resolving "File Locked" Errors:** If the `xelatex` compilation fails with an "Unable to open" error for the PDF, it is likely because the file is locked by another program (like a PDF viewer). The fix is to close the program or delete the locked PDF before running the compilation again.
*   **User Communication Preference:** The user prefers responses in English, regardless of the language of their query.
*   **Set Latin Font Explicitly:** When using `xepersian`, even if a main font is set with `\settextfont`, it's important to also set the Latin font with `\setlatintextfont`. This prevents "Missing character" warnings for list labels and other Latin text, ensuring consistent font usage throughout the document.
*   **Escaped Backslashes:** Be mindful of escaped backslashes in LaTeX code. For example, `\\mathbb{R}` will be interpreted as a literal string, not the command `\mathbb{R}`. This can lead to rendering errors in the final PDF. Always double-check for and correct unnecessary escaping.
*   **`\lr{}` in Math Mode:** Avoid using the `\lr{}` command inside a math environment (`$...$`). It can conflict with the math mode and cause compilation errors. For Latin text within a Persian document, it is better to use `$` to enclose the variables and numbers.
*   **`xcolor` Package:** When using packages like `mdframed` with color options, the `xcolor` package must be explicitly loaded in the preamble.
*   **Set Notation:** Use `\{` and `\}` to typeset curly braces for sets in LaTeX, not `\\{` and `\\}`.
*   **`mdframed` and `xepersian` Conflict:** The `mdframed` package can conflict with `xepersian`, leading to "Undefined control sequence" errors related to `\mdf@frametitle`. A workaround is to use the simpler `framed` package.
. The tilde (`~`) creates a non-breaking space.

------------

Of course. Here is a clear and improved version of your instructions, translated into English for the other AI.

***

### **Task: Convert Document to LaTeX**

Please convert the provided text into LaTeX format, adhering to the following specific requirements:

**1. Output Format:**
*   The final output must be a complete LaTeX document.

**2. Content and Formatting Rules:**
*   **Use English Numerals and Symbols:** It is crucial that all numbers, mathematical symbols (like operators and variables), and decimal separators are written using standard English (Western) characters. For example, a decimal should be represented by a period (`.`).

**3. Layout and Readability:**
*   **Optimize for Mobile Viewing:** Structure the LaTeX document so that when it is compiled into a PDF, it is easy to read on a mobile screen. This means:
    *   Use a standard, single-column layout (e.g., the `article` class).
    *   Avoid overly complex layouts, wide tables, or fixed-width elements that would require horizontal scrolling on a small screen.
    *   Use standard font sizes that are legible on mobile devices.



*   **Mathematical Expressions:** Mathematical expressions, especially those containing curly braces or other special characters, must be enclosed in `$` signs to be correctly rendered in LaTeX. For example, `R = \{(x, y) | x, y \in N, x + y = 5\}` should be written as `$R = \{(x, y) | x, y \in N, x + y = 5}`.
*   **Large Document Strategy:** When converting large documents, it's more robust to read the entire source file, process it in memory, and then use a single `write_file` command to create the output file. This avoids the fragility of using multiple `replace` commands with potentially ambiguous anchors.
*   **Adobe Acrobat Compatibility:** The `tcolorbox` package can cause rendering errors in Adobe Acrobat. A more compatible alternative is the `mdframed` package.


    ### **Critical Directive: Strategy for Processing Large Documents**
    
**1. The Core Constraint:**
The `tools` you use for processing tasks have a **very small context window**. This is a fundamental limitation you must always account for.

**2. Required Strategy: Chunking**
Because your `tools` cannot handle large amounts of text at once, you **must not** attempt to process a large document in a single operation. Instead, you must follow this procedure:

*   **Step 1: Divide the Document:** Before processing, you must first break the large source document down into smaller, sequential chunks.
*   **Step 2: Process Chunks Individually:** Feed each chunk one-by-one to your `tools` for the required conversion or analysis.

**Emphasis:** It is crucial that you remember this limitation. Your primary strategy for every large document is to **divide and conquer**. Always break the input into smaller segments that fit within your tools' context window before you begin working on it.