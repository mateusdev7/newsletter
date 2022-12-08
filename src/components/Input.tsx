import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  placeholder: string;
  setValue(value: string): void;
}

const Input: FC<InputProps> = ({
  id,
  value,
  setValue,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <input
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
        {...props}
        className="transition-all border-3 outline-none py-5 px-7 placeholder:text-[18px] w-[450px] placeholder:text-[#287ADD] text-[20px] font-normal text-[#373737]"
        style={{
          fontFamily: "Josefin Sans",
          fontWeight: "600",
        }}
      />
    </div>
  );
};

export default Input;
