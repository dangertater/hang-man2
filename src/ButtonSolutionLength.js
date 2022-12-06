import React from "react"

let Button = (props) => {
	return (
		<>
			<button>{props.num}</button>
		</>
	)
}

export default function ButtonSolutionLength(props) {
	return (
		<div>
			<Button {...props}></Button>
			<Button {...props}></Button>
			<Button {...props}></Button>
			<Button {...props}></Button>
			<Button {...props}></Button>
			<Button {...props}></Button>
		</div>
	)
}
