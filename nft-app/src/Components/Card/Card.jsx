import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";

const Card = (props) => {
  return (
    <Box
      sx={{
        hight: 270,
        width: 266,
        textAlign: "center",
      }}
    >
      <Box
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={props.Img}
          hight={40}
          width={30}
          sx={{
            padding: "15px",
            borderRadius: "800px",
            background: props.iconBgColor,
          }}
        />
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: "var(--neutral-white, #FFF)" }}>
          {props.Title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "var(--neutral-white, #FFF)" }}
        >
          {props.Description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
