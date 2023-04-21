import { useRouter } from 'next/router';
import { useEffect } from 'react';
import auth from '../authentication/config/authentication';
import { DeleteButton } from '@/pages/dashboardPage/component/deleteButton';
import LoginPage from '@/pages/loginPage';

const withAuth = (Component: React.ComponentType) => {
  const AuthComponent = (props: any) => {
    const router = useRouter();
    const isAuthenticated = auth.currentUser; // replace with your authentication check

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/loginPage');
      }
    }, [router,isAuthenticated]);

    return isAuthenticated ? <Component {...props} /> : <LoginPage/>
    ;
  };

  return AuthComponent;
};

export default withAuth;