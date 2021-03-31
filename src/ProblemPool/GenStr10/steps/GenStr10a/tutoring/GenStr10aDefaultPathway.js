var hints = [{id: "GenStr10a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr10a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4m-2=8-m"], dependencies: ["GenStr10a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr10a-h3", type: "hint", dependencies: ["GenStr10a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation."}, {id: "GenStr10a-h4", type: "hint", dependencies: ["GenStr10a-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr10a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5m-2=8"], dependencies: ["GenStr10a-h4"], title: "Addition", text: "Add m to each side of the equation."}, {id: "GenStr10a-h6", type: "hint", dependencies: ["GenStr10a-h5"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation."}, {id: "GenStr10a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5m=10"], dependencies: ["GenStr10a-h6"], title: "Addition", text: "Add 2 to each side of the equation."}, {id: "GenStr10a-h8", type: "hint", dependencies: ["GenStr10a-h7"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr10a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m=2"], dependencies: ["GenStr10a-h8"], title: "Division", text: "Divide 5 from each side."}, {id: "GenStr10a-h10", type: "hint", dependencies: ["GenStr10a-h9"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr10a-h11", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr10a-h10"], title: "Verification", text: "Check whether $$\\frac{2}{3} \\left(\\left(6\\right) \\left(2\\right)-\\left(3\\right)\\right)$$ equals 8-2.", choices: ["TRUE", "FALSE"]}, ]; export {hints};