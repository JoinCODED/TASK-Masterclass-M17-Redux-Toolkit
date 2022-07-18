import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Typography variant="h5">Home</Typography>
      <Typography>Check out our beautiful cookies</Typography>
      <Button component={Link} to="/cookies">
        Go to cookies
      </Button>
    </Box>
  );
};

export default Home;
