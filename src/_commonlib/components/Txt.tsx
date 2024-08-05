import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  color: string;
}

const Txt = ({ typography = "p", color, ...Props }: Props) => {
  return (
    <span
      css={{
        color: color,
        ...TYPOGRAPH_VARIANT[typography],
      }}
      {...Props}
    />
  );
};

export default Txt;

const TYPOGRAPH_VARIANT = {
  h1: {
    fontSize: "56px",
    fontWeight: 900,
  },
  h2: {
    fontSize: "48px",
    fontWeight: 800,
  },
  h3: {
    fontSize: "40px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "36px",
    fontWeight: 700,
  },
  h5: {
    fontSize: "24px",
    fontWeight: 700,
  },
  p: {
    fontSize: "15px",
    fontWeight: 400,
  },
};
