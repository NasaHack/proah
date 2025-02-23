export type Path = string;
export type Credentials = "include" | "same-origin" | "omit";
export type Mode = "cors" | "no-cors" | "same-origin";

type Cache =
  | "default"
  | "no-cache"
  | "reload"
  | "force-cache"
  | "only-if-cached"
  | "no-store";

export type Methods =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "CONNECT";

export interface Config {
  baseURL?: string;
  credentials?: Credentials;
  mode?: Mode;
  cache?: Cache;
  methods?: Methods[];
  timeout?: number;
}

export interface ReqOptions extends RequestInit {
  query?: object;
}
