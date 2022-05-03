// 对环境变量的类型支持
interface ViteEnv {
  VITE_API_ID: string;
  VITE_API_IS: number;
  VITE_API_BOOL: boolean;
}

// 对import.meta.env 类型支持
interface ImportMetaEnv extends ViteEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}