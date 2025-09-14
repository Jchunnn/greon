import { useState } from "react";

import player from "../assets/images/Player/Player.svg";
import VideoControl from "../assets/images/Player/Video-Control.svg";
import PlayerBar from "../assets/images/Player/Player-Bar.svg";
import lock from "../assets/images/icons/lock.svg";
import unlock from "../assets/images/icons/unlock.svg";
import arrowLeft from "../assets/images/icons/arrow-left.svg";
import arrowRight from "../assets/images/icons/arrow-right.svg";
import arrowRightWithBackground from "../assets/images/icons/arrow-right-with-background.svg";
import dashCircleWithGreenTriangle from "../assets/images/icons/dash-circle-with-green-triangle.svg";
import greenTriangle from "../assets/images/icons/green-triangle.svg";
import greenArrowRight from "../assets/images/icons/green-arrow-right.svg";
import nightModeYellow from "../assets/images/icons/Night_Mode-yellow.svg";
import greenCircleCheck from "../assets/images/icons/green-circle-check.svg";

import "./UsageTutorial.css";
import Button from "../ui/Button";

function UsageTutorial() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <div className="mx-md-4xl my-4xl my-md-0 relative">
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="usage-tutorial-arrow-left"
          />
          <img src={unlock} alt="unlock" className="usage-tutorial-unlock" />
          <img
            src={arrowRight}
            alt="arrow-right"
            className="usage-tutorial-arrow-right"
          />
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <div className="usage-tutorial-overlay"></div>
            <img src={player} alt="player" className="fullscreen-img" />
            <h1 className="usage-tutorial-title">
              野外求生21天 第一季 第一集 無腿障礙
            </h1>
            <img
              src={VideoControl}
              alt="video-control"
              className="usage-tutorial-video-control-icon"
            />
            <img
              src={PlayerBar}
              alt="player-bar"
              className="usage-tutorial-player-bar"
            />
            <img
              src={dashCircleWithGreenTriangle}
              alt="dash-circle-with-green-triangle"
              className="usage-tutorial-dash-circle-with-green-triangle"
            />

            <div className="usage-tutorial-text-box-1-position">
              <div className="usage-tutorial-text-box-1">
                <p className="font-bold text-success-200 text-s text-lg-xl mb-xs">
                  雙擊螢幕兩下
                </p>
                <p className="text-xs text-lg-l usage-tutorial-text-light-paragraph mb-s">
                  可快速蒐藏精選時刻喔
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-lg-l usage-tutorial-text-light-paragraph">
                    1/2
                  </div>
                  <Button
                    otherClass="text-xs text-lg-l text-primary-500"
                    onClick={() => setStep(2)}
                  >
                    <div className="flex flex-row items-center">
                      <span className="inline-block whitespace-nowrap py-xxs">
                        下一則
                      </span>
                      <img
                        src={greenArrowRight}
                        alt="green-arrow-right"
                        className="flex flex-row justify-center items-center usage-tutorial-green-arrow-right"
                      />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mx-md-4xl my-4xl my-md-0 relative">
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="usage-tutorial-arrow-left"
          />
          <img src={unlock} alt="unlock" className="usage-tutorial-unlock" />
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <div className="usage-tutorial-overlay"></div>
            <img src={player} alt="player" className="fullscreen-img" />
            <h1 className="usage-tutorial-title">
              野外求生21天 第一季 第一集 無腿障礙
            </h1>
            <img
              src={VideoControl}
              alt="video-control"
              className="usage-tutorial-video-control-icon"
            />
            <img
              src={arrowRightWithBackground}
              alt="arrow-right-with-background"
              className="usage-tutorial-arrow-right-with-background"
            />
            <img
              src={PlayerBar}
              alt="player-bar"
              className="usage-tutorial-player-bar"
            />
            <img
              src={greenTriangle}
              alt="green-triangle"
              className="usage-tutorial-green-triangle"
            />

            <div className="usage-tutorial-text-box-2-position">
              <div className="usage-tutorial-text-box-2">
                <p className="font-bold text-success-200 text-s text-lg-xl mb-xs">
                  向右展開面板
                </p>
                <p className="text-xs text-lg-l usage-tutorial-text-light-paragraph mb-s">
                  可以看到其他集數喔
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-lg-l usage-tutorial-text-light-paragraph">
                    2/2
                  </div>
                  <Button
                    otherClass="text-xs text-lg-l text-primary-500"
                    onClick={() => setStep(3)}
                  >
                    <div className="flex flex-row items-center">
                      <span className="inline-block whitespace-nowrap py-xxs">
                        知道了
                      </span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mx-md-4xl my-4xl my-md-0 relative">
          <Button otherClass="usage-tutorial-lock" onClick={() => setStep(4)}>
            <img src={lock} alt="uock" />
          </Button>
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <img src={player} alt="player" className="fullscreen-img" />
            <h1 className="usage-tutorial-title">
              野外求生21天 第一季 第一集 無腿障礙
            </h1>
          </div>
        </div>
      )}

      {step === 4 && (
        <div
          className="mx-md-4xl my-4xl my-md-0 relative"
          onClick={() => setStep(5)}
        >
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="usage-tutorial-arrow-left"
          />
          <img src={unlock} alt="unlock" className="usage-tutorial-unlock" />
          <img
            src={arrowRight}
            alt="arrow-right"
            className="usage-tutorial-arrow-right"
          />
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <img src={player} alt="player" className="fullscreen-img" />
            <h1 className="usage-tutorial-title">
              野外求生21天 第一季 第一集 無腿障礙
            </h1>
            <img
              src={VideoControl}
              alt="video-control"
              className="usage-tutorial-video-control-icon"
            />
            <img
              src={PlayerBar}
              alt="player-bar"
              className="usage-tutorial-player-bar"
            />
          </div>
        </div>
      )}

      {step === 5 && (
        <div
          className="mx-md-4xl my-4xl my-md-0 relative"
          onClick={() => setStep(6)}
        >
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <img src={player} alt="player" className="fullscreen-img" />
          </div>
        </div>
      )}

      {step === 6 && (
        <div
          className="mx-md-4xl my-4xl my-md-0 relative"
          onClick={() => setStep(7)}
        >
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <div className="usage-tutorial-overlay"></div>
            <img src={player} alt="player" className="fullscreen-img" />

            <div className="usage-tutorial-sleep-reminder-modal-position">
              <div className="usage-tutorial-sleep-reminder-modal">
                <div className="flex mb-l">
                  <img
                    src={nightModeYellow}
                    alt="night-mode-yellow"
                    className="usage-tutorial-night-mode-yellow mr-s"
                  />
                  <div>
                    <div className="flex items-center mb-s">
                      <h4 className="font-bold text-m text-lg-l text-neutral-0 mr-s">
                        你的睡眠時間到囉
                      </h4>
                      <span className="font-bold text-success-200 text-xs text-lg-s">
                        還剩:12:29
                      </span>
                    </div>
                    <p className="text-neutral-0 text-s text-lg-m mb-s">
                      早睡有益身體健康，明天繼續觀看
                    </p>
                    <p className="text-neutral-0 text-s text-lg-m underline">
                      新增筆記
                    </p>
                  </div>
                </div>
                <div className="flex px-xs gap-m">
                  <Button btnStyle="tertiary">繼續觀看</Button>
                  <Button btnStyle="primary">結束影片</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 7 && (
        <div
          className="mx-md-4xl my-4xl my-md-0 relative"
          onClick={() => setStep(8)}
        >
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <img src={player} alt="player" className="fullscreen-img" />
          </div>
        </div>
      )}

      {step === 8 && (
        <div
          className="mx-md-4xl my-4xl my-md-0 relative"
          onClick={() => setStep(9)}
        >
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <img src={player} alt="player" className="fullscreen-img" />

            <div className="usage-tutorial-saved-moments-modal-position">
              <div className="usage-tutorial-saved-moments-modal">
                <div className="flex mb-l">
                  <img
                    src={greenCircleCheck}
                    alt="green-circle-check"
                    className="usage-tutorial-green-circle-check mr-s"
                  />
                  <div>
                    <div className="flex items-center mb-s">
                      <h4 className="font-bold text-m text-lg-l text-neutral-0 mr-s">
                        已收藏時刻
                      </h4>
                      <span className="font-bold text-success-200 text-xs text-lg-s">
                        還剩:12:29
                      </span>
                    </div>
                    <p className="text-neutral-0 text-s text-lg-m mb-s">
                      點擊時間軸三角形記號，重播精彩時刻
                    </p>
                    <p className="text-neutral-0 text-s text-lg-m underline">
                      新增筆記
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 9 && (
        <div className="mx-md-4xl my-4xl my-md-0 relative">
          <Button otherClass="usage-tutorial-arrow-left" to="/app/home">
            <img src={arrowLeft} alt="arrow-left" />
          </Button>
          <img src={unlock} alt="unlock" className="usage-tutorial-unlock" />
          <div className="relative overflow-hidden usage-tutorial-width-height">
            <img src={player} alt="player" className="fullscreen-img" />
            <h1 className="usage-tutorial-title">
              野外求生21天 第一季 第一集 無腿障礙
            </h1>
            <img
              src={VideoControl}
              alt="video-control"
              className="usage-tutorial-video-control-icon"
            />
            <img
              src={PlayerBar}
              alt="player-bar"
              className="usage-tutorial-player-bar"
            />
          </div>
          <img
            src={greenTriangle}
            alt="green-triangle"
            className="usage-tutorial-green-triangle"
          />
        </div>
      )}
    </>
  );
}

export default UsageTutorial;
