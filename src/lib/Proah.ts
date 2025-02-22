import { RequestConstract, configValidator } from "../helper";
import { Path, ProahConfig, RequestOptions } from "../types";

class Proah extends RequestConstract {
  constructor(private config: ProahConfig) {
    super();
    configValidator(config);
  }

  public async get(path: Path, options: RequestOptions) {
    return this.getRequestHandler(path, options, this.config);
  }

  public post(path: Path, options: RequestOptions) {
    return this.postRequestHandler(path, options, this.config);
  }

  public put(path: Path, options: RequestOptions) {
    return this.putRequestHandler(path, options, this.config);
  }

  public delete(path: Path, options: RequestOptions) {
    return this.deleteRequestHandler(path, options, this.config);
  }

  public patch(path: Path, options: RequestOptions) {
    return this.patchRequestHandler(path, options, this.config);
  }
}

export default Proah;
