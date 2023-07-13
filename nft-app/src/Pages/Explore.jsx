import React from "react";
import { Box, Typography, Grid, Container, MenuItem } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import TodayPickSection from "../Components/TodayPickSection/TodayPickSection";

const Explore = () => {
  const [sortdetails, setSortDetails] = React.useState({
    collection: "choose",
    buyNow: "choose",
    allItems: "choose",
    allArtwork: "choose",
    sortBy: "choose",
  });

  const handleChange = (event, i) => {
    console.log(i, event.target);
    if (i == 0) {
      setSortDetails((preDetails) => ({
        ...preDetails,
        collection: event.target.value,
      }));
    }
    if (i == 1) {
      setSortDetails((preDetails) => ({
        ...preDetails,
        buyNow: event.target.value,
      }));
    }
    if (i == 2) {
      setSortDetails((preDetails) => ({
        ...preDetails,
        allItems: event.target.value,
      }));
    }
    if (i == 3) {
      setSortDetails((preDetails) => ({
        ...preDetails,
        allArtwork: event.target.value,
      }));
    }
    if (i == 4) {
      setSortDetails((preDetails) => ({
        ...preDetails,
        sortBy: event.target.value,
      }));
    }
  };
  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container pt={10}>
          <Grid item xs={12} md={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "var(--neutral-white, #FFF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Explore
              </Typography>
              <Box mt={4} sx={{ display: "flex", justifyContent: "center" }}>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  sx={{
                    color: "var(--neutral-white, #FFF)",
                  }}
                >
                  <Link
                    to="/"
                    style={{
                      color: "#8393AF",
                      textDecoration: "none",
                    }}
                  >
                    home
                  </Link>
                  <Link
                    to="/explore"
                    style={{
                      color: "var(--neutral-white, #FFF)",
                      textDecoration: "none",
                    }}
                  >
                    Explore
                  </Link>
                </Breadcrumbs>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box>
              {[
                { name: "All Collection", value: sortdetails.collection },
                { name: "Buy Now", value: sortdetails.buyNow },
                { name: "All items", value: sortdetails.allItems },
              ].map(({ name, value }, i) => (
                <Select
                  key={name}
                  value={value}
                  sx={{
                    backgroundColor: "var(--text-text-dark, #3C485D)",
                    color: "#FFFFFF",
                    width: { xs: "140px", md: "180px" },
                    borderRadius: "12px",
                    mr: 4,
                    mt: { xs: 2, md: 0 },
                  }}
                  onChange={(e) => handleChange(e, i)}
                >
                  <MenuItem value="choose" disabled>
                    <em>{name}</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Box>
              {[
                { name: "All ArtWork", value: sortdetails.allArtwork },
                { name: "Sort By", value: sortdetails.sortBy },
              ].map(({ name, value }, i) => (
                <Select
                  key={name}
                  value={value}
                  onChange={(e) => handleChange(e, i + 3)}
                  sx={{
                    color: "#FFFFFF",
                    borderRadius: "12px",
                    width: { xs: "140px", md: "180px" },
                    backgroundColor: "var(--text-text-dark, #3C485D)",
                    mr: 2,
                    mt: { xs: 2, md: 0 },
                  }}
                >
                  <MenuItem value="choose" disabled>
                    <em>{name}</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <TodayPickSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;
