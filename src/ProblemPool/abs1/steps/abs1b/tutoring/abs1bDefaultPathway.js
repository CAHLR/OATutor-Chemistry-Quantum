var hints = [{id: "abs1b-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 0 for x.", variabilization: {}}, {id: "abs1b-h2", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$f(x)=4\\times3+4$$"], dependencies: ["abs1b-h1"], title: "Substitute", text: "What do we get after the substitution?", choices: ["$$f(x)=4\\times13+4$$", "$$f(x)=4\\left(-3\\right)+4$$", "$$f(x)=4\\times3+4$$"], variabilization: {}}, {id: "abs1b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["16"], dependencies: ["abs1b-h2"], title: "Solve the Equation", text: "What do we get for y after solving the above equation?", variabilization: {}}, ]; export {hints};