import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import styles from "./components/Books.module.css"


function App() {

    const[fictionState,setFictionState] = useState(true)
    const[nonFictionState,setNonFictionState] = useState(false)

    const handleToggle=()=>{

        if(fictionState){
          setFictionState(false)
          setNonFictionState(true)
        }else{
          setFictionState(true)
          setNonFictionState(false)
        }

    }

  return (
    <div>
      <h1 className={styles.textCenter}>Mini Book Store</h1>

      <button data-testid="toggle-btn" className={styles.toggle} onClick={handleToggle}>{fictionState?"Show Non-Fiction Books":"Show Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}

          {
            nonFictionState?<NonFiction/>:<Fiction/>
          }

      </div>
    </div>
  );
}

export default App;
