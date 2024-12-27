interface SettingTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const SettingTab: React.FC<SettingTabProps> = ({
  label,
  active,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`pb-2 px-1 sm:px-4 transition-colors duration-300 ease-in-out xs:text-xs text-sm sm:text-base font-medium ${
      active
        ? 'border-b-[3px] border-primary text-primary'
        : 'text-text-secondary hover:text-gray-700 hover:font-medium'
    }`}
  >
    {label}
  </button>
);
