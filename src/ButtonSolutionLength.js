import React from "react"
import _ from "lodash"

let Button = (props) => {
	return (
		<>
			<button
				onClick={() => {
					props.onClick(props.num)
				}}
			>
				{props.num}
			</button>
		</>
	)
}

export default function ButtonSolutionLength(props) {
	const buttonRange = _.range(4, 10)
	return (
		<div>
			{buttonRange.map((num) => {
				return <Button {...props} key={num} num={num}></Button>
			})}
		</div>
	)
}
