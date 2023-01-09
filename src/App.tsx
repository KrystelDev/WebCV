import { Routes, Route } from "react-router-dom";

import { SideBarMenuItem, SideBarMenuCard } from "./types/types";
import {FcAdvertising} from "react-icons/fc";
import photoPerfil from "./yooo.png";
import Home from "./page/Home";
import FrameWork from "./page/FrameWork";

function App(){
  const item: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Experiencia',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '2',
      label: 'Estudios',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '3',
      label: 'Len',
      icon: FcAdvertising,
      url: '/'
    }
  ]
  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "Krystel Dev",
    photoUrl: photoPerfil,
    title: "Front End Developer",
    url: "/",
  }
  return (
    <div >
      <Routes>
        <Route path="" element={<Home items={item} card={card}/>} />
        <Route path="/FrameWork" element={<FrameWork />} />
      </Routes>
    </div>
  );
}

export default App;
