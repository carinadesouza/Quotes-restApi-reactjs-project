import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-pink-300 to-purple-300 text-gray-800'} flex flex-col`}>
      <header className="p-4">
        <h1 className={`text-2xl font-serif ${isDarkMode ? 'text-purple-400' : 'text-rose-600'}`}>Ready for Inspiration?</h1>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-pink-600'} transform -rotate-3 mb-12`}>
          Inspire Your Day With Quotes That Spark Joy
        </h2>
        
        <p className={`max-w-md mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Click the button below to receive a fresh quote that will energize and uplift you. Dive into our collection of motivational wisdom! 🌸
        </p>
        
        <button 
          onClick={fetchQuote}
          className={`bg-gradient-to-r ${isDarkMode ? 'from-purple-400 to-indigo-500' : 'from-pink-400 to-rose-500'} text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-8`}
        >
          Get New Quote
        </button>

        <p className={`text-xl max-w-md ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{quote}</p>
      </main>
      
      <footer className="p-4 flex justify-end">
        <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" onClick={toggleTheme}>
          <span className={`text-xs ${isDarkMode ? 'text-yellow-400' : 'text-pink-400'}`}>{isDarkMode ? '🌙' : '🌕'}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
