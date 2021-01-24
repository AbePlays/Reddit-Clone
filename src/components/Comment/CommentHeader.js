import moment from "moment";

const CommentHeader = ({ authorName, createdAt }) => {
  return (
    <div className="flex items-center text-sm font-thin">
      <div className="w-6 h-6 rounded-full bg-green-100"></div>
      <h1 className="ml-2 font-medium">
        u/{authorName}
        <span className="ml-1 text-xs text-gray-500 font-medium">
          {moment.unix(createdAt).fromNow()}
        </span>
      </h1>
    </div>
  );
};

export default CommentHeader;
