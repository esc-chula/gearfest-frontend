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

//3
// export const supabase = createClient('https://bdzquxhxpvrjpvcmtisr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkenF1eGh4cHZyanB2Y210aXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NTI3MTQsImV4cCI6MjAyMDAyODcxNH0.Z-kv8SkSMzskiLmTTTA5iNsEududNe1ugs7tZSLVkOw', options);
