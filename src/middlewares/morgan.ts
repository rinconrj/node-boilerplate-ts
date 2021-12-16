import morgan, { StreamOptions } from "morgan";
import Logger from "../config/logger";

const stream: StreamOptions = {
  write: (message) => {
    return Logger.http(message);
  },
};

const skip = () => {
  const env = process.env.NODE_ENV || "dev";
  return env !== "dev";
};

const format = () => {
  const env = process.env.NODE_ENV || "dev";

  return ["dev", "sand"].includes(env)
    ? "dev"
    : ":method :url :status :res[content-length] - :response-time ms";
};

const morganLogger = morgan(format(), { stream, skip });

export default morganLogger;
