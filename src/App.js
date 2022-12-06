import React, { useState } from "react"
import ButtonSolutionLength from "./ButtonSolutionLength"
function App() {
	let [solutionWord, setSolutionWord] = useState(0)

	return (
		<>
			{/* will have several buttons that all 'onClick' to setState of solution word */}
			<div className="setSolutionWordLengthDiv">
				<ButtonSolutionLength
					solutionWord={solutionWord}
					setSolutionWord={setSolutionWord}
					onClick={(number) => {
						setSolutionWord(number)
					}}
				></ButtonSolutionLength>
			</div>
			test{solutionWord}
			{/* will have a function that decides how many letters the solution word will have */}
			<div className="solutionWordDiv">{/* <IndySolutionLetter /> */}</div>
			<div className="guessedLettersDiv">Guessed Letters will go here</div>
			<div className="alphabetButtonDiv"></div>
		</>
	)
}

export default App
