import moment from "moment";

const CommentHeader = ({ authorName, createdAt }) => {
  return (
    <div className="flex items-center text-xs font-medium">
      <div className="w-6 h-6 rounded-full bg-secondary"></div>
      <h1 className="ml-2">
        u/{authorName}
        <span className="ml-1 text-xs dark:text-white-dark text-text-primary">
          {moment.unix(createdAt).fromNow()}
        </span>
      </h1>
    </div>
  );
};

export default CommentHeader;
