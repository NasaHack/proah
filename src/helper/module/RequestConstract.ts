import { Path, ProahConfig, RequestOptions, ResponseData } from "../../types";
import UtilityConstract from "./UtilityConstract";
import { requestValidator } from "./validator";

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
}

export default RequestConstract;
