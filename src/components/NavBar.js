'use client'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const { push } = useRouter()
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Typography
            variant="subtitle2"
            component="h6"
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              push('/')
            }}
          >
            Especies invasoras de Colombia 🇨🇴
          </Typography>
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              push('/items')
            }}
          >
            Todas las especies
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
