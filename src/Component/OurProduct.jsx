import React from 'react';

const OurProduct = () => {
  return (
    <div className='container_product'> 
    <main className='grid_product'>
    <h1 className='product_main_heading'>Our Product</h1>
        <article>
        <div className='Product_img'></div>
          <div>
              <h3 className='product_heading'>Your product name </h3>
              <p className='product_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
              <button className='Meet_product_btn'>Buy Now</button>
          </div>
        </article>

        <article>
        <div className='Product_img'></div>
          <div>
              <h3 className='product_heading'>Your product name </h3>
              <p className='product_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
              <button className='Meet_product_btn'>Buy Now</button>
          </div>
        </article>

        <article>
        <div className='Product_img'></div>
          <div>
              <h3 className='product_heading'>Your product name </h3>
              <p className='product_heading_para'>Lorem ipsum is simply dummy text of the printing and  typesetting industry.</p>
              <button className='Meet_product_btn'>Buy Now</button>
          </div>
        </article>
    </main>    
  </div>
  )
}

export default OurProduct