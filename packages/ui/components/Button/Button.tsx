export type ButtonProps = {
  children: string;
  variant: "primary" | "secondary";
};

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <a
      className={`${
        (variant === "primary" && "bg-amber-500 hover:bg-slate-600") ||
        "bg-blue-600 hover:bg-slate-400"
      } px-5 py-2 text-sm font-medium text-white rounded-lg  transition-all duration-200`}
      href=""
    >
      {children}
    </a>
  );
};
