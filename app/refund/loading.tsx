export default function Loading() {
    return (
      <div className="container px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded mb-8"></div>
          <div className="h-4 w-32 bg-gray-200 rounded mb-8"></div>
  
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
  
          <div className="h-24 bg-gray-100 rounded-lg my-8"></div>
  
          <div className="h-6 w-48 bg-gray-200 rounded my-8"></div>
  
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    )
  }
  