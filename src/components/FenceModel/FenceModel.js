const FenceModel = () => {
  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      <div className="group relative">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="h-auto w-full rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl group-hover:scale-[1.02] sm:rounded-xl"
        >
          <source src="/adexto-3-d-model.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default FenceModel;
