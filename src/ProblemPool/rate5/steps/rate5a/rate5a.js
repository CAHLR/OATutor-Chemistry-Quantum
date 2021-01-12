import React from 'react'; import { InlineMath } from 'react-katex';import hints from "./rate5a-index.js"; const step = {id: "rate5a", stepAnswer: ["$$\\frac{-1}{13\\left(13+h\\right)}$$"], problemType: "MultipleChoice", stepTitle: <div> <InlineMath math="a t=\frac{1}{t+4}"/> on [9,9+h]</div>, stepBody: "", choices: ["$$\\frac{1}{13\\left(13+h\\right)}$$", "$$\\frac{-1}{13\\left(13+h\\right)}$$", "$$\\frac{1}{13h}$$", "$$\\frac{-1}{13h}$$"], answerType: "string", hints: hints}; export {step};