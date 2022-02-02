import { useState } from 'react'
import { Canvas, Input } from './components'

function App() {
	const [colorValue, setColorValue] = useState('')
	const [hexValue, setHexValue] = useState('')

	return (
		<main>
			<Canvas colorValue={colorValue} hexValue={hexValue} />
			<Input
				colorValue={colorValue}
				setColorValue={setColorValue}
				setHexValue={setHexValue}
			/>
		</main>
	)
}

export default App
