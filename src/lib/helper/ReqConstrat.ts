import { Config, Path, ReqOptions } from "../types";

export default class ReqConstract {
  protected genReqOptions(reqOtions?: ReqOptions, config?: Config) {}

  /**/
  protected handleRequest(path: Path, reqOtions?: ReqOptions, config?: Config) {
    const options = this.genReqOptions(reqOtions, config);

    console.log(options);
  }
}
