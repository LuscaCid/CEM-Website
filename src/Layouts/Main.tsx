import { Header } from "./Header";
import { PagesFooter } from "./PagesFooter";
import { Outlet } from "react-router-dom";
export function AppLayout() {
  return (
    <body className={`flex flex-col justify-between h-screen `}>
      <div>
        <Header/> 
        <main className=" py-6 mt-32 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <PagesFooter />
    </body>
  );
}