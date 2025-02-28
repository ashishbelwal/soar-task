import { FaPencilAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

interface UploadImageProps {
  image: string | undefined;
  onImageChange?: (file: File) => void;
  maxSizeMB?: number;
  className?: string;
}

const UploadImage = ({
  image,
  onImageChange,
  maxSizeMB = 5,
  className = "",
}: UploadImageProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>(image || "");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Cleanup preview URL when component unmounts
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const validateFile = (file: File): boolean => {
    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File size should be less than ${maxSizeMB}MB`);
      return false;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return false;
    }

    setError("");
    return true;
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!validateFile(file)) return;

      setIsLoading(true);
      try {
        // Create preview URL
        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);

        // Call the parent's onChange handler if provided
        if (onImageChange) {
          await onImageChange(file);
        }
      } catch (err) {
        setError("Failed to upload image");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex gap-4 mr-[60px] justify-center lg:justify-start">
        <div className="relative h-[90px] w-[90px] bg-[#E6EFF5] rounded-full">
          <img
            src={previewUrl || "/default-avatar.png"}
            alt="Profile"
            className={`w-[90px] h-[90px] rounded-full object-cover ${
              isLoading ? "opacity-50" : ""
            }`}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            onClick={handleImageClick}
            disabled={isLoading}
            className={`absolute bottom-0 right-0 p-0 bg-tertiary rounded-full cursor-pointer hover:bg-primary transition-colors duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaPencilAlt size={16} className="m-2 text-white" />
          </button>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default UploadImage;
