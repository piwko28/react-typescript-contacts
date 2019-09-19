import React, { FC, useState, createContext } from "react";

import { Contacts } from "../../contacts/components/Contacts";
import "./App.css";
import { Layout, LayoutSelector } from "../components/LayoutSelector";

export const LayoutContext = createContext<Layout>(Layout.light);

export const App: FC = () => {
  const [layout, setLayout] = useState<Layout>(Layout.light);

  const onLayoutSelect = (layout: Layout) => {
    setLayout(layout);
  };

  return (
    <LayoutContext.Provider value={layout}>
      <main>
        <Contacts />
      </main>
      <footer>
        <LayoutSelector onLayoutSelect={onLayoutSelect} />
      </footer>
    </LayoutContext.Provider>
  );
};
