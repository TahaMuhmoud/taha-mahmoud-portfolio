import React from "react";

export type ChildrenType = React.JSX.Element | React.JSX.Element[];
export enum ModeEnum {
  LIGHT = "light",
  DARK = "dark",
}
export interface SkillType {
  id: number;
  created_at: string;
  title: string;
  logo: string;
}
export interface ProjectType {
  name: string;
  img: string;
  logo: string;
  visite_link: string;
  technologies: SkillType[];
}
