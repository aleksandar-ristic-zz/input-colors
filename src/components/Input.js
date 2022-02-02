import colorNames from 'colornames'

export const Input = ({
	colorValue,
	setColorValue,
	setHexValue,
	isDarkText,
	setIsDarkText
}) => {
	return (
		<form onSubmit={e => e.preventDefaul()}>
			<label>Add color by name:</label>
			<input
				autoFocus
				type='text'
				placeholder='Add color by name'
				required
				value={colorValue}
				onChange={({ target }) => {
					setColorValue(target.value)
					setHexValue(colorNames(target.value))
				}}
			/>
			<button type='button' onClick={() => setIsDarkText(!isDarkText)}>
				Toggle Text Color
			</button>
		</form>
	)
}
