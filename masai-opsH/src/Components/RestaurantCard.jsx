


export function RestaurantCard({
    name, number_of_votes, price_starts_from, rating, type
}){
    return (
        <tr data-testid="item">
            <td data-testid="name"><p>{name}</p>
            </td>
            <td data-testid="rating"><p>{rating}</p>
            </td>
            <td data-testid="type"><p>{type}</p>
            </td>
            <td data-testid="votes"><p>{number_of_votes}</p>
            </td>
            <td data-testid="price"><p>{price_starts_from}</p>
            </td>
        </tr>
    )
}

// : 
// id
// : 
// 1
// image
// : 
// "https://picsum.photos/200"
// name
// : 
// "Shute"
// number_of_votes
// : 
// 588
// price_starts_from
// : 
// 925
// rating
// : 
// 4.5
// type
// : 
// "fine_dining"