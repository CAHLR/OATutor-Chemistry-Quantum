var hints = [{id: "Properties3a-h1", type: "hint", dependencies: [], title: "Commutative Property of Addition", text: "The commutative property of addition states that if a, b are real numbers, then $$a+b=b+a$$.", variabilization: {}}, {id: "Properties3a-h2", type: "hint", dependencies: ["Properties3a-h1"], title: "Re-ordering", text: "Using the commutative property of addition on the last two terms, we can reorder the expression into $$\\frac{1}{2}+\\left(-\\frac{1}{2}\\right)+\\frac{7}{8}$$.", variabilization: {}}, {id: "Properties3a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["Properties3a-h2"], title: "Addition", text: "What is $$\\frac{1}{2}+\\left(-\\frac{1}{2}\\right)$$?", variabilization: {}}, {id: "Properties3a-h4", type: "hint", dependencies: ["Properties3a-h3"], title: "Final Answer", text: "So our final answer is $$0+\\frac{7}{8}=\\frac{7}{8}$$.", variabilization: {}}, ]; export {hints};