import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export const Reusable6 = (props) => {
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <Typography variant="h5">
        <b>{props.tittle}2045</b>
      </Typography>
      <br />
      <Typography
        sx={{ width: "210px", textAlign: "center", color: "  #989898" }}
      >
        Aliqu diam amet diam Clita erat ipsum et lorem sit
      </Typography>
    </Box>
  );
};
