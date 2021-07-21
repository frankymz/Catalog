import React, { useEffect, useState } from "react";
import Service from "../../Service/Service";
import Panel from "../../Components/Home-Components/Carousel/Coursel";

function Home() {
  const [state, setState] = useState({
    products:[]
  });
  const[isLoading, setLoading] = useState(true);

  useEffect(() => {
    Service.getProducts().then((response)=>{
      console.log(response.data)
      setState({products:response.data})
      setLoading(false);
    })
    
  }, [])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
   return (
    <React.Fragment>
      <div style={{
        margin:"auto"
      }}>
       {JSON.stringify(state.products[0].price)}
      </div>
      
      <Panel/>
    </React.Fragment>
  );
}

export default Home;
