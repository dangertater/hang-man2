import React from "react"
import { createTheme } from "@mui/material/styles"

import { blue, red, green, yellow } from "@mui/material/colors"

const themeBlue = createTheme({
	palette: {
		primary: blue,
	},
})

const themeRed = createTheme({
	palette: {
		primary: red,
	},
})
const themeGreen = createTheme({
	palette: {
		primary: green,
	},
})
const themeYellow = createTheme({
	palette: {
		primary: yellow,
	},
})
export default function Memory(props) {
	// if (props.memoryGameActive)
	return (
		<>
			<div className="allCards"></div>
		</>
	)
}
