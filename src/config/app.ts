import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import morganLogger from "../middlewares/morgan";
import routes from "../router";

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    components: {},
    info: {
      title: "LOYALTY API",
      version: "1.0.0",
    },
  },
  apis: ["**/*Routes.ts"],
});

const app = express();

app
  .use(express.json({ limit: "50mb" }))
  .use(helmet())
  .use(morganLogger)
  .use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
  .use(cors())
  .set("x-powered-by", "PHP/7.3.9")
  .use(routes);

export default app;
