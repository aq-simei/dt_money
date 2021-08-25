import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },


  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website freelance',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12'),
        },
        {id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Moradia',
          amount: 1500,
          createdAt: new Date('2021-02-31'),
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })


    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
