import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'

const colunas = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'title',
    text: 'Nome do Livro'
}];

export default function Home() {


    const [books, setBooks] = useState([]);
    
    useEffect(() => {

    }, [])
    
    async function getBooks() {
        try {
            const response = await axios({
                method: "get",
                url: "https://books.ronier.me",
            })

            setBooks(response.data.content);
            console.log(response.data.content)
        } catch (error) {
            console.log(error);
        }    }

    getBooks();


    return (

        <div>
            <h1>Books</h1>

            <BootstrapTable keyField="id" data={books} columns={colunas} />

        </div>
    )
}
