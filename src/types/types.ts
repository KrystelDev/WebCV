import { IconType } from "react-icons";

export interface SideBarMenuItem{
    id: string;
    label: string;
    icon: IconType;
    url: string;
}

export interface SideBarMenuCard{
    id: string;
    displayName: string;
    photoUrl: any;
    title: string;
    url: string;
}