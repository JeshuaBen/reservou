import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

export interface IServiceCard extends TouchableOpacityProps {
  title: string;
  Image: ImageSourcePropType;
  backgroundColor?: string;
  textColor: string;
}
