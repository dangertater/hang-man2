import React, { useState } from "react"
import ButtonSolution from "./ButtonSolution"
import _ from "lodash"
import GuessButton from "./GuessButton"

function App() {
	let [solutionWord, setSolutionWord] = useState([])
	let [guessedLetters, setGuessedLetters] = useState([])
	let [notGuessedLetters, setNotGuessedLetters] = useState([
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	])
	// todo i need to figure otu the callback syntax to get the guessed letter out of the the notGuessedLettersState
	//also wtf is going on with lodash, also how would you parse out a notGuessedLetters?
	let userGuessed = (guessedLetter) => {
		setGuessedLetters([...guessedLetters, guessedLetter])
		setNotGuessedLetters((newNotGuessedLetters) => {
			return newNotGuessedLetters.filter((ngl) => {
				return ngl !== guessedLetter
			})
		})
		setNotGuessedLetters(
			notGuessedLetters.filter((ngl) => {
				return ngl !== guessedLetter
			})
		)
	}
	let handleClickGuessButton = (guessedLetter) => {
		userGuessed(guessedLetter)
	}

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
				<>the solution letters are {solutionWord.join("-")}</>
			</div>
			<div className="guessedLettersDiv">Guessed Letters will go here</div>
			<div className="alphabetButtonDiv">
				<GuessButton handleClickGuessButton={handleClickGuessButton} />
			</div>
			<div>guessedLetters {guessedLetters}</div>
			<div>notGuessedLetters {notGuessedLetters}</div>
		</>
	)
}

export default App
