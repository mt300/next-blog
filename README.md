
# 📝 Next Blog

Um blog moderno desenvolvido com Next.js, TypeScript e Tailwind CSS, utilizando geração estática (SSG) para oferecer desempenho otimizado e excelente experiência ao usuário.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática para JavaScript
- [Tailwind CSS](https://tailwindcss.com/) – Framework CSS utilitário
- [ESLint](https://eslint.org/) – Ferramenta de linting
- [Next Font](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) – Otimização de fontes com a fonte Geist

## 🧠 Justificativas Técnicas

### 📦 Geração Estática (SSG)

Optou-se pela geração estática para pré-renderizar as páginas do blog durante o build, resultando em:

- **Desempenho superior**: Páginas carregam rapidamente, pois são servidas como arquivos HTML estáticos.
- **Melhor SEO**: Conteúdo pré-renderizado é mais facilmente indexado por mecanismos de busca.
- **Redução de carga no servidor**: Como as páginas são geradas antecipadamente, há menos processamento no tempo de requisição.

### 🧱 Estrutura do Projeto

A estrutura do projeto foi organizada para promover escalabilidade e manutenção facilitada:

```
next-blog/
├── public/             # Arquivos públicos (imagens, favicon, etc.)
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── app/          # Páginas do Next.js
│   ├── lib/         # Arquivos de requisições HTTP
│   └── types/          # Funções utilitárias
├── .eslintrc.json      # Configuração do ESLint
├── next.config.js      # Configuração do Next.js
├── tailwind.config.js  # Configuração do Tailwind CSS
├── tsconfig.json       # Configuração do TypeScript
└── package.json        # Dependências e scripts do projeto
```

## 🛠️ Passos para Rodar o Projeto Localmente

### 1. Clone o Repositório

```bash
git clone https://github.com/mt300/next-blog.git
cd next-blog
```

### 2. Instale as Dependências

Utilize o gerenciador de pacotes de sua preferência:

```bash
# Com npm
npm install

# Ou com yarn
yarn install

# Ou com pnpm
pnpm install
```

### 3. Inicie o Servidor de Desenvolvimento

```bash
# Com npm
npm run dev

# Ou com yarn
yarn dev

# Ou com pnpm
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto em execução.

## 📌 Observações Relevantes

- **Fonte Geist**: O projeto utiliza a fonte Geist, otimizada com o `next/font`, garantindo carregamento eficiente e melhor desempenho.
- **Tailwind CSS**: A estilização é feita com Tailwind CSS, permitindo um desenvolvimento ágil e responsivo.
- **Linting e Formatação**: Configurações de ESLint estão incluídas para manter a consistência e qualidade do código.
- **Deploy**: O projeto está pronto para ser implantado em plataformas como [Vercel](https://vercel.com/), facilitando o processo de publicação.
