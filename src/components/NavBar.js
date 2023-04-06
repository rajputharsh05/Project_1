import style from 'styled-components'


const Container = style.div`
   height : 100px;
   width : 100%;
   display : flex;
   justify-content : center;
   align-items: center;
`

const Navbar = () =>{
    return (
        <Container>
            <h1>WORKS</h1>
        </Container>
    )
}

export default Navbar