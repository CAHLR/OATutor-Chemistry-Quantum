var hints = [{id: "abs7a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 0 for f(x)."}, {id: "abs7a-h2", type: "hint", dependencies: ["abs7a-h1"], title: "Isolate", text: "Isolate the $$absolute$$ value on one side of the equation."}, {id: "abs7a-h3", type: "hint", dependencies: ["abs7a-h2"], title: "Separate", text: "Break $$16=|x-\\left(9\\right)|$$ into two separate equations and solve."}, {id: "abs7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["25"], dependencies: ["abs7a-h3"], title: "Separate", text: "What do we get for x after solving $$16=x-9$$?"}, {id: "abs7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-7"], dependencies: ["abs7a-h4"], title: "Separate", text: "What do we get for x after solving $$-16=x-9$$?"}, ]; export {hints};