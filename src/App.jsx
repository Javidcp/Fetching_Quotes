import { useEffect, useState } from "react";
import "./App.css"


const App = () => {


  
    const [ quotes, setQuotes ] = useState([])

    useEffect(() => {
      const fetchQuotes = async () => {
        try {
          const response = await fetch("https://dummyjson.com/quotes");
          const data = await response.json();
          setQuotes(data.quotes.slice(0,10));
        } catch (error) {
          console.error("Error fetching data", error)
        }
      };
      fetchQuotes();
    }, [])


  return (
    <>
      <h2>Quotes List</h2>
      { quotes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        quotes.map((quote) => <h1 key={quote.id}>{quote.quote}</h1>)
      ) }
    </>
  )
}

export default App