import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";


export const CARD_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect( () => {
    const fetchingData = async () => {
      setLoading(true)
    try {
        const response = await fetch(CARD_URL);
        const json = await response.json()
    
        setData(json)
        setLoading(false)
        // console.log(json) 
    } catch (error) {
      setError("Unable to fetch data")
    }
    }
    fetchingData();
  }, [])

  // const temp = [
  //   {
  //     "name": "Boilded Egg",
  //     "price": 10,
  //     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     "image": "/images/egg.png",
  //     "type": "breakfast"
  // },
  // ]

  console.log(data)

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading....</div>
  // fetchingData();


  return <MainContainer>
    <TopContainer>
      <div className="logo">
        <img src="/Foody.png" alt="Logo" />
      </div>

      <div className="search">
        <input type="search" placeholder="Search Food" />
      </div>
    </TopContainer>

    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>

    <SearchResult data={data}/>
   
  </MainContainer>;
};

export default App;

const MainContainer = styled.div`
background-color: #161A30 ; 
max-width: 100%;
margin: 0 auto;
`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;

.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    border-radius: 4px;
    font-size: 16px;
    padding: 4px 8px;
    color: white;
    height: 40px;
  }
}`;

const FilterContainer = styled.section`
display: flex;
gap: 10px;
justify-content: center;
padding-bottom: 12px;
`;

export const Button = styled.button`
 background-color: red;
 color: white;
 border: none;
 border-radius: 4px;
 padding: 5px 10px;
`;
