import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";

import "./styles.css";

const tree = {
  title: "American Government System",
  childNodes: [
    {
      title: "Legislative",
      childNodes: [{ title: "Congress", childNodes: [{ title: "Agencies" }] }]
    },
    {
      title: "Executive",
      childNodes: [
        {
          title: "President",
          childNodes: [
            { title: "Cabinet" },
            { title: "Exec Office Of The President" },
            { title: "Vice-president" },
            {
              title: "Independent Agencies",
              childNodes: [
                { title: "Agriculture" },
                { title: "Commerce" },
                { title: "Defense" },
                { title: "Education" },
                { title: "......" }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Judicial",
      childNodes: [
        { title: "Supreme Court", childNodes: [{ title: "Lower Courts" }] }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Component node={tree} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
