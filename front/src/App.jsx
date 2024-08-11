import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from './admin';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-purple-800 text-white flex flex-col">
        <nav className="bg-purple-700 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-white text-xl font-bold">
                Flashcard Quiz App
              </div>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/admin"
                    className="text-white hover:text-yellow-300 transition"
                  >
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quiz"
                    className="text-white hover:text-yellow-300 transition"
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

        <footer className="bg-purple-700 shadow-lg py-4 text-center text-white">
          © 2024 Flashcard Quiz App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
