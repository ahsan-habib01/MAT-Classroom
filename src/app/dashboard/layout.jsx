export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b text-xl font-bold">Dashboard</div>
        <nav className="p-4 space-y-2">
          <a href="/dashboard" className="block text-gray-700 hover:text-blue-600">Overview</a>
          <a href="/dashboard/profile" className="block text-gray-700 hover:text-blue-600">Profile</a>
          {/* Admin routes will be protected conditionally */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
