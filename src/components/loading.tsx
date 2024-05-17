const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-bounce inline-flex space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            </div>
        </div>
    );
};

export default Loading;
