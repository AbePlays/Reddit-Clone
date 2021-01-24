const PostBody = ({ title, videoUrl, imageUrl }) => {
  return (
    <>
      {title && <p className="mt-2 text-lg leading-snug">{title}</p>}
      {videoUrl ? (
        <div className="mt-2 rounded overflow-hidden">
          <video className="mx-auto rounded" controls>
            <source src={videoUrl} />
          </video>
        </div>
      ) : (
        imageUrl && (
          <div className="mt-2 rounded overflow-hidden">
            <img
              className="mx-auto rounded"
              src={imageUrl.replaceAll("amp;", "")}
              alt="post"
            />
          </div>
        )
      )}
    </>
  );
};

export default PostBody;
