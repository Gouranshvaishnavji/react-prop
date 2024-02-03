import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const getimage = imageData();
  return (
    <> 
      <h1>Kalvium GallerY</h1> 

      <div className="body">
      {getimage.map((ele)=>{
        return <img src={ele.img} alt="elephant-image" key={ele.id}/>
      })}
    </div>
    <footer>
      <p>Created by <a href="https://www.instagram.com/gouranshvaishnav/" target="_blank">Gouransh</a> with kalvium</p>
    </footer>
    </>
  );
}

export default App;