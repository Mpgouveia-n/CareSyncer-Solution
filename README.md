# CareSyncer x Turma do Bem

## Descrição

O **CareSyncer** é uma plataforma acadêmica desenvolvida para apoiar a ONG **Turma do Bem** no gerenciamento do fluxo de atendimento odontológico social.

O projeto tem como objetivo digitalizar e organizar processos relacionados a pacientes, triagens, dentistas voluntários, procedimentos e atendimentos, facilitando a comunicação entre pessoas em situação de vulnerabilidade e profissionais voluntários.

A solução busca tornar o acompanhamento odontológico mais claro, ágil e acessível, apoiando desde o cadastro inicial do paciente até a organização de procedimentos e atendimentos.

## Tecnologias Utilizadas

### Front-end

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- React Hook Form
- Fetch API

### Back-end

- Java
- Quarkus
- Oracle Database
- JDBC

## Funcionalidades Implementadas

- Home responsiva
- Hero carousel na página inicial
- Header e navegação responsivos
- FAQ dinâmica com accordion
- Página institucional Sobre
- Página de integrantes
- Formulário de contato com React Hook Form
- Cadastro de pacientes com React Hook Form
- Login visual para dentistas
- Página de procedimentos odontológicos
- Rota dinâmica de detalhes de procedimento
- Integração com API Java/Quarkus
- Consumo de endpoints REST com Fetch API
- API Status discreto no footer
- CRUD inicial de pacientes
- Listagem de pacientes cadastrados
- Exclusão de pacientes pela API
- Services organizados por entidade
- Types TypeScript para entidades do domínio
- Responsividade mobile, tablet e desktop
- Organização componentizada

## Estrutura do Projeto

```text
src/
├── Componentes/
│   ├── ApiStatus/
│   ├── Footer/
│   ├── Hero/
│   ├── HeroHome/
│   ├── IntegrantesCard/
│   └── NavUser/
├── Pages/
│   ├── CadastroPaciente/
│   ├── Contato/
│   ├── FAQ/
│   ├── Home/
│   ├── Integrantes/
│   ├── LoginDentista/
│   ├── ProcedimentoDetalhe/
│   ├── Procedimentos/
│   └── Sobre/
├── assets/
├── hooks/
├── services/
└── types/
```

## Como Executar o Projeto

### Front-end

```bash
npm install
npm run dev
```

O front-end será executado em:

```text
http://localhost:5173
```

### Back-end

No projeto Java/Quarkus:

```bash
.\mvnw.cmd quarkus:dev
```

A API será executada em:

```text
http://localhost:8080
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do front-end com:

```env
VITE_API_BASE_URL=http://localhost:8080
```

O arquivo `.env.example` já contém o modelo esperado.

## Endpoints Integrados

- `GET /health`
- `GET /pacientes`
- `POST /pacientes`
- `DELETE /pacientes/{id}`
- `GET /procedimentos` com fallback visual para dados estáticos

## Responsividade

A interface foi ajustada com **Tailwind CSS** usando abordagem mobile-first e breakpoints responsivos.

O projeto foi preparado para funcionar em:

- Mobile: até 480px
- Tablet: 768px
- Desktop: 992px ou superior

Foram aplicados ajustes em menus, cards, formulários, grids, heroes, botões e espaçamentos para evitar overflow horizontal e manter boa legibilidade.

## Integração Front + Back

O fluxo de integração implementado segue a arquitetura:

```text
React → Fetch API → API Quarkus → BO → DAO → Oracle
```

O front-end consome a API por meio da pasta `services/`, centralizando chamadas HTTP em `api.ts` e expondo services específicos por entidade.

## Equipe

- Manuel Pedro de Gouveia Neto
- Lucas Shida Rodrigues da Costa

## Status do Projeto

Projeto acadêmico finalizado para a **Sprint 4**, com front-end responsivo, rotas dinâmicas, formulários com React Hook Form e integração inicial com a API Java/Quarkus.

## Repositório

```text
https://github.com/Mpgouveia-n/CareSyncer-Solution.git
```
