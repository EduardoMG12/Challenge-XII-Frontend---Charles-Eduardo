import Attention from "../icons/Attention";

const NotFound = () => {
    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center"
            style={{ height: `calc(100vh - 360px)` }}
        >
            <Attention />
        </div>
    );
};

export default NotFound;
