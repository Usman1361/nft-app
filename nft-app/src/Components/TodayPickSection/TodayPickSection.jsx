import React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { sCard2 } from "../SmallComponent/images";
import SlidingCard from "../SlidingCard/SlidingCard";
import { historyIcon, loadIcon } from "../SmallComponent/images";
import { Link } from "react-router-dom";

const TodayPickSection = () => {
  return (
    <Box pt={10} sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            textAlign: "center",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "var(--neutral-white, #FFF)",
                fontWeight: 700,
                fontFamily: "Urbanist",
              }}
            >
              Today's Picks
            </Typography>
          </Grid>
          {/* TODO add today picks */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <SlidingCard
                  Image={sCard2}
                  bgColor="#F2B4B0"
                  lButton="View History"
                  lButtonIcon={historyIcon}
                />
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box mt={10}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient( #FDAE8F , #FD1C68 )",
                  borderRadius: "8px",
                  padding: "10px 24px",
                  justifyContent: "center",
                }}
              >
                <img src={loadIcon} alt="" width={20} hight={20} />
                <Link
                  to="/explore"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Load More
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TodayPickSection;
