import axios from "axios";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import backgroundPattern from "../../assets/images/pattern-bg.png";
import Input from "../../components/Input/Input";
import Map from "../../components/Map/Map";
import ResultCard from "../../components/ResultCard/ResultCard";
import { device } from "../../shared/constants";
import { IpifyResponse } from "../../shared/interfaces";
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
  const IPIFY_URL = "https://geo.ipify.org/api/v2/country,city";
  const inputPlaceholder = "Search for any IP address or domain";

  const [inputValue, setInputValue] = useState("");
  const [ip, setIP] = useState("");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [isFetching, setFetching] = useState(false);

  const fetchGeolocationAPI = async (ipAddress: string = "") => {
    try {
      const params = ipAddress
        ? { apiKey: `${process.env["REACT_APP_IPIFY_API_KEY"]}`, ipAddress }
        : { apiKey: `${process.env["REACT_APP_IPIFY_API_KEY"]}` };
      const response = (
        await axios.get(IPIFY_URL, {
          params,
        })
      ).data as IpifyResponse;
      setIP(response.ip);
      setCity(response.location.city);
      setLat(response.location.lat);
      setLng(response.location.lng);
      setTimezone(response.location.timezone);
      setIsp(response.isp);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGeolocationAPI();
  }, [inputValue]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFetching(true);
    await fetchGeolocationAPI(inputValue);
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
        <ResultCard
          items={{ "ip address": ip, location: city, timezone, isp }}
        ></ResultCard>
      </ResultCardWrapper>
      {lat && lng ? <Map lat={lat} lng={lng}></Map> : null}
    </TrackerWrapper>
  );
};

export default Tracker;
