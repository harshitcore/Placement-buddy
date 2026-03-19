import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children, role }: any) => {
  return (
    <div style={{ display: "flex" }}>
      
      <Sidebar role={role} />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;