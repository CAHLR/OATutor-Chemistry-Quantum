var hints = [{id: "logarithmic10a-h1", type: "hint", dependencies: [], title: "Change-of-Base Formula", text: "The change-of-base formula can be used to evaluate a logarithm with any base. \\n For any positive real numbers M,b, and n, where $$n!=1$$ and $$b!=1$$, $$\\log_{b}\\left(M\\right)=\\log_{n}\\left(M\\right)/\\log_{n}\\left(b\\right)$$. \\n \\n 1) Determine the new base n, remembering that the common log, $$\\ln(x)$$, has base 10, and the natural log, ln(x), has base e. \\n 2) Rewrite the log as a quotient using the change-of-base formula \\n a) The numerator of the quotient will be a logarithm with base n and argument M. \\n b) The denominator of the quotient will be a logarithm with base n and argument b. \\n", variabilization: {}}, {id: "logarithmic10a-h2", type: "hint", dependencies: ["logarithmic10a-h1"], title: "New Base", text: "What is the new base that we're changing to?", variabilization: {}}, {id: "logarithmic10a-h3", type: "hint", dependencies: ["logarithmic10a-h2"], title: "Change-of-Base", text: "What form does the quotient take after the change-of-base to the new base e?", variabilization: {}}, {id: "logarithmic10a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\ln(55.875)}{\\ln(14)}$$"], dependencies: ["logarithmic10a-h3"], title: "Change-of-Base", text: "Replacing $$M=55.875$$ and $$b=14$$ in the question, what would the equivalent expression be?", variabilization: {}}, ]; export {hints};