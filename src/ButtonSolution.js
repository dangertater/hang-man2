import React from "react"
import _ from "lodash"

let wordGenerator = (num) => {
	return _.range(0, num)
		.map(() => {
			return 97 + Math.floor(Math.random() * 26)
		})
		.map((num) => {
			return convertNumToLetter(num)
		})
}

let convertNumToLetter = (num) => {
	return String.fromCharCode(num)
}

let Button = (props) => {
	return (
		<>
			<button
				onClick={() => {
					props.onClick(wordGenerator(props.num))
				}}
			>
				{props.children}
			</button>
		</>
	)
}

export default function ButtonSolution(props) {
	const buttonRange = _.range(4, 10)
	return (
		<div>
			{buttonRange.map((num) => {
				return (
					<Button {...props} key={num} num={num}>
						{num}
					</Button>
				)
			})}
		</div>
	)
}
