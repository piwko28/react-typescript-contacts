import React, { FunctionComponent, useContext } from "react";

import { LayoutContext } from "../Layout/App";
import "./LayoutSelector.css";

export enum Layout {
  light = "light",
  dark = "dark"
}

interface LayoutSelectorProperties {
  onLayoutSelect: (layout: Layout) => void;
}

export const LayoutSelector: FunctionComponent<LayoutSelectorProperties> = ({ onLayoutSelect }) => {
  const layout = useContext(LayoutContext);

  const onChange = (event: any) => {
    onLayoutSelect(event.target.value);
  };

  return (
    <label onChange={onChange} className={"layoutSelector " + layout}>
      <span>Layout:</span>
      <select>
        <option value={Layout.light}>Light</option>
        <option value={Layout.dark}>Dark</option>
      </select>
    </label>
  );
};
