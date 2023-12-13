// Dropdowns.js
import React, { useState, useEffect } from 'react';
import MaterialDropdown from './MaterialDropdown';
import "./Dropdown.css";
// const Dropdowns = ({ onSelect }) => {
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');

//   const handleCategoryChange = (value) => {
//     setCategory(value);
//     setSubcategory('');
//     onSelect(value, '');
//   };




//   const handleSubcategoryChange = (value) => {
//     setSubcategory(value);
//     onSelect(category, value);
//   };

//   return (
//     <div className='dropdownbox'>
//         <div className='dropdown'>
//       <MaterialDropdown
//         label="Domain"
//         options={['Healthcare', 'FMCG', 'Education', 'E-commerce', 'Real Estate']}
//         onSelect={handleCategoryChange}
//       />
//   </div>

//   <div className='dropdown'>
//       <MaterialDropdown
//         label="Function"
//         options={
//           category === 'Healthcare'
//             ? ['Sales','Finance']
//             : category === 'FMCG'
//             ? ['Sales','Finance']// Add options for 'shares'
//             : category === 'Education'
//             ? ['Sales','Finance']
//             : category === 'E-commerce'
//             ? ['Sales','Finance']
//             : category === 'Real Estate'
//             ? ['Sales','Finance']
//             :[]

    
//         }
//         onSelect={handleSubcategoryChange}
//         disabled={!category}
//       />
//       </div>
//     </div>
//   );
// };





// ... (your other import statements)

// ... (your other import statements)

// ... (your other import statements)

const Dropdowns = ({ onSelect }) => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
  
    const handleCategoryChange = (value) => {
      // Clear the subcategory directly when the category changes
      onSelect(value, '');
      setCategory(value);
    };
  
    const handleSubcategoryChange = (value) => {
      setSubcategory(value);
    };
  
    useEffect(() => {
      onSelect(category, subcategory);
    }, [category, subcategory, onSelect]);
  
    return (
      <div className='dropdownbox'>
        <div className='dropdown'>
          <MaterialDropdown
            label="Domain"
            options={['Healthcare', 'FMCG', 'Education', 'E-commerce', 'Real Estate']}
            onSelect={handleCategoryChange}
          />
        </div>
  
        <div className='dropdown'>
          <MaterialDropdown
            label="Function"
            options={
              category === 'Healthcare'
                ? ['Sales', 'Finance']
                : category === 'FMCG'
                ? ['Sales', 'Finance']
                : category === 'Education'
                ? ['Sales', 'Finance']
                : category === 'E-commerce'
                ? ['Sales', 'Finance']
                : category === 'Real Estate'
                ? ['Sales', 'Finance']
                : []
            }
            onSelect={handleSubcategoryChange}
            disabled={!category}
          />
        </div>
      </div>
    );
  };
  
  export default Dropdowns;
  
  


// // Dropdowns.js


// Dropdowns.js

// Dropdowns.js

// Dropdowns.js


