import arrowLeft from "../assets/images/icons/arrow-left.svg";
import btnListMore from "../assets/images/icons/btn-list-more.svg";
import btnAdd from "../assets/images/icons/add-btn.svg";
import playList from "../assets/images/icons/play-list.svg";
import goldenCrown from "../assets/images/icons/crown-golden.svg";
import menuEditIcon from "../assets/images/icons/menu-edit.svg";
import videoLibraryIcon from "../assets/images/icons/video-library.svg";
import removeIcon from "../assets/images/icons/remove.svg";

import FavListVideoCover1 from "../assets/images/Personal_Page_Fav/FavListVideoCover_1.svg";
import FavListVideoCover2 from "../assets/images/Personal_Page_Fav/FavListVideoCover_2.svg";
import FavListVideoCover3 from "../assets/images/Personal_Page_Fav/FavListVideoCover_3.svg";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import "./FavoriteItem.css";

import { useState } from "react";
import { useNavigate } from "react-router";

// 在同一個檔案中或另外創建
function CreatePlaylistForm({ onCloseModal }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const navigate = useNavigate();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setPlaylistName(value);
    setHasValue(value.length > 0);
  };
  const handleSubmit = () => {
    if (playlistName.trim()) {
      const existingPlaylists = JSON.parse(
        localStorage.getItem("playlists") || "[]"
      );
      const newPlaylist = {
        id: Date.now(),
        name: playlistName.trim(),
        videos: [],
        createdAt: new Date().toISOString(),
      };

      existingPlaylists.push(newPlaylist);
      localStorage.setItem("playlists", JSON.stringify(existingPlaylists));

      onCloseModal();

      navigate(`/app/playlist/${encodeURIComponent(playlistName.trim())}`, {
        state: { isNew: true },
      });
    }
  };

  return (
    <div className="p-6 text-neutral-100">
      <h2 className="text-h6 text-neutral-100 mb-m">建立新播放清單</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder=" "
          className="input-field"
          id="playlist-title"
          value={playlistName}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor="playlist-title" className="input-label">
          {hasValue ? "" : isFocused ? "標題" : "請輸入標題"}
        </label>
      </div>
      <div className="gap-m flex">
        <Button
          otherClass="flex-1 bg-neutral-100 py-xs py-md-s pill-rounded"
          onClick={onCloseModal}
        >
          取消
        </Button>
        <Button
          otherClass={`flex-1 bg-neutral-100 py-xs py-md-s pill-rounded btn-create ${
            isFocused || hasValue
              ? "activate"
              : "bg-neutral-400 text-neutral-900"
          }`}
          onClick={handleSubmit}
          isDisabled={!playlistName.trim()}
        >
          建立
        </Button>
      </div>
    </div>
  );
}

function PlaylistMenu({ onCloseModal }) {
  return (
    <div className="playlist-menu">
      <Button otherClass="menu-item" onClick={onCloseModal}>
        <img src={menuEditIcon} alt="edit" />
        <span>編輯</span>
      </Button>
      <Button
        otherClass="menu-item"
        onClick={onCloseModal}
        to="/app/account/add-film"
      >
        <img src={videoLibraryIcon} alt="add" />
        <span>新增</span>
      </Button>
      <Button otherClass="menu-item delete" onClick={onCloseModal}>
        <img src={removeIcon} alt="remove" />
        <span>刪除</span>
      </Button>
    </div>
  );
}

function FavoriteItem() {
  return (
    <>
      <main className="mt-app-header">
        <div className="container">
          <div className="flex items-center mb-l">
            <Button otherClass="flex items-center mr-s" to="/app/home">
              <img src={arrowLeft} alt="arrow left" />
            </Button>
            <h1 className="text-h6 text-neutral-100">收藏片單</h1>
          </div>
        </div>
        <section className="mb-m">
          <div className="container">
            <ul className="row gap-xs">
              <li className="col-4 flex">
                <div className="col-2">
                  <div className="relative">
                    <img src={FavListVideoCover3} alt="favorite list image" />
                    <div className="tag p-xxs absolute flex items-center bg-neutral-900">
                      <img
                        src={playList}
                        alt="play list icon"
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <span className="text-neutral-100 text-xs font-bold">
                        1部影片
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-2 text-neutral-100">
                  <div className="flex justify-between items-center mb-xs">
                    <h2 className="text-md-xl text-l font-bold">電影</h2>
                    <Modal>
                      <Modal.Open opens="playlist-menu">
                        <Button>
                          <img src={btnListMore} alt="more" />
                        </Button>
                      </Modal.Open>
                      <Modal.Window
                        name="playlist-menu"
                        styledModalCustomClass="bottom-sheet"
                        needCloseBtn={false}
                        showOverlay={false}
                      >
                        <PlaylistMenu></PlaylistMenu>
                      </Modal.Window>
                    </Modal>
                  </div>
                  <p className="text-xs text-md-s">看完整清單</p>
                </div>
              </li>
              <li className="col-4 flex">
                <div className="col-2">
                  <div className="relative">
                    <img src={FavListVideoCover2} alt="favorite list image" />
                    <div className="tag p-xxs absolute flex items-center bg-neutral-900">
                      <img
                        src={playList}
                        alt="play list icon"
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <span className="text-neutral-100 text-xs font-bold">
                        1部影片
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-2 text-neutral-100">
                  <div className="flex justify-between items-center mb-xs">
                    <h2 className="text-md-xl text-l font-bold">紀錄片</h2>
                    <Button>
                      <img src={btnListMore} alt="more" />
                    </Button>
                  </div>
                  <p className="text-xs text-md-s">看完整清單</p>
                </div>
              </li>
              <li className="col-4 flex">
                <div className="col-2">
                  <div className="relative">
                    <img src={FavListVideoCover1} alt="favorite list image" />
                    <div className="tag p-xxs absolute flex items-center bg-neutral-900">
                      <img
                        src={playList}
                        alt="play list icon"
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <span className="text-neutral-100 text-xs font-bold">
                        1部影片
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-2 text-neutral-100">
                  <div className="flex justify-between items-center mb-xs">
                    <h2 className="text-md-xl text-l font-bold">動漫</h2>
                    <Button>
                      <img src={btnListMore} alt="more" />
                    </Button>
                  </div>
                  <p className="text-xs text-md-s">看完整清單</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="container">
          <Modal>
            <Modal.Open opens="create-playlist">
              <Button otherClass="col-4">
                <div className="create-play-list py-xl flex items-center justify-center relative">
                  <div className="vip-tag bg-success-200 py-xs px-s absolute flex items-center">
                    <img
                      src={goldenCrown}
                      alt="golden crown icon"
                      className="mr-xxs"
                    />
                    <span className="font-bold text-s text-neutral-100">
                      VIP
                    </span>
                  </div>
                  <img
                    src={btnAdd}
                    alt="add button"
                    className="add-button-icon mr-m"
                  />
                  <p className="text-neutral-100 text-h6 font-bold">
                    {" "}
                    建立新播放清單
                  </p>
                </div>
              </Button>
            </Modal.Open>
            <Modal.Window
              styledModalCustomClass="custom-dark-modal"
              name="create-playlist"
            >
              <CreatePlaylistForm></CreatePlaylistForm>
            </Modal.Window>
          </Modal>
        </section>
      </main>
    </>
  );
}

export default FavoriteItem;
