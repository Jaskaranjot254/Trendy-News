import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
    const[search, setSearch]= useState("new");
    const[newsdata, setNewsData]=useState(null);
    const API_KEY="0a13c9a61c3148f182e198ade81fc0f9";

// const getData = async() =>{
//     const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
//     const jsonData = await response.json();
//     console.log(jsonData.articles);
//     setNewsData(jsonData.articles);

// }


const getData = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`, {
      method: 'GET', 
    
    });

    const jsonData = await response.json();

    if (jsonData.articles) {
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } else {
      console.log('No articles found');
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};





useEffect(()=>{
    getData();
},[search])

const handleInput = (e) =>{
    console.log(e.target.value);
        setSearch(e.target.value);
}


const userInput=(event)=>{
    setSearch(event.target.value);
    
}

  return (
    <div>
      <nav>
        <div>
          <h1><a href={search}>Trendy News</a></h1>
        </div>
        <ul>
        <button onClick={userInput} value="bbc news">Trending News</button>
          {/* <a >All News</a>
          <a>Trending</a> */}
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" onChange={handleInput} value={search}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Update With TrendyNews</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertaiment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
        <button onClick={userInput} value="technology">Technology</button>
      </div>

      <div>
        {newsdata?  <Card data={newsdata}/>:null}
       
      </div>


    </div>
  );
};

export default Newsapp;
