import axios from "axios";
import { SERVER_URL } from "./constants";
import { TTokenResponse } from "./response-types";

export const generateToken = async (createdBy: string) => {
  const { data, status } = await axios.post<TTokenResponse>(
    `${SERVER_URL}/api/invite/generate`,
    {
      createdBy,
    },
    {
      withCredentials: true,
    }
  );

  return { data, status };
};

export const validateToken = async (token: string) => {
  const { data, status } = await axios.post<TTokenResponse>(
    `${SERVER_URL}/api/invite/validate`,
    {
      token,
    },
    {
      withCredentials: true,
    }
  );

  return { data, status };
};
