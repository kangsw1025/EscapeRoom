import styled from "styled-components";

export const InputForm = styled.div`
  height: calc(10.8px * 70);
  width: calc(19.2px * 60);
  margin-top: 30px;
`;

export const InputLine = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 0.5px solid gray;
  padding: 15px 0px;
`;

export const InputTitle = styled.div`
  width: 20%;
  padding-left: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  align-self: center;
`;

export const InputBody = styled.div`
  width: 80%;
  padding: 0px;
  font-family: sans-serif;
  font-size: 18px;
  align-self: center;
`;

export const Select = styled.select`
  width: 258px;
  height: 40px;
  border: 1px solid gray;
`;

export const TextInput = styled.input`
  width: 250px;
  height: 30px;
`;

export const ButtonConainter = styled.div`
  width: 40%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 50px;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;
