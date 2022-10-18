import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";
import img1 from "./assets/detailpage.c5e2734f17731c3b6651.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="left">
          <div className="heading">
            <h1>Provide your details and get started</h1>
          </div>
          <div className="line">
            <div className="c1">
              <div></div>
              <p>Basic Details</p>
            </div>
            <div className="b"></div>
            <div className="c1">
              <div></div>
              <p>Verify</p>
            </div>
          </div>
          <Form />
        </div>
        <div className="right">
          <h1>
            BeatRoute cares for you <br />
            and your employees
          </h1>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
