'use client'
import { Container, Typography } from '@mui/material'

import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        pt: 4,
        pb: 6,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography component="h1" variant="h4" sx={{ mb: 2 }} align="center">
        Especies invasoras de Colombia 🇨🇴
      </Typography>
      <SearchBar />
    </Container>
  )
}
