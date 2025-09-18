import heroSection1 from "../assets/images/Hero_Section/Hero_Section_1.svg";
import arrowRight from "../assets/images/icons/arrow-right.svg";
import paginationDot from "../assets/images/icons/pagination-dot.svg";
import play from "../assets/images/icons/play.svg";
import top1 from "../assets/images/Top10/TOP10_1.svg";
import top2 from "../assets/images/Top10/TOP10_2.svg";
import top3 from "../assets/images/Top10/TOP10_3.svg";
import top4 from "../assets/images/Top10/TOP10_4.svg";
import top5 from "../assets/images/Top10/TOP10_5.svg";
import top6 from "../assets/images/Top10/TOP10_6.svg";
import top7 from "../assets/images/Top10/TOP10_7.svg";
import top8 from "../assets/images/Top10/TOP10_8.svg";
import top9 from "../assets/images/Top10/TOP10_9.svg";
import top10 from "../assets/images/Top10/TOP10_10.svg";
import continue1 from "../assets/images/Continue/Continue_1.svg/";
import continue2 from "../assets/images/Continue/Continue_2.svg/";
import reconmmand1 from "../assets/images/Recommand/Large_Card_Recommand_1.svg";
import reconmmand2 from "../assets/images/Recommand/Large_Card_Recommand_2.svg";
import art from "../assets/images/Type/Medium_Card_Type_Art.svg";
import food from "../assets/images/Type/Medium_Card_Type_Food.svg";
import liveShow from "../assets/images/Type/Medium_Card_Type_LiveShow.svg";
import music from "../assets/images/Type/Medium_Card_Type_Music.svg";
import record from "../assets/images/Type/Medium_Card_Type_Record.svg";
import science from "../assets/images/Type/Medium_Card_Type_Science.svg";
import social from "../assets/images/Type/Medium_Card_Type_Social.svg";
import taiwan from "../assets/images/Type/Medium_Card_Type_Taiwan.svg";

import Button from "../ui/Button";
import Tag from "../ui/Tag";
import EndSection from "../components/EndSection";

import "./AppHome.css";

const filmTagList = [
  { tag: "電影" },
  { tag: "影集" },
  { tag: "影片分類", icon: arrowRight, al: "arrowRight" },
];

const top10FilmList = [
  { img: top1, rank: 1, alt: "top1-film" },
  { img: top2, rank: 2, alt: "top2-film" },
  { img: top3, rank: 3, alt: "top3-film" },
  { img: top4, rank: 4, alt: "top4-film" },
  { img: top5, rank: 5, alt: "top5-film" },
  { img: top6, rank: 6, alt: "top6-film" },
  { img: top7, rank: 7, alt: "top7-film" },
  { img: top8, rank: 8, alt: "top8-film" },
  { img: top9, rank: 9, alt: "top9-film" },
  { img: top10, rank: 10, alt: "top10-film" },
];

const continueWatchList = [
  {
    img: continue1,
    alt: "continue1",
    film: "石紀元 第二季 EP10",
    timeLeft: "42",
  },
  {
    img: continue2,
    alt: "continue2",
    film: "舊貨獵人 修復篇 第四季 EP2",
    timeLeft: "51",
  },
];

const recommandList = [
  {
    img: reconmmand1,
    alt: "reconmmand1",
    category: "自然科學",
  },
  {
    img: reconmmand2,
    alt: "reconmmand2",
    category: "自然科學",
  },
];

const categoryList = [
  { img: taiwan, alt: "taiwan", category: "台灣區熱門影片" },
  { img: science, alt: "science", category: "自然科學" },
  { img: food, alt: "food", category: "美食料理" },
  { img: liveShow, alt: "live-show", category: "實境秀" },
  { img: record, alt: "record", category: "紀錄片" },
  { img: social, alt: "social", category: "社會人文" },
  { img: music, alt: "music", category: "音樂" },
  { img: art, alt: "art", category: "藝術" },
];

function AppHome() {
  return (
    <>
      <main className="mt-app-header pt-app-home bg-neutral-900">
        <section className="relative overflow-hidden mb-m app-home-section1-img-layout">
          <img
            src={heroSection1}
            alt="hero-section-1"
            className="hero-section-img"
          />
          <ul className="absolute tag-list-position flex">
            {filmTagList.map((tag, index) => (
              <li key={index} className="flex items-center justify-center mr-m">
                <Tag
                  key={index}
                  backgroundColor="#12121266"
                  textColor="#F5F5F5"
                  customClass="py-xs px-s flex items-center justify-center app-home-tag app-home-tag-border"
                >
                  <span className="text-l">{tag.tag}</span>
                  {tag.icon && (
                    <img
                      src={tag.icon}
                      alt={tag.alt}
                      className="ml-xxs app-home-tag-icon"
                    />
                  )}
                </Tag>
              </li>
            ))}
          </ul>
          <div className="absolute flex flex-col w-full pr-20px app-home-film-name-position">
            <Tag
              backgroundColor="#2E7D32"
              textColor="#F5F5F5"
              customClass="w-fit-content py-xxs py-md-xs px-xs px-md-s text-center app-home-film-tag-border"
            >
              <span className="font-bold">熱映中</span>
            </Tag>
            <div className="flex mt-xs">
              <p className="text-neutral-0 text-l">地球的脈動</p>
              <div className="ml-auto">
                <img src={paginationDot} alt="pagination-dot" />
              </div>
            </div>
          </div>
          <div className="absolute app-home-play-icon app-home-play-icon-position">
            <Button to="/app/usage-tutorial">
              <img src={play} alt="play" />
            </Button>
          </div>
        </section>
        <section className="mb-m ml-m">
          <div className="flex justify-between mb-xs mr-10px font-bold text-lg-h5">
            <h2 className="text-neutral-0">台灣區前十點播</h2>
            <Button>
              <img
                src={arrowRight}
                alt="arrowRight"
                className="app-home-section-arrow"
              />
            </Button>
          </div>
          <ul className="flex gap-xs overflow-x-auto scroll-container">
            {top10FilmList.map((film) => (
              <li key={film.rank}>
                <Button to="/film">
                  <img
                    src={film.img}
                    alt={film.alt}
                    className="app-home-rank-film"
                  />
                </Button>
              </li>
            ))}
            <li className="pr-xs"></li>
          </ul>
        </section>
        <section className="mb-m ml-m">
          <div className="flex justify-between mb-xs mr-10px font-bold text-lg-h5">
            <h2 className="text-neutral-0">繼續觀看</h2>
            <Button>
              <img
                src={arrowRight}
                alt="arrowRight"
                className="app-home-section-arrow"
              />
            </Button>
          </div>
          <ul className="flex gap-xs overflow-x-auto scroll-container">
            {continueWatchList.map((watch) => (
              <li key={watch.alt}>
                <div className="relative mb-xs">
                  <img
                    src={watch.img}
                    alt={watch.alt}
                    className="app-home-continue-watch-img"
                  />
                  <div className="absolute app-home-play-icon app-home-play-icon-position-center">
                    <Button to="/app/usage-tutorial">
                      <img src={play} alt="play" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-s text-lg-xl text-neutral-0">
                    {watch.film}
                  </p>
                  <p className="text-xxs text-lg-m text-neutral-500">
                    剩餘時間：{watch.timeLeft}分鐘
                  </p>
                </div>
              </li>
            ))}
            <li className="pr-xs"></li>
          </ul>
        </section>
        <section className="mb-m ml-m">
          <div className="flex justify-between mb-xs mr-10px font-bold text-lg-h5">
            <h2 className="text-neutral-0">專屬推薦</h2>
            <Button>
              <img
                src={arrowRight}
                alt="arrowRight"
                className="app-home-section-arrow"
              />
            </Button>
          </div>
          <ul className="flex gap-xs overflow-x-auto scroll-container">
            {recommandList.map((recommand) => (
              <li key={recommand.alt}>
                <div className="relative mb-xs">
                  <Button to="/film">
                    <img
                      src={recommand.img}
                      alt={recommand.alt}
                      className="app-home-recommand-img"
                    />
                  </Button>
                  <div className="absolute app-home-play-icon-2 app-home-play-icon-position-right-bottom">
                    <Button to="/app/usage-tutorial">
                      <img src={play} alt="play" />
                    </Button>
                  </div>
                  <div className="absolute app-home-recommand-position">
                    <Tag
                      textColor="#ffffff"
                      customClass="w-fit-content py-tiny py-md-xs px-xs px-md-s text-center app-home-recommand-tag-border app-home-liner-gradient-green"
                    >
                      <span className="font-bold">{recommand.category}</span>
                    </Tag>
                  </div>
                </div>
              </li>
            ))}
            <li className="pr-xs"></li>
          </ul>
        </section>
        <section className="mb-m">
          <div className="ml-m">
            <div className="flex justify-between mb-xs mr-10px font-bold text-lg-h5">
              <h2 className="text-neutral-0">分類</h2>
              <Button>
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="app-home-section-arrow"
                />
              </Button>
            </div>
          </div>

          <div className="px-m">
            <ul className="row">
              {categoryList.map((category) => (
                <li
                  key={category.category}
                  className="col-2 col-md-2 col-lg-3 mb-xs"
                >
                  <Button to="/film" otherClass="w-full mb-xs">
                    <img src={category.img} alt={category.alt} />
                  </Button>
                  <p className="text-neutral-0 text-s text-lg-xl">
                    {category.category}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <EndSection />
      </main>
    </>
  );
}

export default AppHome;
