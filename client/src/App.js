import './App.css';
import Component1 from './components/ListProduct';
import Component3 from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState,useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { get_product } from './redux/actionProduct/actionProduct';

function App() {
  const dispatch=useDispatch()
  const [search, setSearch] = useState("")
 

useEffect(()=>{
dispatch(get_product())
},[])
const data=useSelector((state)=>state.product)

  const handleChange=(e)=> {
    setSearch(e.target.value) }

  return ( 
  
    <div className="App">
      <Component3 handleChange={handleChange} />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/movie" element={<Component1 data={data} search={search}/>} />
  </Routes>
     
    
    </div>
  );
}

export default App;






// react class component
// import React, { Component } from 'react'
// import './App.css';
// import Component1 from './components/component1';
// import Component3 from './components/component3';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';

// export default class App extends Component {
//   constructor(){
//   super()
//   this.state={
//     search:"",
//     data:[
//     {id:1,title:"Le Transporteur",rating:4,image:"https://fr.web.img6.acsta.net/medias/nmedia/18/66/69/68/18979539.jpg",date:"02/10/2002"},
//     {id:2,title:"jurassic park",rating:3,image:"https://fr.web.img2.acsta.net/pictures/22/04/14/18/30/0040092.jpg",date:"09/06/1993"},
//     {id:3,title:"indiana jones",rating:4,image:"https://fr.web.img2.acsta.net/pictures/23/06/07/14/33/5787419.jpg",date:"30/06/2023"},
//     {id:4,title:"Expendables",rating:5,image:"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/269/jnnhsw4jqo5m8cvk9e2wub6gwex-646.jpg",date:"25/11/2014"},
//     {id:5,title:"La Chute",rating:4,image:"https://fr.web.img2.acsta.net/medias/nmedia/18/35/49/26/18399772.jpg",date:"16/09/2004"}
//   ]

// }
// }
//   handleChange(e){
//     this.setState({search:e.target.value})
//   }
//   componentDidMount(){
//     const {data}=this.state
//     var newMovie=JSON.parse(localStorage.getItem("data"))
//     if(newMovie){
//     this.setState({data:[...data,newMovie]})
//     }}
//   render() {
//     const {data,search}=this.state
//     return (
//       <div className="App">
//       <Component3 handleChange={()=>this.handleChange()} />
//   <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/movie" element={<Component1 films={data} search={search}/>} />
//   </Routes>
     
    
//     </div>
//     )
//   }
// }





// react function component :
// import './App.css';
// import Component1 from './components/component1';
// import Component3 from './components/component3';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React,{ useState,useEffect } from "react";
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
// function App() {
//   const [search, setSearch] = useState("")
//   const [data,setData]=useState([
//     {id:1,title:"Le Transporteur",rating:4,image:"https://fr.web.img6.acsta.net/medias/nmedia/18/66/69/68/18979539.jpg",date:"02/10/2002"},
//     {id:2,title:"jurassic park",rating:3,image:"https://fr.web.img2.acsta.net/pictures/22/04/14/18/30/0040092.jpg",date:"09/06/1993"},
//     {id:3,title:"indiana jones",rating:4,image:"https://fr.web.img2.acsta.net/pictures/23/06/07/14/33/5787419.jpg",date:"30/06/2023"},
//     {id:4,title:"Expendables",rating:5,image:"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/269/jnnhsw4jqo5m8cvk9e2wub6gwex-646.jpg",date:"25/11/2014"},
//     {id:5,title:"La Chute",rating:4,image:"https://fr.web.img2.acsta.net/medias/nmedia/18/35/49/26/18399772.jpg",date:"16/09/2004"}
//   ])
//   const handleChange=(e)=> {
//     setSearch(e.target.value) }
 
  
//   useEffect(()=>{
//     var newMovie=JSON.parse(localStorage.getItem("data"))
//     if(newMovie){
//     setData([...data,newMovie])
//     }
//   },[data])
//   return ( 
  
//     <div className="App">
//       <Component3 handleChange={handleChange} />
//   <Routes>
//     <Route path="/" element={<Home/>} />
//     <Route path="/movie" element={<Component1 films={data} search={search}/>} />
//   </Routes>
     
    
//     </div>
//   );
// }

// export default App;
