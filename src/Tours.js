import Tour from './Tour'

const Tours = ({tours, removeTour}) =>{
    return(
        <>
        {tours.map((tour)=>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>})
        }
        </>
    )
}

export default Tours