import moment from "moment";

const CommentHeader = ({ authorName, createdAt }) => {
  return (
    <div className="flex items-center text-sm font-thin">
      <div className="w-6 h-6 rounded-full bg-secondary"></div>
      <h1 className="ml-2 font-medium">
        u/{authorName}
        <span className="ml-1 text-xs dark:text-white-dark text-text-primary font-medium">
          {moment.unix(createdAt).fromNow()}
        </span>
      </h1>
    </div>
  );
};

export default CommentHeader;
