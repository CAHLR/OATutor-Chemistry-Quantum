var hints = [{id: "GenStr8a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible.", variabilization: {}}, {id: "GenStr8a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$2m-5=-1$$"], dependencies: ["GenStr8a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation.", variabilization: {}}, {id: "GenStr8a-h3", type: "hint", dependencies: ["GenStr8a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation.", variabilization: {}}, {id: "GenStr8a-h4", type: "hint", dependencies: ["GenStr8a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation.", variabilization: {}}, {id: "GenStr8a-h5", type: "hint", dependencies: ["GenStr8a-h4"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality.", variabilization: {}}, {id: "GenStr8a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$2m=4$$"], dependencies: ["GenStr8a-h5"], title: "Addition", text: "Add 5 to each side of the equation.", variabilization: {}}, {id: "GenStr8a-h7", type: "hint", dependencies: ["GenStr8a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "GenStr8a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$m=2$$"], dependencies: ["GenStr8a-h7"], title: "Division", text: "Divide 2 from each side.", variabilization: {}}, {id: "GenStr8a-h9", type: "hint", dependencies: ["GenStr8a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "GenStr8a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr8a-h9"], title: "Verification", text: "Check whether $$2\\left(2-4\\right)+3$$ equals -1.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};