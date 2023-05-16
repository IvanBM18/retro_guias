import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginPage from "@/pages/loginPage";
import useUser from "@/lib/useUser";

const withAuth = (Component: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const {user} = useUser({redirectIfFound:false, redirectTo:'/dashboardPage'}); // replace with your authentication check

    useEffect(() => {
      if (!user) {
        router.push("/loginPage");
      }
    }, [router, user]);

    return user ? <Component {...props} /> : <LoginPage />;
  };

  return AuthComponent;
};

export default withAuth;
