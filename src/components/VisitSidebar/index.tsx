import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToFarm } from "../../redux/features/petSlice";

export const VisitSidebar = () => {
  const petsInStock = useSelector((state: RootState) => state.pet.petsInStock);
  const dispatch = useDispatch();
  return (
    <div className="visit-sidebar">
      <div className="zoo-box-list">
        {petsInStock.map((pet, index) => (
          <div
            className="zoo-box"
            key={index}
            onClick={() => dispatch(moveToFarm(pet))}>
            <div className="zoo">{pet.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
