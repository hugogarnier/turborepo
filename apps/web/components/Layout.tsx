import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="font-mono">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
