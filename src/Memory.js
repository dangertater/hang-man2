import React, { useEffect } from "react"
import MuiButton from "@mui/material/Button"

let ButtonBlue = (props) => {
	return (
		<MuiButton
			sx={{
				color: "black",
				backgroundColor: "white",
				borderColor: "green",
			}}
			// onClick={console.log("blueButton props", props.props.setWhiteToBlue)}
			// ok so when i render this with window.alert() it renders on page load
			// so i make it 'window.alert' and it works on click, but i can't give it things to do on click?
			onClick={
				(useEffect(() => {
					props.props.setWhiteToBlue("blue")
				}),
				window.alert)
			}
		>
			blue
		</MuiButton>
	)
}
let ButtonRed = (props) => {
	return (
		<MuiButton
			sx={{
				color: "black",
				backgroundColor: "red",
				borderColor: "green",
			}}
		>
			red
		</MuiButton>
	)
}
let ButtonGreen = (props) => {
	return (
		<MuiButton
			sx={{
				color: "black",
				backgroundColor: "green",
				borderColor: "green",
			}}
		>
			green
		</MuiButton>
	)
}
let ButtonYellow = (props) => {
	return (
		<MuiButton
			sx={{
				color: "black",
				backgroundColor: "yellow",
				borderColor: "green",
			}}
		>
			yellow
		</MuiButton>
	)
}
export default function Memory(props) {
	if (props.memoryGameActive)
		return (
			<>
				<div className="allCards">
					<ButtonBlue props={props}></ButtonBlue>
					<ButtonBlue props={props}></ButtonBlue>
					<ButtonRed props={props}></ButtonRed>
					<ButtonRed props={props}></ButtonRed>
					<ButtonGreen props={props}></ButtonGreen>
					<ButtonGreen props={props}></ButtonGreen>
					<ButtonYellow props={props}></ButtonYellow>
					<ButtonYellow props={props}></ButtonYellow>
				</div>
			</>
		)
}
