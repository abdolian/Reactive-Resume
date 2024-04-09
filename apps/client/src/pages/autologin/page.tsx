// TODO: MASOOD

import { useEffect } from "react";
import { axios } from "@/client/libs/axios";

export const AutologinPage = () => {
  useEffect(() => {
    axios.post(`/auth${location.pathname}`).then((response) => {
      location.href = `/builder/${location.pathname.split('/').at(-1)}`;
    });
  }, []);
  return null
};
