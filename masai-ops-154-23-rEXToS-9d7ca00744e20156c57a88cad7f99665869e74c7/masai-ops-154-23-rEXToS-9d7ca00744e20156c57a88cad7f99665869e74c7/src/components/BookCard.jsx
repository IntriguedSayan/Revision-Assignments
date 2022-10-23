import styles from "./Books.module.css"


export default function BookCard({title,author,year,price,image}) {



  return (
    <div data-testid='book-card' className={styles.bookCard}>
        <img src={image} alt={title} />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

