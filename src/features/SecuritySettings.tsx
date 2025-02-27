const SecuritySettings = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[20px] lg:text-[26px] font-semibold">
        Security Settings
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[20px] font-semibold text-primary">
              Two-Factor Authentication
            </h3>
            <p className="text-[16px] text-secondary mb-[16px]">
              Add an extra layer of security to your account
            </p>
          </div>
          <button className="px-[60px] py-[14px] bg-black text-white rounded-[10px] lg:rounded-[15px] text-[15px] lg:text-[18px] ">
            Enable 2FA
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
