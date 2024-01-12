import { createClient } from '@supabase/supabase-js';

//1
export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
  {
    auth: {
        flowType: "pkce",
        autoRefreshToken: false,
        detectSessionInUrl: false,
        persistSession: true,
    },
  },
);


//2
// const supabaseUrl = import.meta.env.SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

// const options = { auth: {
//   flowType: "pkce",
//   autoRefreshToken: false,
//   detectSessionInUrl: false,
//   persistSession: true,
// }
// };

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);
