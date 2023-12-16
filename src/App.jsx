import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import List from './components/list'

function App() {

  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res => {setData(res.data.books);console.log(res.data.books)})
  },[])

  return (
    <>
      {data.map((item,index) => (<List title={item.title} img={item.imageLinks.thumbnail} description={item.description} author={item.authors} key={index}/>))}
    </>
  )
}

export default App