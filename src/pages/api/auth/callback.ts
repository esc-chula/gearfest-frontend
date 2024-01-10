import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/dashboard");
};

// import { createServerClient } from '@supabase/ssr'
// import { type APIRoute } from 'astro'

// export const GET: APIRoute = async ({ request, cookies, redirect }) => {
//   const requestUrl = new URL(request.url)
//   const code = requestUrl.searchParams.get('code')
//   const next = requestUrl.searchParams.get('next') || '/'

//   if (code) {
//     const supabase = createServerClient(
//       import.meta.env.PUBLIC_SUPABASE_URL,
//       import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
//       {
//         cookies: {
//           get(key) {
//             return cookies.get(key)?.value
//           },
//           set(key, value, options) {
//             cookies.set(key, value, options)
//           },
//           remove(key, options) {
//             cookies.delete(key, options)
//           },
//         },
//       }
//     )

//     const { error } = await supabase.auth.exchangeCodeForSession(code)

//     if (!error) {
//       return redirect(next)
//     }
//   }

//   // return the user to an error page with instructions
//   return redirect('/auth/auth-code-error')
// }
