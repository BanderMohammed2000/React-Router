import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        {/* Outlet: نضعها لعرض عناصر الابناء */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
