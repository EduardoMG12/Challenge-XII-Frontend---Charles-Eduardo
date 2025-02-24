import Instagram from "../icons/instagramLink";
import Discord from "../icons/discordLink";
import Github from "../icons/github";
import GithubLink from "../icons/githubLink";
import Linkedin from "../icons/linkedinLink";

export default function Readme() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-[#FBA403]">
                Challenge XII|Compass Uol - My Ride Documentação
            </h1>

            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                1. Introdução
            </h2>
            <p className="text-[#FFFF] text-lg">
                O projeto Challenge XII teve início em 7 de maio de 2024 e teve
                como objetivo criar um backend e um frontend completos, com a
                possibilidade de hospedar a aplicação na AWS. A proposta
                envolvia a criação de um sistema de motoristas similar ao Uber,
                seguindo requisitos específicos.
            </p>

            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                2. Backend
            </h2>
            <p className="text-[#FFFF] text-lg">
                O backend foi desenvolvido utilizando NestJS com os seguintes
                requisitos:
            </p>
            <ul className="list-decimal ml-6">
                <li className="text-[#FFFF] text-lg">
                    Armazenamento de imagens no Amazon S3
                </li>
                <li className="text-[#FFFF] text-lg">
                    Uso de banco de dados relacional via AWS RDS
                </li>
                <li className="text-[#FFFF] text-lg">
                    ORM para manipulação do banco de dados
                </li>
                <li className="text-[#FFFF] text-lg">
                    Validação de formulários com class-validator
                </li>
            </ul>
            <div className="flex flex-row items-center gap-4 mt-4">
                <p className="text-[#FFFF] text-2xl">Link do Repositório:</p>
                <a
                    href="https://www.github.com/EduardoMG12/Challenge-XII-Backend---Charles-Eduardo"
                    target="_blank"
                >
                    <Github heightAndWidth={60} />
                </a>
            </div>

            <h2 className="text-2xl font-semibold mt-12 text-[#FBA403]">
                3. Frontend
            </h2>
            <p className="text-[#FFFF] text-lg">
                O frontend foi desenvolvido utilizando React e TypeScript, com
                os seguintes requisitos:
            </p>
            <ul className="list-decimal ml-6">
                <li className="text-[#FFFF] text-lg">
                    Layout seguindo o design no Figma
                </li>
                <li className="text-[#FFFF] text-lg">
                    Responsividade para 1440px e 414px
                </li>
                <li className="text-[#FFFF] text-lg">
                    Implementação de uma página 404 personalizada
                </li>
                <li className="text-[#FFFF] text-lg">
                    Links do footer redirecionando corretamente
                </li>
            </ul>
            <div className="flex flex-row items-center gap-4 mt-4">
                <p className="text-[#FFFF] text-2xl">Link do Repositório:</p>
                <a
                    href="https://www.github.com/EduardoMG12/Challenge-XII-Frontend---Charles-Eduardo"
                    target="_blank"
                    className=""
                >
                    <Github heightAndWidth={60} />
                </a>
            </div>

            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                4. Sobre o meu projeto
            </h2>

            <h3 className="text-xl font-semibold mt-4 text-[#FBA403]">
                Estrutura do Projeto
            </h3>
            <ul className="list-decimal ml-6">
                <li className="text-[#FFFF] text-lg">
                    Pages: Contém todas as páginas do projeto.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Components: Inclui componentes reutilizáveis, organizados e
                    baseados em props.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Utils: Responsável pelas requisições e outras funções
                    auxiliares.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Mock: Criada após a finalização do projeto para substituir
                    temporariamente o backend, garantindo que o frontend
                    permaneça funcional.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Icons: Adicionados após a finalização do projeto.
                    Inicialmente, os ícones e imagens eram carregados
                    diretamente do Amazon S3 (como pode ser visto no histórico
                    de commits).
                </li>
                <li className="text-[#FFFF] text-lg">
                    Foi utilizado o lazy Load, implementado para evitar que todo
                    o código fosse carregado inicialmente. Assim, cada página é
                    carregada apenas quando acessada.
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 text-[#FBA403]">
                Tecnologias Utilizadas
            </h3>
            <ul className="list-decimal ml-6">
                <li className="text-[#FFFF] text-lg">
                    TailwindCSS: Utilizado para a estilização do projeto.
                </li>
                <li className="text-[#FFFF] text-lg">
                    React-Hook-Form + Zod: Para gerenciamento de formulários e
                    validações.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Axios: Para realizar requisições HTTP.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Vite: Template inicial do projeto, garantindo melhor
                    performance no desenvolvimento.
                </li>
                <li className="text-[#FFFF] text-lg">
                    ESLint: Mantendo um padrão consistente no código
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 text-[#FBA403]">
                Padronização
            </h3>
            <p className="text-[#FFFF] text-lg">
                Mantive uma padronização de código clara, utilizando boas
                práticas para garantir um código limpo e bem estrutura
            </p>

            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
                <code>
                    {` 
~/Challenge-XII-Frontend---Charles-Eduardo
├── .dockerignore
├── .editorconfig
├── .eslintrc.cjs
├── .git
├── .gitignore
├── bun.lockb
├── docker-compose.yml
├── Dockerfile
├── index.html
├── nginx/
├── node_modules/
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── card/
│   │   ├── form/
│   │   ├── loading.tsx
│   │   ├── outlet/
│   │   ├── sectionClassRides/
│   │   ├── sectionFindRide/
│   │   ├── sectionFormulary/
│   │   └── textFieldOutline.tsx
│   ├── icons/
│   ├── index.css
│   ├── main.tsx
│   ├── mock/
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── loading.tsx
│   │   ├── notFound.tsx
│   │   └── readme.tsx
│   ├── theme/
│   ├── utils/
│   │   │── fetchCountriesAndCity.ts
│   │   └── fetchGeoLocation.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
                    `}
                </code>
            </pre>

            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                4. Resultados e Desafios
            </h2>
            <p className="text-[#FFFF] text-lg">
                O frontend foi implementado com pixel perfect, seguindo
                fielmente o design especificado no Figma e os requisitos do
                notion(infelizmente não tenho o link dos mesmos, os dois foram
                apagados apos o fim do projeto). A estrutura de pastas foi
                organizada para facilitar a manutenção do código.
            </p>
            <p className="text-[#FFFF] text-lg">
                Infelizmente, o projeto não foi implantado na AWS, o que teria
                sido um diferencial. No entanto, os objetivos principais do
                desafio foram atingidos, garantindo um código bem estruturado e
                responsivo.
            </p>

            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                5. Conclusão
            </h2>
            <p className="text-[#FFFF] text-lg">
                O Challenge XII foi um desafio interessante que exigiu
                conhecimento avançado em React, TypeScript, NestJS e AWS. Apesar
                da não implementação na AWS, o resultado final trouxe uma
                solução bem elaborada, com um frontend responsivo e um backend
                estruturado conforme as diretrizes do desafio.
            </p>
            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                6. Próximos Passos
            </h2>
            <p className="text-[#FFFF] text-lg">
                Após concluir este projeto, fui efetivado pela Compass UOL, onde
                trabalhei por quatro meses. Durante esse período, tive a
                oportunidade de aprimorar minhas habilidades e ganhar mais
                experiência prática. trabalhando em squads com projetos reais
                com estruturas bem elaboras e complexas, o que me ajudou a
                crescer profissionalmente, além de me proporcionar um ambiente
                de trabalho agradável e colaborativo, infelizmente não posso
                falar muito sobre os projetos que trabalhei, pois são
                confidenciais.
            </p>
            <p className="text-[#FFFF] text-lg mt-6">
                Atualmente, estou focado em atualizar meus projetos antigos e
                desenvolver novos, sempre focando no inglês, estou tambem me
                aprofundamento no backend, estudando NestJS, ORMs e bancos de
                dados.
            </p>
            <p className="text-[#FFFF] text-lg mt-6">
                Meus principais objetivos neste momento são:
            </p>
            <ul className="list-decimal ml-6">
                <li className="text-[#FFFF] text-lg">
                    Criar novos projetos bem estruturados(Estou com alguns em
                    mente, porem ainda estou amaadurecendo as ideias para não
                    começar algo e não terminar)
                </li>
                <li className="text-[#FFFF] text-lg">
                    Concluir minha graduação.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Adquirir fluência em inglês.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Ser alocado em alguma empresa que me proporcione um ambiente
                    de trabalho desafiador.
                </li>
                <li className="text-[#FFFF] text-lg">
                    Crescer a minha comunidade de amigos e desenvolvedores no
                    Discord.
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">
                7. Finalização
            </h2>
            <p className="text-[#FFFF] text-lg">
                Muito obrigado a que leram até aqui, espero que tenham gostado
                do meu projeto e da minha documentação, qualquer duvida ou
                sugestão, estou a disposição para conversar, links para minhas
                redes sociais e contato estão abaixo.
            </p>
            <h2 className="text-2xl font-semibold mt-6 text-[#FBA403]">Links de contato</h2>
            <div className="flex flex-row items-center gap-4 mt-4">
                <a href="https://github.com/EduardoMG12" target="_blank">
                    <GithubLink />
                </a>

                <a href="https://www.linkedin.com/in/eduardomg12/" target="_blank">
                    <Linkedin />
                </a>

                <a href="https://discord.gg/aAQVbwPHGy" target="_blank">
                    <Discord />
                </a>
                <a href="https://www.instagram.com/charlesmellog/" target="_blank">
                    <Instagram />
                </a>
            </div>
        </div>
    );
}

// const Readme = () => {
//     return (
//         <div className="min-h-dvh min-w-full max-w-full flex justify-around ">
//             <div>
//                 <h1 className="text-[#FBA403]">Fiz esta pagina para</h1>
//                 <h1 className="text-[#FFFF] font-bold text-2xl">Fiz esta pagina para</h1>
//             </div>
//             <div></div>
//         </div>
//     );

// };
// export default Readme;

// Introdução

// O projeto Challenge XII teve início em 7 de maio de 2024 e teve como objetivo criar um backend e um frontend completos, com a possibilidade de hospedar a aplicação na AWS. A proposta envolvia a criação de um sistema de motoristas similar ao Uber, seguindo requisitos específicos.

// Backend

// Descrição
// O backend do projeto consistia na criação de uma API para gerenciamento de motoristas, garantindo as seguintes exigências:
// Utilização do NestJS como framework principal.
// Armazenamento de imagens no Amazon S3.
// Uso de um banco de dados relacional via AWS RDS.
// Implementação de um ORM para manipulação do banco de dados.
// Preenchimento dos dados das seções 2 e 3 conforme disponibilizados no Figma.
// Validação dos campos do formulário no backend utilizando class-validator.
// Frontend
// Descrição
// O frontend foi desenvolvido utilizando React com TypeScript, com as seguintes exigências:
// Utilização de qualquer framework ou biblioteca opcional.
// Consumo de imagens armazenadas no Amazon S3.
// Seguir o layout definido no Figma.
// Responsividade garantida para 1440px e 414px.
// Implementação de um header e footer estáticos.
// Criação de uma página 404 personalizada com fundo preto e ícone de atenção amarelo.
// Links do footer redirecionando para a página 404.
// Links das redes sociais levando para os perfis da Compass.
// Atendimento aos requisitos e prazos documentados no Notion.
// Estrutura do Frontend
// O frontend foi desenvolvido utilizando Vite com a seguinte estrutura de pastas:
// ~/Challenge-XII-Frontend---Charles-Eduardo
// ├── .dockerignore
// ├── .editorconfig
// ├── .eslintrc.cjs
// ├── .git
// ├── .gitignore
// ├── bun.lockb
// ├── docker-compose.yml
// ├── Dockerfile
// ├── index.html
// ├── nginx/
// ├── node_modules/
// ├── package.json
// ├── pnpm-lock.yaml
// ├── postcss.config.js
// ├── public/
// ├── README.md
// ├── src/
// │   ├── App.tsx
// │   ├── components/
// │   │   ├── card/
// │   │   ├── form/
// │   │   ├── loading.tsx
// │   │   ├── outlet/
// │   │   ├── sectionClassRides/
// │   │   ├── sectionFindRide/
// │   │   ├── sectionFormulary/
// │   │   └── textFieldOutline.tsx
// │   ├── icons/
// │   ├── index.css
// │   ├── main.tsx
// │   ├── mock/
// │   ├── pages/
// │   │   ├── home.tsx
// │   │   ├── loading.tsx
// │   │   ├── notFound.tsx
// │   │   └── readme.tsx
// │   ├── theme/
// │   ├── utils/
// │   │   │── fetchCountriesAndCity.ts
// │   │   └── fetchGeoLocation.ts
// │   └── vite-env.d.ts
// ├── tailwind.config.js
// ├── tsconfig.json
// ├── tsconfig.node.json
// └── vite.config.ts

// esultados e Desafios

// O frontend foi implementado com pixel perfect, seguindo fielmente o design especificado no Figma.A estrutura de pastas foi organizada para facilitar a manutenção do código.

//     Infelizmente, o projeto não foi implantado na AWS, o que teria sido um diferencial.No entanto, os objetivos principais do desafio foram atingidos, garantindo um código bem estruturado e responsivo.

//         Conclusão

// O Challenge XII foi um desafio interessante que exigiu conhecimento avançado em React, TypeScript, NestJS e AWS.Apesar da não implementação na AWS, o resultado final trouxe uma solução bem elaborada, com um frontend responsivo e um backend estruturado conforme as diretrizes do desafio.;
