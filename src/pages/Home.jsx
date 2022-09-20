import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'


export default function Home() {

  const books = [
    {

      id: 1,
      nome: "A Ira",
    }, {

      id: 2,
      nome: "Dom Casmurro",
    }
  ]

  const colunas = [{
    datafield: 'id',
    text: 'ID'
  },
  {
    datafield: 'nome',
    text: 'LIVRO',

  }];


  return (
    <BootstrapTable keyField="id" data={ books } columns={ colunas } />
  )

}

