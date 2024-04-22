import "./style.scss";

const DATA = ["zoo-1", "zoo-2", "zoo-3"];

export const VisitSidebar = () => {
  return (
    <div className="visit-sidebar">
      <div className="zoo-box-list">
        {DATA.map((zoo, index) => (
          <div className="zoo-box" key={index}>
            <div className="zoo">{zoo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

