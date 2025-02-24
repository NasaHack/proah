import { Config, Method, Path, ReqOptions } from "../types";
import ReqHandler from "./ReqHandler";
import { requestProviderValidator } from "./validator";

export default class ReqConstract extends ReqHandler {
  protected combineOptions(
    reqOtions?: ReqOptions,
    config?: Config,
    method?: Method
  ) {
    let options: any = {};

    if (config) {
      Object.entries(config).forEach(([key, value], i) => {
        options[key] = value;
      });
    }

    if (
      !reqOtions?.headers &&
      reqOtions?.body?.constructor.name !== "FormData"
    ) {
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    options = { ...options, ...reqOtions };

    if (method) options.method = method;

    if (reqOtions?.method) options.method = reqOtions.method;

    return options;
  }

  protected genURL(path: Path, config?: Config & ReqOptions) {
    let url;

    if (config?.baseURL) url = new URL(config.baseURL);

    if (path && (path.startsWith("http") || path.startsWith("https")))
      url = new URL(path);

    if (url && config?.query)
      Object.entries(config.query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });

    if (url && path && !(path.startsWith("http") || path.startsWith("https")))
      url.pathname = path;

    return url?.href ? url.href : path;
  }

  protected requestProvider(
    path: Path,
    method?: Method,
    reqOtions?: ReqOptions,
    config?: Config
  ) {
    const options = this.combineOptions(reqOtions, config, method);

    //Validate Request Options
    requestProviderValidator(method, options);

    switch (method) {
      case "GET":
        return this.GET_handler(this.genURL(path, options), options);

      case "POST":
        return this.POST_handler(this.genURL(path, options), options);

      case "PUT":
        return this.PUT_handler(this.genURL(path, options), options);

      case "PATCH":
        return this.PATCH_handler(this.genURL(path, options), options);

      case "DELETE":
        return this.DELETE_handler(this.genURL(path, options), options);

      default:
        return this.EXTRA_handler(this.genURL(path, options), options);
    }
  }
}
