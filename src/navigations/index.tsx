import React, { lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const DefaultLayout = lazy(() => import('pages/DefaultLayout/DefaultLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Spelling = lazy(() => import('pages/Spelling/Spelling'));
const Leaderboard = lazy(() => import('pages/Leaderboard/Leaderboard'));

function IndexRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/spelling"
            element={<Spelling />}
          />
          <Route
            path="/leaderboard"
            element={<Leaderboard />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default IndexRouter;
