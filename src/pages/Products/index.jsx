
import  { useEffect, useState } from 'react'

import React from 'react'
import Filter from "../../components/Filter";
import api from "../../api";
import Card from '../../components/Card';
import { useSearchParams } from 'react-router-dom';



function Products() {
  //kitap stateti
  const [books, setBooks] = useState([]);

  //arama stateti
  const [searchParams]=useSearchParams();
  
  useEffect(() => {

    //url'deki parametreyi al 
    const params={
      q:searchParams.get("search"),
      _sort:"title",
      _order:searchParams.get("sort")==="z-a" ? "desc" :"asc",
    };
    api.get("/books", {params})
      .then((res) => setBooks(res.data))
      
  }, [searchParams]);
//url'deki parametreye bağlı olarak api'dan veri alabilmek iççin arama parametresini url'e geçtik.
  

  return (
    <div className="container my-5">
      {/* Results */}
     {books.length===0 ? (<h3 className='bg-danger p-3 rounded fs-3 w-50 text nowrap'>Kitap Bulunamadı!!!</h3>) :(
      <h3 className='bg-success p-3 rounded fs-3 w-50 text-nowrap text-center'> {books.length} Kitap Bulundu</h3>
     )}
       
       {/* Filter */}
      <Filter/>

      {/* Cards */}
      <div className= "card-container">
       {books.map((book)=>(
        <Card key={book.id} book={book}/>
       ))}
      </div>
    </div>
  );
}

export default Products;
