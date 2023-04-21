import withAuth from "@/services/middleWare/authWrapper";
import DasboardEntries from "./dashboardEntries";
import DashboardLayout from "@/layouts/dashboard";
import { ReactElement, ReactNode, useState } from "react";
import { NextPageWithLayout } from "../_app";

const Dashboard : NextPageWithLayout= () => {
  const [viewEntries, setViewEntries] = useState<boolean>(true)
  return (
    <>
      <DasboardEntries/>
    </>
  )
};

Dashboard.getLayout = function getLayout(page : ReactElement) : ReactNode{
  return(
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

// export default withAuth(DashboardLayout);
export default Dashboard;
