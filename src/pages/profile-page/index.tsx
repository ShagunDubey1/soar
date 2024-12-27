import { Pencil } from 'lucide-react';
import { InputField } from '../../components/base/InputField';
import { ProfileData } from '../../@types/user';
import { ProfileImg } from '../../assets/images';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProfileFormSchema } from '../../schema/profile.schema';
import { useEffect, useState } from 'react';

export const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileData>({
    resolver: zodResolver(ProfileFormSchema),
  });

  // Mock API call to get profile data
  const fetchProfileData = async () => {
    return new Promise<ProfileData>((resolve) =>
      setTimeout(() => {
        resolve({
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
      }, 1000)
    );
  };

  useEffect(() => {
    const loadProfileData = async () => {
      const profile = await fetchProfileData();
      reset(profile);
      setIsLoading(false);
    };

    loadProfileData();
  }, [reset]);

  const onSubmit = async (data: ProfileData) => {
    console.log('Updated Profile:', data);
  };

  if (isLoading) return <div className=' min-h-screen '>Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              error={errors.name?.message}
              register={register}
            />
            <InputField
              label="User Name"
              field="username"
              error={errors.username?.message}
              register={register}
            />
            <InputField
              label="Email"
              field="email"
              type="email"
              error={errors.email?.message}
              register={register}
            />
            <InputField
              label="Password"
              field="password"
              type="password"
              error={errors.password?.message}
              register={register}
            />
            <InputField
              label="Date of Birth"
              field="dateOfBirth"
              error={errors.dateOfBirth?.message}
              register={register}
            />
            <InputField
              label="Present Address"
              field="presentAddress"
              error={errors.presentAddress?.message}
              register={register}
            />
            <InputField
              label="Permanent Address"
              field="permanentAddress"
              error={errors.permanentAddress?.message}
              register={register}
            />
            <InputField
              label="City"
              field="city"
              error={errors.city?.message}
              register={register}
            />
            <InputField
              label="Postal Code"
              field="postalCode"
              error={errors.postalCode?.message}
              register={register}
            />
            <InputField
              label="Country"
              field="country"
              error={errors.country?.message}
              register={register}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
