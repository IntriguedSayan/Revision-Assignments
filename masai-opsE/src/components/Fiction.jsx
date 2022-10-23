import { useEffect } from "react";
import { useState } from "react";
import fictionJson from "../fiction.json"
import BookCard from "./BookCard";
import styles from "./Books.module.css"

export default function Fiction() {

  const [data,setData] = useState([])


  useEffect(()=>{

    setData(fictionJson)

  },[])

  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title' className={styles.textCenter}>{"Fictional Books"}</h1>

      <div className={styles.books}>
        {/* Map all Fictional Books here */}
        {
            data.map((elem)=>(

                <BookCard key={elem.price} title={elem.title} price={elem.price}
                year={elem.year} image={elem.img} author={elem.author} />
            ))
        }
      </div>
    </div>
  );
}
