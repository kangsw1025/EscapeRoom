import styled from "styled-components";

export const Header = styled.div`
  font-size: 32px;
  margin: 50px 0px;
  font-weight: bold;
  text-align: center;
  display: block;
`;

export const StepContainer = styled.div`
  width: calc(19.2px * 60);
  min-width: calc(19.2px * 60);
  height: 100px;
  padding-bottom: 20px;
  border-bottom: 1px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepBox = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const NowStepImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #a390ee;
  font-size: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const StepImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: darkgray;
  font-size: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const NowStepText = styled.div`
  height: 100px;
  width: auto;
  color: #a390ee;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepText = styled.div`
  height: 100px;
  width: auto;
  color: #ced4da;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepArrow = styled.div`
  height: 75px;
  width: 75px;
  background: url("https://user-images.githubusercontent.com/62426665/139847264-490a402b-c7fd-4888-aff8-bf46bc73518d.png");
  background-size: 100% 100%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const PublicStepContainer = styled.div`
  width: 70%;
  min-width: calc(19.2px * 50);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
