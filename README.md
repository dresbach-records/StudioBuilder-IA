# StudioBuilder Editor
Desenvolvido por Vini Amaral – TechLab LTDA
## 📌 Visão Geral

O StudioBuilder Editor é uma plataforma SaaS modular para criação, gestão e desenvolvimento de projetos digitais.

O sistema integra:

* Portal Público (Marketing)
* Portal do Cliente (Acompanhamento)
* Portal Administrativo
* Ambiente de Engenharia (Editor + IA)

Arquitetura moderna, escalável e preparada para crescimento empresarial.

## 🏗 Arquitetura do Sistema

O projeto foi desenvolvido com foco em:

* Separação clara de responsabilidades
* Estrutura escalável
* Organização por domínio
* Segurança por nível de acesso
* Modularização completa

## 🧱 Stack Tecnológica

* Next.js 14 (App Router)
* React + TypeScript
* Tailwind CSS
* Arquitetura modular SaaS

Estrutura preparada para integração com:

* Banco de dados relacional
* Gateways de pagamento
* Serviços de hospedagem
* APIs de IA

## 🌐 Estrutura de Portais
### 1️⃣ Portal Público

Responsável por:

* Landing institucional
* Portfólio
* Stack tecnológica
* FAQ
* Captação de leads

Sem necessidade de login.

### 2️⃣ Portal do Cliente

Área protegida.

Funções:

* Dashboard simples
* Inserção de novo projeto
* Upload de arquivos
* Acompanhamento de status
* Pagamentos
* Hospedagem
* Assinatura digital
* Suporte

Sem acesso a IA, editor de código ou ferramentas técnicas.

### 3️⃣ Portal Administrativo

Responsável por:

* Gestão de usuários
* Financeiro
* Permissões
* Auditoria
* Controle de gateway

Acesso restrito por perfil.

### 4️⃣ Ambiente de Engenharia

Área interna da equipe técnica.

Inclui:

* Editor Visual
* IDE de Código
* Ferramentas de IA
* Banco de dados generator
* SEO tools
* CRM técnico
* Integração Git

Acesso exclusivo para equipe autorizada.

## 🗂 Estrutura de Pastas
```
studiobuilder-ai/
│
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── types/
│   ├── utils/
│   └── styles/
│
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

Arquitetura baseada em separação por domínio e responsabilidade.

## 🔐 Controle de Acesso

Perfis implementados:

* Visitante
* Cliente
* Administrador
* Equipe Técnica

Regras:

* Cliente acessa apenas /client/*
* Admin acessa /admin/*
* Equipe técnica acessa /editor/*
* Visitante acessa apenas portal público

## 🧭 Fluxo de Captação de Projeto

O cliente passa por um fluxo estruturado:

1. Informações básicas
2. Escopo detalhado
3. Upload de arquivos
4. Estrutura do projeto
5. Revisão final
6. Conclusão

Ao finalizar, o sistema gera automaticamente um painel personalizado para aquele projeto.

## 🎨 Padrão Visual

* Azul primário: `#2563EB`
* Roxo secundário: `#7C3AED`
* Layout SaaS moderno
* Auto Layout organizado
* Componentização completa

## ⚙️ Instalação

Instalar dependências:
```bash
npm install
```

Rodar ambiente de desenvolvimento:
```bash
npm run dev
```

Build de produção:
```bash
npm run build
```

## 🧪 Validação Estrutural

Verificar estrutura de pastas:
```bash
tree -I "node_modules"
```

Ou:
```bash
ls -R
```

## 📈 Escalabilidade

O sistema foi projetado para permitir:

* Expansão de módulos
* Integração com IA avançada
* White-label
* Multi-tenant
* SaaS comercial

## 🏢 Propriedade

Desenvolvido por:

* Vini Amaral
* TechLab LTDA

Plataforma proprietária voltada para engenharia digital, automação de projetos e organização empresarial.

## 📌 Status do Projeto

* Versão: Estrutura SaaS Modular
* Estado: Arquitetura organizada e pronta para evolução
