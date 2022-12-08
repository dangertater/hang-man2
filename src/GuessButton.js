import React from "react"

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
	let Button = (indyLetter) => {
		return (
			<button
				onClick={(e) => {
					props.handleClickGuessButton(indyLetter.mappedLetter)
				}}
			>
				{indyLetter.mappedLetter}
			</button>
		)
	}
	return alphabetArray.map((mappedLetter) => {
		return <Button key={mappedLetter} mappedLetter={mappedLetter}></Button>
	})
}
