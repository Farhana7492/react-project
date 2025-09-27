import React, { use, useEffect } from 'react'

function Products() {
    useEffect(() => {
        document.title = "Products"
    }, [])

  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export default Products
