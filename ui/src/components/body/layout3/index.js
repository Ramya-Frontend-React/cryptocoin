import React from "react";
import { useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import { Box, Typography } from "@mui/material";

export const Layout3 = (props) => {
  const [show, setShow] = useState("");
  const [loading, setLoading] = useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };

  const displayloader = () => {
    if (window.scrollY >= 1200) {
      onStart();
      setShow("3");
    } else {
      onEnd();
    }
  };
  window.addEventListener("scroll", displayloader);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "180px",
        }}
      >
        <img src={props.icon1} alt="icon1" />
        <img src={props.icon2} alt="icon2" />
        <img src={props.icon3} alt="icon3" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "15px",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "50px" }}>
          <b>
            {" "}
            <CountUp
              end={123456}
              duration={show}
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
          </b>
        </Typography>
        <Typography sx={{ fontSize: "50px" }}>
          {" "}
          <b>
            {" "}
            <CountUp
              end={123456}
              duration={show}
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
          </b>
        </Typography>
        <Typography sx={{ fontSize: "50px" }}>
          {" "}
          <b>
            {" "}
            <CountUp
              end={123456}
              duration={show}
              onStart={onStart}
              onEnd={onEnd}
              containerProps={containerProps}
            />
          </b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          Today Transactions
        </Typography>
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          Monthly Transactions
        </Typography>
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          Yearly Transactions
        </Typography>
      </Box>
    </Box>
  );
};
