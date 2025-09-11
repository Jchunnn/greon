import { useEffect, useState } from "react";
import arrowLeft from "../assets/images/icons/arrow-left.svg";
import search from "../assets/images/icons/search.svg";
import collect1 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-1.svg";
import collect2 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-2.svg";
import collect3 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-3.svg";
import collect4 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-4.svg";
import collect5 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-5.svg";
import collect6 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-6.svg";
import collect7 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-7.svg";
import checkcircle from "../assets/images/icons/checkcircle.svg";

import CollectFilmItem from "../components/CollectFilmItem";

import "./CollectFilmList.css";

const initialFilms = [
  {
    id: 1,
    img: collect1,
    alt: "collect1",
    title: "地球力：傾聽來自荒野的呼喚",
    episode: 8,
    isCollected: false,
  },
  {
    id: 2,
    img: collect2,
    alt: "collect2",
    title: "與牠們的約定：守護瀕危生命的行動詩",
    episode: 8,
    isCollected: false,
  },
  {
    id: 3,
    img: collect3,
    alt: "collect3",
    title: "森林之心：維繫生命的綠色網絡",
    episode: 8,
    isCollected: false,
  },
  {
    id: 4,
    img: collect4,
    alt: "collect4",
    title: "城市與野境的邊界：尋找共存的智慧",
    episode: 8,
    isCollected: false,
  },
  {
    id: 5,
    img: collect5,
    alt: "collect5",
    title: "從一片葉到一片林：種下未來的希望",
    episode: 8,
    isCollected: false,
  },
  {
    id: 6,
    img: collect6,
    alt: "collect6",
    title: "寂靜的守護者：為無法言語的生命發聲",
    episode: 8,
    isCollected: false,
  },
  {
    id: 7,
    img: collect7,
    alt: "collect7",
    title: "海洋的微光：從珊瑚礁到鯨豚的生命故事",
    episode: 8,
    isCollected: false,
  },
];

function CollectFilmList() {
  const [collectFilm, setCollectFilm] = useState(initialFilms);
  const [showMessage, setShowMessage] = useState(false);

  const handleToggleCollect = (id) => {
    setCollectFilm((prevFilms) =>
      prevFilms.map((film) =>
        film.id === id ? { ...film, isCollected: !film.isCollected } : film
      )
    );
    setShowMessage(true);
  };

  // 當 showMessage 變成 true 時，3秒後自動關閉
  useEffect(() => {
    if (!showMessage) return;

    const timer = setTimeout(() => setShowMessage(false), 2000);

    return () => clearTimeout(timer); // 清除上一次的定時器
  }, [showMessage]);

  return (
    <>
      <div className="text-h6 text-info-500 text-center mt-app-header px-16px">
        <div className="flex pt-30px pb-16px ">
          <button
            className="flex items-center mr-s back-btn"
            to="/app/favorite"
          >
            <img src={arrowLeft} alt="arrow left" />
          </button>
          <div className="search-bar">
            <div className="search-input-wrapper flex">
              <img src={search} alt="search" className="icon-sm" />
              <input
                type="text"
                placeholder="世界地球日"
                id="searchInput"
                className="text-neutral-100"
              />
            </div>
          </div>
        </div>
        <p className="text-l text-md-h6 text-lg-h5 text-neutral-100 mb-s mb-md-m mb-md-l font-bold text-center">
          已搜尋到有關<span className="text-success-200">“世界地球日”</span>{" "}
          的收藏影片
        </p>
        <ul className="flex flex-col gap-s mt-s mr-m ml-m mb-xl">
          {collectFilm.map((film) => (
            <CollectFilmItem
              key={film.id}
              film={film}
              onToggleCollect={handleToggleCollect}
            />
          ))}
        </ul>
        {showMessage && (
          <div className="flex justify-center items-center green-border py-m">
            <div className="mr-xxs">
              <img
                src={checkcircle}
                alt="checkkcircle"
                className="collect-film-list-icon-sm"
              />
            </div>
            <p className="text-m text-neutral-100">已新增影片至清單</p>
          </div>
        )}
      </div>
    </>
  );
}

export default CollectFilmList;
