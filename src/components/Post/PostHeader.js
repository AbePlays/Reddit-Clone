const PostHeader = ({ subRedditName, authorName, relativeTime }) => {
  return (
    <div className="flex items-center text-xs">
      <div className="w-6 h-6 rounded-full bg-secondary"></div>
      <div>
        <h1 className="font-bold ml-2">{subRedditName}</h1>
        <div className="flex ml-2">
          <p>Posted by u/{authorName}</p>
          <p className="ml-1">•</p>
          <p className="ml-1">{relativeTime}</p>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
