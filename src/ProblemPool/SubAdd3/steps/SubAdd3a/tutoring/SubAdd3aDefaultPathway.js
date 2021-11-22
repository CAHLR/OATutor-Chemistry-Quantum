var hints = [{id: "SubAdd3a-h1", type: "hint", dependencies: [], title: "Substitution", text: "Substitute the number in for the variable in the equation.", variabilization: {}}, {id: "SubAdd3a-h2", type: "hint", dependencies: ["SubAdd3a-h1"], title: "Substitution", text: "After substituting $$y=\\frac{7}{5}$$ into the equation, $$5\\frac{7}{5}+3=10\\frac{7}{5}-4$$.", variabilization: {}}, {id: "SubAdd3a-h3", type: "hint", dependencies: ["SubAdd3a-h2"], title: "Simplification", text: "Simplify the expressions on both sides of the equation.", variabilization: {}}, {id: "SubAdd3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$7+3$$"], dependencies: ["SubAdd3a-h3"], title: "Simplification", text: "Simplify the left side of the equation.", variabilization: {}}, {id: "SubAdd3a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["14-4"], dependencies: ["SubAdd3a-h4"], title: "Simplification", text: "Simplify the right side of the equation.", variabilization: {}}, {id: "SubAdd3a-h6", type: "hint", dependencies: ["SubAdd3a-h5"], title: "Comparison", text: "Determine whether the resulting equation is true.", variabilization: {}}, {id: "SubAdd3a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["SubAdd3a-h6"], title: "Comparison", text: "Determine whether $$7+3$$ equals 14-4.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};