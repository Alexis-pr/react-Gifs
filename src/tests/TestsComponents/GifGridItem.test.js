import '@testing-library/react'
import  {GifGridItem} from './../../components/GifGridItem'
import React from 'react'
import { shallow } from "enzyme" 



describe('Pruebas del Componente GifGridItem.js', () => {
    const title = 'Hola de titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={url} /> )

    test('Debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot() 
    })

    test('Debe de tener un texto el title', () => {
        const p = wrapper.find('h4')
        expect( p.text().trim() ).toBe(title);
    })
    
    test('La imagen debe de tener las dos propiedades correctamente', () => {
        const img = wrapper.find('img')
        /* console.log(img.props().src) */
        expect(img.prop('src')).toBe(url)
        expect( img.prop('alt')).toBe(title)
    })

    test('El div debe de tener la clase correcta', () => {
        const cont = wrapper.find('div')
        /*  console.log( cont.prop('className') )  */
        const className = cont.prop('className')
        expect(className.includes('animate__fadeInDown')).toBe(true)
        
    })
    
    
    
})
