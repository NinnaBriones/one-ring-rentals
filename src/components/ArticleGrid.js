import React from "react";
import ArticleCard from "./ArticleItem";

export default function ArticleGrid({ articles }) {
  return (
    <>
      <h1 className="section-title">Recent Articles</h1>
      <div className="grid-style1 clearfix">
        {articles.map((item, index) => (
          <ArticleCard key={index} {...item} />
        ))}
      </div>
      <div className="center">
        <a href="#" className="btn btn-default-color">
          View All News
        </a>
      </div>
    </>
  );
}
