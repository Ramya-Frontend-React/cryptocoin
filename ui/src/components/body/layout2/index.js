import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import "../../../assets/css/layout2.css";

export const Layout2 = (props) => {
  return (
    <Box sx={{ display: "inline-flex" }}>
      <Box sx={{ marginLeft: "110px", marginTop: "110px" }}>
        <img className="img2" src={props.img3} alt="coin" />
      </Box>
      <Box sx={{ marginTop: "110px", paddingLeft: "40px" }}>
        <Typography sx={{ fontSize: "40px" }}>
          <b>About us</b>
        </Typography>
        <Typography sx={{ fontSize: "20px", color: "#16D5FF" }}>
          {" "}
          The Most Trusted Cryptocurrency Platform
        </Typography>
        <br />
        <br />
        <Typography sx={{ color: "  #989898", width: "600px" }}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
          <br />
          <br />
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </Typography>
        <br />
        <Box sx={{ display: "inline-flex" }}>
          <Typography sx={{ color: "#16D5FF" }}>
            <DoneIcon />
          </Typography>{" "}
          <Typography sx={{ color: "  #989898", paddingLeft: "20px" }}>
            Tempor erat elitr rebum at clita
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "inline-flex" }}>
          <Typography sx={{ color: "#16D5FF" }}>
            <DoneIcon />
          </Typography>{" "}
          <Typography sx={{ color: "  #989898", paddingLeft: "20px" }}>
            Tempor erat elitr rebum at clita
          </Typography>
        </Box>
        <br />
        <Box sx={{ display: "inline-flex" }}>
          <Typography sx={{ color: "#16D5FF" }}>
            <DoneIcon />
          </Typography>{" "}
          <Typography sx={{ color: "  #989898", paddingLeft: "20px" }}>
            {" "}
            Tempor erat elitr rebum at clita
          </Typography>
          <br />
        </Box>
        <br />
        <br />
        <Box>
          <Button
            sx={{
              background: "#16D5FF",
              color: "white",
              width: "150px",
              height: "60px",
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
