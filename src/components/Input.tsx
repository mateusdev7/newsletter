import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  placeholder: string;
  labelName: string;
  htmlFor: string;
  url: string;
  setValue(value: string): void;
}

const Input: FC<InputProps> = ({
  id,
  value,
  setValue,
  placeholder,
  labelName,
  htmlFor,
  url,
  ...props
}) => {
  return (
    <div>
      <label
        style={{
          fontFamily: "Josefin Sans",
          fontWeight: "400",
        }}
        className="block text-[24px] ml-[71px]"
        htmlFor={id}
      >
        {labelName}
      </label>
      <div className="flex flex-row items-center gap-4 mb-10">
        <img src={url} alt="Flag" />
        <input
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
