# BadBons App - Frontend

Este repositório contém o código-fonte do frontend do **BadBons App**, desenvolvido com **React Native** e **Expo**. O aplicativo é parte de uma plataforma para gerenciar treinos, desafios e interação com os usuários.

## 📦 Tecnologias Utilizadas

- **React Native**: Framework para o desenvolvimento de aplicativos móveis nativos.
- **Expo**: Ferramenta que facilita o desenvolvimento e o teste de aplicativos React Native.
- **React Navigation**: Para navegação entre telas e manipulação de rotas.
- **React Native Vector Icons**: Para ícones personalizáveis.
- **React Hooks**: Para gerenciar o estado e os efeitos no React.
- **Material Icons**: Usado para ícones, incluindo o ícone de timer.

## 🚀 Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/eusuez/ofc-BadBons-app-Frontend.git
Navegue para o diretório do projeto:

bash
Copiar código
cd ofc-BadBons-app-Frontend
Instale as dependências:

Se você estiver utilizando o npm:

bash
Copiar código
npm install
Ou, se preferir o yarn:

bash
Copiar código
yarn install
Inicie o aplicativo:

Para rodar o projeto localmente com Expo, use o seguinte comando:

bash
Copiar código
expo start
O comando abrirá uma página no seu navegador com um QR Code. Você pode escanear esse código com o aplicativo Expo Go em seu dispositivo móvel para ver o aplicativo em execução.

📱 Funcionalidades
Tela de Home: Tela principal do app com ícones de pesquisa e notificações.
Tela de Desafios: Exibe desafios para os usuários completarem.
Tela de Sessões: Mostra sessões de treino e outras informações relacionadas.
Tela de Ranking: Classificação dos usuários com base em seu desempenho.
Tela de Perfil: Onde os usuários podem ver e editar suas informações pessoais.
📂 Estrutura de Pastas
A estrutura do projeto está organizada da seguinte maneira:

bash
Copiar código
/src
  /components         # Componentes reutilizáveis
  /screens            # Telas do aplicativo
    - HomeScreen.js   # Tela principal
    - DesafiosScreen.js
    - SessoesScreen.js
    - RankinScreen.js
    - PerfilScreen.js
  /styles             # Arquivos de estilo
  /assets             # Imagens e outros arquivos estáticos
  App.js              # Arquivo de entrada do app
⚙️ Configuração de Navegação
O projeto usa o React Navigation para navegação entre as diferentes telas. Aqui está como a navegação está configurada:

TabNavigator: Usado para navegação entre as telas principais (Home, Desafios, Sessões, Ranking, Perfil).
StackNavigator: Utilizado para navegação entre telas específicas (como login ou detalhes).
🛠️ Personalização
Para personalizar o aplicativo, você pode modificar os componentes e estilos na pasta /src. A lógica do aplicativo pode ser estendida para incluir novos recursos, como autenticação de usuário ou integração com APIs.

📱 Expo para Desenvolvimento
Este projeto foi desenvolvido utilizando o Expo, que permite testar o aplicativo diretamente em seu dispositivo móvel com o Expo Go.

🚨 Avisos e Dependências
Certifique-se de estar utilizando a versão correta do Expo para garantir que todas as dependências funcionem conforme o esperado.
Em alguns casos, pode ser necessário reiniciar o servidor do Expo se você adicionar novas dependências ou modificar a configuração do projeto.
📖 Contribuindo
Se você deseja contribuir para o desenvolvimento deste aplicativo, fique à vontade para fazer um fork deste repositório, criar uma branch e enviar um pull request.

📝 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais informações.
