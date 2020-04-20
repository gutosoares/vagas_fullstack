Augusto Soares

## Objetivo

Parabéns, você passou para a segunda fase do processo seletivo da [Vigia de Preço](http://vigiadepreco.com.br/) para desenvolvedor FullStack.

## Instruções

1. Criar um fork deste repositório e implementar a landing page e uma API REST conforme instruções abaixo. 
2. Arquivos de design e mockups estão contidos na seção 3.0
2. Abrir um merge request para este repositório para que possamos avaliar o seu código. 
3. Enviar um e-mail para <gislainy.velasco@vigiadepreco.com.br> com

	* Assunto "[Teste Desenvolvedor FullStack] - Nome do candidato"
	* Link: -> Merge request do Github

## 1.0 - O que esperamos?  ;-)
	
A landing page deve:

- Reproduzir a interface definida no layout fornecido
- Consumir a API REST por meio de uma requisição HTTP para exibir os dados dos produtos mais acessados
- Ser desenvolvida em NuxtJS (https://nuxtjs.org/) 
- Seguir o layout desktop `layout/desktop.png`
- Seguir o layout mobile `layout/mobile.png`

A API Rest deve:
- Deve utilizar o MongoDB, especificamente o Mongoose para persistir os dados.
- Deve ser feita utilizando Express
- Ter um endpoint de produtos seguindo o Model fornecedido
- Ter um endpoint de lojas seguindo o Model fornecedido


## 2.0 - Requisições  REST 

A seção de “Produtos mais acessados” deve realizar uma requisição numa API REST. 

No carregamento do lado do servidor (SSR) deve retornar os 10 itens
No lado do cliente deve retornar os itens de forma progressiva quando é realizado o swiper 

### 3.0 - Onde estão as coisas? 

### 3.1 - Design 

Todo material pertinente para reproduzir as telas está na pasta *./layout*

O arquivo `colors.css` tem as cores utilizadas

As imagens de fundo não estão disponíveis no assets

### 4.0 - API REST

As API’s REST deveram ser construídas seguindo as especificações abaixo: 

#### 4.1 API REST de Produto

- GET `/products`

- POST `/products`
    Body
    ```json
        {
            "storeid": "idDaLoja",
            "price": 0,
            "title":"Nome do Produto",
            "image":"https://url_da_image",
            "link":"https://link_do_producto",
            "percentage": 0
        }
    ```
- PUT `/products/:productId`
    Body
    ```json
        {
            "price": 0,
            "title":"Nome do Produto",
            "image":"https://url_da_image",
            "link":"https://link_do_producto",
            "percentage": 0
        }
    ```
 - DELETE `/products/:productId`
 
#### 4.2 API REST das Lojas

- GET `/stores`

- POST `/stores`
    Body
    ```json
        {
            "name":"Nome da Loja",
            "logo":"https://url_da_logo",
            "link":"https://link_do_loja"
        }
    ```
- PUT `/stores/:storeid`
    Body
    ```json
        {
            "name":"Nome da Loja",
            "logo":"https://url_da_logo",
            "link":"https://link_do_loja"
        }
    ```
 - DELETE `/stores/:storeid`


### 4.3 Ordenação

Todas as requisições de GET devem suportar as querys abaixo:
 - sortBy - O valor default deve ser a updated
 - search - O valor default deve ser um string vazia
 - limit - O valor máximo deve ser 30
 - offset - Deve o valor default deve ser 0
 - descending - Deve receber valores `true` ou `false`, com valor default sendo `false`


### 5.0 Regras

Para os produtos mais acessados as cores dos badge de porcentagem
 - Menor igual a -10 deve ser `#1B5E20`
 - Menor igual a 0 deve ser  `#00C853`
 - Maior que 0 deve ser `#FFC107`
 - Maior que 5 deve ser `#FF980`
 - Maior que 10 deve ser `#DD2C00`


## 6.0 - O que vamos avaliar?

* Organização do projeto
* Utilização de padrões arquiteturais
* Clareza do código
* Escolha de estruturas e bibliotecas
* Ausência de bugs
* Detalhes de UI
* Linguagem de programação


## Dúvidas

Entre em contato com <gislainy.velasco@vigiadepreco.com.br>
