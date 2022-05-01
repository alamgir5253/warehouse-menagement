import React from 'react';
import './Blog.css'
const Blog = () => {
  return (
    <section>
      <h2 className='blog-title'>answer section</h2>
      <div className="blog-section">
        <article>
          <h3>Difference between javascript and nodejs</h3>

          <h4>javascript</h4>

          <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM.</p>

          <h4>NodeJS</h4>

          <p>NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags.</p>
        </article>

        <article>
          <h3>Differences between sql and nosql databases</h3>

          <h4>Sql</h4>

          <p>Sql is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schemas. These databases are not suited for hierarchical data storage. Sql is Vertically Scalable and Follows ACID property</p>

          <h4>NoSQL</h4>

          <p>NoSQL Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. Nosql is Horizontally scalable and Follows CAP(consistency, availability, partition tolerance)</p>
        </article>

        <article>
          <h3>What is the purpose of jwt and how does it work</h3>

          <h4>purpose of jwt</h4>

          <p>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM.</p>
        </article>

        <article>
          <h3>When should use nodejs and when mongodb</h3>

          <h4>nodejs</h4>

          <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind</p>

          <h4>MongoDB</h4>

          <p>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
        </article>

        
      </div>
      
    </section>
  );
};

export default Blog;