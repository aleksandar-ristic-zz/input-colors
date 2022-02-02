export const Canvas = ({ colorValue }) => {
	return (
		<section
			className='canvas'
			style={{
				backgroundColor: colorValue
			}}
		>
			<p>{colorValue ? colorValue : 'No input value.'}</p>
		</section>
	)
}

Canvas.defaultProps = {
	colorValue: 'No color value.'
}
