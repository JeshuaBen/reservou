import Filter from "../assets/svg/filtro.svg";
import Menu from "../assets/svg/menu.svg";

export const selectIcon = (icon: string) => {
  switch (icon) {
    case "menu":
      return Menu;
    case "filter":
      return Filter;

    default:
      return null;
  }
};
