import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  return (
    <div className="bg-gray-100 px-2 py-4 min-h-screen">
      <div className="mx-auto my-4 p-4 max-w-xl shadow bg-white rounded">
        <div className="flex items-center text-xs">
          <div className="w-4 h-4 rounded-full bg-red-100"></div>
          <h1 className="font-bold ml-2">{state.post.subRedditName}</h1>
          <p className="ml-1">•</p>
          <p className="ml-1">Posted by u/{state.post.authorName}</p>
        </div>
        <p className="mt-2 text-lg leading-snug">{state.post.title}</p>
        {state.post.image && (
          <div className="mt-2 rounded overflow-hidden">
            <img
              className="w-full"
              src={state.post.image.replaceAll("amp;", "")}
              alt=""
            />
          </div>
        )}
        <div className="flex items-center mt-6 text-gray-500 text-xs font-bold">
          <div className="flex items-center">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <p className="ml-2">{state.post.likes}</p>
            <svg
              className="w-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <div className="flex items-center ml-6">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            <p className="ml-2">{state.post.comments} comments</p>
          </div>
          {/* <p>{createdAt}</p> */}
        </div>
      </div>
    </div>
  );
}
