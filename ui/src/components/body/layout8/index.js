import { MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import React from "react";

import FormControl from "@mui/material/FormControl";

export const Layout8 = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ textAlign: "center", pt: "200px" }}>
      <Typography variant="h4">
        <b>FAQs</b>
      </Typography>
      <Typography sx={{ color: "#16D5FF" }}>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ width: "1000px", ml: "250PX", pt: "50px " }}>
        <FormControl fullWidth>
          <InputLabel sx={{ border: "0" }} id="demo-simple-select-label">
            How to build a site ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            How long will it take to get a new website?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Do only create HTML website ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Will my website be mobile-friendly ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Will you maintain my site for me ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            I’m on a strict budget. Do you have any low cost options ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Will you maintain my site for me ?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "1000px", ml: "250PX" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            I’m on a strict budget. Do you have any low cost options?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>
              Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed
              magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum
              magna duo labore no diam.
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
