import { useNavigate } from 'react-router-dom';

import { ICONS } from '../../constants/ICON_SVG';

import { UserHeaderLogic } from '../../logic/HeaderLogic';

import Logo from './Logo';

function Header({ userData }) {
  const { HandleLogOut } = UserHeaderLogic();
  const navigate = useNavigate();

  return (
    <div className="z-20 absolute bg-violet-100 flex shadow-md items-center justify-between top-0 w-full h-auto py-2 px-4">
      <Logo />
      <div className="relative group">
        <div className="flex cursor-pointer gap-2 justify-center items-center">
          <div className="w-10 h-10 flex justify-center items-center bg-white shadow rounded-full">
            <ICONS.PERSON />
          </div>
          <p>
            Hello, {userData.firstName} {userData.lastName}
          </p>
        </div>
        <ul className="invisible delay-200 group-hover:visible absolute bg-violet-200 w-32 shadow space-y-4 py-4 px-2 mt-2 rounded-md right-3">
          <li
            onClick={() => navigate('/')}
            className="font-semibold cursor-pointer hover:text-violet-700"
          >
            Home
          </li>
          <li
            onClick={() => navigate('/profile')}
            className="font-semibold cursor-pointer hover:text-violet-700"
          >
            Profile
          </li>
          <li
            onClick={() => {
              navigate('/');
              HandleLogOut();
            }}
            className="flex gap-2 font-semibold cursor-pointer hover:text-violet-700"
          >
            Logout <ICONS.LOGOUT />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
