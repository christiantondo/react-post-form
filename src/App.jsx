import { useState } from 'react'

const postIniziale = {
	author: "",
	title: "",
	body: "",
	isPublic: true
};


function App() {

	const [post, setPost] = useState(postIniziale);

	function updateProperty(e) {
		const elemento = e.target;
		const newValue = elemento.value;
		const key = elemento.name;

		const nuovoPost = { ...post };
		nuovoPost[key] = newValue;
		setPost(nuovoPost);
	}

	function updateIsPublic(e) {
		const elemento = e.target;
		const newValue = elemento.checked;

		const nuovoPost = { ...post };
		nuovoPost.isPublic = newValue;
		setPost(nuovoPost);
	}

	return (
		<>
			<div className='card'>
				<div className='container'>
					<h1>New post</h1>
					<div className='align-center'>
						<ul className='data'>
							<li>Author: {post.author}</li>
							<li>Title: {post.title}</li>
							<li>Body: {post.body}</li>
						</ul>
					</div>
					<form>
						<input name="author" placeholder="Author" value={post.author} onChange={updateProperty} />
						<input name="title" placeholder="Title" value={post.title} onChange={updateProperty} />
						<input name="body" placeholder="Body" value={post.body} onChange={updateProperty} />
						<p>Public post: {post.isPublic ? "yes" : "no"}</p>
						<input name="isPublic" type="checkbox" checked={post.isPublic} onChange={updateIsPublic} className='checkbox' />
					</form>

					<div>
						<button>
							Publish
						</button>
					</div>
				</div>

			</div>

			<div className='post-section'></div>
		</>
	)
}

export default App
