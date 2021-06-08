import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {
    const setCategories = jest.fn()
    let wrapper = shallow(  < AddCategory setCategories={setCategories} />)
    beforeEach( () => {
        jest.clearAllMocks()
         wrapper = shallow(  < AddCategory setCategories={setCategories} />)
    })

    test('Debe mostrarse Correctamente ', () => {
        expect(wrapper).toMatchSnapshot()        
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        /* console.log(input)  */  
        const value = 'Hola mundo'
        input.simulate('change',{ target : { value:value } } )

        expect( wrapper.find('p').text().trim() ).toBe(value)
    })

    test('No debe de imprimir o mostrar la informacion Onsubmit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
            const value = 'Hola mundo'
            wrapper.find('input').simulate('change',{ target : { value:value } } )
            
            wrapper.find('form').simulate('submit',{ preventDefault(){} })
            expect(setCategories).toHaveBeenCalled(); // verifica que halla pasado al menos una vez
            expect(setCategories).toHaveBeenCalledTimes(1) //verifica las veces q se ejecuta
            expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) //verifica que el parametro ingresado sea una funcion
           /*  wrapper.find('input').simulate('change',{ target : { value: ' ' } } ) */  
           /* Esta es la forma que la hice yo, ñp que hice fue llamar de nuevo el wrapper y darle un valor nuevo al value:value, de esta forma
           el segundo value igualandolo a un string vacio */
           expect( wrapper.find('input').prop('value') ).toBe('')

    })
    

    
})
