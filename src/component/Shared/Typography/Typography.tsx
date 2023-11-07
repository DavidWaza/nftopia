import { ReactNode, FC } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}
 const Heading: FC<HeadingProps> = ({ children, className }) => {
  let fontSize = "text-[123.036px]";
  let fontWeight = "text-extrabold";
  let letterSpacing = "tracking-[6.152px]";
  let color = "text-[#F4F4F4]";

  return (
    <h1
      className={`${fontSize} ${fontWeight} ${letterSpacing} ${color} ${className}`}
    >
      {children}
    </h1>
  );
};

// TITLE COMPONENT
interface TitleProps {
  variant: "small" | "normal";
  children: React.ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ variant, children, className }) => {
  let fontSize = "text-[80px]";
  let fontWeight = "font-bold";
  let letterSpacing = "tracking-[4px]";

  if (variant === "small") {
    fontSize = "text-[64px]";
    fontWeight = "font-medium";
    letterSpacing = "tracking-[3px]";
  } else if (variant === "normal") {
    fontSize = "text-[80px]";
    fontWeight = "font-bold";
    letterSpacing = "tracking-[4px]";
  }
  return (
    <h2 className={`${fontSize} ${fontWeight} ${letterSpacing} ${className}`}>
      {children}
    </h2>
  );
};

// TEXT COMPONENT
interface TextProps {
  variant?: "small" | "medium";
  children: React.ReactNode;
  className?: string;
}

 const Text: FC<TextProps> = ({ variant, children, className }) => {
  let fontSize = "text-[16px]";
  let fontWeight = "font-normal";
  let letterSpacing = "tracking-[0.8px]";

  if (variant === "small") {
    fontSize = "text-[16px]";
    fontWeight = "font-normal";
    letterSpacing = "tracking-[0.8px]";
  } else if (variant === "medium") {
    fontSize = "text-[24px]";
    fontWeight = "font-semibold";
    letterSpacing = "tracking-[1.2px]";
  }
  return (
    <p className={`${fontSize} ${fontWeight} ${letterSpacing} ${className}`}>
      {children}
    </p>
  );
};

export { Heading, Title, Text };
