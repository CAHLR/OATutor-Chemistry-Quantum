var hints = [{id: "exponential11a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$2\\times5^{\\left(-3\\right)}$$"], dependencies: [], title: "Using Substitution", text: "Substitute $$x=-3$$ into f(x). What is the expression?", variabilization: {}}, {id: "exponential11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{125}$$"], dependencies: ["exponential11a-h1"], title: "Using Simplification", text: "Simplify the power. What is $$5^{\\left(-3\\right)}$$?", subHints: [{id: "exponential11a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{5}$$"], dependencies: [], title: "Using Simplification", text: "We can sequentially simplify the expression by first calculating $$5^{\\left(-1\\right)}$$, then later calculating that value to the power of 3. What is $$5^{\\left(-1\\right)}$$?", variabilization: {}}, {id: "exponential11a-h2-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{125}$$"], dependencies: ["exponential11a-h2-s1"], title: "Using Simplification", text: "What is $${\\left(\\frac{1}{5}\\right)}^3$$?", variabilization: {}}], variabilization: {}}, {id: "exponential11a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.016"], dependencies: ["exponential11a-h2"], title: "Using Multiplication", text: "What is $$2\\frac{1}{125}$$? Express the value numerically. (Round to four decimal places if necessary)", variabilization: {}}, ]; export {hints};