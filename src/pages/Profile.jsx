import { useLocation, useNavigate } from 'react-router-dom';

import { ICONS } from '../constants/ICON_SVG';

import { UseGlobalContext } from '../helper/GlobalContext';
import { LocalStorageHelper } from '../helper/StorageHelper';

import ProfileTab from '../components/profile/ProfileTab';
import DashboardTab from '../components/profile/DashboardTab';
import PasswordTab from '../components/profile/PasswordTab';

function Profile({ userData }) {
  const {
    actions: { setIsUserLoggedIn },
  } = UseGlobalContext();

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const HandleLogOut = () => {
    setIsUserLoggedIn(false);
    LocalStorageHelper.setIsUserLoggedIn(false);
    LocalStorageHelper.removeUserData();
  };

  const HandleTabChangeClick = (tabName) => {
    if (tabName === 'Logout') {
      navigate('/');
      HandleLogOut();
    } else navigate(`/profile?tab=${tabName.toLowerCase()}`);
  };

  return (
    <>
      <div className="animate__animated animate__fadeIn absolute bg-gradient-to-r from-violet-100 to-indigo-600 rounded-3xl rotate-45 w-44 h-44 lg:w-96 lg:h-96" />
      <div className="block animate__animated animate__fadeIn absolute bottom-20 right-0 bg-gradient-to-r from-violet-200 to-indigo-600 rounded-3xl rotate-45 w-36 h-36" />
      <div className="animate__animated animate__fadeIn absolute bottom-8 left-0 bg-gradient-to-r from-violet-300 to-indigo-600 rounded-3xl rotate-45 w-36 h-36" />
      <div className="bg-violet-100 lg:h-full shadow-md flex flex-col lg:flex-row gap-4 w-full p-6 my-auto rounded-md">
        <ProfileLeftSection
          firstName={userData.firstName}
          lastName={userData.lastName}
          HandleTabChangeClick={HandleTabChangeClick}
        />
        <ProfileRightSection activeTab={search} userData={userData} />
      </div>
    </>
  );
}

export default Profile;

const ProfileLeftSection = ({ firstName, lastName, HandleTabChangeClick }) => {
  const Data = ['Dashboard', 'Profile', 'Password', 'Logout'];

  return (
    <div className="z-[5] lg:w-1/5 bg-white flex flex-col items-center shadow-lg rounded-md">
      <div className="py-4 text-center border-b border-violet-400 w-full">
        <div className="w-20 flex mx-auto justify-center items-center h-20 rounded-full shadow-md">
          <ICONS.PERSON className="w-14 h-14 text-violet-400" />
        </div>
        <h2 className="mt-2 font-bold text-violet-400">
          {firstName} {lastName}
        </h2>
      </div>

      <ul className="my-10 h-full w-full flex justify-around lg:px-2 gap-2 flex-col lg:space-y-10">
        {Data.map((title, index) => (
          <li
            onClick={() => HandleTabChangeClick(title)}
            key={index}
            className="text-base mx-2 md:text-lg lg:text-xl rounded-md flex justify-start items-center h-full py-2 px-3 font-semibold hover:bg-violet-100 hover:text-violet-900 cursor-pointer"
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfileRightSection = ({ userData, activeTab }) => {
  const tabName = activeTab?.split('=')?.[1];

  const tabList = {
    dashboard: <DashboardTab />,
    profile: <ProfileTab userData={userData} />,
    password: <PasswordTab />,
  };

  return (
    <div className=" z-[5] h-full lg:w-4/5 bg-white rounded-md shadow-lg">
      {tabList[tabName] || <DashboardTab />}
    </div>
  );
};
