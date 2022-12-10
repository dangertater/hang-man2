import React from "react"

let Button = (props) => {
	return (
		<button
			onClick={(e) => {
				props.handleClickGuessButton(props.mappedLetter)
			}}
			disabled={
				props.disabled || props.guessedLetters.includes(props.mappedLetter)
					? true
					: false
			}
		>
			{props.mappedLetter}
		</button>
	)
}

export default function GuessButton(props) {
	let alphabetArray = [
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
	]

	return alphabetArray.map((mappedLetter) => {
		return (
			<Button
				key={mappedLetter}
				mappedLetter={mappedLetter}
				guessedLetters={props.guessedLetters}
				handleClickGuessButton={props.handleClickGuessButton}
				solutionWord={props.solutionWord}
				disabled={!props.solutionWord.length}
			></Button>
		)
	})
}
