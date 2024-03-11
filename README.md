## Available Scripts

### `Desafios`

Ao trabalhar com rotas geograficas a fim de obter o caminho mais próximo, enfreta-se um problema conhecido chamado de O problema do caixeiro viajante.

O problema do caixeiro viajante (TSP - Traveling Salesman Problem) é um dos problemas mais estudados na área de otimização combinatória. Ele consiste em encontrar o caminho mais curto que visita todos os pontos de uma lista e retorna ao ponto de partida. O desafio está em encontrar uma solução ótima, ou seja, um caminho que minimize a distância total percorrida.

### Algoritmo de Força Bruta:

O algoritmo de força bruta para o TSP é uma abordagem exata que consiste em gerar todas as permutações possíveis dos pontos e calcular a distância total de cada uma delas. Depois, seleciona-se a permutação com a menor distância como a solução. A complexidade desse algoritmo é muito alta, sendo \(O(n!)\), onde \(n\) é o número de pontos a serem visitados. Isso significa que o tempo de execução aumenta rapidamente conforme o número de pontos aumenta, tornando-o impraticável para instâncias grandes do problema.

### Heurística do Vizinho Mais Próximo:

A heurística do vizinho mais próximo é uma técnica de aproximação comum para o TSP. Começa-se com um ponto inicial e, em seguida, seleciona-se o ponto mais próximo que ainda não foi visitado como próximo destino. Esse processo é repetido até que todos os pontos tenham sido visitados, e o caminho retorna ao ponto inicial. Embora essa abordagem não garanta uma solução ótima, geralmente produz resultados aceitáveis em um tempo razoável. A complexidade do algoritmo do vizinho mais próximo é \(O(n^2)\), tornando-o muito mais eficiente do que o algoritmo de força bruta.

### 2-OPT

O algoritmo 2-opt é uma heurística de melhoria para o problema do caixeiro viajante (TSP). Ele opera sobre uma solução inicial, como a obtida pelo algoritmo do vizinho mais próximo, e tenta melhorá-la iterativamente trocando pares de arestas em um caminho, desde que a troca resulte em uma redução na distância total percorrida.

#### Abordagem utilizada

Neste projeto, adotamos uma estratégia para determinar a melhor rota, seguindo as seguintes diretrizes:

1. Para conjuntos de destinos contendo até 10 pontos, empregamos o algoritmo de força bruta, garantindo a análise exaustiva de todas as possíveis rotas.

2. Quando o número de destinos ultrapassa esse limiar, optamos por uma abordagem mais eficiente, baseada em heurísticas de aproximação. Inicialmente, empregamos o algoritmo do vizinho mais próximo para gerar uma rota inicial aproximada. Em seguida, aplicamos a heurística 2-opt para aprimorar essa rota, otimizando o percurso inicialmente calculado. Esse processo permite obter uma solução mais precisa e eficiente, especialmente para conjuntos de destinos maiores.

### Banco de Dados

- Para subir o banco de dados, foi utilizado o banco de dados postgresql versao 15.
- Dentro do backend, tem um arquivo [DDL_e_DML.txt](backend/DDL_e_DML.txt), para executar todos os comandos.

### No diretório do projeto, você pode executar backend:

1. Clone o repositorio: `git clone git@github.com:juliocezar96/sistema-de-gerenciamento.git`
2. Acesse o repositorio clonado: `cd sistema-de-gerenciamento`
3. Acesse o backend: `cd backend`
4. Execute o comando: `npm i`
5. Execute o comando: `node app.js`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000/api-cliente](http://localhost:3000/api-cliente) para visualizá-lo em seu navegador.

### Executando o Frontend

1. No repositorio clonado: `cd sistema-de-gerenciamento`
2. Acesse o frontend: `cd gerenciamento-clientes`
3. Instale as dependências: `npm i`
4. Execute `npm start`, aperte `Y` no terminal e em seguida abrirá uma pagina no seu navegador.
