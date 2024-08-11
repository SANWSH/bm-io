interface ImportMetaEnv {
  readonly API_URL: string;
  readonly API_URL_V2: string;
  readonly FRONTEND_URL: string;
  readonly API_TOKEN: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}