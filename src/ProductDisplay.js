import React, { useState } from 'react';
import './ProductDisplaycss.css';
import ProductList from './ProductList';
const initialProducts = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description of Product 1',
      price: 1,
      image: 'product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Description of Product 2',
      price: 432,
      image: 'product2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Description of Product 3',
      price: 9,
      image: 'product3.jpg',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Description of Product 4',
      price: 34,
      image: 'product4.jpg',
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Description of Product 5',
      price: 1,
      image: 'product5.jpg',
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Description of Product 6',
      price: 93,
      image: 'product6.jpg',
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Description of Product 7',
      price: 21342,
      image: 'product7.jpg',
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Description of Product 8',
      price: 2,
      image: 'product8.jpg',
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'Description of Product 9',
      price: 25,
      image: 'product9.jpg',
    }
  ];


const itemsPerPage = 4; 

export default function ProductDisplay() {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState(''); // Initial filter value
  const [sortBy, setSortBy] = useState(''); // Initial sorting value
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on user input
  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(filter.toLowerCase());
  });

  // Sort products based on the selected sorting attribute
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  // Calculate the range of products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the products to display on the current page
  const productsToDisplay = sortedProducts.slice(startIndex, endIndex);
  return (
    <div>
      <h1 className='h1'>Available Product List</h1>
      <div>
        <label className='filter'>
          Filter by Title : 
          <input
            className='input'
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </label>
        <label className='sort'>
          Sort by : 
          <select className='input' value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
      <ProductList products={productsToDisplay} />
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}
