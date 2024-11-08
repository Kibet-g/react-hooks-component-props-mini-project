// src/components/ArticleList.js
import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => { // change articles to posts
  if (!posts) {
    return <div>No articles available</div>;
  }

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
};

export default ArticleList;
