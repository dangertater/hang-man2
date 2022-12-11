import React, { useState } from "react"
import ButtonSolution from "./ButtonSolution"
import _ from "lodash"
import GuessButton from "./GuessButton"
import HangManGuy from "./hangManGuy"
import HangManGuyDead from "./hangManGuyDead"

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
	let [guessAttemptsRemaining, setGuessAttemptsRemaining] = useState(9)
	let [matchingLetters, setMatchingLetters] = useState([])
	let [incorrectGuesses, setIncorrectGuesses] = useState([])
	let userGuessed = (guessedLetter) => {
		setGuessedLetters([...guessedLetters, guessedLetter])
		//the comented out below code had been chillin i think doing nothing, delete if as time goes on no errors occur
		// setNotGuessedLetters((newNotGuessedLetters) => {
		// 	return newNotGuessedLetters.filter((ngl) => {
		// 		return ngl !== guessedLetter
		// 	})
		// })
		setNotGuessedLetters(
			notGuessedLetters.filter((ngl) => {
				return ngl !== guessedLetter
			})
		)
		if (!solutionWord.includes(guessedLetter)) {
			setIncorrectGuesses([...incorrectGuesses, guessedLetter])
			setGuessAttemptsRemaining(() => {
				return guessAttemptsRemaining - 1
			})
		}
	}
	let userWon = () => {
		window.alert("you have won!")
		setSolutionWord([])
	}
	let hasUserWon = (solutionWord, matchingLetters) => {
		if (solutionWord.length - 1 === matchingLetters.length) {
			userWon()
		}
	}

	let checkAgainstSolution = (guessedLetter) => {
		if (solutionWord.includes(guessedLetter)) {
			setMatchingLetters([...matchingLetters, guessedLetter])
			hasUserWon(solutionWord, matchingLetters)
		}
	}
	let handleClickGuessButton = (guessedLetter) => {
		if (guessAttemptsRemaining > 0) {
			userGuessed(guessedLetter)
			checkAgainstSolution(guessedLetter)
		}
	}

	return (
		<>
			<h1>Hangman! Except its just jumbled letters because heck</h1>
			{/*several buttons that all 'onClick' to setState of solution word */}
			<div className="setSolutionWordDiv">
				<div>Select how many letters you want the solution to be</div>
				<ButtonSolution
					solutionWord={solutionWord}
					setSolutionWord={setSolutionWord}
					onClick={(arrayOfLetters) => {
						setSolutionWord(arrayOfLetters)
						setGuessedLetters([])
						setNotGuessedLetters([
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
						setGuessAttemptsRemaining(9)
						setMatchingLetters([])
						setIncorrectGuesses([])
					}}
				></ButtonSolution>
				<>
					the solution letters are <strong>{solutionWord.join("-")}</strong>
				</>
				<div>
					you've correctly guessed <strong>{matchingLetters.join("-")}</strong>
				</div>
			</div>
			<div className="alphabetButtonDiv">
				<div>guess letters by pressing below buttons</div>
				<GuessButton
					handleClickGuessButton={handleClickGuessButton}
					guessedLetters={guessedLetters}
					solutionWord={solutionWord}
				/>
			</div>
			<div>
				guessedLetters <strong>{guessedLetters.join("-")}</strong>
			</div>
			<div>
				notGuessedLetters <strong>{notGuessedLetters.join("-")}</strong>
			</div>
			<div>guess attempts remaining {guessAttemptsRemaining}</div>
			<div>
				you have incorrectly guessed
				<strong>{incorrectGuesses.join("-")}</strong>
			</div>
			<HangManGuy
				guessAttemptsRemaining={guessAttemptsRemaining}
				renderBody={incorrectGuesses.length > 0}
				renderRightEye={incorrectGuesses.length > 1}
				renderHead={incorrectGuesses.length > 2}
				renderLeftEye={incorrectGuesses.length > 3}
				renderRightArm={incorrectGuesses.length > 4}
				renderLeftArm={incorrectGuesses.length > 5}
				renderRightLeg={incorrectGuesses.length > 6}
				renderLeftLeg={incorrectGuesses.length > 7}
			></HangManGuy>
			<HangManGuyDead
				guessAttemptsRemaining={guessAttemptsRemaining}
			></HangManGuyDead>
		</>
	)
}

export default App
