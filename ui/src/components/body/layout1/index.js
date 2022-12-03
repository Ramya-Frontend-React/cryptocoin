import { Box, Button, Typography } from "@mui/material";

import "../../../assets/css/layout1.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";

export const Layout1 = (props) => {
  return (
    <div>
      <Box sx={{ display: "inline-flex" }}>
        <Box>
          <Typography
            sx={{ marginLeft: "110px", marginTop: "80px", fontSize: "48px" }}
          >
            <b>
              Make Better Life With
              <br />
              Trusted CryptoCoin
            </b>
          </Typography>

          <br />
          <br />
          <Typography sx={{ marginLeft: "110px" }}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam
            <br /> et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
            clita duo justo magna <br /> dolore erat amet
          </Typography>
          <Button
            sx={{
              marginLeft: "110px",
              marginTop: "20px",
              background: "#16D5FF",
              color: "white",
              width: "150px",
            }}
          >
            Explore More
          </Button>
        </Box>
        <Box>
          <div>
            <img className="img1" src={props.img2} />
          </div>
        </Box>
      </Box>
    </div>
  );
};
