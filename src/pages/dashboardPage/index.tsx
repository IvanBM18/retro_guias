import withAuth from "@/services/middleWare/authWrapper";
import DasboardEntries from "./dashboardEntries";

const ProtectedPage = () => {
  return <div><DasboardEntries/></div>;
};

export default withAuth(ProtectedPage);