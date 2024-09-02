import React from "react";
import { appTitle } from "../Constants/Constants";
import { NotebookPen } from "lucide-react";

function Nav() {
  return (
    <div className="nav">
      <NotebookPen />
      &nbsp;
      <span>{appTitle}</span>
    </div>
  );
}

export default Nav;
