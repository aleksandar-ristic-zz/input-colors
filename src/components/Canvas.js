export const Canvas = ({ colorValue, hexValue, isTextDark }) => {
	return (
		<section
			className='canvas'
			style={{
				backgroundColor: colorValue,
				color: isTextDark ? '#1f1f1f' : '#f0f8ff'
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
