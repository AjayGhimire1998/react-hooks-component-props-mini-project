import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import logo from "./images/ajay.jpeg"
import ArticleList from "./ArticleList";

console.log(blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={logo} alt={"blog logo"}
      text={"Personal blogs about Learning React by "} 
      name="Ajay Ghimire"
      texttwo="I explain with words and code"
      />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
