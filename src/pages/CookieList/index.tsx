import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import { Cookie } from "../../models";
import CookieShow from "../CookieShow";

const CookieList = () => {
  const cookies: Cookie[] = [];
  return (
    <Box margin={1}>
      <Typography variant="h5">Our Cookies</Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button component={Link} to="/cookies/new" variant="contained">
          Add Cookie
        </Button>
      </Box>
      {cookies.map((cookie, idx) => (
        <Box marginY={1.5}>
          <CookieShow key={JSON.stringify(cookie) + idx} cookie={cookie} />
        </Box>
      ))}
    </Box>
  );
};

export default CookieList;
