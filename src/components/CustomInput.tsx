import { useState } from "react";
import { FaEye, FaEyeSlash, FaCalendarAlt } from "react-icons/fa";

type InputType = "text" | "email" | "password" | "date";

interface CustomInputProps {
  label: string;
  placeholder: string;
  defaultValue?: string;
  type?: InputType;
  required?: boolean;
  onChange?: (value: string) => void;
}

const CustomInput = ({
  label,
  placeholder,
  defaultValue,
  type = "text",
  onChange,
  required = false,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const validateInput = (val: string) => {
    if (required && !val && touched) {
      setError(`${label} is required`);
      return;
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        setError("Please enter a valid email address");
      } else {
        setError("");
      }
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    validateInput(val);
    if (onChange) {
      onChange(val);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(true);
    validateInput(e.target.value);
    if (type === "date" && !e.target.value) {
      e.target.type = "text";
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Format date for display if type is date
  const formatDate = (dateString: string) => {
    if (type === "date" && dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return dateString;
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-tertiary">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          required={required}
          type={type === "password" && showPassword ? "text" : type}
          className={`mt-1 block w-full rounded-[10px] lg:rounded-[15px] border ${
            error ? "border-red-500" : "border-secondary"
          } px-[15px] lg:px-[20px] lg:py-[15px] py-[13px] text-secondary focus:outline-primary ${
            type === "date"
              ? "cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
              : ""
          }`}
          placeholder={placeholder}
          value={type === "date" ? formatDate(value) : value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={(e) => {
            if (type === "date") {
              e.currentTarget.type = "date";
              e.currentTarget.showPicker();
            }
          }}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary focus:outline-none"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}
        {type === "date" && (
          <FaCalendarAlt
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
            size={20}
          />
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInput;
