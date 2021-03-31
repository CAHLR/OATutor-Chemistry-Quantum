var hints = [{id: "SubAdd6a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "SubAdd6a-h2", type: "hint", dependencies: ["SubAdd6a-h1"], title: "Subtraction", text: "After subtracting 19 from each side, we get $$x+\\left(19\\right)-\\left(19\\right)=-27-19$$."}, {id: "SubAdd6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-46"], dependencies: ["SubAdd6a-h2"], title: "Simplification", text: "What do we get for x after simplifying the equation?"}, {id: "SubAdd6a-h4", type: "hint", dependencies: ["SubAdd6a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "SubAdd6a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd6a-h4"], title: "Verification", text: "Check whether $$-\\left(46\\right)+\\left(19\\right)$$ equals -27.", choices: ["TRUE", "FALSE"]}, ]; export {hints};