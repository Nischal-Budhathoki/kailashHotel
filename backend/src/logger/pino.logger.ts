import pino from "pino";

export const logger = pino({
  level: "info",

  // for dev readability (remove in production)
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});