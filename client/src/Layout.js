import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <main className="font-inter">
      <Header />
      <Outlet />
    </main>
  );
}