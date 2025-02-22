export type Path = string;
export type BaseURL = string;

export interface ProahConfig {
  baseURL?: BaseURL;
  resultProps?: string;
  methods: readonly ["GET", "POST", "PUT", "DELETE", "PATCH"];
  credentials?: "include" | "same-origin" | "omit";
}

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestOptions extends RequestInit {
  query?: object;
}

export interface ResponseData extends ResponseInit {
  data?: unknown;
  status?: number;
}
