import React, { Suspense } from 'react';
import './App.css';
import { Skeleton } from 'antd';
import { Routes, Route, Navigate } from 'react-router-dom';
// 引入pages
const Home = React.lazy(() => import('./pages/Home/index'))
const Mine = React.lazy(() => import('./pages/Mine/index'))

function App () {
  return (
    <div className="App">
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path={"/"} element={<Navigate to={"/Home"} />}></Route>
          <Route path={"/home"} element={<Home />}></Route>
          <Route path={"/mine"} element={<Mine />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
