import { useRouter } from 'next/router';
import { useEffect } from 'react';
import auth from '../authentication/config/authentication';

const withAuth = (Component: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const isAuthenticated = auth.currentUser; // replace with your authentication check

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/loginPage');
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  return AuthComponent;
};

export default withAuth;