import { useTheme } from "styled-components";
import * as S from "./styles";
import { IInputBox } from "./types";
import { ForwardedRef, Ref, forwardRef } from "react";
import { TextInput } from "react-native";

interface InputBoxProps extends IInputBox {}

const InputBox = forwardRef<TextInput, InputBoxProps>(
  (
    {
      value,
      title,
      onBlur,
      onChange,
      placeholder,
      visibility = false,
      passwordInput,
      toggleVisibility,
      error,
    },
    ref: ForwardedRef<TextInput>
  ) => {
    const theme = useTheme();
    return (
      <S.FormContainer>
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.InputWrapper
            style={{ borderColor: error ? "red" : theme.colors.gray }}
          >
            <S.Input
              ref={ref as any}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={passwordInput && !visibility}
            />
            {passwordInput && (
              <S.ToggleVisibility onPress={() => toggleVisibility(!visibility)}>
                <S.Visibility
                  size={24}
                  name={visibility ? "eye-off" : "eye"}
                  color={theme.colors.gray}
                />
              </S.ToggleVisibility>
            )}
          </S.InputWrapper>
        </S.Container>
        <S.Error>{error}</S.Error>
      </S.FormContainer>
    );
  }
);

export default InputBox;
