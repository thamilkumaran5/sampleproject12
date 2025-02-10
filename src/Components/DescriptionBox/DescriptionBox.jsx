import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            The ecommerce site features excellent copy, really good images, 
            and a natural flow for potential buyers. Plus, everything is 
            optimized for conversion rates — for example, notice the 
            navigation bar: each link is to a commercial page; the navigation to 
            non-commercial pages like the contact or about page is placed 
            in the footer.
            </p>
            <p>
            An ecommerce platform is software that enables you to sell 
            products and services online. It provides the tools to build 
            an online store, such as shopping cart functionality, payment 
            processing, and inventory management.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox