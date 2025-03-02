

import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Filter() {

const [searchParams,setSearchParams]=useSearchParams();
//form gönderildiğinde çalışacak fonk
  const handleSubmit=(e)=>{
    //sayfa yenilenmesibi engelle
    e.preventDefault();

    //input içerisindeki değere eriş
    const text=e.target[0].value;

    // url'e geçilecek parametreyi ayarla
    searchParams.set("search",text);

    //url'e parametri geç
    setSearchParams(searchParams);
  };

  //select'dan bir değer seçildğinde calışacak fonk
  const handleChange=(e)=>{
   
    //select alanındaki değere eriş
 const value=e.target.value;

    //Bu değerei parametri olarak kullan
    searchParams.set("sort", value);

    //url'e parametri geç
    setSearchParams(searchParams);

  }
  return (
    <div>  
     <div  className='d-flex justify-content-between mt-4'>
        {/* Select*/}
    <select onChange={{handleChange}}
    className='form-select w-25'>
      <option disabled> sırala</option>  
      <option defaultValue="a-z"> a-z</option>  
      <option  value="z-a"> z-a</option>  
    </select>
    {/* Form  */}
    <form onSubmit={handleSubmit}
    className='d-flex gap-2'>
        <input type="text"  placeholder='kitap ismi giriniz..'
         className='form-control'/>
        <button className='btn btn-primary px-4 '>Ara</button>
    </form>
     </div>
     </div>
  )
}

export default Filter
