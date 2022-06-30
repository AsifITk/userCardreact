import "./App.css";
import Colors from "./components/Colors";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("");
  //function to create ramdom hex color
  const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  };
  let somecolor = random_hex_color_code();
  let arr = [0.2, 0.4, 0.6, 0.8, 0.9, 1];
  let bg = random_hex_color_code();
  return (
    <div className="page">
      <h1>color palette generator</h1>
      <button onClick={(e) => setColor({ bg })}>generate</button>
      <div className="container">
        {arr.map((elm) => (
          <Colors bgC={bg} opacity={elm} />
        ))}
      </div>
    </div>

    // <>
    // <h1>My Users</h1>
    // {/* <div>My Company Users</div> */}
    // <div className="main">
    // {users.map((user) => (
    //   <Card user={user} />
    // ))}
    // </div>
    // </>
  );
}

export default App;
