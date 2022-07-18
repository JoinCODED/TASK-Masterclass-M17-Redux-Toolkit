import { useForm } from "react-hook-form";

import { Cookie } from "../../models";
import { cookieResolver } from "./schemas";

export const useCookieForm = (
  defaultValues: Cookie = { id: 0, name: "", price: 0, flavor: "" }
) => {
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    resolver: cookieResolver,
    defaultValues,
  });

  return { control, handleSubmit };
};

export type UseCookieForm = ReturnType<typeof useCookieForm>;
