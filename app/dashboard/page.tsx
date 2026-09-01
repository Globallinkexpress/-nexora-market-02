import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase-server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Welcome to Nexora Market</h1>

      <p>Your customer dashboard</p>

      <div>
        <strong>Account email:</strong>
        <p>{user.email}</p>
      </div>

      <hr />

      <h2>Your Nexora account</h2>

      <p>
        Your account is connected to Supabase authentication.
      </p>

      <p>
        Your orders, profile and delivery information will appear here.
      </p>
    </main>
  );
}