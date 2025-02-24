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

export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "TRACK"
  | "CONNECT";

export interface Config {
  baseURL?: string;
  credentials?: Credentials;
  mode?: Mode;
  cache?: Cache;
  methods?: Method[];
  resultProps?: string;
  timeout?: number;
}

export interface ReqOptions extends RequestInit {
  query?: object;
  method?: Method;
  timeout?: number;
  resultProps?: string;
}

export interface ResOptions extends ResponseInit {
  url: string;
  data?: any;
}
