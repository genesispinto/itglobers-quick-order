import React, { useState, useEffect } from 'react'
import { useLazyQuery, useMutation } from 'react-apollo'
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const QuickOrder = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const title = generateBlockClass(styles.title, blockClass)
  const input = generateBlockClass(styles.input, blockClass)
  const btnAddToCart = generateBlockClass(styles.btnAddToCart, blockClass)

  const [inputText, setInputTex] = useState('')
  const [search, setSearch] = useState('')

  const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (event: any) => {
    setInputTex(event.target.value)
    console.log('Input changed', inputText)
  }

  useEffect(() => {
    if (product) {
      let skuId = parseInt(inputText)
      addToCart({
        variables: {
          salesChannel: '1',
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: '1',
            },
          ],
        },
      }).then(() => {
        window.location.href = '/checkout'
      })
    }
  }, [product, search])

  const addProductToCart = () => {
    getProductData({
      variables: {
        sku: inputText,
      },
    })
  }
  const searchProduct = (event: any) => {
    event.preventDefault()
    if (!inputText) {
      alert('Por favor ingrese algo')
    } else {
      setSearch(inputText)
      addProductToCart()
    }
  }

  return (
    <div className={container}>
      <h2 className={title}>Compra rapida</h2>
      <form onSubmit={searchProduct}>
        <input
          className={input}
          id="sku"
          type="text"
          placeholder="Ingresa nro Sku"
          onChange={handleChange}
        ></input>
        <input
          className={btnAddToCart}
          type="submit"
          value="AÑADIR AL CARRITO"
        />
      </form>
    </div>
  )
}

export default QuickOrder
