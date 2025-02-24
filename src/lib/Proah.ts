import ReqConstract from "./helper/ReqConstrat";
import { Config, Path, ReqOptions } from "./types";
import { configValidator } from "./helper/validator";

export default class Proah extends ReqConstract {
  constructor(protected config?: Config) {
    super();
    configValidator(config);
  }

  /*serve request methods*/

  /*GET*/
  public get(path: Path, reqOtions?: ReqOptions) {
    return this.requestProvider(path, "GET", reqOtions, this.config);
  }

  /*POST*/
  public post(path: Path, reqOtions?: ReqOptions) {
    return this.requestProvider(path, "POST", reqOtions, this.config);
  }

  /*PUT*/
  public put(path: Path, reqOtions?: ReqOptions) {
    return this.requestProvider(path, "PUT", reqOtions, this.config);
  }

  /*PATCH*/
  public patch(path: Path, reqOtions?: ReqOptions) {
    return this.requestProvider(path, "PATCH", reqOtions, this.config);
  }

  /*DELETE*/
  public delete(path: Path, reqOtions?: ReqOptions) {
    return this.requestProvider(path, "DELETE", reqOtions, this.config);
  }

  /*EXTRA*/
  public extra(path: Path, reqOtions?: ReqOptions) {
    return this.requestProvider(path, undefined, reqOtions, this.config);
  }
}
