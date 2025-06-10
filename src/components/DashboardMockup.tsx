
const DashboardMockup = () => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Dashboard */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">GT</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Gigin Technology</h3>
                  <p className="text-sm text-gray-500">Job Team</p>
                </div>
              </div>
              <button className="text-gray-400">⋯</button>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-600 mb-2">ATS Dashboard</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Setting</div>
                <div className="text-sm text-gray-500">Overview</div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">AY</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Amit Yadav</h4>
                  <p className="text-sm text-gray-500">Gigin Technology</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-gray-700 mb-2">Verification</h5>
                <div className="text-sm text-gray-500">Account</div>
              </div>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Create Job</h3>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">+</button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-blue-600 font-medium">New Jobs</div>
                <div className="text-sm text-gray-500">📢</div>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <div className="text-pink-600 font-medium">Success Stories</div>
                <div className="text-sm text-gray-500">👥</div>
              </div>
            </div>

            <div className="bg-orange-50 p-3 rounded-lg mb-4">
              <div className="text-orange-600 font-medium">Instant Hire</div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">Last 15 Days</div>
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg text-sm">
                Create BGV Order +
              </button>
            </div>
          </div>
        </div>

        {/* Mobile App Preview */}
        <div className="mt-6 flex justify-center">
          <div className="bg-black rounded-3xl p-4 w-64">
            <div className="bg-white rounded-2xl p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-500 text-white p-3 rounded-lg text-center">
                  <div className="text-sm font-medium">New Jobs</div>
                </div>
                <div className="bg-pink-500 text-white p-3 rounded-lg text-center">
                  <div className="text-sm font-medium">Success Stories</div>
                </div>
              </div>
              <div className="bg-orange-400 text-white p-3 rounded-lg mt-2 text-center">
                <div className="text-sm font-medium">Instant Hire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
