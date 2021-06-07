

export const getGifs = async (category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${category}&limit=9&api_key=RA0py99IcKTeJrCqPKFeqWS9oe7S6W6T`;
    const res = await fetch(url)
    const {data} = await res.json()
    const gifs = data.map( img=>{
        return {
            id: img.id,
            title:img.title ,
            url: img.images.downsized_medium.url
        }
    })
   return gifs


}