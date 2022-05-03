import axios from "axios";
import { useCallback, useState } from "react";
import { GeoLocType, IpifyResponse } from "./interfaces";

export const useGeoLocation = () => {
  const IPIFY_URL = "https://geo.ipify.org/api/v2/country,city";

  const [geoLocation, setGeoLocation] = useState<GeoLocType>();

  const fetchGeoLocationAPI = useCallback(async (ipAddress: string = "") => {
    try {
      const params = ipAddress
        ? { apiKey: `${process.env["REACT_APP_IPIFY_API_KEY"]}`, ipAddress }
        : { apiKey: `${process.env["REACT_APP_IPIFY_API_KEY"]}` };
      const response = (
        await axios.get(IPIFY_URL, {
          params,
        })
      ).data as IpifyResponse;
      setGeoLocation({
        ip: response.ip,
        city: response.location.city,
        lat: response.location.lat,
        lng: response.location.lng,
        timezone: response.location.timezone,
        isp: response.isp,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return [geoLocation, fetchGeoLocationAPI] as const;
};
