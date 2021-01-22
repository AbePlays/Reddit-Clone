import { useEffect, useState } from "react";

import Categories from "./Categories";
import Post from "../Post";

export default function Home() {
  const [category, setCategory] = useState("best");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://www.reddit.com/${category}.json`);
      const data = await res.json();
      console.log(data);
      setPosts(data.data.children);
    };

    fetchData();
  }, [category]);

  return (
    <div className="bg-gray-100 px-2 py-4 min-h-screen">
      <Categories changeCategory={setCategory} category={category} />
      {posts.map((post) => {
        return (
          <Post
            key={post.data.id}
            id={post.data.id}
            subRedditName={post.data.subreddit_name_prefixed}
            authorName={post.data.author}
            title={post.data.title}
            comments={post.data.num_comments}
            likes={post.data.ups}
            createdAt={post.data.created_utc}
            image={
              post.data.preview ? post.data.preview.images[0].source.url : null
            }
          />
        );
      })}
    </div>
  );
}
