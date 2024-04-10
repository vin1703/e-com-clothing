import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { categories } from '../data'
import CategoriesItems from './CategoriesItems'
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;
function Categories() {
  return (
    <Container>
      {categories.map(item=>(
        <CategoriesItems key={item.id} item ={item}/>
      ))}
    </Container>
  )
}

export default Categories
