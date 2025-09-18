import { useState } from "react";

import logo from "../assets/images/LOGO/logo-icon.svg";
import vip from "../assets/images/icons/vip.svg";
import nightModeWhite from "../assets/images/icons/Night_Mode_white.svg";
import nightModeYellow from "../assets/images/icons/Night_Mode-yellow.svg";

import Button from "../ui/Button";

import "./AppHeader.css";

function AppHeader() {
  const [isNightModeWhite, setIsNightModeWhite] = useState(true);

  return (
    <header className="w-full fixed bg-neutral-900 app-header-position">
      <div className="px-m bg-neutral-900">
        <div className="py-s">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="logo-icon" className="logo-icon" />
            </div>

            <div className="flex items-center">
              <span className="material-symbols-rounded text-neutral-100 mr-xs mr-md-l search-icon">
                search
              </span>
              <img src={vip} alt="vip" className="mr-xs mr-md-l vip-icon" />
              <Button onClick={() => setIsNightModeWhite((prev) => !prev)}>
                <img
                  src={isNightModeWhite ? nightModeWhite : nightModeYellow}
                  alt="night-mode-white"
                  className="night-mode"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
