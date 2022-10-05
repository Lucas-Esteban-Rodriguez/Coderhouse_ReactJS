const products = [
    {
        id: '1',
        name: 'Starbucks cafe Colombia',
        price: '1.450',
        category: 'CafeMolido',
        stock: '50',
        img: 'https://http2.mlstatic.com/D_NQ_NP_841257-MLA49783873884_042022-V.webp',
        desc: 'Cafe de Starbucks Colombia'
    },
    {id: '2',name: 'Cafe con leche en capsulas Nestle',price: '1.000',category: 'CapsulasDeCafe',stock: '50',img: 'https://http2.mlstatic.com/D_NQ_NP_852928-MLA43773298639_102020-V.webp',desc: 'Cafe con leche Dolce Gusto en capsulas'},
    {id: '3',name: 'Prensa francesa cafetera',price: '9.000',category: 'Cafeteras',stock: '25',img: 'https://http2.mlstatic.com/D_NQ_NP_924598-MLA41173079342_032020-W.webp',desc: 'Cafetera Prensa Francesa marca Volturno'},
    {id: '4',name: 'Moka Pot cafetera',price: '6.600',category: 'Cafeteras',stock: '25',img: 'https://http2.mlstatic.com/D_NQ_NP_2X_661872-MLA47660314743_092021-F.webp',desc: 'Cafetera Hudson Moka 6 Tazas manual negra prensa francesa'}
]
export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
export const getProduct = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        })
    })
}