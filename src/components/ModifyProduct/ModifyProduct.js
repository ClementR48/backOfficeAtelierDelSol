import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ModifyProduct = ({ items }) => {

  const [ item, setItem ] = useState()
  const { id } = useParams();
  console.log(id);
  const findById = () => {
    const item = items.find((el) => el._id === id)
    setItem(item)
  }

  useEffect(() => {
    findById()
  }, [id])

  console.log(item);


  
  return (
    <div>
      
    </div>
  );
};

export default ModifyProduct;