const winston = require("winston");

const customFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.prettyPrint(),
  winston.format.splat(),
  winston.format.printf((info) => {
    const requestIdPart = info.requestId ? `[${info.requestId}]` : "";
    return `${info.timestamp} [${info.level}] ${requestIdPart} ${info.message}`;
  })
);

const logger = winston.createLogger({
  level: "info",
  format: customFormat,
  transports: [new winston.transports.Console()],
});

module.exports = logger;
