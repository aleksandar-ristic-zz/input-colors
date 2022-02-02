export const Canvas = ({ colorValue, hexValue, isDarkText }) => {
	return (
		<section
			className='canvas'
			style={{
				backgroundColor: colorValue,
				color: isDarkText ? '#1f1f1f' : '#f0f8ff'
			}}
		>
			<p>{colorValue ? colorValue : 'No input value.'}</p>
			<p>{hexValue ? hexValue : null}</p>
		</section>
	)
}

Canvas.defaultProps = {
	colorValue: 'No color value.'
}
