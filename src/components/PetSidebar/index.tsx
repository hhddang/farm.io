import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToFarm } from "../../redux/features/petSlice";
import { Rex, Lemon, Iceye } from "../../pets";
import { Specie } from "../../types";

export const PetSidebar = () => {
  const petsInStock = useSelector((state: RootState) => state.pet.petsInStock);
  const dispatch = useDispatch();
  return (
    <div className="pet-sidebar">
      <div className="pet-list">
        {petsInStock.map((pet) => (
          <div className="pet-wrapper" key={pet.id}>
            <div className={`pet ${pet.isOwned && "owned"}`}>
              {(() => {
                switch (pet.specie) {
                  case Specie.RED:
                    return <Rex />;
                  case Specie.LEMON:
                    return <Lemon />;
                  case Specie.ICEYE:
                    return <Iceye />;
                }
              })()}
            </div>

            {!pet.isOwned && <div className="question-mark">?</div>}

            <div className="functions">
              <button className="info">
                <img src="assets/icons/book.svg" alt="book" />
              </button>
              {pet.isOwned && (
                <button
                  className="farm"
                  onClick={() => pet.isOwned && dispatch(moveToFarm(pet))}>
                  <img src="assets/icons/house.svg" alt="house" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
