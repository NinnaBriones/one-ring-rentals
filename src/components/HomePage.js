import React, { useState } from "react";
import Select from "react-select";

// imports the  components
import PropertyGrid from "./PropertyGrid";
import RegionList from "./RegionList";
import ArticleGrid from "./ArticleGrid";
import DealList from "./DealList";
import ActivityList from "./ActivityList";

// Imports data
import { stayOptions, bedroomOptions } from "../data/options.js";
import {
  properties,
  deals,
  regions,
  activities,
  homepageArticles,
} from "../data/homepageData.js";

export default function HomePage() {
  // form state
  const [arrivalDate, setArrivalDate] = useState("");
  const [stayLength, setStayLength] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [location, setLocation] = useState("");

  // eesults state
  const [filtered, setFiltered] = useState(properties);

  // filter logic
  function handleSubmit(e) {
    e.preventDefault();
    const newFiltered = properties.filter((p) => {
      const matchesLocation = location
        ? p.location.toLowerCase().includes(location.toLowerCase())
        : true;

      let matchesBedrooms = true;
      if (bedrooms) {
        matchesBedrooms =
          bedrooms.value === "5plus"
            ? p.bedrooms >= 5
            : p.bedrooms === Number(bedrooms.value);
      }
      return matchesLocation && matchesBedrooms;
    });
    setFiltered(newFiltered);
  }

  // reset form
  function handleClear() {
    setArrivalDate("");
    setStayLength(null);
    setBedrooms(null);
    setLocation("");
    setFiltered(properties);
  }

  return (
    <>
      {/*CAROUSEL*/}
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div
            className="item active"
            id="slide1"
            style={{
              background: "url(/images/home-search.jpg) no-repeat left center",
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">Breathtaking views</div>
              <div className="caption sfl slider-subtitle">
                Relaxation in the Bay of Belfalas
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="item"
            id="slide2"
            style={{
              background: "url(/images/home-search.jpg) no-repeat left center",
              backgroundSize: "cover",
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">The simple life</div>
              <div className="caption sfl slider-subtitle">
                Lush gardens in Mordor
              </div>
              <a href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* ADVANCED SEARCH*/}
      <div id="home-advanced-search" className="open">
        <div id="opensearch"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="form-control-small">
                    <input
                      type="date"
                      className="form-control"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      placeholder="Arrive on..."
                    />
                  </div>
                  <div className="form-control-small">
                    <Select
                      options={stayOptions}
                      value={stayLength}
                      onChange={setStayLength}
                      placeholder="Stay..."
                    />
                  </div>
                  <div className="form-control-small">
                    <Select
                      options={bedroomOptions}
                      value={bedrooms}
                      onChange={setBedrooms}
                      placeholder="Bedrooms"
                    />
                  </div>
                  <div className="form-control-large">
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="City, State, Country, etc..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-fullcolor">
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    style={{ marginLeft: 8 }}
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT*/}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* MAIN */}
            <div className="main col-sm-8">
              <PropertyGrid properties={filtered} />
              <RegionList regions={regions} />
              <ArticleGrid articles={homepageArticles} />{" "}
            </div>

            {/* SIDEBAR */}
            <div className="sidebar col-sm-4">
              <DealList deals={deals} />

              <ActivityList activities={activities} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
