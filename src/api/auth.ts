import { SERVER_URL } from "./constants";
import { fetchRequest, getCookie } from "./helpers";
import { TAuthResponse } from "./response-types";

export const authenticateUser = () => {
  if (!getCookie("active")) return;
  return fetchRequest<TAuthResponse>({
    method: "GET",
    endpoint: `${SERVER_URL}/api/auth/check`,
  });
};

export const loginUser = (email: string, password: string) =>
  fetchRequest<TAuthResponse>({
    method: "POST",
    endpoint: `${SERVER_URL}/api/auth/login`,
    body: JSON.stringify({ email, password }),
  });

export const logOutUser = () =>
  fetchRequest({
    method: "POST",
    endpoint: `${SERVER_URL}/api/auth/logout`,
  });
