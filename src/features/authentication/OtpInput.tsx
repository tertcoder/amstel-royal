import { useState } from "react";

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
}

function OtpInput({ length, onChange }: OtpInputProps) {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (el: HTMLInputElement, index: number) => {
    const value = el.value.replace(/[^0-9]/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (value && el.nextElementSibling) {
      (el.nextElementSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      e.currentTarget.previousElementSibling
    ) {
      (e.currentTarget.previousElementSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      {otp.map((data, index) => (
        <input
          key={index}
          type="number"
          name="otp"
          maxLength={1}
          value={data}
          inputMode="numeric"
          onChange={(e) => handleChange(e.target as HTMLInputElement, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="border-text-black/70 focus:border-text-black h-12 w-12 border-b-2 bg-inherit text-center text-2xl duration-150 focus:outline-none"
        />
      ))}
    </div>
  );
}

export default OtpInput;
