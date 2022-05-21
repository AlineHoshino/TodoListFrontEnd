const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

describe('Rota todo', () => {
  it('Na função read retorna o status 200  e um array', async () => {
    const readTodo = await chai.request(app)
      .get('/todo');
    expect(readTodo).to.have.status(200);
    expect(readTodo.body).to.be.an('array');
  });
});

describe('Rota todo', () => {
  describe('A requisição POST/todo ', () => {
    it('espero que tenha os status 201 e que crie uma tarefa ', async () => {
      const todoResponse = await chai.request(app)
        .post('/todo')
        .send({
          title: 'Fazer compras',
          task: '1 litro de leite',
          priority: false,
          status: 'andamento',
          date: '05-06-2022',
        });
      expect(todoResponse).to.have.status(201);
      expect(todoResponse.body).to.have.property('title');
    });
  });
});

describe('Rota todo', () => {
  describe('A requisição delete/todo ', () => {
    it('espero que tenha os status 200 e que delete uma tarefa ', async () => {
      const todoResponse = await chai.request(app)
        .delete('/todo/1');
      expect(todoResponse).to.have.status(200);
      expect(todoResponse.body).to.have.property('title');
    });
  });
});
