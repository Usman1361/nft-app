import React from "react";
import { Box, Typography } from "@mui/material";
import { sCard1 } from "../SmallComponent/images";

const SlidingCard = () => {
  return (
    <Box height={300} width={300} sx={{ backgroundColor: "#3C485D" }}>
      <Box height="100%" width="100%">
        <Box
          sx={{ backgroundColor: "white" }}
          component="img"
          src={sCard1}
          height="100%"
          width="100%"
        />
      </Box>
      <Typography variant="h3">Hi</Typography>
    </Box>
  );
};

export default SlidingCard;
