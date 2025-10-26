import ThemeContext from "./ThemeContext";
import { useContext } from "react";
export default function Navbar() {
    const theme = useContext(ThemeContext);
  return <div>theme now : {theme}</div>;
}