import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { heart } from "../SmallComponent/images";

const CollectionCard = (props) => {
  return (
    <Box
      width={300}
      sx={{
        padding: "24px",
        backgroundColor: "#3C485D",
        borderRadius: "24px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          component="img"
          alt="11"
          src={props.Img1}
          height="155px"
          width="155px"
          sx={{ backgroundColor: props.bgColor1, borderRadius: "8px" }}
        />
        <Box
          component="img"
          alt="12"
          src={props.Img2}
          height="155px"
          width="155px"
          sx={{ backgroundColor: props.bgColor2, borderRadius: "8px" }}
        />
      </Box>
      <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          component="img"
          alt="13"
          src={props.Img3}
          height="155px"
          width="155px"
          sx={{ backgroundColor: props.bgColor3, borderRadius: "8px" }}
        />
        <Box
          component="img"
          alt="14"
          src={props.Img4}
          height="155px"
          width="155px"
          sx={{ backgroundColor: props.bgColor4, borderRadius: "8px" }}
        />
      </Box>
      <Box mt={2} sx={{ display: "flex" }}>
        <Box
          component="img"
          alt="13"
          src={props.avatar}
          height={40}
          width={40}
          sx={{ borderRadius: "400px" }}
        />
        <Box ml={2}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Urbanist", color: "var(--neutral-white, #FFF)" }}
          >
            Metaverse
          </Typography>
          <Typography variant="body2" sx={{ color: "#8393AF" }}>
            Created by John Doe
          </Typography>
        </Box>
        <Box ml={10} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            component="img"
            src={heart}
            hight={24}
            width={24}
            sx={{ ml: "auto", mr: "auto" }}
          />
          <Typography mt={1} sx={{ color: "var(--neutral-white, #FFF)" }}>
            {props.hCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionCard;
