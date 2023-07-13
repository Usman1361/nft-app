import React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import SlidingCard from "../SlidingCard/SlidingCard";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  sCard1,
  sCard2,
  sCard3,
  sCard4,
  rocketIcon,
  timer,
} from "../SmallComponent/images";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
const SlidingCardSection = () => {
  const theme = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const lessThanMed = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box pt={3} sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container>
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
                Live Auctions
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
                <Link
                  to="/explore"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Explore All
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{}}>
            <Box
              ml={{ xs: 0, md: 7 }}
              sx={{
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Swiper
                slidesPerView={lessThanMed ? (lessThanSmall ? 1 : 2) : 3}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <SlidingCard
                    Image={sCard1}
                    bgColor="#87CEEB"
                    crown="true"
                    lButtonIcon={timer}
                    lButton="12d 13h 56m"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SlidingCard
                    Image={sCard2}
                    bgColor="#F2B4B0"
                    crown="true"
                    lButtonIcon={timer}
                    lButton="12d 13h 56m"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SlidingCard
                    Image={sCard3}
                    bgColor="#F6FDE2"
                    crown="true"
                    lButtonIcon={timer}
                    lButton="12d 13h 56m"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SlidingCard
                    Image={sCard4}
                    bgColor="#FEECE5"
                    crown="true"
                    lButtonIcon={timer}
                    lButton="12d 13h 56m"
                  />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SlidingCardSection;
