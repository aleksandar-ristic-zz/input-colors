import { useState } from 'react'
import { Canvas, Input } from './components'

function App() {
	const [colorValue, setColorValue] = useState('')

	return (
		<main>
			<Canvas colorValue={colorValue} />
			<Input colorValue={colorValue} setColorValue={setColorValue} />
		</main>
	)
}

export default App
