import React from "react";
export default function ArticleCard({
  link,
  image,
  tagIcon,
  date,
  comments,
  tags,
  title,
  description,
}) {
  return (
    // col-md-4, makes it 3-per-row
    <div className="item col-md-4">
      <div className="image">
        <a href={link || "#"}>
          <span className="btn btn-default">
            <i className="fa fa-file-o"></i> Read More
          </span>
        </a>
        <img src={image} alt={title} />
      </div>
      <div className="tag">
        <i className={`fa ${tagIcon || "fa-file-text"}`}></i>
      </div>
      <div className="info-blog">
        <ul className="top-info">
          <li>
            <i className="fa fa-calendar"></i> {date}
          </li>
          <li>
            <i className="fa fa-comments-o"></i> {comments}
          </li>
          <li>
            <i className="fa fa-tags"></i> {tags}
          </li>
        </ul>
        <h3>
          <a href={link || "#"}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
