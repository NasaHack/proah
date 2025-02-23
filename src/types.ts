export type Path = string;
export type BaseURL = string;

export interface ProahConfig {
  baseURL?: BaseURL;
  resultProps?: "myData";
  methods: readonly ["GET", "POST", "PUT", "DELETE", "PATCH"];
  credentials?: "include" | "same-origin" | "omit";
  cache?:
    | "default"
    | "no-cache"
    | "reload"
    | "force-cache"
    | "only-if-cached"
    | "no-store";
  mode?: "cors" | "no-cors" | "same-origin";
}

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestOptions extends RequestInit {
  query?: Record<string, string>;
}

export interface ResponseData extends ResponseInit {
  data?: unknown;
  status?: number;
}
