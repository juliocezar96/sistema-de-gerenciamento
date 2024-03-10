## Available Scripts

In the project directory, you can run:

### `node app.js`

Runs the app in the development mode.\
Open [http://localhost:3000/api-cliente](http://localhost:3000/api-cliente) to view it in your browser.

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

Comandos para rodar script SQL:

```
CREATE TABLE geolocalizacao (
  id SERIAL PRIMARY KEY,
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8)
);

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  telefone VARCHAR(20) NOT NULL,
  geolocalizacaoId INTEGER REFERENCES geolocalizacao(id) ON DELETE SET NULL
);

CREATE TABLE empresas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  geolocalizacaoId INTEGER,
  FOREIGN KEY (geolocalizacaoId) REFERENCES geolocalizacao(id)
);

INSERT INTO empresas
(id, nome, geolocalizacaoid)
VALUES(1, 'empresa1', 7);


INSERT INTO geolocalizacao(latitude, longitude) VALUES (-8.06748160,-34.89464320),(-8.07175900,-34.90105500),(-8.04945100,-34.93122400),(-8.05862900,-34.93967900),(-8.08701300,-34.91607500),(-8.11441700,-34.90594700),(-8.06093200, -34.87221600);

INSERT INTO clientes (nome, email, telefone, geolocalizacaoId) VALUES ('Bispo','bispo@email.com','81992014121', 1),('Oliveira','oliver@email.com','81999912121', 2),('Bruna','bruna1@email.com','81921212134', 3),('indira','indira@example.com','81912121212', 4),('Julio','juliO@gmail.com','81992121213', 5),('dolfo','dolfo@gmail.com','81981827121', 6),;


```
