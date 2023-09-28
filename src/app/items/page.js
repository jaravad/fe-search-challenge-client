'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import Item from '../../components/Item'
import SearchBar from '@/components/SearchBar'

export default function Items() {
  const PAGE_COUNT = 6
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const fetchItems = async (offset, limit) => {
    const skip = offset * PAGE_COUNT
    setLoading(true)
    let fetchUrl
    if (query === null) {
      fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}api/items?skip=${skip}&limit=${limit}`
    } else {
      fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}api/items?q=${query}&skip=${skip}&limit=${limit}`
    }
    const results = await fetch(fetchUrl)
    const data = await results.json()
    setLoading(false)
    return data
  }

  const loadMoreItems = async (offset) => {
    const { items: newItems, itemsCount } = await fetchItems(offset, PAGE_COUNT)
    setTotalItems(itemsCount)
    setItems((prevItems) => {
      if (!prevItems) {
        return [...newItems]
      }
      return [...prevItems, ...newItems]
    })
    setOffset((prev) => prev + 1)
  }

  useEffect(() => {
    if (!items) {
      loadMoreItems(offset)
    }
  }, [items])

  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 6 }}>
      <Typography component="h1" variant="h5" sx={{ mb: 2 }} align="center">
        Especies invasoras de Colombia 🇨🇴
      </Typography>
      <SearchBar disabledButton={loading} />
      {Boolean(items && items.length && query !== null) && (
        <Typography component="h6" variant="body1" sx={{ mb: 2 }} align="left">
          Resultados de busqueda para '{query}'
        </Typography>
      )}
      {!items ? null : items.length ? (
        <Grid container spacing={2}>
          {items.map((item) => {
            return (
              <Grid xs={12} sm={6} md={4} key={item._id}>
                <Item
                  name={item.name}
                  image={item.urlImage}
                  impact={item.impact}
                  index={item.index}
                />
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <Typography component="h2" variant="subtitle1">
          No se encontraron especies
        </Typography>
      )}
      <Box mt={3} display="flex" justifyContent="center">
        {loading ? (
          <CircularProgress />
        ) : Boolean(items && items.length < totalItems) ? (
          <Button onClick={() => loadMoreItems(offset)}>Cargar mas</Button>
        ) : (
          Boolean(items && items.length) && (
            <Typography variant="caption" align="center">
              Has llegado al final
            </Typography>
          )
        )}
      </Box>
    </Container>
  )
}
