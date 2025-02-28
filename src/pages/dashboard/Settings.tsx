import { useState } from "react";
import ProfileSettings from "../../features/ProfileSettings";
import PreferencesSettings from "../../features/PreferencesSettings";
import SecuritySettings from "../../features/SecuritySettings";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="w-full  bg-background rounded-[15px] lg:rounded-[25px]  p-[10px] lg:p-[30px]">
      <div className="w-full">
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 py-2 text-sm font-medium relative ${
              activeTab === "profile"
                ? "text-tertiary text-[14px] lg:text-[16px] "
                : "text-secondary text-[14px] lg:text-[16px] hover:text-tertiary "
            }`}
          >
            Edit Profile
            {activeTab === "profile" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-tertiary rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`px-4 py-2 text-sm font-medium relative ${
              activeTab === "preferences"
                ? "text-tertiary text-[14px] lg:text-[16px] "
                : "text-secondary text-[14px] lg:text-[16px] hover:text-tertiary "
            }`}
          >
            Preferences
            {activeTab === "preferences" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-tertiary rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`px-4 py-2 text-sm font-medium relative ${
              activeTab === "security"
                ? "text-tertiary text-[14px] lg:text-[16px] "
                : "text-secondary text-[14px] lg:text-[16px] hover:text-tertiary "
            }`}
          >
            Security
            {activeTab === "security" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-tertiary rounded-t-full"></div>
            )}
          </button>
        </div>
        <div className="mt-8">
          <div className={`space-y-6 ${activeTab !== "profile" && "hidden"}`}>
            <ProfileSettings />
          </div>
          <div
            className={`space-y-6 ${activeTab !== "preferences" && "hidden"}`}
          >
            <PreferencesSettings />
          </div>
          <div className={`space-y-6 ${activeTab !== "security" && "hidden"}`}>
            <SecuritySettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
