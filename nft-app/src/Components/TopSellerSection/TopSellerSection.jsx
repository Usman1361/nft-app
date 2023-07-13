import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import TopSeller from "../TopSeller/TopSeller";

const TopSellerSection = () => {
  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container pt={10}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "var(--neutral-white, #FFF)",
                fontWeight: 700,
                fontFamily: "Urbanist",
              }}
            >
              Top Sellers
            </Typography>
          </Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Grid
              key={item}
              item
              xs={12}
              sm={6}
              md={3}
              mt={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TopSeller />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TopSellerSection;
