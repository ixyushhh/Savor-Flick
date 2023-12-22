import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";


export const CARD_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredData, setFilteredData] = useState(null) 
  const [btn, setBtn] = useState("all")


  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true)
      try {
        const response = await fetch(CARD_URL);
        const json = await response.json()

        setData(json)
        setFilteredData(json)
        setLoading(false)
        // console.log(json) 
      } catch (error) {
        setError("Unable to fetch data")
      }
    }
    fetchingData();
  }, [])

  const searchFood = (e) => {
    const foodValue = e.target.value;
    // console.log(foodValue)
    
    if(foodValue === ""){
      setFilteredData(null)
    }

    const filtered = data?.filter( (food) => 
    food.name.toLowerCase().includes(foodValue.toLowerCase()))

    setFilteredData(filtered)
  }

  const btnFilter = (type) => {
    
    if(type === "all"){
      setFilteredData(data)
      setBtn("all")
      return;
    }

    const filtered = data?.filter( (food) => food.type.toLowerCase().includes(type.toLowerCase()))
    
    setFilteredData(filtered)
    setBtn(type)
  }

  const filteredBtn = [

    {
      name : "All",
      type : "all",
    },
    {
      name : "Breakfast",
      type : "breakfast",
    },
    {
      name : "Lunch",
      type : "lunch",
    },
    {
      name : "Dinner",
      type : "dinner",
    },
  ]

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

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading....</div>
  // fetchingData();


  return <>
    <MainContainer>

      <TopContainer>
        <div className="logo">
          <img src="/Foody.png" alt="Logo" />
        </div>

        <div className="search">
          <input onChange={searchFood} type="search" placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        {filteredBtn.map((value) => (
          <Button key={value.name} onClick={() => btnFilter(value.type)}>
            {value.name}
            </Button>
        ))}

        {/* <Button onClick={() => btnFilter("Breakfast")}>Breakfast</Button>   // Using map instead of making them individually.
        <Button onClick={() => btnFilter("Lunch")}>Lunch</Button>
        <Button onClick={() => btnFilter("Dinner")}>Dinner</Button> */}
      </FilterContainer>

    </MainContainer>
    <SearchResult data={filteredData} />
  </>;
};

export default App;

const MainContainer = styled.div`
background-color: #161A30 ; 
max-width: 100%;
margin: 0 auto;
`;


const TopContainer = styled.section`
height: 140px;
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
}

@media (0 < width < 600px){
  flex-direction: column;
  height: 90px;
}

`;

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

 &:hover{
  background-color: #F15A59;
 }
`;
