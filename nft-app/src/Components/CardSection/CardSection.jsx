import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "../Card/Card";
import {
  walletButton,
  squareIcon,
  imgIcon,
  storeIcon,
} from "../SmallComponent/images";

const CardSection = () => {
  const cardData = [
    {
      Title: "Set up your Wallet",
      Img: walletButton,
      Description:
        "Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top right corner.",
      iconBgColor:
        "var(--gradients-aurora, linear-gradient(192deg, #23D3A4 0%, #5B49CF 100%))",
    },

    {
      Title: "Create your Collection",
      Img: squareIcon,
      Description:
        "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
      iconBgColor:
        "var(--gradients-mallows, linear-gradient(38deg, #739EEC 0%, #FF8C9F 63.42%))",
    },
    {
      Title: "Add your NFTs",
      Img: imgIcon,
      Description:
        "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats",
      iconBgColor:
        "var(--gradients-sunset, linear-gradient(41deg, #FE6F2D 0%, #FDCE38 65.04%))",
    },
    {
      Title: "List them for Sale",
      Img: storeIcon,
      Description:
        "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
      iconBgColor:
        "var(--gradients-ocean, linear-gradient(148deg, #2EA3F2 0%, #A651FB 100%))",
    },
  ];
  return (
    <Box pt={5} sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid
          Container
          //   sx={{ background: `#121212 url('${bgImg2}')no-repeat bottom left / 200px` }}
        >
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                color: "var(--neutral-white, #FFF)",
                fontFamily: "Urbanist",
                fontWeight: 700,
              }}
            >
              How it Works
            </Typography>
          </Grid>
          <Grid
            container
            mt={5}
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {cardData.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  Title={item.Title}
                  Img={item.Img}
                  Description={item.Description}
                  iconBgColor={item.iconBgColor}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CardSection;
