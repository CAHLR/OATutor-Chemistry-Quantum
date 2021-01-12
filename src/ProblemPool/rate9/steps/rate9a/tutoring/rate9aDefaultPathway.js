var hints = [{id: "rate9a-h1", type: "hint", dependencies: [], title: "$$\\frac{Equation}{Substitute}$$", text: "The equation for calculuating the rate of change is (f(x_1)-f(x_2))/(x_1-x_2). So to find the answer, we can start by plugging in $$x+h$$ for x_1 and x for x_2, and we get the expression ((2(x+h)**2-3(x+h))-(2x**2 -3x))/(x+h - x)."}, {id: "rate9a-h2", type: "hint", dependencies: ["rate9a-h1"], title: "Simplify", text: "Simplify the numerator, and we get the expression 4xh+2h**2-3h."}, {id: "rate9a-h3", type: "hint", dependencies: ["rate9a-h2"], title: "Divide", text: "$$\\frac{Divide}{Cross}$$ out the h terms in the numerator and denominator, and we get our answer $$4x+2h-3$$"}, ]; export {hints};