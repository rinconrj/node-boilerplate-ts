import app from "./config/app";
import logger from "./config/logger";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    logger.info(`Server Running on ${port}`);
  } catch (error) {
    logger.error(error);
  }
});
