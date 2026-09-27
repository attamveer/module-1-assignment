import { Server } from "http";
import app from "./app";

const PORT: number = Number(process.env.PORT) || 3000;

/**
 * Logs a message when the Express server starts successfully.
 */
const logServerStart = (): void => {
  console.log(`Server is running on port ${PORT}`);
};

const server: Server = app.listen(PORT, logServerStart);

export default server;