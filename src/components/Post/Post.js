import moment from "moment";

import { PostHeader, PostBody, PostFooter } from "./index";
import Comment from "../Comment";

const Post = (props) => {
  return (
    <div className="p-4">
      <PostHeader
        subRedditName={props.subRedditName}
        authorName={props.authorName}
        relativeTime={moment.unix(props.createdAt).fromNow()}
      />
      <PostBody
        title={props.title}
        videoUrl={props.video}
        imageUrl={props.image}
      />
      <PostFooter upvotes={props.upvotes} comments={props.numOfComments} />
      {props.showComments && (
        <Comment loading={props.loading} comments={props.comments} />
      )}
    </div>
  );
};

export default Post;
