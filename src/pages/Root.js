import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        {/* Outlet: نضعها لعرض عناصر الابناء */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
