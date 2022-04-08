import Code from './images/image-qr-code.png';
function App() {
  return (
    <div className="App" role="main">
      <div className="container" >
        <img src={Code} alt=""  />
        <div className="content">
          <h1 > Improve your front-end skills by building projects</h1>
          <p >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
      <div class="attribution">
        <p >
 Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" >Frontend Mentor</a>.Coded by <a href="https://www.frontendmentor.io/profile/mohamed-benoughidene">Mohamed Benoughidene</a>.
        </p>
   
    
  </div>
    </div>
  );
}

export default App;
