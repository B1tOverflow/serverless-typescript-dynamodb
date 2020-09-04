// import core
import middy from "@middy/core";

// import some middlewares
import jsonBodyParser from "@middy/http-json-body-parser";
import httpErrorHandler from "@middy/http-error-handler";
import httpEventNormalizer from "@middy/http-event-normalizer";

export const middleware = (handler) => {
  return middy(handler).use([
    jsonBodyParser(),
    httpErrorHandler(),
    httpEventNormalizer(),
  ]);
};
