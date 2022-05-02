import { FC } from "react";
import styled from "styled-components";
import useBreakpoint from "use-breakpoint";
import { device, screenSize } from "../../shared/constants";
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
  min-height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
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
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.5rem;
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

  @media ${device.tablet} {
    font-size: 1.3rem;
  }
`;

const CategorySeparator = styled.div`
  display: inline-block;
  border-left: 1px solid #ccc;
  height: 3rem;
  align-self: center;
`;

const ResultCard: FC<ResultCardProps> = (props) => {
  const { minWidth } = useBreakpoint(screenSize);

  return (
    <ResultCardWrapper>
      {Object.entries(props.items).map(([key, value]) => (
        <>
          {minWidth &&
          minWidth > screenSize.mobileL &&
          key !== Object.keys(props.items)[0] ? (
            <CategorySeparator></CategorySeparator>
          ) : null}
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
