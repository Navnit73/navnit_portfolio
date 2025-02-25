import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <span>Loading...</span>
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
