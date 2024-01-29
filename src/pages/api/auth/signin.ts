import type { APIRoute } from "astro";
import type { Provider } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ redirect }) => {

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google" as Provider,
    options: {
      redirectTo: import.meta.env.DEV ?
        "http://localhost:4321/api/auth/callback" :
        "https://gearfest2024.com/api/auth/callback"
    }
  })

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect(data.url);
}
