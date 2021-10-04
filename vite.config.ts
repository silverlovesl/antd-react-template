import { ConfigEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

export default (_: ConfigEnv): UserConfig => {
  return {
    server: {
      port: 8081,
    },
    plugins: [react()],
  };
};
