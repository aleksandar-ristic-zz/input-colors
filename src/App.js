import { useState } from 'react'
import { Canvas, Input } from './components'

function App() {
	const [colorValue, setColorValue] = useState('')
	const [hexValue, setHexValue] = useState('')
	const [isTextDark, setIsTextDark] = useState(true)

	return (
		<main>
			<Canvas
				colorValue={colorValue}
				hexValue={hexValue}
				isTextDark={isTextDark}
			/>
			<Input
				colorValue={colorValue}
				setColorValue={setColorValue}
				setHexValue={setHexValue}
				isTextDark={isTextDark}
				setIsTextDark={setIsTextDark}
			/>
		</main>
	)
}

export default App
