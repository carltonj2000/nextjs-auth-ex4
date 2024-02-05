import { getSession, login, logout } from "@/app/lib";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  return (
    <section className="flex flex-col max-w-[960px] mx-auto items-center mt-3">
      <form
        action={async (formData) => {
          "use server";
          console.log("login");
          login(formData);
          redirect("/");
        }}
        className="flex flex-col items-center gap-2"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="text-gray-400"
          required
        />
        <button type="submit" className="border m-1 p-2">
          Login
        </button>
      </form>
      <form
        action={async (formData) => {
          "use server";
          console.log("logout");
          logout();
          redirect("/");
        }}
      >
        <button type="submit" className="border m-1 p-2">
          Logout
        </button>
      </form>
      <pre className="border m-1 p-2">{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
