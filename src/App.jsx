import { useState } from 'react'

const postIniziale = {
	author: "",
	title: "",
	body: "",
	isPublic: true
};


function App() {

	const [post, setPost] = useState(postIniziale)

	return (
		<>
			<h1>hello react world</h1>
			<ul>
				<li>author: {post.author}</li>
				<li>title: {post.title}</li>
				<li>body: {post.body}</li>
				<li>isPublic: {post.isPublic}</li>
			</ul>
			<form>
				<input name="author" placeholder="author" value="post.author" />
				<input name="title" placeholder="title" value="post.title" />
				<input name="body" placeholder="body" value="post.body" />
				<input name="isPublic" placeholder="isPublic" value="post.isPublic" />
			</form>
		</>
	)
}

export default App
