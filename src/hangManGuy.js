import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { styled } from "@mui/material/styles"

let SizingDiv = styled("div")`
	overflow: hidden;
	height: 100px;
`

function HangManGuy(props) {
	if (props.guessAttemptsRemaining > 0) {
		return (
			<SizingDiv>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="218.849"
					height="482.854"
					version="1.1"
					// viewBox="100 10 100 100"
				>
					<g
						fill="#000"
						fillOpacity="0"
						stroke="#000"
						strokeDasharray="none"
						strokeOpacity="1"
						strokeWidth="1"
						transform="translate(-72.084 -44.325)"
					>
						<AnimatePresence>
							{props.renderHead ? (
								<motion.ellipse
									key="head"
									className="stickman-head"
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									cx="99.916"
									cy="65.068"
									rx="20.966"
									ry="20.243"
								></motion.ellipse>
							) : null}
							{props.renderBody ? (
								<motion.path
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="body"
									className="stickman-body"
									d="M100.639 85.6l-.579 58.996"
								></motion.path>
							) : null}
							{props.renderRightEye ? (
								<motion.circle
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="righteye"
									className="stickman-righteye"
									cx="93.843"
									cy="59.429"
									r="2.458"
								></motion.circle>
							) : null}
							{props.renderLeftEye ? (
								<motion.circle
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="lefteye"
									className="stickman-lefteye"
									cx="107.29"
									cy="59.863"
									r="2.458"
								></motion.circle>
							) : null}
							{props.renderFrown ? (
								<motion.path
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="frown"
									className="stickman-frown"
									d="M92.541 75.768s1.446-5.494 7.809-5.205a8.288 8.288 0 017.808 5.784"
								></motion.path>
							) : null}
							{props.renderRightArm ? (
								<motion.path
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="rightarm"
									className="stickman-rightarm"
									d="M99.771 104.977L72.298 91.963"
								></motion.path>
							) : null}
							{props.renderLeftArm ? (
								<motion.path
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="leftarm"
									className="stickman-leftarm"
									d="M101.217 104.687l28.63-8.386"
								></motion.path>
							) : null}
							{props.renderRightLeg ? (
								<motion.path
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="rightleg"
									className="stickman-rightleg"
									d="M99.193 145.174L79.239 171.78"
								></motion.path>
							) : null}
							{props.renderLeftLeg ? (
								<motion.path
									animate={{ opacity: 1 }}
									initial={{ opacity: 0 }}
									key="leftleg"
									className="stickman-leftleg"
									d="M100.639 145.463l15.905 26.317"
								></motion.path>
							) : null}
						</AnimatePresence>
					</g>
				</svg>{" "}
			</SizingDiv>
		)
	}
}

export default HangManGuy
