import React from "react";
import ReactSlider from "react-slider";

export default function Slider({ value, handleChange, step, min, max }) {
	return (
		<>
			<div className="w-48">
				<label hidden>Slider</label>
				<ReactSlider
					step={step}
					min={min}
					max={max}
					className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
					thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-1"
					value={+value}
					onChange={(value) => {
						handleChange(value)
					}}
				/>
			</div>
		</>
	)
}