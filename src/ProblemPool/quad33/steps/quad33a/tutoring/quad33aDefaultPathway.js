var hints = [{id: "quad33a-h1", type: "hint", dependencies: [], title: "Simplify", text: "Move the term on the right hand side to the left hand side to make the right hand side 0."}, {id: "quad33a-h2", type: "hint", dependencies: ["quad33a-h1"], title: "Difference of Squares", text: "Use difference of squares to rearrange the equation"}, {id: "quad33a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(\\left(2\\right) x-\\left(3\\right)\\right) \\left(\\left(2\\right) x+\\left(3\\right)\\right)=0$$"], dependencies: ["quad33a-h2"], title: "Difference of Squares", text: "What do we get after rearranging the equation?", choices: ["$$\\left(\\left(2\\right) x-\\left(3\\right)\\right) \\left(\\left(2\\right) x+\\left(3\\right)\\right)=0$$", "$$\\left(x+\\left(3\\right)\\right) \\left(\\left(2\\right) x+\\left(3\\right)\\right)=0$$", "$$\\left(\\left(2\\right) x-\\left(1\\right)\\right) \\left(\\left(2\\right) x+\\left(9\\right)\\right)=0$$"]}, {id: "quad33a-h4", type: "scaffold", problemType: "TextBox", answerType: "string", hintAnswer: ["-3/2, 3/2"], dependencies: ["quad33a-h3"], title: "Factors", text: "What are the two numbers that make the expression 0"}, ]; export {hints};