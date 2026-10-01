# 1. Imagem base: Node 20 em versão enxuta (alpine)
FROM node:20-alpine

# 2. Pasta de trabalho dentro do container
WORKDIR /app

# 3. Copia só o package.json primeiro (aproveita o cache)
COPY package*.json ./

# 4. Instala as dependências
RUN npm install

# 5. Copia o resto do código
COPY . .

# 6. Documenta a porta que a app usa
EXPOSE 3000

# 7. Comando que roda quando o container inicia
CMD ["npm", "start"]