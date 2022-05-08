import { ButtonProps } from "./ButtonProps";
import s from "./Button.module.scss";
export const Button = ({
  width,
  name,
  bgcolor,
  onClick,
  height,
  type,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={s.button}
      style={{ width: width, backgroundColor: bgcolor, height: height }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
