import React from "react";

function PropertyCard(props) {
  return (
    <div className="item col-md-4">
      <div className="image">
        <a href={props.link}>
          <h3>{props.title}</h3>
          <span className="location">{props.location}</span>
        </a>
        <img src={props.image} alt={props.title} />
      </div>
      <div className="price">
        <span>{props.price}</span>
        <p>per night</p>
      </div>
      <ul className="amenities">
        <li>
          <i className="icon-bedrooms"></i> {props.bedrooms}
        </li>
        <li>
          <i className="icon-bathrooms"></i> {props.bathrooms}
        </li>
      </ul>
    </div>
  );
}

export default PropertyCard;
