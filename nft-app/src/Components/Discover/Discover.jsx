import React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { discoverImg, bgImg } from "../SmallComponent/images.jsx";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
const Discover = () => {
  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid
          container
          pt={5}
          spacing={2}
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            background: `#121212 url('${bgImg}')no-repeat top right / 500px `,
          }}
        >
          <Grid item xs={12} md={7}>
            <Box
              ml={{ xs: 0, md: 5 }}
              mt={5}
              sx={{
                alignContent: { xs: "center", md: "left" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                sx={{ color: "#FFF", fontFamily: "Urbanist" }}
              >
                Discover, collect, and <br /> sell extraordinary
              </Typography>
              <Typography
                component="h2"
                variant="h4"
                sx={{
                  background: "linear-gradient( #FDAE8F , #FD1C68 )",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  fontFamily: "Urbanist",
                }}
              >
                NFTs
              </Typography>
              <Typography
                variant="h6"
                pt={3}
                sx={{ color: "#FFF", fontFamily: "Urbanist" }}
                mb={4}
              >
                NFT is the world's first and largest NFT marketplace
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "linear-gradient( #FDAE8F , #FD1C68 )",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <ExploreOutlinedIcon sx={{ edge: "start" }} />
                <Link
                  to="/explore"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Explore
                </Link>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  marginLeft: "10px",
                  background: "transparent",
                  color: "white",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid var(--neutral-white, #FFF)",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <AddOutlinedIcon sx={{ edge: "start" }} />
                Create
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box width="100%" height="100%">
              <Box
                component="img"
                src={discoverImg}
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Discover;
