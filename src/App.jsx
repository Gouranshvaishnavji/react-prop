import './App.css'

function App(props) {

  // code here
  const ha = props.myData();
  return(
    <>
     <div className=''><h1>Kalvium Gallery</h1></div>
     <div className='body'>
     {
        ha.map((item,index) =>{
          return(
            <div key={index}>
              <img src={item.img} alt="" />
            </div>)})
      }
     </div>
     <footer>
      <p>Created by <a href="https://www.instagram.com/gouranshvaishnav/" target="_blank">Gouransh</a> with kalvium</p>
    </footer>
    </>
  )
}

export default App;