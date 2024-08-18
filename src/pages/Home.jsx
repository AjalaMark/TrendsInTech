import React from "react";
import "../Assets/Home.css";
import futureWebImage from "../Assets/Images/Future-web.png";
import learnReact from "../Assets/Images/learn-react.jpg";
import closures from "../Assets/Images/closures.webp";
import gridFlex from "../Assets/Images/grid-flex.jpg";
import accessibleWeb from "../Assets/Images/accessibleWeb.jpg";
import typeScript from "../Assets/Images/typeScript.png";

const Home = () => {
  const posts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "A brief overview of upcoming trends in web development.",
      id: 1,
      image: futureWebImage,
    },
    {
      title: "10 Tips for Learning React Faster",
      excerpt: "Quick tips to help you master React more efficiently.",
      id: 2,
      image: learnReact,
    },
    {
      title: "Understanding JavaScript Closures",
      excerpt: "Deep dive into one of JavaScript’s most powerful features.",
      id: 3,
      image: closures,
    },
    {
      title: "CSS Grid vs. Flexbox: Which One Should You Use?",
      excerpt: "A comparison of two popular layout systems in CSS.",
      id: 4,
      image: gridFlex,
    },
    {
      title: "Building Accessible Websites",
      excerpt: "Key practices for making your website accessible to all users.",
      id: 5,
      image: accessibleWeb,
    },
    {
      title: "Getting Started with TypeScript",
      excerpt:
        "An introduction to TypeScript and its benefits over JavaScript.",
      id: 6,
      image: typeScript,
    },
  ];

  return (
    <div className="homepage">
      <header>
        <h1>Welcome to My Blog</h1>
      </header>
      <div className="blog-title">
        <h2>My Blog Posts</h2>
      </div>
      <main className="main">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-content">
              <img src={post.image} alt={post.title} className="post-image" />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/post/${post.id}`}>Read More</a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
