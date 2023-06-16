import Filter from "../assets/filtro.svg";
import Menu from "../assets/menu.svg";

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
