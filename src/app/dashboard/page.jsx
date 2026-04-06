export default function DashboardPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full">
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
        Dashboard Overview
      </h1>
      <p className="text-gray-500 mb-8">
        Welcome back to your central learning hub.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Metric Cards - Modern styled */}
        {[
          {
            title: 'Enrolled Courses',
            value: '4',
            color: 'bg-blue-50 text-blue-600',
          },
          {
            title: 'Modules Completed',
            value: '12',
            color: 'bg-emerald-50 text-emerald-600',
          },
          {
            title: 'Assignments Done',
            value: '8',
            color: 'bg-purple-50 text-purple-600',
          },
          {
            title: 'Certificates',
            value: '2',
            color: 'bg-orange-50 text-orange-600',
          },
        ].map((metric, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">
                {metric.title}
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {metric.value}
              </h3>
            </div>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${metric.color}`}
            >
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed Activity Placeholder */}
        <div className="lg:col-span-2 bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map(v => (
              <div
                key={v}
                className="flex gap-4 p-4 rounded-xl border border-gray-50 bg-gray-50/50"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Progress Card Placeholder */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Course Progress
          </h2>
          <div className="space-y-6">
            {[1, 2].map(v => (
              <div key={v}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    React Masterclass
                  </span>
                  <span className="text-blue-600 font-bold">75%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
