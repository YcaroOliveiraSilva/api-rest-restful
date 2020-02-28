# api-rest-restful

# API

* cliente (client)

* garçon (pedidos levar seus pedidos para a cozinha) (API)

* cozinha (Server)

* Acronimo de Application Programming (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações
possam utilizar as funcionalidades desta aplicação.

* Responsável por estabelecer comunicação entre diferentes serviços.

* Meio de campo entre as tecnologias

* Intermediador para troca de informações

## REST

* um acrônimo pra Representational State Transfer(transferência de Estado Representativo)

* Será feita a transferência de dados, geralmente, usando o protocolo HTTP.

* O REST delimita algumas obrigações nessas transferências de dados

* Resources seria então uma entidade ou um objeto

* Endpoints URL, URI O Caminho acessado , Informações


## 6 NECESSIDADES (constraints) para ser RESTful

   -_Uniform Interface: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme._

    -_Client-server: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo._

    -_Stateless: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações._

    -_Cacheable: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente._

    -_Layered System: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida._

    -_Code on demand (optional): Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente._

## RESTFUL

* RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS

* Utilizar verbos HTTP para nossas requisições

* Utilizar plural ou singular na criação dos endpoints

* NÃO IMPORTA use um padrão!!!

* Não deixar barra no final do endpoint

* Nunca deixe o cliente sem resposta


## VERBOS HTTP

* GET: Receber dados de um Resource.

* POST: Enviar dados ou informações para serem processados por um Resource.

* PUT: Atualizar dados de um Resource.

* DELETE: Deletar um Resource

## STATUS DAS RESPOSTAS

* 100: Informação

* 200: Sucesso

 * 200: OK
 
 * 201: CREATED
 
 * 204: Não tem conteúdo PUT POST DELETE
       
* 300: Redirection

* 400: Client Error

  * 400: Bad Request
  * 404: Not Found!
        
* 500: Server Error 500: Internal Server Error        



                                 
                                 
                                 
