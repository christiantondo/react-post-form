import { useState } from 'react'

function App() {

	const postIniziale = {
		author: "",
		title: "",
		body: "",
		isPublic: true
	};

	return (
		<>
			<h1>hello react world</h1>
			<ul>
				<li>author: </li>
				<li>title: </li>
				<li>body: </li>
				<li>isPublic: </li>
			</ul>
			<form>
				<input />
				<input />
				<input />
				<input />
			</form>
		</>
	)
}

export default App
