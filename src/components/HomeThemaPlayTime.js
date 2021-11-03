import React from "react";
import styled from "styled-components";

const PlayTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0;
`;

function HomeThemaPlayTime({ playTime }) {
  return (
    <PlayTime>
      <img
        src="https://user-images.githubusercontent.com/62426665/139075163-7381eff0-3c36-4a5f-997a-3922715e5f8f.png"
        width="25px"
        height="25px"
        style={{ marginLeft: "20px", marginRight: "7px" }}
      />
      {playTime}분
    </PlayTime>
  );
}

export default HomeThemaPlayTime;
