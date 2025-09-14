import arrowLeft from "../assets/images/icons/arrow-left.svg";
import progressBar from "../assets/images/icons/progress-bar.svg";
import playing from "../assets/images/icons/playing.svg";
import infoPageTop from "../assets/images/Info_Page/info_Page_Top.svg";
import likeGreen from "../assets/images/icons/like-green.svg";
import like from "../assets/images/icons/like.svg";
import share from "../assets/images/icons/share.svg";
import plusList from "../assets/images/icons/plus-list.svg";
import arrowDown from "../assets/images/icons/arrow-down.svg";
import episode1 from "../assets/images/Info_Page/Info_Page_Episode_1.svg";
import episode2 from "../assets/images/Info_Page/Info_Page_Episode_2.svg";
import episode3 from "../assets/images/Info_Page/Info_Page_Episode_3.svg";
import episode4 from "../assets/images/Info_Page/Info_Page_Episode_4.svg";
import checkcircle from "../assets/images/icons/checkcircle.svg";

import Tag from "../ui/Tag";
import Button from "../ui/Button";
import FilmEpisode from "../components/FilmEpisode";
import EndLine from "../components/EndLine";

import "./Film.css";
import Modal from "../ui/Modal";
import { useEffect, useState } from "react";

const filmSeriesEpisode = [
  {
    id: 1,
    img: episode1,
    alt: "episode1",
    title: "1.無腿無礙",
    timeTitle: true,
    time: 29,
    describe:
      "節目史上首位雙腿截肢的求生者，攜手退役軍人闖進貝里斯密林，力拼撐過21天極限挑戰。",
  },
  {
    id: 2,
    img: episode2,
    alt: "episode2",
    title: "2.縫了17針",
    timeTitle: false,
    time: 24,
    describe: "一名負傷上陣的冒險者與一名謹慎的新婚者要在菲律賓求生21天。",
  },
  {
    id: 3,
    img: episode3,
    alt: "episode3",
    title: "3.蛇之海灣",
    timeTitle: false,
    time: 30,
    describe:
      "一位怕蛇怕到要命的退伍軍人和他的搭檔在致命的菲律賓叢林中試圖撐過21天。",
  },
  {
    id: 4,
    img: episode4,
    alt: "episode4",
    title: "4.美女與莽漢",
    timeTitle: true,
    time: 29,
    describe:
      "一名單身漢與剛離婚的女子，在菲律賓偏遠島嶼上展開為期14天的觀眾挑戰，可是最難應付的竟是彼此。",
  },
];

const initialFormData = {
  watchLater: false,
  exercise: false,
  newList: false,
  title: "",
};

const handleAddFilmToPlayliatSuccessMsg = () => {
  const addFilmToPlayliaFormData = JSON.parse(
    localStorage.getItem("addFilmToPlayliaFormData")
  );

  const msgList = [];

  if (addFilmToPlayliaFormData.watchLater) {
    msgList.push("「稍後觀看」");
  }

  if (addFilmToPlayliaFormData.exercise) {
    msgList.push("「運動」");
  }

  if (addFilmToPlayliaFormData.newList && addFilmToPlayliaFormData.title) {
    msgList.push(`「${addFilmToPlayliaFormData.title}」`);
  }

  return msgList.length ? msgList.join("、 ") : "";
};

function AddFilmToPlayliat({ onCloseModal, onSetShowMsg }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (field) => (e) => {
    const value = field === "title" ? e.target.value : e.target.checked;

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const dataToSubmit = {
      ...formData,
      title: formData.newList ? formData.title : "",
    };

    localStorage.setItem(
      "addFilmToPlayliaFormData",
      JSON.stringify(dataToSubmit)
    );

    setFormData(initialFormData);

    onSetShowMsg(true);
    onCloseModal();
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <div className="relative p-m">
        <Button
          onClick={onCloseModal}
          otherClass="absolute add-film-to-playliat-close-btn-position"
        >
          <span className="material-symbols-rounded text-neutral-100">
            close
          </span>
        </Button>
        <h5 className="text-h6 mb-m">加入播放清單</h5>
        <div className="flex flex-col gap-m text-m ml-m">
          <label className="add-film-to-playliat-custom-checkbox">
            <input
              type="checkbox"
              checked={formData.watchLater}
              onChange={handleChange("watchLater")}
            />
            <span className="checkmark" />
            稍後觀看
          </label>
          <label className="add-film-to-playliat-custom-checkbox">
            <input
              type="checkbox"
              checked={formData.exercise}
              onChange={handleChange("exercise")}
            />
            <span className="checkmark" />
            運動
          </label>
          <label className="add-film-to-playliat-custom-checkbox">
            <input
              type="checkbox"
              checked={formData.newList}
              onChange={handleChange("newList")}
            />
            <span className="checkmark" />
            新增清單
          </label>
          {formData.newList && (
            <div className="relative">
              <input
                type="text"
                id="film-playlist-title"
                value={formData.title}
                onChange={handleChange("title")}
                placeholder=""
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="add-film-to-playliat-text-input-field"
              />
              <label
                htmlFor="film-playlist-title"
                className="add-film-to-playliat-text-input-label"
              >
                {isFocused || formData.title.length ? "標題" : "請輸入標題"}
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="px-xs pt-xs pb-m flex gap-m">
          <Button onClick={onCloseModal} btnStyle="tertiary" otherClass="">
            取消
          </Button>
          <Button onClick={handleSubmit} btnStyle="primary">
            完成
          </Button>
        </div>
      </div>
    </div>
  );
}

function SuccessMsgModal() {
  return (
    <div className="success-msg-modal-position">
      <div className="success-msg-modal">
        <div className="flex gap-s">
          <img
            src={checkcircle}
            alt="checkcircle"
            className="success-msg-modal-checkcircle-icon"
          />
          <div className="text-neutral-0">
            <p className="font-bold">已新增至播放清單</p>
            <p className="text-s">
              已新增至 {handleAddFilmToPlayliatSuccessMsg()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Film() {
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (!showMsg) return;

    const timer = setTimeout(() => {
      setShowMsg(false);
      localStorage.removeItem("addFilmToPlayliaFormData");
    }, 2000);

    return () => clearTimeout(timer);
  }, [showMsg]);

  return (
    <>
      <div>
        <div className="relative">
          <img src={infoPageTop} alt="info-page-top" />
          <p className="absolute film-play-time font-bold text-xxs text-md-m text-lg-xl text-neutral-100">
            8:00 / <span className="film-total-time-text">00:29:14</span>
          </p>
          <Button to="/app/home">
            <img
              src={arrowLeft}
              alt="arrow-left"
              className="absolute film-arrow-left"
            />
          </Button>
          <img
            src={progressBar}
            alt="progress-bar"
            className="absolute film-progress-bar"
          />
          <img
            src={playing}
            alt="playing"
            className="absolute film-playing-icon"
          />
        </div>
        <div className="m-m">
          <h1 className="font-bold text-neutral-0 film-title mb-s">
            原始生活21天
          </h1>
          <div className="flex justify-between items-center mb-s">
            <div className="flex gap-xs">
              <Tag
                backgroundColor="#2E7D32"
                textColor="#F5F5F5"
                customClass="py-xxs py-lg-xs px-xs px-s flex items-center justify-center border-radius-1000"
              >
                影集
              </Tag>
              <Tag
                backgroundColor="#2E7D32"
                textColor="#F5F5F5"
                customClass="py-xxs py-lg-xs px-xs px-s flex items-center justify-center border-radius-1000"
              >
                新集數
              </Tag>
              <Tag
                textColor="#44A40C"
                customClass="py-xxs py-lg-xs px-xs px-s flex items-center justify-center border-radius-1000 film-tag-border"
              >
                VIP
              </Tag>
            </div>
            <div className="flex items-center">
              <img
                src={likeGreen}
                alt="like"
                className="mr-xxs like-green-icon"
              />
              <span className="text-primary-400 font-bold text-s text-lg-m">
                4K
              </span>
            </div>
          </div>
          <div className="mb-s">
            <p className="text-m text-lg-xl text-neutral-100">
              《原始生活21天》將「適者生存」這句話提升到全新境界。每一週都有一識的男女身...
              <span className="text-xs text-lg-l text-neutral-500">
                顯示完整內容
              </span>
            </p>
          </div>
          <ul className="flex justify-center justify-lg-start items-center gap-m">
            <li>
              <Button>
                <img src={like} alt="like" className="like-icon" />
              </Button>
            </li>
            <li>
              <Button>
                <img src={share} alt="share" className="share-icon" />
              </Button>
            </li>
            <li>
              <Modal>
                <Modal.Open opens="add-film-to-playliat">
                  <Button>
                    <img
                      src={plusList}
                      alt="plus-list"
                      className="plus-list-icon"
                    />
                  </Button>
                </Modal.Open>
                <Modal.Window
                  name="add-film-to-playliat"
                  styledModalCustomClass="add-film-to-playliat-modal"
                  needCloseBtn={false}
                >
                  <AddFilmToPlayliat onSetShowMsg={setShowMsg} />
                </Modal.Window>
              </Modal>
            </li>
          </ul>
        </div>
        <ul className="w-full flex mb-m">
          <li className="film-tab-width text-center film-tab-active-border-bottom">
            <Button otherClass="py-m font-bold text-s text-lg-xl text-primary-400">
              影集
            </Button>
          </li>
          <li className="film-tab-width text-center film-tab-border-bottom">
            <Button otherClass="py-m font-bold text-s text-lg-xl text-neutral-200">
              精選時刻
            </Button>
          </li>
          <li className="film-tab-width text-center film-tab-border-bottom">
            <Button otherClass="py-m font-bold text-s text-lg-xl text-neutral-200">
              推薦
            </Button>
          </li>
        </ul>
        <div className="m-m">
          <div className="flex justify-between items-center series-gap series-padding series-border bg-neutral-800 text-neutral-0 w-fit-content">
            <p>第一季</p>
            <img src={arrowDown} alt="arrow-down" className="arrow-down-icon" />
          </div>
        </div>

        <ul className="flex flex-col gap-m mt-m mr-m ml-m mb-4xl">
          {filmSeriesEpisode.map((episode) => (
            <FilmEpisode key={episode.id} episode={episode} />
          ))}
        </ul>

        <EndLine />
      </div>
      {showMsg && <SuccessMsgModal />}
    </>
  );
}

export default Film;
