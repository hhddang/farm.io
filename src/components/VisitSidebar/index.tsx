import { usePetStore } from "../../hooks";
import "./style.scss";

export const VisitSidebar = () => {
  const petStore = usePetStore();
  return (
    <div className="visit-sidebar">
      <div className="zoo-box-list">
        {petStore.petsInStock.map((pet, index) => (
          <div className="zoo-box" key={index} onClick={() => petStore.moveToFarm(pet)}>
            <div className="zoo" >{pet.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

