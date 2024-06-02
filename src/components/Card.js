import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardContent = styled.div`
  font-size: 14px;
`;

const Card = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default Card;
