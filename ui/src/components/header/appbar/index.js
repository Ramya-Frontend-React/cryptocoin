import React from "react";
import AppBar from "@mui/material/AppBar";
import "../../../assets/css/header.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const ResponsiveAppBar = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "whitesmoke",
        boxShadow: "none",
        paddingTop: "10px",
      }}
    >
      <Toolbar>
        <Typography sx={{ marginLeft: "10px" }}>
          <img className="img" src={props.img1} />
        </Typography>

        <Typography
          sx={{ color: "#16D5FF", fontSize: "30px", paddingLeft: "5px" }}
        >
          <b>CryptoCoin</b>
        </Typography>
        <Tabs label="Home" sx={{ color: "black", marginLeft: "auto" }}>
          <Tab label="Home" />
        </Tabs>
        <Tabs label="Home" sx={{ color: "black" }}>
          <Tab label="About" />
        </Tabs>
        <Tabs label="" sx={{ color: "black" }}>
          <Tab label="Service" />
        </Tabs>
        <Tabs label="" sx={{ color: "black" }}>
          <Tab label="RoadMap" />
        </Tabs>
        <Tabs sx={{ border: "0px" }}>
          <Box sx={{ width: "100px", border: "0px" }}>
            <FormControl sx={{ border: "0px" }} fullWidth>
              <InputLabel sx={{ border: "0px" }}>Pages</InputLabel>
              <Select
                sx={{ border: "0px" }}
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem sx={{ border: "none" }} value={10}>
                  Feature
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Tabs>
        <Tabs label="" sx={{ color: "#16D5FF", pt: "15px", ml: "20px" }}>
          <TwitterIcon />
        </Tabs>
        <Tabs label="" sx={{ color: "#16D5FF", pt: "15px", ml: "20px" }}>
          <FacebookSharpIcon />
        </Tabs>
        <Tabs label="" sx={{ color: "#16D5FF", pt: "15px", ml: "20px" }}>
          <LinkedInIcon />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};
