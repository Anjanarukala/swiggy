const Shimmer=()=>{
    return(
        <div className="min-h-screen bg-gray-50">
            {/* Hero Shimmer */}
            <div className="bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="h-12 bg-gray-400 rounded-lg mb-4 mx-auto w-96"></div>
                    <div className="h-6 bg-gray-400 rounded-lg mx-auto w-64"></div>
                </div>
            </div>
            
            {/* Search Bar Shimmer */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <div className="flex items-center bg-white rounded-full shadow-lg p-2 w-full md:w-auto animate-pulse">
                        <div className="flex-1 h-10 bg-gray-200 rounded-full"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-full ml-2"></div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
                
                {/* Results Count Shimmer */}
                <div className="mb-6">
                    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                </div>
                
                {/* Cards Grid Shimmer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array(12).fill(0).map((_, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                            <div className="h-48 bg-gray-300"></div>
                            <div className="p-4">
                                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                                <div className="flex items-center mb-2">
                                    <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                                    <div className="h-4 w-20 bg-gray-200 rounded ml-2"></div>
                                </div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Shimmer;
