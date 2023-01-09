import { Link } from "react-router-dom";

import { SideBarMenuCard } from "../types/types";
import classNames from "../util/classes";
import "./SideBarMenuCardView.scss";

interface SideBarMenuCardViewProps {
  card: SideBarMenuCard;
  isOpen: boolean;
}

const SideBarMenuCardView = ({card, isOpen}: SideBarMenuCardViewProps) => {
  return (
    <div className="SideBarMenuCardView">
      <Link to="">
        <img src={card.photoUrl} alt="Foto del perfil" className="profile" width="100%" />
      </Link>
      
      <div className={classNames('profileInfo', isOpen? "" : 'collapsed')}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <Link to="">Ir al perfil</Link>
        {/* <div className="url"><a href={card.url} rel="noreferrer">Ir al perfil</a></div> */}
      </div>
    </div>
  )
}

export default SideBarMenuCardView