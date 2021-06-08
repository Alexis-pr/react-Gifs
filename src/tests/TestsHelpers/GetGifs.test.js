import '@testing-library/react'
import { getGifs } from '../../helpers/GetGifs'


describe('Pruebas al helper GetGifs con fetch', () => {

    test('Debe de traer 10 Elementos', async() => {           
       const gifs= await  getGifs('one punch')
        expect(gifs.length).toBe(9)
    })
    test('Debe de traer 10 Elementos', async() => {           
        const gifs= await  getGifs( '' )
        
         expect(gifs.length).toBe(0) 
         
     })
    
})
