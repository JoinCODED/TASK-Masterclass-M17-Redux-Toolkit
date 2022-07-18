import { Controller } from "react-hook-form";

import { Box, Button, TextField, Typography } from "@mui/material";

import { Cookie } from "../../models";
import { useCookieForm } from "./useCookieForm";

type CookieFormProps = {
  defaultValues?: Cookie;
  onSubmit?: (data: Cookie) => void;
  title: string;
};

const CookieForm = (props: CookieFormProps) => {
  const { control, handleSubmit } = useCookieForm(props.defaultValues);
  const onSubmit = props.onSubmit && handleSubmit(props.onSubmit);
  return (
    <Box>
      <Typography variant="h5">{props.title}</Typography>
      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" sx={{ gap: 1 }} margin={1}>
          <Controller
            name="id"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="ID"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                type="number"
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Price"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                type="number"
              />
            )}
          />
          <Controller
            name="flavor"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Flavor"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </Box>
  );
};

export default CookieForm;
