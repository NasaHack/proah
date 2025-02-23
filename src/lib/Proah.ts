import ReqConstract from "./helper/ReqConstrat";
import { Config, Path, ReqOptions } from "./types";

export default class Proah extends ReqConstract {
  constructor(protected config?: Config) {
    super();
  }

  /*serve request methods*/

  /*GET*/
  public get(path: Path, reqOtions?: ReqOptions) {
    return this.handleRequest(path, reqOtions, this.config);
  }

  /*POST*/
  public post(path: Path, reqOtions?: ReqOptions) {
    return this.handleRequest(path, reqOtions, this.config);
  }

  /*PUT*/
  public put(path: Path, reqOtions?: ReqOptions) {
    return this.handleRequest(path, reqOtions, this.config);
  }

  /*PATCH*/
  public patch(path: Path, reqOtions?: ReqOptions) {
    return this.handleRequest(path, reqOtions, this.config);
  }
}
