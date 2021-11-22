var hints = [{id: "quad40a-h1", type: "hint", dependencies: [], title: "Simplify", text: "Add $${\\left(\\frac{6}{2}\\right)}^2$$ to both sides", variabilization: {}}, {id: "quad40a-h2", type: "hint", dependencies: ["quad40a-h1"], title: "Simplify", text: "Rewrite as a factor of squares", variabilization: {}}, {id: "quad40a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$${\\left(x-3\\right)}^2=4$$"], dependencies: ["quad40a-h2"], title: "Simplify", text: "What do we get after rewriting the left-hand side?", choices: ["$${\\left(x-3\\right)}^2=4$$", "$${\\left(x+3\\right)}^2=6$$", "$${\\left(x-6\\right)}^2=6$$"], variabilization: {}}, {id: "quad40a-h4", type: "hint", dependencies: ["quad40a-h3"], title: "Square Root", text: "Take the square root of both sides", variabilization: {}}, {id: "quad40a-h5", type: "hint", dependencies: ["quad40a-h4"], title: "Add", text: "Add 3 to both sides and solve for x", variabilization: {}}, ]; export {hints};