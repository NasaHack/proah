import { validURL } from "../constants/regex";
import { Config, Method, ReqOptions } from "../types";
import {
  credentials,
  bodyLessMethod,
  cache,
  mode,
  methods,
  confgProps,
} from "../constants/common";
/*...........XXX.............*/

export const configValidator = (config?: Config) => {
  if (!config) throw Error("Proah Configuration object is missing");

  Object.keys(config).forEach((props) => {
    if (!confgProps.includes(props))
      throw Error(`Unsupported Configuration property '${props}' for Proah`);
  });

  if (config?.cache && !cache.includes(config.cache))
    throw Error(`Invalid cache property '${config.cache}' for Proah Config`);

  if (config?.mode && !mode.includes(config.mode))
    throw Error(`Invalid mode property '${config.mode}' for Proah Config`);

  if (config?.credentials && !credentials.includes(config.credentials))
    throw Error(
      `Invalid credentials property ${config.credentials} for Proah Config`
    );

  if (config?.methods) {
    if (!Array.isArray(config?.methods))
      throw Error(
        `methods must contain in Array e.g. methods:["GET", "POST", ...] |> Proah Config`
      );

    config?.methods?.forEach((method) => {
      if (!methods.includes(method))
        throw Error(`Invalid method '${method}' property for Proah Config`);
    });
  }

  if (config.baseURL && !validURL.test(config.baseURL))
    throw Error(`Invalid baseURL for Proah Config`);
};

export const requestProviderValidator = (
  method?: Method,
  options?: ReqOptions & Config
) => {
  /* Vlidate bodyless methods */
  if (
    options?.body &&
    options?.method &&
    bodyLessMethod.includes(options?.method)
  ) {
    throw Error(`HTTP request '${options.method}' do not have 'body' property`);
  }

  if (
    (method && !options?.methods) ||
    (options?.method && !options.methods?.includes(options.method))
  )
    throw Error(
      `Please enable '${method || options?.method}' method in Proah config.`
    );

  /*Common Request Validator*/
  if (method) {
    if (method !== options?.method)
      throw Error(
        `You can not override the '${method}' request to '${
          options?.method
        } request for proah.${method.toLowerCase()}() method`
      );
  }

  /*Extra Request validator*/
  if (!method) {
    if (!options?.method)
      throw Error(`Request 'method' missing for proah.extra() method`);
  }
};
