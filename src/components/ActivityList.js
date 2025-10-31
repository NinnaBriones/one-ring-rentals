import React from "react";
import ActivityItem from "./ActivityItem";

export default function ActivityList({ activities }) {
  return (
    <div className="col-sm-12">
      <h2 className="section-title">Activity</h2>
      <ul className="activity">
        {activities.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}