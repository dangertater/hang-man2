import React from "react"
import _, { uniq } from "lodash"

let wordGenerator = (num) => {
	return _.range(0, num)
		.map(() => {
			return 97 + Math.floor(Math.random() * 26)
		})
		.map((num) => {
			return convertNumToLetter(num)
		})
}
// let duplicateLetterCheck = (array) => {
// 	if (new Set(array).size !== array.length) {
// 		//TODO i believe useRef would be functional here
// 		//----currently wordGenerator will be called with a hardcoded 12
// 		//----instead of the number clicked by the user
// 		return wordGenerator(12)
// 	} else {
// 		return array
// 	}
// }
//TODO clean this up, make convertNumToLetter an inline function on 2nd map of wordGenerator
let convertNumToLetter = (num) => {
	return String.fromCharCode(num)
}

// let Button = (props) => {
// 	return (
// 		<>
// 			<button
// 				onClick={() => {
// 					props.onClick(duplicateLetterCheck(wordGenerator(props.num)))
// 				}}
// 			>
// 				{props.children}
// 			</button>
// 		</>
// 	)
// }

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
