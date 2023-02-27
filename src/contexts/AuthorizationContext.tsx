import { useAuth } from "hooks";
import { createContext, useContext, useEffect, ReactNode } from "react";
import { axios } from "utils";

const AuthorizationContext = createContext({});

export const AuthorizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { token } = useAuth();
  const getAbilities = async (token: string) => {
    try {
      const res = await axios.get("/v1/abilities", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getAbilities(token);
  }, [token]);
};
