import { useState } from "react";
import arrowLeft from "../assets/images/icons/arrow-left.svg";
import search from "../assets/images/icons/search.svg";
import VideoThumbnail1 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_1.svg";
import VideoThumbnail2 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_2.svg";
import VideoThumbnail3 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_3.svg";
import VideoThumbnail4 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_4.svg";
import VideoThumbnail5 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_5.svg";
import VideoThumbnail6 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_6.svg";
import VideoThumbnail7 from "../assets/images/Personal_Page_Search_Default/VideoThumbnail_7.svg";

import AddFilmItem from "../components/AddFilmItem";

import "./AddFilm.css";

const initialFilms = [
  {
    id: "video1",
    img: VideoThumbnail1,
    alt: "VideoThumbnail1",
    title: "原始生活21天",
    videoType: "真人實境秀 ",
    episode: 8,
    isAdded: false,
  },
  {
    id: "video2",
    img: VideoThumbnail2,
    alt: "VideoThumbnail2",
    title: "星廚探味：台灣",
    videoType: "紀錄片 ",
    episode: 8,
    isAdded: false,
  },
  {
    id: "video3",
    img: VideoThumbnail3,
    alt: "collect3",
    title: "模仿遊戲",
    videoType: "電影 ",
    episode: 1,
    isAdded: false,
  },
  {
    id: "video4",
    img: VideoThumbnail4,
    alt: "VideoThumbnail4",
    title: "宇宙有道理",
    videoType: "科學 ",
    episode: 1,
    isAdded: false,
  },
  {
    id: "video5",
    img: VideoThumbnail5,
    alt: "VideoThumbnail5",
    title: "直擊暴風眼",
    videoType: "科學探險 ",
    episode: 1,
    isAdded: false,
  },
  {
    id: "video6",
    img: VideoThumbnail6,
    alt: "VideoThumbnail6",
    title: "舊貨獵人",
    videoType: "真人實境秀 ",
    episode: 1,
    isAdded: false,
  },
  {
    id: "video7",
    img: VideoThumbnail7,
    alt: "VideoThumbnail7",
    title: "金礦的賭注",
    videoType: "真人實境秀 ",
    episode: 1,
    isAdded: false,
  },
];

function AddFilm() {
  const [addFilm, setAddFilm] = useState(initialFilms);

  const handleToggleAdd = (id) => {
    setAddFilm((prevFilms) =>
      prevFilms.map((film) =>
        film.id === id ? { ...film, isAdded: !film.isAdded } : film
      )
    );
  };

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
              <button className="back-btn">
                <img src={search} alt="search" className="icon-sm " />
              </button>
              <input
                type="text"
                placeholder="搜尋"
                id="searchInput"
                className="text-neutral-100"
              />
            </div>
          </div>
        </div>
        <p className="text-l text-md-h6 text-lg-h5 text-neutral-100 mb-s mb-md-m mb-md-l font-bold text-center">
          已收藏影片
        </p>
        <ul className="flex flex-col gap-s mt-s mr-m ml-m mb-xl">
          {addFilm.map((film) => (
            <AddFilmItem
              key={film.id}
              film={film}
              onToggleAdd={handleToggleAdd}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default AddFilm;
