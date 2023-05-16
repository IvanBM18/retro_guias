import withAuth from "@/services/middleWare/authWrapper";
import DasboardEntries from "./dashboardEntries";
import DashboardLayout from "@/layouts/dashboard";
import { ReactElement, ReactNode, useState } from "react";
import { NextPageWithLayout } from "../_app";
import useUser from "../../lib/useUser";

const Dashboard : NextPageWithLayout= () => {
  const {user} = useUser({redirectTo: '/dashboardPage', redirectIfFound: false})

  if(!user || user.isLoggedIn === false){
    return (
    <h1 className="text-center">Incia sesion para ver esta pagina</h1>
    )
  }
  return (
    <DasboardEntries />
  )
};

Dashboard.getLayout = function getLayout(page : ReactElement) : ReactNode{
  return(
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

// export default withAuth(Dashboard);
export default Dashboard;
