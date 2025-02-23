import { Path, ProahConfig, RequestOptions, ResponseData } from "../../types";
import UtilityConstract from "./UtilityConstract";
import { extraRequestValidator, requestValidator } from "./validator";

class RequestConstract extends UtilityConstract {
  protected async getRequestHandler(
    path: Path,
    options: RequestOptions,
    config: ProahConfig
  ): Promise<ResponseData> {
    const reqOptions = this.genReqOptions("GET", config, options);
    const url = this.genURL(path, config, reqOptions);
    requestValidator(reqOptions, config, "GET");
    return await this.prettyResposne(await fetch(url, reqOptions), config);
  }

  protected async postRequestHandler(
    path: Path,
    options: RequestOptions,
    config: ProahConfig
  ): Promise<ResponseData> {
    const reqOptions = this.genReqOptions("POST", config, options);
    const url = this.genURL(path, config, reqOptions);
    requestValidator(reqOptions, config, "POST");
    return await this.prettyResposne(await fetch(url, reqOptions), config);
  }

  protected async putRequestHandler(
    path: Path,
    options: RequestOptions,
    config: ProahConfig
  ): Promise<ResponseData> {
    const reqOptions = this.genReqOptions("PUT", config, options);
    const url = this.genURL(path, config, reqOptions);
    requestValidator(reqOptions, config, "PUT");
    return await this.prettyResposne(await fetch(url, reqOptions), config);
  }

  protected async deleteRequestHandler(
    path: Path,
    options: RequestOptions,
    config: ProahConfig
  ): Promise<ResponseData> {
    const reqOptions = this.genReqOptions("DELETE", config, options);
    const url = this.genURL(path, config, reqOptions);
    requestValidator(reqOptions, config, "DELETE");
    return await this.prettyResposne(await fetch(url, reqOptions), config);
  }

  protected async patchRequestHandler(
    path: Path,
    options: RequestOptions,
    config: ProahConfig
  ): Promise<ResponseData> {
    const reqOptions = this.genReqOptions("PATCH", config, options);
    const url = this.genURL(path, config, reqOptions);
    requestValidator(reqOptions, config, "PATCH");
    return await this.prettyResposne(await fetch(url, reqOptions), config);
  }

  protected async extraRequestHandler(
    path: Path,
    options: RequestOptions,
    config: ProahConfig
  ): Promise<Response> {
    const reqOptions: RequestOptions = (() => {
      return {
        ...options,
        method: options?.method ? options.method : "GET",
        credentials: options?.credentials
          ? options?.credentials
          : config?.credentials,
        cache: options?.cache ? options.cache : config?.cache,
        mode: options?.mode ? options.mode : config?.mode,
        headers: (() => {
          let _ = {
            ...options?.headers,
          };
          if (
            !options?.headers &&
            options?.body?.constructor.name !== "FormData"
          ) {
            _ = {
              ..._,
              "Content-Type": "application/json",
            };
          }

          return _;
        })(),
      };
    })();

    extraRequestValidator(reqOptions, config);
    switch (reqOptions.method) {
      case "GET":
      case "DELETE":
        delete reqOptions.body;
    }

    const url = this.genURL(path, config, reqOptions);

    console.log(url);
    return fetch(url, reqOptions);
  }
}

export default RequestConstract;
