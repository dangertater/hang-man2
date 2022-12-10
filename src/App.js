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
	let [guessAttemptsRemaining, setGuessAttemptsRemaining] = useState(10)
	let [matchingLetters, setMatchingLetters] = useState([])
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
	let userWon = () => {
		window.alert("you have won!")
	}
	let hasUserWon = (solutionWord, matchingLetters) => {
		if (solutionWord.length - 1 === matchingLetters.length) {
			userWon()
		}
	}

	// need to look up how to check if each element in matchingLetters is ===solutionWord
	// ----tricky part will be to disregard order of the letters
	let checkAgainstSolution = (guessedLetter) => {
		if (solutionWord.includes(guessedLetter)) {
			setMatchingLetters([...matchingLetters, guessedLetter])
			hasUserWon(solutionWord, matchingLetters)
		}
	}
	let handleClickGuessButton = (guessedLetter) => {
		if (guessAttemptsRemaining > 0) {
			userGuessed(guessedLetter)
			setGuessAttemptsRemaining(() => {
				return guessAttemptsRemaining - 1
			})
			checkAgainstSolution(guessedLetter)
		} else {
			window.alert("you lost you fuck")
		}
	}

	return (
		<>
			{/*several buttons that all 'onClick' to setState of solution word */}
			<div className="setSolutionWordDiv">
				<div>Select how many letters you want the solution to be</div>
				<ButtonSolution
					solutionWord={solutionWord}
					setSolutionWord={setSolutionWord}
					onClick={(arrayOfLetters) => {
						setSolutionWord(arrayOfLetters)
					}}
				></ButtonSolution>
				<>
					the solution letters are <strong>{solutionWord.join("-")}</strong>
				</>
				<div>you've correctly guessed {matchingLetters}</div>
			</div>
			<div className="alphabetButtonDiv">
				<div>guess letters by pressing below buttons</div>{" "}
				<GuessButton
					handleClickGuessButton={handleClickGuessButton}
					guessedLetters={guessedLetters}
				/>
			</div>
			<div>guessedLetters {guessedLetters}</div>
			<div>notGuessedLetters {notGuessedLetters}</div>
			<div>guess attempts remaining {guessAttemptsRemaining}</div>
		</>
	)
}

export default App
