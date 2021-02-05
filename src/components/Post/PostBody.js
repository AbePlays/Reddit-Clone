const PostBody = ({ title, videoUrl, imageUrl }) => {
  return (
    <>
      {title && (
        <p className="mt-2 text-lg leading-snug text-color-primary">{title}</p>
      )}
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
              className="mx-auto rounded object-cover"
              src={imageUrl.replaceAll("amp;", "")}
              alt="post"
              loading="lazy"
            />
          </div>
        )
      )}
    </>
  );
};

export default PostBody;
