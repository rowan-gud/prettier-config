import type { Config } from "prettier";

declare module "./index.js" {
  export interface ConfigOptions {}

  export function config(options?: Partial<ConfigOptions>): Config;
}
