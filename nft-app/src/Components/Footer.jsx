import React from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import {
  logo,
  phoneIcon,
  mapIcon,
  envelopeIcon,
  fbLogo,
  dribbleLogo,
  linkedinLogo,
} from "./SmallComponent/images";
const Footer = () => {
  const contactData = [
    {
      icon: phoneIcon,
      title: "Phone",
      content: "+92 333 6527366",
    },
    {
      icon: envelopeIcon,
      title: "Email",
      content: "abuzer@greelogix.com",
    },
    {
      icon: mapIcon,
      title: "Address",
      content: "N234 Johar Town, Lahore",
    },
  ];
  const aboutData = [
    "About us",
    "Blog",
    "Careers",
    "Jobs",
    "In Press",
    "Gallery",
  ];
  const supportData = [
    "Contact us",
    "Online Chat",
    "Whatsapp",
    "Telegram",
    "Ticketing",
    "Call Center",
  ];
  const faqData = [
    "Account",
    "Manage Deliveries",
    "Orders",
    "Payments",
    "Returns",
    "Privacy Policy",
  ];
  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container pt={10}>
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { xs: "center", sm: "left", md: "left" },
              }}
            >
              <Box component="img" src={logo} height={60} width={60} />
              <Typography
                mt={1}
                ml={1}
                variant="h4"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Ultra NFT
              </Typography>
            </Box>
            <Box>
              <Typography
                mt={3}
                variant="body2"
                sx={{
                  color: "var(--text-text-light, #8393AF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, Ut enim ad minim veniam, quis nostrud equip consectetur
                adipiscing ex ea commodo dolor consequat
              </Typography>
            </Box>
            {contactData.map(({ icon, title, content }) => (
              <Box
                key={title}
                mt={3}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "880px",
                    background:
                      "var(--neutral-white-20, rgba(255, 255, 255, 0.20))",
                    padding: "12px",
                  }}
                  component="img"
                  src={icon}
                  height={24}
                  width={24}
                />
                <Stack direction="column">
                  <Typography
                    ml={2}
                    mt={1}
                    variant="body2"
                    sx={{
                      color: "var(--text-text-light, #8393AF)",
                      fontFamily: "Urbanist",
                      fontWeight: 700,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    ml={2}
                    variant="body1"
                    sx={{
                      fontSize: "20px",
                      color: "var(--neutral-white, #FFF)",
                      fontFamily: "Urbanist",
                      fontWeight: 400,
                    }}
                  >
                    {content}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Box
              mt={{ xs: 3, md: 0 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Button
                variant="secondary"
                sx={{
                  color: "var(--neutral-white, #FFF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                About
              </Button>
              {aboutData.map((item) => (
                <Button
                  variant="secondary"
                  sx={{
                    color: "#8393AF",
                    fontFamily: "Urbanist",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              mt={{ xs: 3, md: 10 }}
            >
              {[fbLogo, linkedinLogo, dribbleLogo].map((item) => (
                <Box mr={2}>
                  <IconButton
                    sx={{
                      borderRadius: "880px",
                      background:
                        "var(--neutral-white-20, rgba(255, 255, 255, 0.20))",
                      padding: "12px",
                    }}
                  >
                    <Box component="img" src={item} height={24} width={24} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Box
              mt={{ xs: 3, md: 0 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Button
                variant="secondary"
                sx={{
                  color: "var(--neutral-white, #FFF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Support
              </Button>
              {supportData.map((item) => (
                <Button
                  variant="secondary"
                  sx={{
                    color: "#8393AF",
                    fontFamily: "Urbanist",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item mb={3} xs={12} sm={4} md={3}>
            <Box
              mt={{ xs: 3, md: 0 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Button
                variant="secondary"
                sx={{
                  color: "var(--neutral-white, #FFF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                FAQ
              </Button>
              {faqData.map((item) => (
                <Button
                  variant="secondary"
                  sx={{
                    color: "#8393AF",
                    fontFamily: "Urbanist",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box
              mt={{ xs: 4, md: 12 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "left", md: "center" },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#8393AF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                © 2012-2022, All Rights Reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
