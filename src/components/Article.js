// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {/* Optional: display 'minutes to read' with emojis */}
    </article>
  );
}

export default Article;
