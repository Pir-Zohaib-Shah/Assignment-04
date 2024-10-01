import React from 'react'

interface id_card {
    name : string;
    age : number;
    rollno : number;
    class : string;
}

const Card = (props:id_card) => {
  return (
    <>
    <div className='max-w-96 mx-auto bg-gradient-to-tr from-blue-300 to-blue-500 shadow-lg rounded-lg overflow-hidden mt-10'>
    <div className='p-6'>
    <h2 className='text-2xl font-bold text-center text-gray-900 mb-2'>STUDENT ID CARD</h2>
    <div className='text-gray-800 mb-2'><strong>Name:</strong> {props.name}</div>
    <div className='text-gray-800 mb-2'><strong>Age:</strong> {props.age}</div>
    <div className='text-gray-800 mb-2'><strong>Roll no:</strong> {props.rollno}</div>
    <div className='text-gray-800 mb-2'><strong>Class:</strong> {props.class}</div>
    </div>
    </div>
   </>
  )
}

export default Card