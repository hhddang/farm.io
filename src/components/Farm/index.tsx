import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToStock } from "../../redux/features/petSlice";

export const Farm = () => {
  const petsInFarm = useSelector((state: RootState) => state.pet.petsInFarm);
  const dispatch = useDispatch();
  return (
    <div className="farm">
      <img src="assets/backgrounds/background.svg" alt="" />
      {petsInFarm.map((pet, index) => {
        return (
          <div
            key={index}
            className="zoo"
            style={{
              position: "absolute",
              top: pet.y + "%",
              left: pet.x + "%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => dispatch(moveToStock(pet))}>
            {pet.id}
          </div>
        );
      })}
    </div>
  );
};
