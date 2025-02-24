export const credentials = ["include", "same-origin", "omit"];

export const mode = ["cors", "no-cors", "same-origin"];

export const cache = [
  "default",
  "no-cache",
  "reload",
  "force-cache",
  "only-if-cached",
  "no-store",
];

export const methods = [
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
  "HEAD",
  "OPTIONS",
  "TRACE",
  "TRACK",
  "CONNECT",
];

export const bodyLessMethod = [
  "GET",
  "HEAD",
  "OPTIONS",
  "DELETE",
  "TRACE",
  "TRACK",
];

export const confgProps: string[] = [
  "baseURL",
  "cache",
  "credentials",
  "methods",
  "mode",
  "timeout",
  "resultPros",
];

export const defaultTimeout: number = 5000;
