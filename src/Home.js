import { useState } from "react";

const Home = () => {
  // let name = 'habu';
  const [name, setName] = useState('habu'); 
  const[age, setAge] = useState(25)

  const handleClick = () => {
   setName ('luigi');
   setAge (30);
   console.log('😘');
  }
  
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}
 
export default Home;