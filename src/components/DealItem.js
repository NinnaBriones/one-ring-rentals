import React from "react";

export default function DealItem({ image, title, location, availableText, link = "#" }) {
  return (
    <li className="col-md-12">
      <div className="image">
        <a href={link}></a>
        <img alt={title} src={image} />
      </div>

      <ul className="top-info">
        <li>
          <i className="fa fa-calendar"></i> {availableText}
        </li>
      </ul>

      <h4>
        <a href={link}>{title}</a>
        <p>{location}</p>
      </h4>
    </li>
  );
}
