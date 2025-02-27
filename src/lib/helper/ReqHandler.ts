import { defaultTimeout } from "../constants/common";
import { Config, ReqOptions, ResOptions } from "../types";

export default class ReqHandler {
  protected handleTimeOut = (
    reqOptions: ReqOptions & Config
  ): AbortController => {
    let abortController = new AbortController();
    let timer = setTimeout(() => {
      abortController.abort();
      clearTimeout(timer);
    }, reqOptions?.timeout || defaultTimeout);

    return abortController;
  };

  protected normalizedReqOptions = (reqOptions: ReqOptions & Config) => {
    const options = {
      ...reqOptions,
      signal: this.handleTimeOut(reqOptions).signal,
    };

    // Delete unnecessary props
    if (options.baseURL) delete options.baseURL;
    if (options.methods) delete options.methods;
    if (options.timeout) delete options.timeout;
    if (options.query) delete options.query;
    if (options.resultProps) delete options.resultProps;

    return options;
  };

  protected parseData = async (response: Response) => {
    const contentType = response.headers.get("Content-Type");

    if (!contentType)
      return `Unable to detect Content-Type. \n Consider using 'proah.extra()' to handle this manually.`;

    if (contentType.startsWith("application/json")) {
      try {
        return await response.json();
      } catch (error: any) {
        return `Failed to parse JSON! The requested source might be sending invalid JSON data.\n${
          error?.message || error
        }`;
      }
    }

    if (contentType.startsWith("text/")) {
      try {
        return await response.text();
      } catch (error: any) {
        return `Failed to parsing TEXT ! Maybe requested sources sending invalid text data\n${
          error?.message || error
        }`;
      }
    }

    if (
      contentType.startsWith("image/") ||
      contentType.startsWith("audio/") ||
      contentType.startsWith("video/") ||
      contentType === "application/pdf" ||
      contentType === "application/octet-stream"
    ) {
      return await response.blob();
    }

    return `Unknown Content-Type: ${contentType}. Unable to parse response.\nConsider using 'proah.extra()' to handle ${contentType}.`;
  };

  protected prettyResponse = async (
    response: Response,
    reqOptions: ReqOptions & Config
  ) => {
    const result = await this.parseData(response);
    return {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      [reqOptions.resultProps ? reqOptions.resultProps : "data"]: response.ok
        ? result
        : null,
      error: !response.ok ? result : null,
    };
  };

  /*Request Handler*/

  protected async GET_handler(url: string, reqOptions: ReqOptions & Config) {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async POST_handler(url: string, reqOptions: ReqOptions & Config) {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async PUT_handler(url: string, reqOptions: ReqOptions & Config) {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async PATCH_handler(url: string, reqOptions: ReqOptions & Config) {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected async DELETE_handler(url: string, reqOptions: ReqOptions & Config) {
    const options = this.normalizedReqOptions(reqOptions);
    return await this.prettyResponse(await fetch(url, options), reqOptions);
  }

  protected EXTRA_handler(url: string, reqOptions: ReqOptions & Config) {
    const options = this.normalizedReqOptions(reqOptions);
    return fetch(url, options);
  }
}
