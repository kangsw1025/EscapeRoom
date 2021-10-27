import React from "react";
import styled from "styled-components";

const LevelImg = styled.div`
  display: flex;
  padding-left: 10px;
`;

function ThemaLevel({ level }) {
  const component = [];
  const init = level => {
    const fillStar = React.createElement("img", {
      src: "https://user-images.githubusercontent.com/62426665/139069007-ff588470-4719-461c-9b50-10fc81eebdad.png",
      width: "25px",
      height: "25px",
    });
    const emptyStar = React.createElement("img", {
      src: "https://user-images.githubusercontent.com/62426665/139068899-c006d821-0dc7-4d2f-a51f-664b63a0666c.png",
      width: "25px",
      height: "25px",
    });
    console.log(component, fillStar, emptyStar, level);

    for (let i = 1; i <= level; i++) {
      component.push(fillStar);
    }
    for (let i = level + 1; i <= 5; i++) {
      component.push(emptyStar);
    }
  };

  init(level);
  return <LevelImg>{component}</LevelImg>;
}

export default ThemaLevel;
