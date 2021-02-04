import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Categories from "../Categories";
import Post from "../Post";
import Spinner from "../Spinner";
import { Wrapper } from "../Utility";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("best");
  const [posts, setPosts] = useState([]);

  // Fetching data for home page
  useEffect(() => {
    const fetchData = async () => {
      setPosts([]);
      setLoading(true);

      const result = await fetch(`https://www.reddit.com/${category}.json`);
      const fetchedData = await result.json();

      setPosts(fetchedData?.data?.children);
      setLoading(false);
    };

    fetchData();
  }, [category]);

  return (
    <Wrapper>
      <Categories changeCategory={setCategory} category={category} />
      {/* Show spinner while fetching posts */}
      {loading && <Spinner />}
      {/* If no posts found, show appropriate message */}
      {!loading && posts.length === 0 && (
        <p className="text-center">No posts found.</p>
      )}
      {/* Display posts */}
      {posts.map((post) => {
        if (post.data) {
          const postObject = {
            id: post.data.id,
            subRedditName:
              post.data.subreddit_name_prefixed ?? "Subreddit Name",
            authorName: post.data.author ?? "Author Name",
            title: post.data.title,
            numOfComments: post.data.num_comments ?? "-",
            upvotes: post.data.ups ?? "-",
            createdAt: post.data.created_utc ?? "-",
            image: post.data.preview?.images[0]?.source?.url,
            video: post.data.media?.reddit_video?.fallback_url,
          };
          return (
            <div
              key={post.data.id}
              className="my-4 bg-white dark:bg-background-secondary shadow rounded transition-colors duration-500"
            >
              <Link
                to={{
                  pathname: "/details",
                  state: {
                    post: { ...postObject },
                  },
                }}
              >
                <Post {...postObject} />
              </Link>
            </div>
          );
        }
        return null;
      })}
    </Wrapper>
  );
};

export default Home;
