import moment from "moment";

const CommentHeader = ({ authorName, createdAt }) => {
  return (
    <div className="flex flex-wrap items-center text-xs font-medium">
      <div className="w-6 h-6 rounded-full bg-secondary "></div>
      <h1 className="ml-2 text-color-primary">
        u/{authorName}
        <span className="ml-1 text-xs text-color-secondary">
          {moment.unix(createdAt).fromNow()}
        </span>
      </h1>
    </div>
  );
};

export default CommentHeader;
