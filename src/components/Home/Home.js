import { useEffect, useState } from "react";

import Post from "../Post";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://www.reddit.com/best.json");
      const data = await res.json();
      console.log(data);
      setPosts(data.data.children);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.data.id}
            subRedditName={post.data.subreddit_name_prefixed}
            authorName={post.data.author}
            title={post.data.title}
            comments={post.data.num_comments}
            likes={post.data.ups}
            createdAt={post.data.created_utc}
          />
        );
      })}
    </div>
  );
}
