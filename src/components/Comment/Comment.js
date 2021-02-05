import Spinner from "../Spinner";
import { CommentBody, CommentFooter, CommentHeader } from "./index";

const Comment = ({ loading, comments }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div className="mt-6 px-1">
      {comments.map((comment) => {
        if (comment.data) {
          return (
            <div key={comment.data.id} className="my-4">
              <CommentHeader
                authorName={comment.data.author ?? "Author Name"}
                createdAt={comment.data.created_utc ?? "Date not found"}
              />
              <div className="ml-8">
                <CommentBody body={comment.data.body ?? "Comment Body"} />
                <CommentFooter upvotes={comment.data.ups ?? "-"} />
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Comment;
