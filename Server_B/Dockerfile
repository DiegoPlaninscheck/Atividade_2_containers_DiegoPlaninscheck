# Imagem que vamos usar de base
FROM node
# Informar o diretorio padrão
WORKDIR / 
# Variaveis de ambiente do docker file
ARG PORT=3001
# Variaveis de ambiente da aplicação
ENV PORT=$PORT
# Deixar a porta da maquina visivel 
EXPOSE $PORT
# Copiar os arquivos de onde estamos para a imagem que estamos criando
COPY ./ .
# Instalar dependencias, pre inicialização da aplicação, rodado em bash
RUN npm install
# Executar o comando para iniciar a aplicação
ENTRYPOINT npm start