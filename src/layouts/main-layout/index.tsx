import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../components/shared";

export const MainLayout = () => {
  return <div className=" w-full relative flex bg-[#F0F2F5]">
    <Sidebar />
    <div className={`flex flex-1 flex-col overflow-hidden`}>
      <Header />
      <Outlet />
    </div>
  </div>;
};
