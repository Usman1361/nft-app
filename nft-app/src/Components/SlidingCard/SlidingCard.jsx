import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { avatar, heart, crown, ethereum } from "../SmallComponent/images";

const SlidingCard = (props) => {
  const itemDet = [
    {
      icon: heart,
      value: "145",
    },
    {
      icon: crown,
      value: "1 / 100",
    },
    {
      icon: ethereum,
      value: "5.00ETH",
    },
  ];
  return (
    <Box
      mt={5}
      pb={2}
      width={{ xs: 320, md: 350 }}
      sx={{ backgroundColor: "#3C485D", borderRadius: "24px" }}
    >
      <Box height="100%" width="90%" sx={{ ml: "auto", mr: "auto" }}>
        <Box
          mt={4}
          sx={{ background: props.bgColor, borderRadius: "12px" }}
          component="img"
          src={props.Image}
          height="100%"
          width="100%"
        />
      </Box>
      <Box pt={2} pl={2} sx={{ display: "flex" }}>
        <Box component="img" src={avatar} alt="avatar" height={40} width={40} />
        <Typography variant="h6" pl={1} pt={1} sx={{ color: "#FFFFFF" }}>
          Metaverse
        </Typography>
      </Box>
      <Typography
        variant="body2"
        pl={8}
        sx={{ display: "flex", color: "#8393AF" }}
      >
        Created by John Doe
      </Typography>
      <Stack
        sx={{ justifyContent: "space-evenly" }}
        mt={3}
        direction="row"
        spacing={5}
      >
        {itemDet.map((item, i) => (
          <Box
            sx={{
              display: i === 1 ? (props.crown ? "flex" : "none") : "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component="img"
              src={item.icon}
              hight={24}
              width={24}
              sx={{ ml: "auto", mr: "auto" }}
            />
            <Typography mt={1} sx={{ color: "var(--neutral-white, #FFF)" }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Box mt={3}>
        <Button
          variant="contained"
          sx={{
            marginLeft: "12px",
            background: "var(--text-text-dark, #3C485D)",
            borderRadius: "8px",
            padding: "10px",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "var(--text-text-dark, #3C485D)",
            },
          }}
        >
          <img src={props.lButtonIcon} alt="" width={24} hight={24} />
          <Typography variant="body2">{props.lButton}</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "12px",
            background: "linear-gradient( #FDAE8F , #FD1C68 )",
            borderRadius: "8px",
            padding: "10px 24px",
            justifyContent: "center",
          }}
        >
          <img src={crown} alt="" width={20} hight={20} />
          <Typography variant="body2">Place Bid</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SlidingCard;
