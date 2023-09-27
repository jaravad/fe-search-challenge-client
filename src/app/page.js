'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import Item from '../components/Item'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const { push } = useRouter()

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleClick = () => {
    if (!loading) {
      push(`/items?q=${searchTerm}`)
    }
  }

  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 6 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }} align="center">
        Especies invasoras de Colombia 🇨🇴
      </Typography>
      <Grid container spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Grid xs={8}>
          <TextField
            label="Buscar especie"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="off"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid xs={4}>
          <Button
            variant="contained"
            fullWidth
            disabled={loading}
            onClick={handleClick}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : !items ? null : items.length ? (
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <Grid xs={12} sm={6} md={4} key={item.id}>
                <Item
                  name={item.name}
                  image={item.urlImage}
                  impact={item.impact}
                />
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <Typography component="h2" variant="h5">
          No se encontraron especies
        </Typography>
      )}
    </Container>
  )
}
