const Loading = () => {
  return (
    <div 
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center bg-white"
      role="status" 
      aria-live="polite"
    >
      <div className="mb-8 flex h-16 w-16 items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
      <div className="text-2xl font-bold tracking-tight text-primary-800">
        ADEXTO
      </div>
    </div>
  );
};

export default Loading;