import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ContextExemple() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.text,
      }}
    >
      ContextExemple
    </div>
  );
}

export default ContextExemple;
