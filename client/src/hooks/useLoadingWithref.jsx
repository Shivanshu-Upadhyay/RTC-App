import React from "react";
import { useEffect } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { setAuth } from "../redux/slice/authSlice";

export function  useLoadingWithRef() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/refresh`,
          { withCredentials: true }
        );
          dispatch(setAuth(data))
          setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
}


