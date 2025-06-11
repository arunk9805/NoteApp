import homeBanner from "../assets/homeBanner.svg";
import Navbar from "./Navbar";

function Mynotes() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="mynote-main-container">
        <img src={homeBanner} alt="Home Banner" />
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
    </div>
  );
}

export default Mynotes;
