import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HomePage } from './Home/Home';

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Is loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
