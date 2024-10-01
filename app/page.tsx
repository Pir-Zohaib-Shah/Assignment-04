import React from 'react'
import Card from './components/card'

const Home = () => {
  return (
    <>
    <div><Card name="Zohaib Shah" age={21} rollno={12457} class="Monday" /></div>
    <div><Card name="Haris Khan" age={20} rollno={12137} class="Tuesday" /></div>
    <div><Card name="Haider Ali" age={24} rollno={12478} class="Friday" /></div>
    </>
  )
}

export default Home