import { useState } from "react";
import { LibraryDatabase } from "./sidebarBottomLibraryDatabase";
import { SidebarBottomFilter } from "./Filter/sidebarBottomFilter";
import { SidebarBottomHeader } from "./sidebarBottomHeader";

export function SidebarBottomRoot() {
  const [actualFilter, setActualFilter] = useState({
    search: "",
    tag: "all",
    sortFilter: "data",
  });

  const [actualLayout, setActualLayout] = useState("Lista");

  return (
    <section id="sidebar_bottom">
      <SidebarBottomHeader {...{ setActualFilter }} />
      <div id="library">
        <SidebarBottomFilter {...{ setActualFilter, setActualLayout }} />
        <LibraryDatabase {...{ actualFilter, actualLayout }} />
      </div>
    </section>
  );
}