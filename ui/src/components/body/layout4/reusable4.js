import React from "react";
import { Box, Typography } from "@mui/material";

export const Reuse4 = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <img src={props.icon4} />
      </Box>
      <Box sx={{ marginLeft: "30px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
          {props.title1}
        </Typography>

        <Box sx={{ paddingTop: "10px", color: "  #989898", fontSize: "18px" }}>
          Aliqu diam amet diam et eos. Clita erat <br /> ipsum et lorem et sit,
          sed stet lorem sit
          <br /> clita duo justo
        </Box>
      </Box>
    </Box>
  );
};
