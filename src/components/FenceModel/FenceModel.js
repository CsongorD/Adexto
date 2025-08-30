const FenceModel = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative group">
        <video 
          autoPlay 
          playsInline 
          muted 
          loop
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]"
        >
          <source src="/adexto-3-d-model.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default FenceModel;