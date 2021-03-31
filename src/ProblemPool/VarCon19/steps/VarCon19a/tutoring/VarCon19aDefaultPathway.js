var hints = [{id: "VarCon19a-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side."}, {id: "VarCon19a-h2", type: "hint", dependencies: ["VarCon19a-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon19a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6x+8=2"], dependencies: ["VarCon19a-h2"], title: "Subtraction", text: "Subtract 6x from each side."}, {id: "VarCon19a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6x=-6"], dependencies: ["VarCon19a-h3"], title: "Subtraction", text: "Subtract 8 from each side."}, {id: "VarCon19a-h5", type: "hint", dependencies: ["VarCon19a-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon19a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=-1"], dependencies: ["VarCon19a-h5"], title: "Division", text: "Divide 6 from each side."}, {id: "VarCon19a-h7", type: "hint", dependencies: ["VarCon19a-h6"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon19a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon19a-h7"], title: "Verification", text: "Check whether $$\\left(12\\right) \\left(-1\\right)+\\left(8\\right)$$ equals $$\\left(6\\right) \\left(-1\\right)+\\left(2\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};