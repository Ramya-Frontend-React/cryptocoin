import { Box, Typography } from "@mui/material";
import React from "react";
import { Reuse4 } from "./reusable4";

export const Layout4 = (props) => {
  return (
    <Box sx={{ paddingTop: "160px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">
          <b>Why Us!</b>
        </Typography>
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          The Best In The Crypto Industry
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "100px",
        }}
      >
        <Reuse4 title1="Easy To Start" icon4={props.icon4} />
        <Reuse4 title1="Safe And Secure" icon4={props.icon5} />
        <Reuse4 title1=" Affordable Plans" icon4={props.icon6} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "100px",
        }}
      >
        <Reuse4 title1=" Secure Storage" icon4={props.icon11} />
        <Reuse4 title1=" Protected By Insurance" icon4={props.icon12} />
        <Reuse4 title1=" 24/7 Support" icon4={props.icon13} />
      </Box>
    </Box>
  );
};
