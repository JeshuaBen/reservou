import { z } from "zod";
import InputBox from "../InputBox";
import * as S from "./styles";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../routes/stack.routes";
import { Platform } from "react-native";

const registryFormSchema = z.object({
  name: z.string().min(3, "Nome obrigatário"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  password: z.string().min(6, "Senha inválida"),

  confirmPassword: z.string().min(6, "Senha inválida"),
});

type RegistryFormData = z.infer<typeof registryFormSchema>;

type RegistryFormProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Register",
    undefined
  >;
};

const RegistryForm = ({ navigation }: RegistryFormProps) => {
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  const [toggleConfirmVisibility, setToggleConfirmVisibility] =
    useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const { control, register, formState, handleSubmit, watch, getValues } =
    useForm<RegistryFormData>({
      resolver: zodResolver(registryFormSchema),
    });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const togglePassword = () => {
    setToggleVisibility(!toggleVisibility);
  };

  const toggleConfirmPassword = () => {
    setToggleConfirmVisibility(!toggleConfirmVisibility);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    formState.errors ? navigation.navigate("Home") : null;
  };

  return (
    <S.Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <S.FormStacker>
        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.FormGroup>
              <InputBox
                title="Nome"
                placeholder="Nome"
                {...register("name")}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              {formState.errors.name && (
                <S.Error>{formState.errors.name.message}</S.Error>
              )}
            </S.FormGroup>
          )}
          name="name"
          defaultValue=""
        />

        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.FormGroup>
              <InputBox
                title="E-mail"
                placeholder="E-mail"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              {formState.errors.email && (
                <S.Error>{formState.errors.email.message}</S.Error>
              )}
            </S.FormGroup>
          )}
          name="email"
          defaultValue=""
        />

        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.FormGroup>
              <InputBox
                title="Telefone"
                placeholder="Telefone"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              {formState.errors.phone && (
                <S.Error>{formState.errors.phone.message}</S.Error>
              )}
            </S.FormGroup>
          )}
          name="phone"
          defaultValue=""
        />

        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.FormGroup>
              <InputBox
                title="Criar senha"
                placeholder="Criar senha"
                passwordInput
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                toggleVisibility={togglePassword}
                visibility={toggleVisibility}
              />

              {formState.errors.password &&
                (!password.includes("@") ||
                !password.includes("#") ||
                !password.includes("$") ||
                !password.includes("%") ||
                !password.includes("*") ? (
                  <S.Error>A senha está muito fraca</S.Error>
                ) : (
                  <S.Error>{formState.errors.password.message}</S.Error>
                ))}
            </S.FormGroup>
          )}
          name="password"
          defaultValue=""
        />

        <Controller
          rules={{
            required: true,
          }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <S.FormGroup>
              <InputBox
                title="Confirmar senha"
                placeholder="Confirmar senha"
                passwordInput
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                toggleVisibility={toggleConfirmPassword}
                visibility={toggleConfirmVisibility}
              />
              {formState.errors.confirmPassword &&
                (confirmPassword !== password ? (
                  <S.Error>As senhas não coincidem</S.Error>
                ) : (
                  <S.Error>{formState.errors.confirmPassword.message}</S.Error>
                ))}
            </S.FormGroup>
          )}
          name="confirmPassword"
          defaultValue=""
        />
      </S.FormStacker>
      {!passwordsMatch && (
        <S.Error style={{ textAlign: "center" }}>Senhas não coincidem</S.Error>
      )}
      <S.RegistryButton onPress={handleSubmit(onSubmit)}>
        <S.RegistryButtonText>Criar Conta</S.RegistryButtonText>
      </S.RegistryButton>
    </S.Container>
  );
};

export default RegistryForm;
