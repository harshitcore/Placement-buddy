import { Link } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarMenu";

type SidebarProps = {
  role: "student" | "tpo" | "professor";
};

const Sidebar = ({ role }: SidebarProps) => {

  const menu = sidebarMenu[role];

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Placement Buddy</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{ color: "white", textDecoration: "none" }}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;           