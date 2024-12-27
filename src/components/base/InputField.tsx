import { InputHTMLAttributes } from 'react';
import { ProfileData } from '../../@types/user';
import { UseFormRegister } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  field: keyof ProfileData;
  type?: string;
  error?: string;
  register: UseFormRegister<ProfileData>;
}

export const InputField = ({
  label,
  field,
  type = 'text',
  value,
  error,
  register,
  ...props
}: InputFieldProps) => (
  <div className="">
    <label className="block text-base text-primary mb-2">{label}</label>
    <input
      {...props}
      type={type}
      className={`w-full py-2 px-5 border rounded-xl outline-none focus:ring-1 transition-all duration-300 text-sm text-text-secondary ${
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-gray-300 focus:ring-primary focus:border-transparent'
      }`}
      {...register(field)}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);
