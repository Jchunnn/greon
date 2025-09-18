import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import home from "../assets/images/icons/home.svg";
import homeActive from "../assets/images/icons/home-active.svg";
import category from "../assets/images/icons/category.svg";
import categoryActive from "../assets/images/icons/category-active.svg";
import history from "../assets/images/icons/history.svg";
import historyActive from "../assets/images/icons/history-active.svg";
import circleAccount from "../assets/images/icons/circle-account.svg";
import circleAccountActive from "../assets/images/icons/circle-account-active.svg";

import "./AppNav.css";

import NavItem from "./NavItem";
import AccountNav from "./AccountNav";

const navItems = [
  {
    to: "/app/home",
    icon: home,
    activeIcon: homeActive,
    alt: "home",
    label: "首頁",
    noNavigate: false,
  },
  {
    to: "/app/category",
    icon: category,
    activeIcon: categoryActive,
    alt: "category",
    label: "分類",
    noNavigate: false,
  },
  {
    to: "/app/history",
    icon: history,
    activeIcon: historyActive,
    alt: "history",
    label: "紀錄",
    noNavigate: false,
  },
  {
    to: "/app/account",
    icon: circleAccount,
    activeIcon: circleAccountActive,
    alt: "account",
    label: "個人",
    noNavigate: true,
    isModalBtn: true,
    modalId: "accountNavication",
    modalContent: <AccountNav />,
    overlayCustomClass: "mt-app-header app-nav-account-overlay",
    styledModalCustomClass: "container",
  },
];

function AppNav() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const defaultButtonClass = "app-nav-btn";

  const handleActiveTab = (tab) => {
    setActiveTab(tab.to);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/app/account")) {
      setActiveTab("/app/account");
    }
  }, [location.pathname]);

  return (
    <nav>
      <div className="px-4 bg-neutral-900">
        <div className="py-xxs px-m">
          <ul className="flex justify-between items-center">
            {navItems.map((item) => {
              const isActive = activeTab === item.to;
              // console.log(`${item.label} isActive`, isActive);
              return (
                <li key={item.to}>
                  <NavItem
                    key={item.to}
                    buttonClass={defaultButtonClass}
                    to={item.to}
                    noNavigate={item.noNavigate}
                    isModalBtn={item.isModalBtn}
                    modalId={item.modalId}
                    modalContent={item.modalContent}
                    modalCloseBtn={false}
                    overlayCustomClass={item.overlayCustomClass}
                    styledModalCustomClass={item.styledModalCustomClass}
                    onClick={() => handleActiveTab(item)}
                  >
                    <img
                      src={isActive ? item.activeIcon : item.icon}
                      alt={item.alt}
                      className="app-nav-icon-size mb-xs"
                    />
                    <h3
                      className={`text-neutral-0 text-xs text-lg-m ${
                        isActive ? "app-nav-active-text" : ""
                      }`.trim()}
                    >
                      {item.label}
                    </h3>
                  </NavItem>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNav;
