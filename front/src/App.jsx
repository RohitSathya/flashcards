import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from './Admin';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col">
        <nav className="bg-white shadow-lg">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="text-gray-800 text-lg font-semibold">
                Flashcard Quiz App
              </div>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/admin"
                    className="text-gray-700 hover:text-purple-600 transition"
                  >
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quiz"
                    className="text-gray-700 hover:text-purple-600 transition"
                  >
                    Quiz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>

        <footer className="bg-white shadow-lg py-3 text-center text-gray-700">
          © 2024 Flashcard Quiz App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
