import { useEffect } from "react";
import { useState } from "react";
import nonFictionJson from "../nonfiction.json"
import BookCard from "./BookCard";
import styles from "./Books.module.css"

export default function NonFiction() {

  const [data,setData]=useState([])


  useEffect(()=>{

    setData(nonFictionJson)

  },[])

  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title' className={styles.textCenter}>{"Non-Fiction Books"}</h1>

      <div className={styles.books}>
        {/* Display all Non-Fiction books here */}

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
