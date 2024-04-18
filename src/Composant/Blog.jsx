import React from "react";
import Cards from "./Card";

import Header from "./Header";

function Blog() {
  return (
    <div>
      <Header></Header>
      <h1>Blog</h1>
      <p className="mess">
        Retrouvez ici quelques articles sur le développement web.
      </p>
      <hr className="hr1"></hr>
      <Cards />
    </div>
  );
}
export default Blog;
