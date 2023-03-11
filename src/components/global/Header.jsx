import { ICONS } from '../../constants/ICON_SVG';

import { UserHeaderLogic } from '../../logic/HeaderLogic';

import Logo from './Logo';

function Header() {
  const { HandleLogOut } = UserHeaderLogic();

  return (
    <div className="bg-violet-100 flex shadow-md fixed items-center justify-between top-0 w-full h-auto py-2 px-4">
      <Logo />
      <div className="relative group">
        <div className="w-10 cursor-pointer h-10 flex justify-center items-center bg-white shadow rounded-full">
          <ICONS.PERSON />
        </div>
        <ul className="invisible delay-200 group-hover:visible absolute bg-violet-200 w-32 shadow space-y-4 py-4 px-2 mt-2 rounded-md right-3">
          <li className="font-semibold cursor-pointer hover:text-violet-700">
            Profile
          </li>
          <li
            onClick={HandleLogOut}
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
