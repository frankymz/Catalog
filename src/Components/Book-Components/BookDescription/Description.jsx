import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <React.Fragment>
      <div className="title">
        A Beginner's Guide to Japan: Observations and Provocations
      </div>
      <div style={{ fontFamily: "sans-serif", paddingBottom: "10px" }}>
        by Pico Iver
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          borderBottom: "1px solid gray",
          paddingBottom: "20px",
        }}
      >
        Average rating: 4
      </div>
      <div style={{marginTop:"20px"}}>
        For writers, a random sentence can help them get their creative juices
        flowing. Since the topic of the sentence is completely unknown, it
        forces the writer to be creative when the sentence appears. There are a
        number of different ways a writer can use the random sentence for
        creativity. The most common way to use the sentence is to begin a story.
        Another option is to include it somewhere in the story.
      </div>
    </React.Fragment>
  );
}
