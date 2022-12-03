import React from "react";
import Carousel from "react-elastic-carousel";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Reusable6 } from "./reusable6";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Layout6() {
  return (
    <Box sx={{ pt: "100px", textAlign: "center", fontFamily: "sans-serif" }}>
      <Box>
        <Typography variant="h4">
          <b>RoadMap</b>
        </Typography>
        <Typography variant="h5" sx={{ color: "#16D5FF" }}>
          We Translate Your Dream Into Reality
        </Typography>
      </Box>

      <Box sx={{ pt: "50px" }}>
        <Carousel breakPoints={breakPoints}>
          <Reusable6 tittle="January" />
          <Reusable6 tittle="March" />
          <Reusable6 tittle="May" />
          <Reusable6 tittle="July" />
          <Reusable6 tittle="September" />
          <Reusable6 tittle="September" />
          <Reusable6 tittle="January" />
          <Reusable6 tittle="March" />
          <Reusable6 tittle="May" />
          <Reusable6 tittle="July" />
          <Reusable6 tittle="September" />
          <Reusable6 tittle="September" />
        </Carousel>
      </Box>
    </Box>
  );
}
