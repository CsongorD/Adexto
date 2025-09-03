const FenceModel = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-4">
        <video 
          autoPlay 
          playsInline 
          muted 
          loop
          className="w-full h-auto rounded-xl"
        >
          <source src="/adexto-3-d-model.mp4" type="video/mp4" />
        </video>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-60 animate-bounce-slow"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-400 rounded-full opacity-40 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default FenceModel;