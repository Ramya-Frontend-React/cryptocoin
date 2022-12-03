import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../../assets/css/footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = (props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", pt: "200px", ml: "100px" }}>
        {" "}
        <Box sx={{ display: "flex" }}>
          <Box>
            <img className="img" src={props.img1} />
          </Box>

          <Typography
            sx={{ color: "#16D5FF", fontSize: "30px", paddingLeft: "5px" }}
          >
            <b>CryptoCoin</b>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ ml: "470px", fontSize: "20px" }}>
            <b>News Letter</b>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ width: "600px", ml: "105px", color: "  #989898" }}>
          Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
          ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam ipsum
          sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </Typography>
        <Box>
          <Typography sx={{ ml: "70px", color: "  #989898", pb: "15px" }}>
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
          </Typography>
          <Box>
            <Box
              className="box"
              sx={{
                ml: "75px",
                height: "50px",
                width: "650px",

                border: "1px solid #989898",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box>
                <input placeholder="Your email" type="email" />
              </Box>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#16D5FF",
                    color: "white",
                    width: "100px",
                    height: "40px",
                  }}
                >
                  Signup
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ pt: "80px", ml: "100px" }}>
          <Box>
            <Typography sx={{ fontSize: "20px" }}>
              <b>Get in Touch</b>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", pt: "20px", color: " #989898" }}>
            <Typography>
              <LocationOnIcon />
            </Typography>
            <Typography sx={{ ml: "10px" }}>
              {" "}
              123 Street, New York, USA
            </Typography>
          </Box>
          <Box sx={{ display: "flex", pt: "20px", color: " #989898" }}>
            <Typography>
              <CallIcon />
            </Typography>
            <Typography sx={{ ml: "10px" }}> +012 345 67890</Typography>
          </Box>
          <Box sx={{ display: "flex", pt: "20px", color: " #989898" }}>
            <Typography>
              <EmailIcon />
            </Typography>
            <Typography sx={{ ml: "10px" }}> info@example.com</Typography>
          </Box>
        </Box>

        <Box sx={{ pt: "80px", ml: "100px" }}>
          <Box>
            <Typography sx={{ fontSize: "20px" }}>
              <b>Our Services</b>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", pt: "20px", color: " #989898" }}>
            <Typography>
              <ChevronRightIcon />
            </Typography>
            <Typography sx={{ ml: "10px", hover: "blue", cursor: "pointer" }}>
              {" "}
              Currency Wallet
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: " #989898" }}>
            <Typography>
              <ChevronRightIcon />
            </Typography>
            <Typography
              sx={{
                ml: "10px",

                cursor: "pointer",
              }}
            >
              {" "}
              Currency Transaction
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: " #989898" }}>
            <Typography>
              {" "}
              <ChevronRightIcon />
            </Typography>
            <Typography sx={{ ml: "10px", cursor: "pointer" }}>
              {" "}
              Bitcoin Investments
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: " #989898" }}>
            <Typography>
              <ChevronRightIcon />
            </Typography>
            <Typography sx={{ ml: "10px", cursor: "pointer" }}>
              {" "}
              Token Sale
            </Typography>
          </Box>
        </Box>

        <Box sx={{ pt: "80px", ml: "100px" }}>
          <Box>
            <Typography sx={{ fontSize: "20px" }}>
              <b>Quick Links</b>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", pt: "20px", color: " #989898" }}>
            <Typography>
              <ChevronRightIcon />
            </Typography>
            <Typography sx={{ ml: "10px", hover: "blue", cursor: "pointer" }}>
              {" "}
              About us
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: " #989898" }}>
            <Typography>
              <ChevronRightIcon />
            </Typography>
            <Typography
              sx={{
                ml: "10px",
                cursor: "pointer",
              }}
            >
              {" "}
              Contact Us
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: " #989898" }}>
            <Typography>
              {" "}
              <ChevronRightIcon />
            </Typography>
            <Typography sx={{ ml: "10px", cursor: "pointer" }}>
              {" "}
              Our Services
            </Typography>
          </Box>
          <Box sx={{ display: "flex", color: " #989898" }}>
            <Typography>
              <ChevronRightIcon />
            </Typography>
            <Typography sx={{ ml: "10px", cursor: "pointer" }}>
              {" "}
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pt: "80px", ml: "100px" }}>
          <Typography sx={{ fontSize: "20px" }}>
            <b>Quick Links</b>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              color: "#16D5FF",
              pt: "20px",
            }}
          >
            <Box>
              <TwitterIcon />
            </Box>
            <Box>
              <FacebookSharpIcon />
            </Box>
            <Box>
              <YouTubeIcon />
            </Box>
            <Box>
              <LinkedInIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <br />

      <hr />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: " #989898" }}>&#169;</Typography>
          <Typography sx={{ color: "#16D5FF" }}> Your Site Name, </Typography>
          <Typography sx={{ color: " #989898" }}>
            {" "}
            All Right Reserved.
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#16D5FF" }}> Designed By </Typography>
          <Typography sx={{ color: " #989898" }}>HTML Codex</Typography>
          <Typography sx={{ color: "#16D5FF" }}> Distributed By </Typography>
          <Typography sx={{ color: " #989898" }}>ThemeWagon </Typography>
        </Box>
      </Box>
    </Box>
  );
};
