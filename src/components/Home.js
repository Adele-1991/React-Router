import React from 'react' ;
import style from "../styles/style.module.css";
import { useNavigate } from 'react-router-dom';

 function Home() {
  const navigate=useNavigate();
  const clickHandler=()=>{

navigate("./products")
  }

    return (
      <div className={style["component-box"]}>
       <h1>Home</h1> 
       <button onClick={clickHandler}>Go to Products</button>
      </div>
    )
  }

export default Home;