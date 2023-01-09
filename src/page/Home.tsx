import  {SideBarMenu}  from "../components/SideBarMenu";
import { SideBarMenuItem, SideBarMenuCard } from "../types/types";
import FrameWork from "./FrameWork";


interface HomeProps {
  items: SideBarMenuItem[];
  card: SideBarMenuCard;
}

const Home = ({items, card}: HomeProps) => {
  return (
    <>
      <SideBarMenu items={items} card={card}/>
      <FrameWork />
    </>
  )
}

export default Home