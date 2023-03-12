import { useRef } from "react";

const SortBy = ["NewNeow", "ByPaws", "News", "SmartWork", "NipOffers", "Memes"];

export default function SortMethods() {
  const indicatorRef = useRef(null);

  function changeIndicatorLocation(
    e: React.MouseEvent<HTMLButtonElement>,
    idx: number
  ) {
    const currentActive = document.querySelector(".sort-button.active");
    if (indicatorRef.current) {
      (indicatorRef.current as HTMLDivElement).style.top = `${idx * 2.4}rem`;
    }
    currentActive?.classList.remove("active");
    (e.target as HTMLButtonElement).classList.add("active");
  }

  return (
    <div className="sort-methods">
      <div className="current-indicator" ref={indicatorRef}></div>
      {SortBy.map((elem, idx) => {
        return (
          <button
            className={`sort-button ${idx === 0 ? "active" : ""}`}
            key={idx}
            onClick={(e) => changeIndicatorLocation(e, idx)}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}
