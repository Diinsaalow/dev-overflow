import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  return (
    <>
      <div className="text-primary-500 text-3xl font-bold">Welcome to the next.js course</div>
      <h1 className="h1-bold font-gr">Hello World, Welcome to the Next.JS Course</h1>

      <form
        className="mt-10"
        action={async () => {
          "use server";
          await signOut({
            redirectTo: ROUTES.SIGN_IN,
          });
        }}
      >
        <Button>Log out</Button>
      </form>
    </>
  );
};

export default Home;
