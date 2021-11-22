var hints = [{id: "transformation12a-h1", type: "hint", dependencies: [], title: "Order of Transformations", text: "The first step is to recognize the order of transformations. First, $$\\frac{1}{x}$$ is vertically stretched by a factor of 8, then, shifted to the right 4 units, and lastly, shifted down 2 units.", variabilization: {}}, {id: "transformation12a-h2", type: "hint", dependencies: ["transformation12a-h1"], title: "Vertically Stretching by a Factor of 8", text: "To vertically stretch the function by a factor of 8, multiply the entire function by 8 to get 8f(x).", variabilization: {}}, {id: "transformation12a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{8}{x}$$"], dependencies: ["transformation12a-h2"], title: "Vertically Stretching by a Factor of 8", text: "What is $$8f{\\left(x\\right)}$$?", choices: ["$$\\frac{8}{x}$$", "$$\\frac{1}{8x}$$"], variabilization: {}}, {id: "transformation12a-h4", type: "hint", dependencies: ["transformation12a-h3"], title: "Shifting Right Four Units", text: "To shift the function right four units, replace x with x-4 in the function.", variabilization: {}}, {id: "transformation12a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\frac{8}{x-4}$$"], dependencies: ["transformation12a-h4"], title: "Shifting Right Four Units", text: "What is the function after it has been shifted left four units?", choices: ["$$\\frac{8}{x+4}$$", "$$\\frac{8}{x-4}$$"], variabilization: {}}, {id: "transformation12a-h6", type: "hint", dependencies: ["transformation12a-h5"], title: "Shifting Down Two Units", text: "To shift the function down two units, subtract 2 from the function.", variabilization: {}}, {id: "transformation12a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$8\\left(x-4\\right)-2$$"], dependencies: ["transformation12a-h6"], title: "Shifting Down Two Units", text: "What is the function after it has been shifted down 2 units?", choices: ["$$8\\left(x+4\\right)+2$$", "$$8\\left(x-4\\right)-2$$", "$$\\frac{1}{8} \\left(x-4\\right)-2$$", "$$\\frac{1}{8} \\left(x+4\\right)+2$$"], variabilization: {}}, ]; export {hints};