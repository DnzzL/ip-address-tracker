import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import backgroundPattern from "../../assets/images/pattern-bg.png";
import Input from "../../components/Input/Input";
import Map from "../../components/Map/Map";
import ResultCard from "../../components/ResultCard/ResultCard";
import { device } from "../../shared/constants";
import { useGeoLocation } from "../../shared/hooks";
import "./Tracker.css";

interface TrackerProps {}

const TrackerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const BackgroundWrapper = styled.div`
  height: 30vh;
  width: 100%;
  max-width: 100%;
  background-image: url(${backgroundPattern});

  @media ${device.tablet} {
    background-repeat: round;
  }
`;

const TrackerTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  position: absolute;
  top: 1vh;

  @media ${device.tablet} {
    top: 3vh;
  }
`;

const InputWrapper = styled.div`
  max-height: 50px;
  position: absolute;
  top: 6vh;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  @media ${device.tablet} {
    top: 10vh;
    max-width: 30rem;
  }
`;

const ResultCardWrapper = styled.div`
  padding: 0.5rem 1.5rem;
  position: absolute;
  top: 15vh;
  width: 90%;

  @media ${device.tablet} {
    max-width: 60rem;
    top: 20vh;
  }
`;

const Tracker: FC<TrackerProps> = () => {
  const inputPlaceholder = "Search for any IP address or domain";

  const [inputValue, setInputValue] = useState("");
  const [isFetching, setFetching] = useState(false);
  const [geoLocation, fetchGeoLocationAPI] = useGeoLocation();

  useEffect(() => {
    fetchGeoLocationAPI();
  }, [fetchGeoLocationAPI]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFetching(true);
    await fetchGeoLocationAPI(inputValue);
    setFetching(false);
  };

  return (
    <TrackerWrapper>
      <BackgroundWrapper></BackgroundWrapper>
      <TrackerTitle>IP Address Tracker</TrackerTitle>
      <InputWrapper>
        <Input
          placeholder={inputPlaceholder}
          inputValue={inputValue}
          onInputChange={onInputChange}
          onClick={onClick}
        ></Input>
      </InputWrapper>
      <ResultCardWrapper>
        {geoLocation ? (
          <ResultCard
            items={{
              "ip address": geoLocation.ip,
              location: geoLocation.city,
              timezone: geoLocation.timezone,
              isp: geoLocation.isp,
            }}
          ></ResultCard>
        ) : null}
      </ResultCardWrapper>
      {geoLocation ? (
        <Map lat={geoLocation.lat} lng={geoLocation.lng}></Map>
      ) : null}
    </TrackerWrapper>
  );
};

export default Tracker;
