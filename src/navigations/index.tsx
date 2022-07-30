import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const DefaultLayout = lazy(() => import('pages/DefaultLayout/DefaultLayout'));
const Home = lazy(() => import('pages/Home/Home'));
const Spelling = lazy(() => import('pages/Spelling/Spelling'));

function IndexRouter(): JSX.Element {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
        </Route>
      </Routes>
    </Router>
  );
}

export default IndexRouter;
