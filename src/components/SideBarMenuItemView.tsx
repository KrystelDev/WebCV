import { Link } from "react-router-dom";
import { SideBarMenuItem } from "../types/types";
import classNames from "../util/classes";
import "./SideBarMenuItemView.scss";

interface SideBarMenuItemViewProps {
  item: SideBarMenuItem;
  isOpen: boolean;
}

export const SideBarMenuItemView = ({
  item,
  isOpen,
}: SideBarMenuItemViewProps) => {
  return (
    <div className="SideBarMenuItem">
      <div className={classNames("itemContent", isOpen ? "" : "collapsed")}>
          <Link to="/FrameWork">
            <div className="icon">
              <item.icon size="32" />
            </div>
            {isOpen && <span className="lable">{item.label}</span>}
          </Link>
      </div>

      {!isOpen && (
        <div className="tooltip" id={item.id}>
          {" "}
          {item.label}{" "}
        </div>
      )}
    </div>
  );
};
