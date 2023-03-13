import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/global/Header';
import Home from './Home';
import Profile from './Profile';

import { LocalStorageHelper } from '../helper/StorageHelper';

function Index() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(LocalStorageHelper.getUserData()));
  }, []);

  return (
    <div className="h-screen">
      <Header userData={userData} />
      <section className="p-4 h-full pt-24 relative overflow-y-scroll overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home userData={userData} />} />
          <Route path="/profile" element={<Profile userData={userData} />} />
        </Routes>
      </section>
    </div>
  );
}

export default Index;
