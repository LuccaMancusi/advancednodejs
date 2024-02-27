###O que é nodejs?

- Javascript e binds do nodejs transfere esses comandos para C++
- Tem a camada da aplicação, e uma v8 que é quem executa o nodejs
- O nodeJs delega funções bloqueantes como acesso ao banco de dados ou ler um arquivo para o sistema operacional.
- O event loop do node é single thread, ele que coordena os eventos enviados para o sistema operacional, que quando concluídos enviam um callback para o event loop onde ele devolve para a aplicação.

###Entendendo o ciclo de vida de aplicações javascript

- O que for requisição externa vai ser executado em background.
- A forma com que seu código é escrito é diferente da ordem que o código é executado.
