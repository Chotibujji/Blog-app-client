import React from "react";
import "./home.css";
import { BASE_URL } from "../../utils/config.js";
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: blogData,
    loading,
    error,
  } = useFetch(`${BASE_URL}/blog/allBlogs`);

  // console.log("blogData :>> ", blogData);

  // truncateContent function here take two arguments one is content i want to show and second arguments how many words to show

  const truncateContent = (content, limit) => {
    const words = content.split(" ");
    const truncated = words.slice(0, limit).join(" ");
    return truncated + (words.length > limit ? " ...!" : "");
  };

  return (
    <>
      <div class="container ">
        <div class="row row-cols-1 row-cols-lg-3 row-cols-sm-1">
          {blogData?.map((blogData) => (
            <div class="col blog__parent ">
              <div class="p-3 border bg-light">
                <img
                  src={`https://source.unsplash.com/random/?${blogData.topic}`}
                  alt=""
                  class="blog__image"
                />
                <p className="mt-1 author_name">Author: {blogData.user.name}</p>
                <span className="d-flex justify-content-between">
                  <h3 className="blog__title">{truncateContent(blogData.title, 2)}</h3>
                  <h5 className="d-flex align-items-center justify-content-center blog__topic">
                    Topic: {blogData.topic}
                  </h5>
                </span>
                <p>{truncateContent(blogData.content, 30)}</p>
                <div className="text-center">
                  {" "}
                  <p className="blog__publish__date">
                    Published date:{" "}
                    {new Date(blogData.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span className="d-flex justify-content-between">
                  <Link to={blogData._id}>
                    
                  <button className="btn btn-primary"  >Read Full</button>
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
