// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components/macro'

// export default function Navigation() {
//   const [toggle, setToggle] = useState(true)

//   useEffect(() => {
//     console.log('Effect Navigation')
//   }, [toggle])

//   return (
//     <NavigationStyled onClick={() => setToggle(!toggle)}>
//       <Button exact to="/">
//         Home
//       </Button>
//       <Button to="/create">Create</Button>
//     </NavigationStyled>
//   )
// }

// const Button = styled(NavLink)`
//   flex-grow: 1;
//   color: white;
//   text-decoration: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: grey;
//   opacity: 0.9;

//   &.active {
//     background: #549dd8;
//     opacity: 0.9;
//   }
// `

// const NavigationStyled = styled.nav`
//   display: grid;
//   grid-template-columns: repeat(2, auto);
//   grid-column-end: 2;
//   position: fixed;
//   width: 100%;
//   z-index: 1;
//   top: 0;
//   line-height: 2.4;
//   box-shadow: 0 5px 7px 1px lightgrey;
// `
