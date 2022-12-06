import React, { useState } from "react"
import ButtonSolution from "./ButtonSolution"
import _ from "lodash"

function App() {
	let [solutionWord, setSolutionWord] = useState([])

	return (
		<>
			{/*several buttons that all 'onClick' to setState of solution word */}
			<div className="setSolutionWordDiv">
				<ButtonSolution
					solutionWord={solutionWord}
					setSolutionWord={setSolutionWord}
					onClick={(arrayOfLetters) => {
						setSolutionWord(arrayOfLetters)
					}}
				></ButtonSolution>
				<>{solutionWord}</>
			</div>
			{/* will have a function that decides which letters the solution word will have */}
			<div className="solutionWordDiv"></div>
			<div className="guessedLettersDiv">Guessed Letters will go here</div>
			<div className="alphabetButtonDiv"></div>
		</>
	)
}

export default App
