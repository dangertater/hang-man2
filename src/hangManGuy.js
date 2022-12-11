import React from "react"

function HangManGuy(props) {
	if (props.guessAttemptsRemaining > 0) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="218.849"
				height="482.854"
				version="1.1"
				viewBox="0 0 57.904 127.755"
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
					{props.renderHead ? (
						<ellipse
							className="stickman-head"
							cx="99.916"
							cy="65.068"
							rx="20.966"
							ry="20.243"
						></ellipse>
					) : null}
					{props.renderBody ? (
						<path
							className="stickman-body"
							d="M100.639 85.6l-.579 58.996"
						></path>
					) : null}
					{props.renderRightEye ? (
						<circle
							className="stickman-righteye"
							cx="93.843"
							cy="59.429"
							r="2.458"
						></circle>
					) : null}
					{props.renderLeftEye ? (
						<circle
							className="stickman-lefteye"
							cx="107.29"
							cy="59.863"
							r="2.458"
						></circle>
					) : null}
					{props.renderFrown ? (
						<path
							className="stickman-frown"
							d="M92.541 75.768s1.446-5.494 7.809-5.205a8.288 8.288 0 017.808 5.784"
						></path>
					) : null}
					{props.renderRightArm ? (
						<path
							className="stickman-rightarm"
							d="M99.771 104.977L72.298 91.963"
						></path>
					) : null}
					{props.renderLeftArm ? (
						<path
							className="stickman-leftarm"
							d="M101.217 104.687l28.63-8.386"
						></path>
					) : null}
					{props.renderRightLeg ? (
						<path
							className="stickman-rightleg"
							d="M99.193 145.174L79.239 171.78"
						></path>
					) : null}
					{props.renderLeftLeg ? (
						<path
							className="stickman-leftleg"
							d="M100.639 145.463l15.905 26.317"
						></path>
					) : null}
				</g>
			</svg>
		)
	}
}

export default HangManGuy
