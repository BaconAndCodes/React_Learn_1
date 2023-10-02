import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const RootPage = () => {

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootPage;
