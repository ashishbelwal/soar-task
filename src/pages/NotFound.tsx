const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-background">
      <h1 className="text-6xl font-extrabold text-primary font-inter">404</h1>
      <p className="text-xl mt-4 font-lato">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline font-lato">
        Go back to the dashboard.
      </a>
    </div>
  );
};
export default NotFound;
