import React from "react";
import earthImg from './../assets/img/earth.jpg'


const Product = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr style={{width:'60%'}}>
            <th scope="col" class="px-6 py-3">
              Product Name
            </th>
            <th scope="col" class="px-6 py-3">
              Stock
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Total Sales
            </th>
           
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
               
                <span style={{display:'flex',flexDirection:'row',gap:'10px'}}> <img src={earthImg} alt=""/>Abstract 3D </span>
            </th>
            <td class="px-6 py-4">32 in Stock</td>
            <td class="px-6 py-4">$ 45.99</td>
            <td class="px-6 py-4">20</td>
           
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                 <span style={{display:'flex',flexDirection:'row',gap:'10px'}}> <img src={earthImg} alt=""/> Sarphens Illustrations</span>
             
            </th>
            <td class="px-6 py-4">32 in Stock</td>
            <td class="px-6 py-4">$ 45.99</td>
            <td class="px-6 py-4">20</td>
            
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Product;
