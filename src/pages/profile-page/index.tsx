import { Pencil } from 'lucide-react';
import { InputField } from '../../components/base/InputField';
import { ProfileData } from '../../@types/user';
import { useCallback, useState } from 'react';
import { ProfileImg } from '../../assets/images';

export const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
  });

  const handleInputChange = useCallback(
    (inputName: keyof ProfileData, value: string) => {
      setProfileData((curr) => ({
        ...curr,
        [inputName]: value,
      }));
    },
    []
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="relative w-[5.5rem] h-[5.5rem] mx-auto">
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-primary p-2 rounded-full text-white hover:bg-gray-600 transition-colors ease-in-out duration-300">
            <Pencil size={15} />
          </button>
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField
            label="Your Name"
            field="name"
            value={profileData.name}
            onChange={(event) => handleInputChange('name', event.target.value)}
          />
          <InputField
            label="User Name"
            field="username"
            value={profileData.username}
            onChange={(event) =>
              handleInputChange('username', event.target.value)
            }
          />
          <InputField
            label="Email"
            field="email"
            type="email"
            value={profileData.email}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <InputField
            label="Password"
            field="password"
            type="password"
            value={profileData.password}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
          <InputField
            label="Date of Birth"
            field="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={(event) =>
              handleInputChange('dateOfBirth', event.target.value)
            }
          />
          <InputField
            label="Present Address"
            field="presentAddress"
            value={profileData.presentAddress}
            onChange={(event) =>
              handleInputChange('presentAddress', event.target.value)
            }
          />
          <InputField
            label="Permanent Address"
            field="permanentAddress"
            value={profileData.permanentAddress}
            onChange={(event) =>
              handleInputChange('permanentAddress', event.target.value)
            }
          />
          <InputField
            label="City"
            field="city"
            value={profileData.city}
            onChange={(event) => handleInputChange('city', event.target.value)}
          />
          <InputField
            label="Postal Code"
            field="postalCode"
            value={profileData.postalCode}
            onChange={(event) =>
              handleInputChange('postalCode', event.target.value)
            }
          />
          <InputField
            label="Country"
            field="country"
            value={profileData.country}
            onChange={(event) =>
              handleInputChange('country', event.target.value)
            }
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
