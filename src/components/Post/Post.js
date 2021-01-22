export default function Post({
  subRedditName,
  authorName,
  title,
  comments,
  createdAt,
  likes,
}) {
  return (
    <div>
      <h1>{subRedditName}</h1>
      <p>{authorName}</p>
      <p>{title}</p>
      <p>{comments}</p>
      <p>{createdAt}</p>
      <p>{likes}</p>
    </div>
  );
}
