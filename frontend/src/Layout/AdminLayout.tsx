import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white p-6">
        Admin Sidebar
      </aside>

      {/* Main */}
      <div className="flex-1">

        {/* Top Navbar */}
        <header className="h-16 border-b flex items-center px-8">
          Admin Navbar
        </header>

        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;