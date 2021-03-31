var hints = [{id: "quad29a-h1", type: "hint", dependencies: [], title: "Difference of Squares", text: "Write the two factors by taking the square root of each term, using a minus sign as the operator in one factor and a plus sign as the operator in the other."}, {id: "quad29a-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$(x-3)$$ and $$x+\\left(3\\right)$$"], dependencies: ["quad29a-h1"], title: "Difference of Squares", text: "What are the factors?", choices: ["$$(x-6)$$ and $$x+\\left(3\\right)$$", "$$(x-3)$$ and $$x+\\left(3\\right)$$", "$$(x-3)$$ and $$x+\\left(9\\right)$$"]}, {id: "quad29a-h3", type: "hint", dependencies: ["quad29a-h2"], title: "Difference of Squares", text: "Use the zero-factor property to solve each factor."}, {id: "quad29a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["quad29a-h3"], title: "Zero-Factor Property", text: "What is the solution of $$(x-3)=0$$?"}, {id: "quad29a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-3"], dependencies: ["quad29a-h3"], title: "Zero-Factor Property", text: "What is the solution of $$x+\\left(3\\right)=0$$?"}, {id: "quad29a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3, -3"], dependencies: ["quad29a-h4", "quad29a-h5"], title: "Zero-Factor Property", text: "What are the solutions?"}, ]; export {hints};