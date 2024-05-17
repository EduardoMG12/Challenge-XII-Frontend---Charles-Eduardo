import Loading from "../components/loading";

const LoadingPage = () => {
    return (
        <div
            className="w-full flex items-center justify-center"
            style={{ height: `calc(100vh - 360px)` }}
        >
            <Loading />
        </div>
    );
};

export default LoadingPage;
