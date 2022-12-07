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
        className="transition-all border-b-2 outline-none border-[#00b4d8] pb-1 text-[18px] w-[350px] px-2 focus:border-[#03045e] bg-transparent placeholder:text-[#adb5bd]"
        style={{ fontFamily: "Josefin Sans" }}
      />
    </div>
  );
};

export default Input;
