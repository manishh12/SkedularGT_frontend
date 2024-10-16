
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full flex flex-col">
      <div className="px-4 py-6 text-xl font-bold">NEXUS</div>
      <nav className="mt-6">
        <a href="#" className="block px-4 py-3 hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block px-4 py-3 bg-gray-800 hover:bg-gray-700">
          Schedule
        </a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-700">Customers</a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-700">Coachings</a>
        <a href="#" className="block px-4 py-3 hover:bg-gray-700">Attendance</a>
      </nav>
      <div className="mt-auto p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-700 p-2 rounded-full">
            <span className="text-sm">TN</span>
          </div>
          <div>
            <p>Admin</p>
            <p className="text-sm text-gray-400">Manish - IIT2021074</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
