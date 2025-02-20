import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="py-12">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
              {user?.name?.charAt(0)}
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="text-blue-100">Client Account</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Email</label>
                  <p className="mt-1 text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Phone</label>
                  <p className="mt-1 text-gray-900">+8801XXXXXXXXX</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Location</label>
                  <p className="mt-1 text-gray-900">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Consultation Scheduled</h3>
                      <p className="text-sm text-gray-600">With Sohel Rana</p>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Message Sent</h3>
                      <p className="text-sm text-gray-600">To Farjana Parvin</p>
                    </div>
                    <span className="text-sm text-gray-500">5 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Consultations */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Upcoming Consultations</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">Sohel Rana</h3>
                      <p className="text-sm text-gray-600">Criminal Law</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">March 1, 2025</p>
                      <p className="text-sm text-gray-600">10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-left">
                  Change Password
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-left">
                  Notification Settings
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-left">
                  Privacy Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
