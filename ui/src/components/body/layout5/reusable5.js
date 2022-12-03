import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Reusable5 = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ marginLeft: "30px" }}>
        <Box>
          <img src={props.icon} />
        </Box>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "500", paddingTop: "15px" }}
        >
          {props.title}
        </Typography>

        <Box sx={{ paddingTop: "10px", color: "  #989898", fontSize: "18px" }}>
          Aliqu diam amet diam et eos. Clita erat <br /> ipsum et lorem et sit,
          sed stet lorem sit
          <br /> clita duo justo
        </Box>
        <Box sx={{ display: "flex", color: "#16D5FF" }}>
          <Typography sx={{ paddingTop: "10px" }}>Read More</Typography>
          <ArrowForwardIcon sx={{ paddingTop: "11px", marginLeft: "5px" }} />
        </Box>
      </Box>
    </Box>
  );
};
