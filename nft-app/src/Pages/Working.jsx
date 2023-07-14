import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Blink from "react-blink-text";

const Working = () => {
  return (
    <Box sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container pt={10} pb={10}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Blink
              color="#F7DBA5"
              text="Working on it....."
              fontSize="80px"
            ></Blink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Working;
