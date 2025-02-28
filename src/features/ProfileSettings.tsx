import { useState } from "react";
import CustomInput from "../components/CustomInput";
import UploadImage from "../components/UploadImage";
import type { Profile } from "../types";

const ProfileSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [profileData, setProfileData] = useState<Profile>({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "**********",
    dob: "1990-01-25",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    zip: "45962",
    country: "USA",
    confirmPassword: "**********",
    phone: "1234567890",
    state: "California",
    image: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (field: keyof Profile) => (value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (file: File) => {
    setProfileData((prev) => ({
      ...prev,
      profileImage: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const requiredInputs = Array.from(form.querySelectorAll("input[required]"));
    let hasError = false;

    requiredInputs.forEach((element) => {
      const input = element as HTMLInputElement;
      if (!input.value.trim()) {
        hasError = true;
        const label = input.previousElementSibling?.textContent?.replace(
          " *",
          ""
        );
        setError(`${label} is required`);
      }
    });

    // Validate email
    const emailInput = form.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    if (emailInput && emailInput.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        hasError = true;
        setError("Please enter a valid email address");
      }
    }

    if (hasError) {
      return;
    }
    setIsSuccess(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(false);
      setError("");
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-h-[calc(100vh-280px)] y-scrollbar">
      <UploadImage image="/user-1.png" onImageChange={handleImageChange} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-col flex-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomInput
            label="Your Name"
            placeholder="Enter your name"
            defaultValue={profileData.name}
            type="text"
            required={true}
            onChange={handleInputChange("name")}
          />
          <CustomInput
            label="User Name"
            placeholder="Enter username"
            defaultValue={profileData.username}
            type="text"
            onChange={handleInputChange("username")}
          />
          <CustomInput
            label="Email"
            placeholder="Enter your email"
            defaultValue={profileData.email}
            type="email"
            required={true}
            onChange={handleInputChange("email")}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            defaultValue={profileData.password}
            type="password"
            required={true}
            onChange={handleInputChange("password")}
          />
          <CustomInput
            label="Date of Birth"
            placeholder="Select date of birth"
            defaultValue={profileData.dob}
            type="date"
            onChange={handleInputChange("dob")}
          />
          <CustomInput
            label="Present Address"
            placeholder="Enter your present address"
            defaultValue={profileData.presentAddress}
            type="text"
            onChange={handleInputChange("presentAddress")}
          />
          <CustomInput
            label="Permanent Address"
            placeholder="Enter your permanent address"
            defaultValue={profileData.permanentAddress}
            type="text"
            onChange={handleInputChange("permanentAddress")}
          />
          <CustomInput
            label="City"
            placeholder="Enter your city"
            defaultValue={profileData.city}
            type="text"
            onChange={handleInputChange("city")}
          />
          <CustomInput
            label="Postal Code"
            placeholder="Enter postal code"
            defaultValue={profileData.zip}
            type="text"
            onChange={handleInputChange("zip")}
          />
          <CustomInput
            label="Country"
            placeholder="Enter your country"
            defaultValue={profileData.country}
            type="text"
            onChange={handleInputChange("country")}
          />
        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <div className="flex justify-end mt-[20px] lg:mt-[40px]">
          <button
            type="submit"
            className={`px-[80px] py-[14px] bg-black text-white rounded-[10px] lg:rounded-[15px] text-[15px] lg:text-[18px] ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
      {isSuccess && (
        <div className="fixed top-[50px] left-0 right-0 bg-white p-4 rounded-lg w-[300px] mx-auto text-success shadow-lg text-center">
          <p className="text-green-500 text-sm ">
            Profile updated successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
