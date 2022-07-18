import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

export const cookieSchema = yup.object({
  name: yup.string().required(),
  price: yup.number().positive().required(),
  flavor: yup.string().required(),
});

export type CookieSchema = yup.InferType<typeof cookieSchema>;

export const cookieResolver = yupResolver(cookieSchema);
