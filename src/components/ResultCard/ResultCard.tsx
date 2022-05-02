import { FC } from "react";
import styled from "styled-components";
import { device } from "../../shared/constants";
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
  padding: 1.5rem 2rem;
  min-height: 8rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.5rem 1rem;
  }
`;

const CategoryResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;

  @media ${device.tablet} {
    text-align: left;

    &:after {
      content: "";
      position: absolute;
      border-left: 1px solid black;
      right: -10px;
      height: 80%;
    }

    &:last-child:after {
      display: none;
    }
  }
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

const ResultCard: FC<ResultCardProps> = (props) => {
  return (
    <ResultCardWrapper>
      {Object.entries(props.items).map(([key, value]) => (
        <>
          <CategoryResult key={key}>
            <CategoryTitle>{key}</CategoryTitle>
            <CategoryValue>{value}</CategoryValue>
          </CategoryResult>
        </>
      ))}
    </ResultCardWrapper>
  );
};

export default ResultCard;
