import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BasicNode, BasicRelationship, GraphVisualizer } from "neo4j-devtools-arc";

function App() {

  const nodes: BasicNode[] = [
    {
      id: "1",
      elementId: "1",
      labels: ["Person"],
      properties: {
        name: "Jack",
        age: "20"
      },
      propertyTypes: {
        name: "string",
        age: "number"
      }
    },
    {
      id: "2",
      elementId: "2",
      labels: ["React"],
      properties: {
        name: "ReactJS"
      },
      propertyTypes: {
        name: "string"
      }
    }
  ];

  const links: BasicRelationship[] = [
    {
      id: "3",
      elementId: "3",
      startNodeId: "1",
      endNodeId: "2",
      type: "likes",
      properties: {},
      propertyTypes: {}
    }
  ];

  const isFullscreen = true;

  return (
    <div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="QubitPi Logo" />
          </div>
        </div>
        <GraphVisualizer
          maxNeighbours={100}
          hasTruncatedFields={false}
          nodes={nodes}
          autocompleteRelationships={false}
          relationships={links}
          isFullscreen={isFullscreen}
          nodeLimitHit={false}
          getAutoCompleteCallback={undefined}
          wheelZoomRequiresModKey={!isFullscreen}
          wheelZoomInfoMessageEnabled={false}
          useGeneratedDefaultColors={false}
          initialZoomToFit={true}
        />
      </div>
    </div>
  );
}

export default App;
