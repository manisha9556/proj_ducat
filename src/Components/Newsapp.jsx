import React , {useState} from 'react'
import Card from './Card'

const Newsapp = () => {
  const [search,, setSearch]=useState("india")
  const [newsData,setNewsData]=useState(null)
  const API_KEY = '1b9a5691e8d2489588ddd030add08e88';

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
  }
  
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)

  }

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input type='text' placeholder='Search News' onChange={handleInput} />
          <button>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Update with TrendyNews</p>
      </div>
      <div className="categoryBtn">
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>

      </div>
      <div>
        <Card />
      </div>
    </div>


)
}



export default Newsapp
