import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";

export interface IHeaderProps {
  leftIcon: React.FC<SvgProps>;
  children: ReactNode;
  rightIcon: React.FC<SvgProps>;
}
