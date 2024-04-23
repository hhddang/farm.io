import "./style.scss";
import { type ISidebarLayout, SidebarType } from "./types";
import { VisitSidebar, SidebarB, SidebarC } from "../../components";
import { useEffect, useState } from "react";
import { usePetStore } from "../../hooks";

export const SidebarLayout = ({ children }: ISidebarLayout) => {
  const [sidebarType, setSidebarType] = useState<SidebarType>(
    SidebarType.VISIT
  );
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);
  const petStore = usePetStore();

  const handleSetSidebarType = (sidebarType: SidebarType) => {
    setSidebarType(sidebarType);
    if (hideSidebar) {
      toggleSidebar();
    }
  };

  const toggleSidebar = () => {
    setHideSidebar((state) => !state);
  };

  useEffect(() => {
    petStore.setPetsInStock([{ id: 'pet-1' }, { id: 'pet-2' }, { id: 'pet-3' }]);
    petStore.setPetsInFarm([{ id: 'pet-4' }, { id: 'pet-5' }, { id: 'pet-6' }]);
  }, []);

  return (
    <div className="sidebar-layout">
      <div className={`sidebar-wrapper ${hideSidebar ? "hide" : ""}`}>
        {sidebarType === SidebarType.VISIT && <VisitSidebar />}
        {sidebarType === SidebarType.B && <SidebarB />}
        {sidebarType === SidebarType.C && <SidebarC />}

        <div
          className={`toggle-btn ${hideSidebar ? "hide" : ""}`}
          onClick={toggleSidebar}>
          <div className="arrow"></div>
        </div>
      </div>

      {children}

      <div className="function-list">
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.VISIT)}>
          a
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.B)}>
          b
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.C)}>
          c
        </button>
      </div>
    </div>
  );
};
