import collect from "../assets/images/icons/collect.svg";
import collectWhite from "../assets/images/icons/collect-white.svg";

import "./AddFilmItem.css";
import Button from "../ui/Button";

function AddFilmItem({ film, onToggleAdd }) {
  const { id, img, alt, title, videoType, episode, isAdded } = film;

  return (
    <div>
      <li>
        <div className="flex gap-xs gap-md-s gap-lg-m">
          <div className="collect-film-item-30">
            <img src={img} alt={alt} />
          </div>
          <div className="collect-film-item-70">
            <div className="flex justify-between items-start">
              <div className="collect-film-item-text">
                <h4 className="text-m text-md-h6 text-lg-h5 text-neutral-100 mb-xs  mb-md-16px mb-lg-20px">
                  {title}
                </h4>
                <p className="collect-film-item-subtitle text-neutral-200">
                  {videoType} • 已完結 / 共 {episode} 集
                </p>
              </div>
              <Button onClick={() => onToggleAdd(id)}>
                <img
                  src={isAdded ? collectWhite : collect}
                  alt={isAdded ? "collectWhite" : "collect"}
                  className="collect-icon"
                />
              </Button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default AddFilmItem;
