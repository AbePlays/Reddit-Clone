import { Link } from "react-router-dom";
import moment from "moment";

import { kFormatter } from "../Utility";

export default function Post(props) {
  return (
    <div className="mx-auto my-4 max-w-xl shadow bg-white rounded">
      <Link
        to={{
          pathname: "/details",
          state: {
            post: props,
          },
        }}
      >
        <div className="p-4">
          <div className="flex items-center text-xs">
            <div className="w-6 h-6 rounded-full bg-red-100"></div>
            <div>
              <h1 className="font-bold ml-2">{props.subRedditName}</h1>
              <div className="flex ml-2">
                <p>Posted by u/{props.authorName}</p>
                <p className="ml-1">•</p>
                <p className="ml-1">{moment.unix(props.createdAt).fromNow()}</p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-lg leading-snug">{props.title}</p>
          {props.video ? (
            <div className="mt-2 rounded overflow-hidden">
              <video controls>
                <source src={props.video} />
              </video>
            </div>
          ) : (
            props.image && (
              <div className="mt-2 rounded overflow-hidden">
                <img
                  className="mx-auto rounded"
                  src={props.image.replaceAll("amp;", "")}
                  alt=""
                />
              </div>
            )
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
              <p className="ml-2">{kFormatter(props.likes)}</p>
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
              <p className="ml-2">{kFormatter(props.comments)} comments</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
