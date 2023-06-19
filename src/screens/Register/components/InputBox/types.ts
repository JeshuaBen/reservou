import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export interface IInputBox {
  title: string;
  placeholder: string;
  onBlur: () => void;
  onChange: (text: string) => void;
  value: string;
  passwordInput?: boolean;
  visibility?: boolean;
  toggleVisibility?: (visibility: boolean) => void;
  error?: string;
}
