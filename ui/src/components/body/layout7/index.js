import { Box, Typography, Button } from "@mui/material";
import React from "react";

export const Layout7 = (props) => {
  return (
    <Box sx={{ paddingTop: "160px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">
          <b>Token Sale</b>
        </Typography>
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          Token Sale Countdown
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "100px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography variant="h4">
              <b>0</b>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography variant="h4">
              {" "}
              <b>0</b>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography variant="h4">
              {" "}
              <b>0</b>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography variant="h4">
              {" "}
              <b>0</b>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "45px",
        }}
      >
        <Box
          sx={{
            paddingTop: "10px",
            color: "#16D5FF",
            fontSize: "18px",
          }}
        >
          Day
        </Box>
        <Box
          sx={{
            paddingTop: "10px",
            color: "#16D5FF",
            fontSize: "18px",
            marginLeft: "30px",
          }}
        >
          Hours
        </Box>
        <Box
          sx={{
            paddingTop: "10px",
            color: "#16D5FF",
            fontSize: "18px",
            marginLeft: "23px",
          }}
        >
          Minutes
        </Box>
        <Box sx={{ paddingTop: "10px", color: "#16D5FF", fontSize: "18px" }}>
          Seconds
        </Box>
      </Box>
      <Box sx={{ paddingTop: "50px" }}>
        <Button
          sx={{
            background: "#16D5FF",
            color: "white",
            width: "150px",
            height: "60px",
            marginLeft: "675px",
          }}
        >
          Buy Token
        </Button>
        <Box sx={{ marginLeft: "560px", paddingTop: "30px" }}>
          <img src={props.pay1} />
          <img src={props.pay2} />
          <img src={props.pay3} />
          <img src={props.pay4} />
        </Box>
      </Box>
    </Box>
  );
};
