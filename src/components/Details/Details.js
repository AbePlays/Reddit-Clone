import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Post from "../Post";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { state } = useLocation();
  const postId = state.post.id;

  // fetching comments
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);

      const result = await fetch(
        `http://www.reddit.com/comments/${postId}.json`
      );
      const fetchedData = await result.json();
      setComments(fetchedData[1]?.data?.children);

      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="bg-gray-100 px-2 py-4 min-h-screen">
      <div className="mx-auto my-4 max-w-xl shadow bg-white rounded">
        <Post
          {...state.post}
          showComments
          loading={loading}
          comments={comments}
        />
      </div>
    </div>
  );
};

export default Details;
