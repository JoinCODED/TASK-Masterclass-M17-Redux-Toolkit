import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { Cookie } from "../../models";

type CookieShowProps = {
  cookie: Cookie;
};

const CookieShow = (props: CookieShowProps) => {
  const { cookie } = props;

  const handleDelete = () => {
    console.log("I am not really deleting anything");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{cookie.name}</Typography>
        <Typography color="text.secondary" gutterBottom>
          This cookie is {cookie.flavor} flavored, and costs {cookie.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/cookies/${cookie.id}/edit`}>
          Edit Cookie
        </Button>
        <Button color="error" startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete Cookie
        </Button>
      </CardActions>
    </Card>
  );
};

export default CookieShow;
