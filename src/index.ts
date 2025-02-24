export { default } from "./lib/Proah";

import Proah from "./lib/Proah";

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Proah;
  module.exports.default = Proah;
}
