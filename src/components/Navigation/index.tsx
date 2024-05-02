import { Dispatch, SetStateAction } from "react";
import { SidebarType } from "../../layouts/SidebarLayout/types";

export const Navigation = ({ setSidebarType, toggleSidebar, hideSidebar }: { setSidebarType: Dispatch<SetStateAction<SidebarType>>, toggleSidebar: () => void, hideSidebar: boolean; }) => {

    const handleSetSidebarType = (sidebarType: SidebarType) => {
        setSidebarType(sidebarType);
        if (hideSidebar) {
            toggleSidebar();
        }
    };

    return (
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
    );
};

export default Navigation;