import "./Post.css";

export default function Post({ post }) {

	return (
		<div className="post">
			<img className="post-img" src={post.thumbnail} alt="thumbnail"></img>
			<h2 className="post-title">{post.title}</h2>
			<p className="post-summary">{post.summary}</p>
			<h3 className="post-author">{post.author}</h3>
			<h3 className="post-date">{post.date_posted}</h3>
			<ul className="tags">
				{post.tags.map((tag, index) => {
					return <li key={index}>{tag}</li>;
				})}
			</ul>
			<div className="post-url-container">
				<a className="post-url" href={post.url}>
					Link
				</a>
			</div>
		</div>
	);
}
