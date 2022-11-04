import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 14px;
  gap: 10px;

  width: max-content;

  background: #313131;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 39px;

  position: absolute;
  bottom: 2em;
  margin: auto;

  cursor: pointer;
`;

const Button = ({ icon, text, action }) => {
  return (
    <StyledButton onClick={() => action()}>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </StyledButton>
  );
};

export default Button;