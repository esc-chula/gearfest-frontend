/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  /// <reference types="astro/client" />
declare namespace App {
  interface Locals {
      user: {
          name: string
      },
      welcomeTitle: () => string,
      orders: Map<string, object>
  }
}
