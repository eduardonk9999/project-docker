# 🐳 Docker Estudos

Projeto de treino para praticar os conceitos aprendidos no treinamento **Docker Essentials** da **LinuxTips**.

## O que foi feito

### 01-node-docker
API simples em Node.js (Express) rodando em **um container** com Docker puro.
Pratiquei: criação de `Dockerfile`, `.dockerignore`, build de imagem, cache de camadas e mapeamento de portas.

```bash
docker build -t node-app .
docker run -d -p 3000:3000 --name meu-node node-app
```

### 02-node-mysql-compose
API de usuários em Node.js salvando dados no **MySQL**, com os dois containers orquestrados pelo **Docker Compose**.
Pratiquei: `compose.yaml`, variáveis com `.env`, comunicação entre containers pelo nome do serviço, volumes para persistir dados e `healthcheck` com `depends_on`.

```bash
docker compose up -d --build
```

## Referência

Treinamento **Docker Essentials** — [LinuxTips](https://linuxtips.io)