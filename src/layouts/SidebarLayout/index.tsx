import "./style.scss";
import { type ISidebarLayout, SidebarType } from "./types";
import {
  DashboardSidebar,
  PetSidebar,
  SidebarB,
  SidebarC,
} from "../../components";
import { useEffect, useState } from "react";
import { setPetsInStock, setPetsInFarm } from "../../redux/features/petSlice";
import { useDispatch } from "react-redux";

export const SidebarLayout = ({ children }: ISidebarLayout) => {
  const dispatch = useDispatch();

  const [sidebarType, setSidebarType] = useState<SidebarType>(
    SidebarType.DASHBOARD
  );

  const [hideSidebar, setHideSidebar] = useState<boolean>(false);

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
    dispatch(
      setPetsInStock([{ id: "pet-1" }, { id: "pet-2" }, { id: "pet-3" }])
    );
    dispatch(
      setPetsInFarm([{ id: "pet-4" }, { id: "pet-5" }, { id: "pet-6" }])
    );
  }, []);

  return (
    <div className="sidebar-layout">
      <div className={`sidebar-wrapper ${hideSidebar ? "hide" : ""}`}>
        {sidebarType === SidebarType.DASHBOARD && <DashboardSidebar />}
        {sidebarType === SidebarType.PET && <PetSidebar />}
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
          onClick={() => handleSetSidebarType(SidebarType.DASHBOARD)}>
          a
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.PET)}>
          b
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.B)}>
          c
        </button>
        <button
          className="function"
          onClick={() => handleSetSidebarType(SidebarType.C)}>
          d
        </button>
      </div>
    </div>
  );
};
