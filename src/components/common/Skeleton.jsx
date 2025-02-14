const Skeleton = ({ className = '', ...props }) => (
  <div
    className={`animate-pulse bg-gray-200 rounded ${className}`}
    {...props}
  />
);

export const LawyerCardSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse" />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <div className="flex-1 h-10 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-10 bg-gray-200 rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export const ChatMessageSkeleton = () => (
  <div className="flex justify-start">
    <div className="max-w-[70%] bg-gray-100 rounded-lg px-4 py-2">
      <Skeleton className="h-4 w-48 mb-2" />
      <Skeleton className="h-4 w-32" />
    </div>
  </div>
);

export const ProfileSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex gap-6">
      <Skeleton className="w-32 h-32 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-4 w-48 mb-2" />
        <Skeleton className="h-4 w-32 mb-4" />
        <div className="flex gap-3">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  </div>
);

export const DashboardStatsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-8 w-16" />
      </div>
    ))}
  </div>
);

export const TableRowSkeleton = ({ columns = 4 }) => (
  <div className="flex gap-4 p-4 border-b">
    {[...Array(columns)].map((_, i) => (
      <Skeleton key={i} className="h-6 flex-1" />
    ))}
  </div>
);

export default Skeleton;
