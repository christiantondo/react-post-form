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
				<input name="author" placeholder="post.author" value="" />
				<input name="title" placeholder="post.title" value="" />
				<input name="body" placeholder="post.body" value="" />
				<input name="isPublic" placeholder="post.isPublic" value="" />
			</form>
		</>
	)
}

export default App
