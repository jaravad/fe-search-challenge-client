'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import Item from '../../components/Item'
import SearchBar from '@/components/SearchBar'

export default function Items() {
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)
  const { replace } = useRouter()

  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  if (query === null) {
    return replace('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const results = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/items?q=${query}`
      )
      const items = await results.json()
      setItems(items)
      setLoading(false)
    }
    if (query !== null) {
      fetchData()
    }
  }, [query])

  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 6 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }} align="center">
        Especies invasoras de Colombia 🇨🇴
      </Typography>
      <SearchBar disabledButton={loading} />
      {Boolean(items && items.length) && (
        <Typography component="h6" variant="body1" sx={{ mb: 2 }} align="left">
          Resultados de busqueda para '{query}'
        </Typography>
      )}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : !items ? null : items.length ? (
        <Grid container spacing={2}>
          {items.map((item) => {
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
