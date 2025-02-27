const ProfileSettings = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-h-[calc(100vh-280px)] y-scrollbar">
      <div className="flex gap-4 mr-[60px] justify-center lg:justify-start">
        <div className="relative h-[90px] w-[90px]">
          <img
            src="/user-1.png"
            alt="Profile"
            className="w-[90px] h-[90px] rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 p-0 bg-white rounded-full cursor-pointer">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#232323" />
              <g clip-path="url(#clip0_98_106)">
                <path
                  d="M22.5862 11.1632L21.2356 12.5138C21.0979 12.6515 20.8753 12.6515 20.7376 12.5138L17.4856 9.26184C17.3479 9.12415 17.3479 8.90149 17.4856 8.76379L18.8362 7.41321C19.3841 6.86536 20.2747 6.86536 20.8255 7.41321L22.5862 9.17395C23.137 9.7218 23.137 10.6124 22.5862 11.1632ZM16.3255 9.92395L8.63212 17.6173L8.01102 21.1769C7.92606 21.6573 8.34501 22.0734 8.82548 21.9913L12.385 21.3673L20.0784 13.674C20.2161 13.5363 20.2161 13.3136 20.0784 13.1759L16.8265 9.92395C16.6858 9.78626 16.4632 9.78626 16.3255 9.92395ZM11.635 16.9581C11.4739 16.797 11.4739 16.5392 11.635 16.3781L16.1468 11.8663C16.3079 11.7052 16.5657 11.7052 16.7268 11.8663C16.888 12.0275 16.888 12.2853 16.7268 12.4464L12.2151 16.9581C12.054 17.1193 11.7962 17.1193 11.635 16.9581ZM10.5774 19.422H11.9837V20.4855L10.094 20.8165L9.1829 19.9054L9.51395 18.0157H10.5774V19.422Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_98_106">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(8 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Your Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outline-primary"
              placeholder="Enter your name"
              defaultValue="Charlene Reed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              User Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              placeholder="Enter username"
              defaultValue="Charlene Reed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary ">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              placeholder="Enter your email"
              defaultValue="charlenereed@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="**********"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Date of Birth
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="25 January 1990"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Present Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="San Jose, California, USA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Permanent Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="San Jose, California, USA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              City
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="San Jose"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Postal Code
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="45962"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Country
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-[10px] lg:rounded-[15px] border border-secondary px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outlin-primary"
              defaultValue="USA"
            />
          </div>
        </div>

        <div className="flex justify-end mt-[20px] lg:mt-[40px]">
          <button className="px-[80px] py-[14px] bg-black text-white rounded-[10px] lg:rounded-[15px] text-[15px] lg:text-[18px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
