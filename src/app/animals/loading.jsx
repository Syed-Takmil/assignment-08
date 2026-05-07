

const LoadingPage = () => {
    return (
        <div className="flex container mx-auto text-center justify-center items-center gap-5 my-auto">
            <h2>Loading</h2>
       <div className="flex justify-center items-center justify-items-center min-h-screen">
            <span className="loading loading-spinner loading-xl"></span>
       </div>
        </div>
    );
};

export default LoadingPage;