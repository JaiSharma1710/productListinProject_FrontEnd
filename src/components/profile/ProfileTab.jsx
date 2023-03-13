import React, { useState } from 'react';
import { ICONS } from '../../constants/ICON_SVG';
import Button from '../global/Button';

import ProfileUpdateFrom from './ProfileUpdateFrom';

function ProfileTab({ userData }) {
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    address,
    city,
    state,
    country,
  } = userData;

  const [isUpdateFormActive, setIsUpdateFormActive] = useState(false);

  const data = [
    { title: 'Name:', value: `${firstName} ${lastName}` },
    { title: 'Email:', value: email },
    { title: 'Mobile No.:', value: mobileNumber },
    { title: 'Address:', value: address },
  ];

  return (
    <div className="animate__animated animate__fadeIn py-2 flex flex-row h-full w-full justify-center divide-x divide-violet-400 items-center">
      <ICONS.PERSON className="w-1/3 h-auto text-violet-400" />
      {isUpdateFormActive ? (
        <ProfileUpdateFrom setIsUpdateFormActive={setIsUpdateFormActive} />
      ) : (
        <div className="md:px-10 flex flex-col justify-center gap-4 lg:gap-10 px-4 lg:w-2/3 h-full w-full rounded-tr-md rounded-br-md">
          <table>
            <tbody className="flex flex-col w-full justify-center gap-2 lg:gap-6">
              {data.map(({ title, value }, index) => (
                <tr key={index} className="flex gap-2">
                  <th className="font-semibold text-sm md:text-lg lg:text-xl">
                    {title}
                  </th>
                  <td className="text-sm md:text-lg lg:text-xl">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={() => setIsUpdateFormActive(true)}>Update</Button>
        </div>
      )}
    </div>
  );
}

export default ProfileTab;
