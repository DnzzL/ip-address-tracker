import React, { FC } from "react";
import styled from "styled-components";
import "./ResultCard.css";

interface ResultCardProps {
  items: Object;
}

const ResultCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  border-radius: 10px;
  background-color: white;
  padding: 0.6rem 2rem;
  min-height: 10rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CategoryResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
`;

const CategoryTitle = styled.p`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: var(--dark-gray);
  margin: 0;
`;

const CategoryValue = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--very-dark-gray);
  margin: 0;
`;

const ResultCard: FC<ResultCardProps> = (props) => (
  <ResultCardWrapper>
    {Object.entries(props.items).map(([key, value]) => (
      <CategoryResult key={key}>
        <CategoryTitle>{key}</CategoryTitle>
        <CategoryValue>{value}</CategoryValue>
      </CategoryResult>
    ))}
  </ResultCardWrapper>
);

export default ResultCard;
