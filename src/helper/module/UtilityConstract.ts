import { Path, RequestOptions, ProahConfig, RequestMethod } from "../../types";

class UtilityConstract {
  protected genURL(path: Path, config: ProahConfig, options: RequestOptions) {
    path = path.trim();
    let url;

    if (path.startsWith("http") || path.startsWith("https")) {
      url = new URL(path);
    } else if (config.baseURL) {
      url = new URL(config.baseURL);
      if (path) {
        url.pathname = path;
      }
    }

    if (options.query && typeof options.query === "object" && url) {
      Object.entries(options.query).forEach(([key, value]) => {
        url?.searchParams.append(key, value);
      });
    }

    if (!url && !(path.startsWith("http") || path.startsWith("https")))
      throw Error(`Invalid URL '${path}' for ${options.method} request`);

    return url ? url?.href : path;
  }

  protected genReqOptions(
    method: RequestMethod,
    config: ProahConfig,
    options: RequestOptions
  ) {
    let option: RequestOptions = {
      method,
    };

    if (config.credentials) {
      option = {
        ...option,
        credentials: config.credentials,
      };
    }

    if (options.credentials) {
      option = {
        ...option,
        credentials: options.credentials,
      };
    }

    if (config.cache) {
      option = {
        ...option,
        cache: config.cache,
      };
    }

    if (config.mode) {
      option = {
        ...option,
        mode: config.mode,
      };
    }

    if (!options.headers && options.body?.constructor.name !== "FormData") {
      option = {
        ...option,
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    option = { ...option, ...options };

    switch (method) {
      case "GET":
      case "DELETE":
        delete option.body;
    }

    return option;
  }

  protected async parseData(response: Response) {
    const contentType = response?.headers?.get("content-type");

    if (contentType?.startsWith("image/")) {
      return await response.blob();
    } else if (contentType?.startsWith("audio/")) {
      return await response.blob();
    } else if (contentType?.startsWith("video/")) {
      return await response.blob();
    } else if (contentType?.startsWith("application/pdf")) {
      return await response.blob();
    } else if (contentType?.startsWith("application/json")) {
      return await response.json();
    } else if (contentType?.startsWith("application/html")) {
      return await response.text();
    } else if (contentType?.startsWith("text/")) {
      return await response.text();
    } else {
      return await response.text();
    }
  }

  protected async prettyResposne(response: Response, config: ProahConfig) {
    if (!response.ok)
      return {
        data: null,
        [config.resultProps ? config.resultProps : "data"]: null,
        status: response.status,
      };

    let data = await this.parseData(response);
    return {
      status: response.status,
      statusText: response.statusText,
      [config.resultProps ? config.resultProps : "data"]: data,
    };
  }
}

export default UtilityConstract;
