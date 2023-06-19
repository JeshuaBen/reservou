# reservou
Um aplicativo para um teste técnico para uma vaga de React Native.


## SCREENS:
- Splash Screen
- Registry
- Home


![Sem título](https://github.com/JeshuaBen/reservou/assets/89667317/e2af213e-5e90-4f7e-a628-3134f2c3ce26)


 ## COMO RODAR O PROJETO:

- Clone o repositório do github para o seu computador com ```git clone (nome do repositório)```
- Abra o projeto no VSCODE
- Rode o comando ``` yarn ``` para poder instalar as dependências do projeto
- Logo depois, rode o projeto com ```npx expo start```


## COMO ESTRUTUREI O PROJETO:
- Estruturei o projeto a partir de uma pasta ```SRC``` que contém todo código
- As telas ficam na pasta ```SCREENS```.
- Os componentes que são mais gerais e podem ser utilizados por outras telas, ficam na pasta ```COMPONENTS```, os componentes que são locais para cada SCREEN, ficam dentro da pasta ```SCREEN -> COMPONENTS ```
- Assets é a pasta que contém os ícones, tanto png's quanto svg's
- A pasta ```utils``` é uma pasta onde contém funções para utilidades gerais da aplicação. Como por exemplo a função que eu fiz para escolher os svgs a partir de nome.
- A pasta ```ROUTES``` é onde está centralizada toda a nossa lógica em relação a estruturação da navegação, tendo: ```index.tsx -> que faz o handle das navigations e o stack.routes.tsx que define as rotas```
- A pasta ```STYLES ``` é onde se encontra as estilizações que são conhecidas por toda a aplicação.


## FOI UTILIZADO:
- Expo
- React Native
- Typescript
- Styled-Components
- React-Hook-Form
- Zod
- React Navigation
- Stack Navigation


### PS: vale salientar que não pude testar em dispositivos IOS, visto que não possuo MAC e nem iPhone para tal.

### Também gerei o BUILD do projeto, caso seja de interesse, só seguir os passos da seguinte documentação para poder gerar também:
- https://docs.expo.dev/build/setup/

### DESDE JÁ OBRIGADO PELA OPORTUNIDADE E AGUARDO UM FEEDBACK PARA UMA POSSÍVEL CONVERSA.
