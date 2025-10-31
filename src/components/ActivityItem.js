import React from "react";
// define a simple component called ActivityItem
//  gets data from its parent
export default function ActivityItem({
  image,
  user,
  action,
  subject,
  subjectLink,
  comment,
  timestamp,
}) {
  return (
    <li className="col-lg-12">
      {/* link wrapping the photo and displays photo */}
      <a href={subjectLink || "#"}>
        <img src={image} alt={`${user} avatar`} />
      </a>
      <div className="info">
        <h5>
          {/* Display user, action, and subject link using data from props */}
          {user} {action} <a href={subjectLink || "#"}>{subject}</a>
        </h5>
        {/* Display the comment and timestamp */}
        <p>{comment}</p>
        <h6>{timestamp}</h6>
      </div>
    </li>
  );
}
