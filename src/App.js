import React, {useState, useEffect} from "react";
import Loading from './Loading';
import Tours from './Tours'
import Header from './Header';

function App() {
  const url = 'https://course-api.com/react-tours-project'

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour =(id) =>{
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data)
      setLoading(false)
    }
    catch(error){
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading){
    return (
      <Loading />
    )
  }

  if (tours.length === 0){
    return (
      <div className="title">
        <h2> no tours left</h2>
        <button className="delete-btn" onClick={fetchData}>Refresh</button>
      </div>
    )
  }
  return (
     <main>
       <Header />
       <Tours tours= {tours} removeTour={removeTour}/>
     </main>
  );
}

export default App;
