import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  )
}
