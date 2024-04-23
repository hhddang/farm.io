import './style.scss';
import { usePetStore } from "../../hooks";

export const Farm = () => {
    const petStore = usePetStore();
    return (
        <div className="background">
            {petStore.petsInFarm.map((pet, index) => {
                return (
                    <div key={index} className="zoo" style={{ position: 'absolute', top: pet.y + '%', left: pet.x + '%', transform: 'translate(-50%, -50%)' }} onClick={() => petStore.moveToStock(pet)}>{pet.id}</div>
                );
            })}
        </div>
    );
};