#### yarn create @eslint/config 
* Inicializa o arquivo do eslint

#### ts-node-dev
* Auxilia ao executar o node com typescript
    *   --transpile-only => Não vai dar erro no momento do desenvolvimento, sintaxe e entre outros;
    * --ignore-watch node_modules => Não vai monitorar mudanças na node-modules;
    * --respawn => Aplicação sempre dará reload quanto tiver alteração no código
    * --inspect => Faz com que o debug do editor se conect com a aplicação
        

### Docker
1- Criar Arquivo Dockerfile na raíz do projeto
2- ao terminar, executar o comando docker build -t <nome_da_aplicacao> .
    docker build -t => efetua o build do projeto (Cria a imagem), o "." no final, é o path do arquivo DOCKER FILE, 
    se executar o comando no caminho onde o Docker file se encontra, basta passar o "."
3- para rodar o container, rodar o seguinte comando:
    * docker run -p 3333:3333 <nome_da_sua_aplicacao>
        * -p <porta> <nomeImagem>, mapeia a porta que será executada a aplicação 

#### Comandos úteis no docker
    * docker ps => Lista os containers que estão rodando.
    * docker ps -a => Lista TODOS os containers
    * docker exec -it <nomeContainer> /bin/bash 
    * docker stop <container_id>
    * docker start <container_id>
    * docker rm <container_id>
    * docker logs <nome_da_aplicacao> -f => monitora em tempo real
    * docker logs <nome_da_aplicacao> => mostra os últimos logs até o comando

#### Comandos úteis no docker-compose
    * docker-compose up => Executa em real time, se sair do terminal, ele para a aplicação
    * docker-compose up -d => irá rodar em background
    * docker-compose stop
    * docker-compose down <remove tudo que estiver cirado dentro do docker-compose.yml>