import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


function NavBar(){
    return(
        <header className='main-header'>

            <div className='container-logo'>
                <h1>Logo</h1>
            </div>
        
        <Box className='navbar'
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
             m: 1,
        },
        }}
        
        >   <ButtonGroup variant="text" aria-label="text button group">
                <Button>Home</Button>
                <Button>Productos</Button>
                <Button>Nosotros</Button>
                <Button>Contacto</Button>
            </ButtonGroup>
        </Box>

        </header>
    )
}

export default NavBar

