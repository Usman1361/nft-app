import React from "react";
import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";
import CollectionCard from "../CollectionCard/CollectionCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  rocketIcon,
  sCard2,
  c1Img2,
  c1Img3,
  c1Img4,
  avatar,
  avatar2,
  avatar3,
  sCard3,
  c2Img2,
  c2Img3,
  c2Img4,
  c3Img1,
  c3Img2,
  c3Img3,
  c3Img4,
} from "../SmallComponent/images";

const CollectionCardSection = () => {
  const cardDetails = [
    {
      Img1: sCard2,
      bgCImg1: "#F2B4B0",
      Img2: c1Img2,
      bgCImg2: "#FEECE5",
      Img3: c1Img3,
      bgCImg3: "#F6FDE2",
      Img4: c1Img4,
      bgCImg4: "#E5E5F0",
      avatar: avatar,
      heartCount: "372",
    },
    {
      Img1: sCard3,
      bgCImg1: "#E2F3FE",
      Img2: c2Img2,
      bgCImg2: "#F2B4B0",
      Img3: c2Img3,
      bgCImg3: "#ADF2CD",
      Img4: c2Img4,
      bgCImg4: "#F6FDE2",
      avatar: avatar2,
      heartCount: "221",
    },
    {
      Img1: c3Img1,
      bgCImg1: "#F7DBA5",
      Img2: c3Img2,
      bgCImg2: "#F2B4B0",
      Img3: c3Img3,
      bgCImg3: "#ADF2CD",
      Img4: c3Img4,
      bgCImg4: "#F6FDE2",
      avatar: avatar3,
      heartCount: "409",
    },
  ];
  const theme = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container pt={10}>
          <Grid item mt={10} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography
                variant={lessThanSmall ? "h5" : "h3"}
                sx={{
                  color: "var(--neutral-white, #FFF)",
                  fontFamily: "Urbanist",
                  padding: { xs: "0px", md: "0px" },
                  justifyContent: "center",
                }}
              >
                Popular Collections
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "linear-gradient( #FDAE8F , #FD1C68 )",
                  padding: { xs: "7px", md: "10px" },
                  borderRadius: "8px",
                }}
              >
                <img src={rocketIcon} width={30} height={20} />
                Explore All
              </Button>
            </Box>
          </Grid>
          {cardDetails.map(
            (
              {
                Img1,
                bgCImg1,
                Img2,
                bgCImg2,
                Img3,
                bgCImg3,
                Img4,
                bgCImg4,
                avatar,
                heartCount,
              },
              item
            ) => (
              <Grid
                item
                xs={12}
                sm={item == 2 ? 12 : 6}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box mt={10} ml={{ xs: 0, md: -4 }}>
                  <CollectionCard
                    Img1={Img1}
                    bgColor1={bgCImg1}
                    Img2={Img2}
                    bgColor2={bgCImg2}
                    Img3={Img3}
                    bgColor3={bgCImg3}
                    Img4={Img4}
                    bgColor4={bgCImg4}
                    avatar={avatar}
                    hCount={heartCount}
                  />
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default CollectionCardSection;
