const NotFound = () => {
    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center"
            style={{ height: `calc(100vh - 360px)` }}
        >
            <img
                src="https://challengeuolpbcompass.s3.amazonaws.com/icon404NotFound.svg"
                alt="Icon with a hollowed-out design featuring an orange circular border and an orange exclamation point in the center"
                className="w-40"
            />
        </div>
    );
};

export default NotFound;
