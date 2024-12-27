import { useState } from 'react';
import { PageWrapper } from '../../components/base';
import { SettingTab } from '../../components/ui';
import { ProfilePage } from '../profile-page';
import { Preferences } from '../preferences';
import { Security } from '../security';

type TabType = 'profile' | 'preferences' | 'security';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabType>('profile');

  return (
    <PageWrapper>
      <div className=" w-full  p-6  bg-white rounded-3xl shadow-sm">
        <div className="border-b mb-10">
          <div className="flex space-x-6">
            <SettingTab
              label="Edit Profile"
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
            />
            <SettingTab
              label="Preferences"
              active={activeTab === 'preferences'}
              onClick={() => setActiveTab('preferences')}
            />
            <SettingTab
              label="Security"
              active={activeTab === 'security'}
              onClick={() => setActiveTab('security')}
            />
          </div>
        </div>
        {activeTab === 'profile' ? (
          <ProfilePage />
        ) : activeTab === 'preferences' ? (
          <Preferences />
        ) : (
          <Security />
        )}
      </div>
    </PageWrapper>
  );
};

export default Settings;
