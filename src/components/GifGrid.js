import React  from 'react'
import { UseFetchGifs } from '../hooks/UseFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {
 /*    const [images, setImages] = useState([])
    useEffect(() => {
        getGifs(category)
         .then(setImages)
    }, [category])
      */
  const {data:images,loading} = UseFetchGifs( category);

    return (
        <>
         
            {loading && 'cargando...' }
            <h3 className="animate__animated animate__fadeIn animate__delay-2s">{category}</h3> <hr/> 
            <div className='card-grid'>
                {
                    images.map((img)=> (
                    <GifGridItem 
                        key={img.id}
                        {...img} /* Esto es igual a { img.url , img.title} tambien se puede usar el destructurado pero esto tomaria mas lineas de codigo
                        mientras que de esta forma es mas facil y legible el codigo  */
                        />))
                }
            </div>
        </>

    )
}
