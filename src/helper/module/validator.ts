import { ProahConfig, RequestMethod, RequestOptions } from "../../types";
import { validResultProps, validURL } from "../../constants/regexp";
import { REQUEST_METODS } from "../../constants/common";

export const configValidator = (config: ProahConfig) => {
  /*Check valid baseURL*/
  if (config.baseURL)
    if (!validURL.test(config.baseURL))
      throw Error("Invalid baseURL for Proah Configuration!");

  /*Check valid Request Methods*/
  if (config.methods && !Array.isArray(config.methods))
    throw Error("methods must be an Array type");

  config.methods?.forEach((method) => {
    if (!REQUEST_METODS.includes(method))
      throw Error(
        `Only ${REQUEST_METODS.join(", ")} are supports but got ${method}`
      );
  });

  /*Check valid resultProps*/
  if (
    config.resultProps &&
    (typeof config.resultProps !== "string" ||
      !validResultProps.test(config.resultProps))
  )
    throw Error(
      "resultProps must be a string and character between a-z or A-Z"
    );
};

export const requestValidator = (
  options: RequestOptions,
  config: ProahConfig,
  requestMethod: RequestMethod
) => {
  if (requestMethod !== options.method)
    throw Error(`You are trying to override GET method to ${options.method}`);

  if (!config.methods.includes(options.method))
    throw Error(
      `Please enable the ${options.method} method in Proah config first`
    );
};
