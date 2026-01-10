🚀 CryptoMarket Dashboard

Um dashboard moderno para monitoramento de criptomoedas, desenvolvido para explorar conceitos avançados de React e Material UI.

🎯 Objetivo do Projeto

Este projeto foi criado com fins educacionais para consolidar conhecimentos em:

Consumo de APIs reais (CoinGecko).

Gerenciamento de estado complexo com useReducer.

Criação de temas globais (Dark/Light Mode) com Context API.

Estilização profissional utilizando Material UI (MUI v5).

✨ Funcionalidades

🌑 Dark/Light Mode: Alternância de tema respeitando a preferência do sistema.

💰 Cotação em Tempo Real: Listagem de criptomoedas com preços atualizados.

⭐ Sistema de Favoritos: Adicione e remova moedas da sua Watchlist (persistência de estado).

🔍 Busca Inteligente: Filtragem instantânea de moedas por nome ou símbolo.

📱 Responsividade: Layout adaptável para Mobile e Desktop.

🛠️ Tecnologias Utilizadas

React.js (Vite)

Material UI (v5) - Componentes visuais (@mui/material).

Context API - Gerenciamento do Tema.

Axios / Fetch API - Requisições HTTP.

Lucide React / MUI Icons - Ícones.

🧠 Conceitos Aplicados

Durante o desenvolvimento, foquei em aplicar os seguintes padrões:

1. Context API vs Props Drilling

Em vez de passar a prop theme por toda a árvore de componentes, envolvi a aplicação em um ThemeProvider personalizado para gerenciar o modo escuro globalmente.

2. useReducer para Lógica Complexa

Para a lista de favoritos, o useState não era o ideal. Utilizei o useReducer para centralizar as ações de ADD_FAVORITE, REMOVE_FAVORITE e CLEAR_FAVORITES, mantendo a lógica de negócio separada da UI.

3. Otimização de Renderização

Utilização de Derived State para a busca. Em vez de duplicar o estado das moedas (uma lista original e uma filtrada), o filtro é aplicado durante a renderização baseado no input de busca.

🚀 Como rodar o projeto

# 1. Clone o repositório
git clone [https://github.com/seu-usuario/crypto-dashboard.git](https://github.com/seu-usuario/crypto-dashboard.git)

# 2. Entre na pasta
cd crypto-dashboard

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Rode o servidor de desenvolvimento
npm run dev


⚠️ Nota sobre a API

Este projeto utiliza a API pública da CoinGecko.

Ela possui um limite de requisições (Rate Limit).

Caso os dados não carreguem, o projeto possui um fallback (dados de demonstração) para garantir que a interface continue funcional para fins de teste.

🔜 Próximos Passos (Melhorias Futuras)

[ ] Adicionar gráficos históricos com Recharts.

[ ] Persistir favoritos no localStorage.

[ ] Criar página de detalhes da moeda (Rotas com React Router).

Feito com 💙 por Matheus Petry