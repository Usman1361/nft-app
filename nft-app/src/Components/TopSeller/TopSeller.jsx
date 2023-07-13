import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { a2 } from "../SmallComponent/images";

const TopSeller = () => {
  return (
    <Box
      width={270}
      hight={104}
      sx={{ backgroundColor: "#8393AF", borderRadius: "24px" }}
    >
      <Box
        sx={{
          display: "flex",
          borderRadius: "24px",
          padding: "16px",
        }}
      >
        <Box mt={1} component="img" height={70} width={70} src={a2} />
        <Stack mt={2} ml={2} direction="column">
          <Typography
            variant="body1"
            sx={{
              color: "var(--neutral-white, #FFF)",
              fontWeight: 700,
              fontFamily: "Urbanist",
            }}
          >
            John Doe
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#3C485D",
              fontFamily: "Urbanist",
              fontWeight: 400,
            }}
          >
            ETH 242.21
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default TopSeller;
