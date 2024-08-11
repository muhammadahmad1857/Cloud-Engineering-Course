import React from "react";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Muhammad Ahmad</h1>
        <p>
          Welcome to my personal page! I am a Full Stack Web Developer with a
          passion for coding and cricket.
        </p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a <strong>Full Stack Web Developer</strong> specializing in
          modern web technologies. My skill set includes{" "}
          <span title="React.js is a JavaScript library for building user interfaces">
            React.js
          </span>
          ,{" "}
          <span title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">
            Node.js
          </span>
          , <span title="MongoDB is a NoSQL database">MongoDB</span>, and many
          more.
        </p>
        <p>
          Currently, I am learning{" "}
          <span title="Cloud Applied AI Engineering involves using cloud technologies for AI applications">
            Cloud Applied AI Engineering
          </span>{" "}
          through{" "}
          <span title="PIAIC stands for Presidential Initiative for Artificial Intelligence and Computing">
            PIAIC
          </span>
          . This program helps me understand how to leverage cloud platforms to
          enhance AI solutions.
        </p>
      </section>

      <section className="center">
        <h2>Skills</h2>
        <table border={10} className="skillsTable">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>HyperText Markup Language</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Cascading Style Sheets</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Programming language for web development</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>Typed superset of JavaScript</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>High-level programming language</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Hobbies</h2>
        <p>
          Outside of coding, I have a strong interest in playing{" "}
          <strong>cricket</strong>. I enjoy both watching and playing cricket,
          which helps me stay active and relaxed. The game also provides me with
          valuable lessons in teamwork and strategy.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          Feel free to connect with me through my{" "}
          <a
            href="https://www.linkedin.com/in/muhammadAhmadJawad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>{" "}
          or check out my{" "}
          <a
            href="https://github.com/muhammadahmad1857"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          You can also reach me at my email:{" "}
          <a href="mailto:ahmedjawad1857@gmail.com">ahmedjawad1857@gmail.com</a>{" "}
          or call me at <strong>0300 6659819</strong>.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
