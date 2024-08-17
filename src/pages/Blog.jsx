import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Assets/Blog.css";

const Blog = () => {
  const { id } = useParams(); // Get the post id from the URL
  const navigate = useNavigate();

  // Sample posts data (this would normally come from a server or database)
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      date: "August 8, 2024",
      content: `
      Web development is rapidly evolving, with new trends and technologies emerging every year. 
      In 2024, we expect to see a stronger emphasis on performance optimization, AI integration, 
      and even more sophisticated development tools. The rise of WebAssembly is making it possible 
      to run code written in multiple languages directly in the browser, leading to faster and more 
      efficient web applications. Additionally, the integration of AI in web development tools will 
      streamline workflows and enable more intelligent, data-driven design decisions. Developers 
      should also be prepared for increased focus on accessibility and inclusivity, ensuring that 
      web applications are usable by everyone, regardless of their abilities. As the landscape of 
      web development continues to change, staying informed and adaptable will be key to success.
    `,
    },
    {
      id: 2,
      title: "10 Tips for Learning React Faster",
      date: "August 5, 2024",
      content: `
      React is a powerful library for building user interfaces, but the learning curve can be steep. 
      To help you get up to speed faster, here are ten tips that can improve your React skills:

      1. **Start with the Basics:** Ensure you have a solid understanding of JavaScript, including ES6 features, before diving into React. 
      2. **Follow Official Documentation:** React's official documentation is comprehensive and frequently updated. Use it as your primary resource.
      3. **Build Small Projects:** Start with small, manageable projects to practice React concepts and build your confidence.
      4. **Understand Component Lifecycle:** Learn how React components are created, updated, and destroyed to manage state and side effects effectively.
      5. **Use Functional Components:** Embrace functional components and React Hooks for a cleaner and more modern approach to managing component state.
      6. **Practice State Management:** Experiment with state management libraries like Redux or Zustand to handle complex state scenarios.
      7. **Explore React DevTools:** Use React DevTools to inspect and debug your React components and their state.
      8. **Study Code Examples:** Review code examples from open-source projects to see how experienced developers structure their React applications.
      9. **Participate in the Community:** Join React forums, attend meetups, and contribute to discussions to learn from others and stay updated on best practices.
      10. **Keep Practicing:** Regular practice and coding challenges will help you reinforce your knowledge and become more proficient in React.

      By following these tips and dedicating time to practice, you'll accelerate your learning process and become more adept at using React.
    `,
    },
    {
      id: 3,
      title: "Understanding JavaScript Closures",
      date: "August 2, 2024",
      content: `
      JavaScript closures are a fundamental concept that every developer should understand. A closure 
      occurs when a function is defined within another function, allowing the inner function to access 
      the outer function's variables even after the outer function has finished executing. Closures are 
      powerful because they enable data encapsulation and create private variables.

      Here's a breakdown of how closures work:
      1. **Creation:** When you define a function inside another function, the inner function maintains a reference 
         to the outer function's scope. This is the essence of a closure.
      2. **Access:** The inner function can access variables from the outer function's scope even after the 
         outer function has completed execution.
      3. **Encapsulation:** Closures allow you to create private variables and methods that are not accessible 
         from the global scope, helping to prevent unintended interference from other parts of your code.

      Example:
      \`\`\`javascript
      function outerFunction() {
        let outerVariable = 'I am an outer variable';
        function innerFunction() {
          console.log(outerVariable); // Accessing outerVariable
        }
        return innerFunction;
      }

      const closureFunction = outerFunction();
      closureFunction(); // Output: I am an outer variable
      \`\`\`

      In the example above, \`innerFunction\` is a closure that retains access to \`outerVariable\` even after
      \`outerFunction\` has finished executing.

      Closures are useful for creating factory functions, managing asynchronous code, and implementing 
      patterns like the module pattern. Understanding and utilizing closures effectively can lead to 
      more efficient and maintainable code.
    `,
    },
    {
      id: 4,
      title: "CSS Grid vs. Flexbox: Which One Should You Use?",
      date: "August 12, 2024",
      content: `
      CSS Grid and Flexbox are two powerful layout systems in CSS that can be used to create complex layouts 
      with ease. While both have their strengths, choosing the right tool for a given layout challenge can 
      make a significant difference in your workflow. Here's a comparison to help you decide which one to use:

      **CSS Grid:**
      - **Two-Dimensional Layouts:** Grid is designed for creating both rows and columns simultaneously, making 
        it ideal for complex layouts that require control over both dimensions.
      - **Explicit Placement:** With Grid, you can place items explicitly in rows and columns, allowing for 
        more precise control over the layout.
      - **Grid Areas:** Grid allows you to define named grid areas, making it easier to manage and rearrange 
        content.

      **Flexbox:**
      - **One-Dimensional Layouts:** Flexbox is best suited for single-dimensional layouts, either in rows or 
        columns. It is excellent for aligning and distributing space among items in a single direction.
      - **Flexible Items:** Flexbox provides flexible sizing for items, allowing them to grow or shrink based 
        on available space.
      - **Alignment and Justification:** Flexbox offers powerful alignment and justification options, making 
        it easy to center items or distribute space evenly.

      **When to Use Each:**
      - Use **CSS Grid** when you need to create complex layouts with both rows and columns, such as grid-based 
        designs or page layouts.
      - Use **Flexbox** when you need to align items in a single direction, such as navigation bars or item lists.

      In practice, you can often combine both Grid and Flexbox in a single project to take advantage of their 
      respective strengths. By understanding the capabilities of each layout system, you'll be able to create 
      more efficient and responsive designs.
    `,
    },
    {
      id: 5,
      title: "Building Accessible Websites",
      date: "August 15, 2024",
      content: `
      Building accessible websites is crucial to ensuring that all users, regardless of their abilities, can 
      navigate and interact with your content. Accessibility involves implementing practices and standards that 
      make your website usable by people with a wide range of disabilities. Here are some key practices for 
      building accessible websites:

      1. **Semantic HTML:** Use semantic HTML elements (e.g., \`<header>\`, \`<nav>\`, \`<main>\`, \`<footer>\`) 
         to convey the meaning and structure of your content. This helps screen readers and other assistive 
         technologies understand the layout and functionality of your site.
      2. **Alt Text for Images:** Provide descriptive alt text for all images to ensure that users who rely on 
         screen readers can understand the content and purpose of each image.
      3. **Keyboard Navigation:** Ensure that all interactive elements, such as buttons and forms, are accessible 
         via keyboard navigation. Test your site to ensure that users can navigate through all interactive elements 
         without using a mouse.
      4. **Contrast and Color:** Ensure sufficient contrast between text and background colors to make content readable 
         for users with visual impairments. Avoid using color alone to convey important information.
      5. **Forms and Labels:** Label form fields clearly and associate labels with their corresponding input elements. 
         Provide descriptive instructions and error messages to help users complete forms accurately.
      6. **Responsive Design:** Create a responsive design that works well on various devices and screen sizes, ensuring 
         that users can access content regardless of the device they use.

      By following these accessibility practices, you'll create a more inclusive web experience and ensure that your 
      content is available to a broader audience. Accessibility should be an integral part of the design and development 
      process, rather than an afterthought.
    `,
    },
    {
      id: 6,
      title: "Getting Started with TypeScript",
      date: "August 20, 2024",
      content: `
      TypeScript is a superset of JavaScript that adds static typing to the language, providing enhanced code 
      quality and development tools. Getting started with TypeScript involves understanding its core features 
      and integrating it into your development workflow. Here's a guide to help you get started:

      1. **Install TypeScript:** Use npm to install TypeScript in your project by running \`npm install --save-dev typescript\`. 
         You can also install the TypeScript compiler globally with \`npm install -g typescript\`.

      2. **Configure TypeScript:** Create a \`tsconfig.json\` file in your project root to configure TypeScript options. 
         This file defines compiler settings and helps TypeScript understand your project structure.

      3. **Understand TypeScript Types:** Learn about TypeScript's type system, including primitive types (e.g., 
         \`string\`, \`number\`, \`boolean\`), complex types (e.g., \`array\`, \`tuple\`, \`enum\`), and custom types 
         using interfaces and type aliases.

      4. **Work with Interfaces and Types:** Use interfaces and type aliases to define complex data structures and 
         enforce contracts in your code. This helps ensure that your data adheres to expected shapes and types.

      5. **Leverage Type Inference:** TypeScript can automatically infer types based on context, reducing the need for 
         explicit type annotations. Learn how to work with inferred types and use type assertions when necessary.

      6. **Explore TypeScript Features:** TypeScript offers additional features such as classes, modules, and 
         decorators. Explore these features to enhance your development experience and write more maintainable code.

      Example:
      \`\`\`typescript
      function greet(name: string): string {
        return \`Hello, \${name}!\`;
      }

      const userName: string = 'Alice';
      console.log(greet(userName)); // Output: Hello, Alice!
      \`\`\`

      By incorporating TypeScript into your development process, you'll benefit from improved type safety, better 
      tooling, and enhanced productivity. TypeScript's gradual adoption allows you to integrate it into existing 
      JavaScript projects and gradually reap its benefits.
    `,
    },
  ];

  // Find the post that matches the id from the URL
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h1>Post Not Found</h1>; // Render a not found message if the post doesn't exist
  }

  return (
    <div className="blog-post-page">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div className="content">
        <p>{post.content}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-button">
        {" "}
        {/* Back button */}
        Back to Home
      </button>
    </div>
  );
};

export default Blog;
