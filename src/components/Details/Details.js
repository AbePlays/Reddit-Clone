import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Post from "../Post";
import { Wrapper } from "../Utility";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { state } = useLocation();
  const postId = state.post.id;

  // fetching comments
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchComments = async () => {
      setLoading(true);

      const result = await fetch(
        `https://www.reddit.com/comments/${postId}.json`
      );
      const fetchedData = await result.json();

      setComments(fetchedData[1]?.data?.children);
      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  return (
    <Wrapper>
      <div className="background-secondary my-4 shadow rounded">
        <Post
          {...state.post}
          showComments
          loading={loading}
          comments={comments}
        />
      </div>
    </Wrapper>
  );
};

export default Details;
