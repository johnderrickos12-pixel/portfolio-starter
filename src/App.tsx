import React from 'react';
import { Hammer } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl border border-gray-800 p-8 rounded-lg bg-gray-900/50 backdrop-blur-sm">
        <Hammer className="w-16 h-16 mx-auto mb-6 text-indigo-500 animate-pulse" />
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Work in Progress
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          The architect is currently laying the foundation. Check back soon for something extraordinary.
        </p>
        <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 w-1/3 animate-progress"></div>
        </div>
      </div>
      
      <footer className="absolute bottom-8 text-gray-600 text-sm">
        © {new Date().getFullYear()} John Derrick
      </footer>
    </div>
  );
}

export default App;
