import { Box, Typography } from "@mui/material";
import React from "react";

import { Reusable5 } from "./reusable5";

export const Layout5 = (props) => {
  return (
    <Box sx={{ paddingTop: "160px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">
          <b>Services</b>
        </Typography>
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          Buy, Sell And Exchange Cryptocurrency
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "100px",
        }}
      >
        <Reusable5 icon={props.icon4} title="Currency Wallet" />
        <Reusable5 icon={props.icon5} title="Currency Transaction" />
        <Reusable5 icon={props.icon6} title="Bitcoin Investment" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "100px",
        }}
      >
        <Reusable5 icon={props.icon11} title="Currency Exchange" />
        <Reusable5 icon={props.icon12} title="Bitcoin Escrow" />
        <Reusable5 icon={props.icon13} title=" Token Sale" />
      </Box>
    </Box>
  );
};
