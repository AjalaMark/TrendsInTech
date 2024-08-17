import React from "react";
import "../Assets/Home.css";

const Home = () => {
  const posts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "A brief overview of upcoming trends in web development.",
      id: 1,
      image: "https://via.placeholder.com/300",
    },
    {
      title: "10 Tips for Learning React Faster",
      excerpt: "Quick tips to help you master React more efficiently.",
      id: 2,
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Understanding JavaScript Closures",
      excerpt: "Deep dive into one of JavaScript’s most powerful features.",
      id: 3,
      image: "https://via.placeholder.com/300",
    },
    {
      title: "CSS Grid vs. Flexbox: Which One Should You Use?",
      excerpt: "A comparison of two popular layout systems in CSS.",
      id: 4,
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Building Accessible Websites",
      excerpt: "Key practices for making your website accessible to all users.",
      id: 5,
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Getting Started with TypeScript",
      excerpt:
        "An introduction to TypeScript and its benefits over JavaScript.",
      id: 6,
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="homepage">
      <header>
        <h1>Welcome to My Blog</h1>
      </header>
      <main className="main">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} className="post-image" />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/post/${post.id}`}>Read More</a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
