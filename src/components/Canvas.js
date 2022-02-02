export const Canvas = ({ colorValue, hexValue }) => {
	return (
		<section
			className='canvas'
			style={{
				backgroundColor: colorValue
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
