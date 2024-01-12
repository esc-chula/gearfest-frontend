import { supabase } from "@/lib/supabase";

export default function SignInForm() {
  async function onSubmit() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error(error);
    }

    console.log(data);
    // request to /api/auth/signin
  }

  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <button
        value="google"
        name="provider"
        onClick={onSubmit}
        className="flex h-fit w-full flex-wrap items-center justify-center gap-2 rounded-2xl border-2 border-red-800 px-4 py-2 text-center text-2xl shadow-md shadow-red-800 hover:translate-y-1 active:translate-y-0"
      >
        Sign In With Google
      </button>
    </div>
  );
}
