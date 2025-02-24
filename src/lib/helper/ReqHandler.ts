import { Config, ReqOptions, ResOptions } from "../types";

export default class ReqHandler {
  protected normalizedReqOptions = (reqOptions: ReqOptions & Config) => {
    const options = { ...reqOptions };
    if (options.baseURL) delete options.baseURL;
    if (options.methods) delete options.methods;
    if (options.timeout) delete options.timeout;
    if (options.query) delete options.query;
    if (options.resultPros) delete options.resultPros;
    return options;
  };

  protected parseData = async (response: Response) => {
    const contentType = response.headers.get("Content-Type");

    if (contentType?.startsWith("image/")) return await response.blob();

    if (contentType?.startsWith("audio/")) return await response.blob();

    if (contentType?.startsWith("video/")) return await response.blob();

    if (contentType?.startsWith("application/pdf"))
      return await response.blob();

    if (contentType?.startsWith("application/json"))
      return await response.json();

    if (contentType?.startsWith("application/html"))
      return await response.text();

    if (contentType?.startsWith("text/")) return await response.text();
  };

  protected prettyResponse = async (
    response: Response,
    reqOptions: ReqOptions & Config
  ) => {
    return {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      [reqOptions.resultPros ? reqOptions.resultPros : "data"]: response.ok
        ? await this.parseData(response)
        : null,
    };
  };

  /*Request Handler*/

  protected async GET_handler(
    url: string,
    reqOptions: ReqOptions & Config
  ): Promise<ResOptions> {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async POST_handler(
    url: string,
    reqOptions: ReqOptions & Config
  ): Promise<ResOptions> {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async PUT_handler(
    url: string,
    reqOptions: ReqOptions & Config
  ): Promise<ResOptions> {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async PATCH_handler(
    url: string,
    reqOptions: ReqOptions & Config
  ): Promise<ResOptions> {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async DELETE_handler(
    url: string,
    reqOptions: ReqOptions & Config
  ): Promise<ResOptions> {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected EXTRA_handler(
    url: string,
    reqOptions: ReqOptions & Config
  ): Promise<Response & ResOptions> {
    const options = this.normalizedReqOptions(reqOptions);
    return fetch(url, options);
  }
}
