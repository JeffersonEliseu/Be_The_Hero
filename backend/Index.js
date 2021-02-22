const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
/*
MÉTODO NO HTTP
GET - Busca informação no backend
POST - Crian informaçaõ no backend
PUT - Altera infomação no backend
DEL - Deleta informação no backend
*/

/*
TIPOS DE PARÂMETROS
QUERY - Parametros nomeados enviados na rota após '?' (filtros, paginação)
ROUTE - Parâmetros utilizados para identificar recursos
REQUEST BODY - Corpo da requisição utilizado para criar ou alterar 

*/


app.get('/Users', (requisit, response) => {
    return response.json({
        evento: 'Aula 1',
        aluno: 'Jefferson Eliseu'
    });
} );
app.listen(3333);


