import { Inter } from "next/font/google";
import LandingPage from "./landingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LandingPage
        articles={[]}
      />
    </>
  );
}
