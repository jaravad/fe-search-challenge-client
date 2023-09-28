'use client'
import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import ItemDetail from '../../../components/ItemDetail'
import ItemDetailSkeleton from '@/components/ItemDetailSkeleton'

const ItemDetailPage = ({ params }) => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = params

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/items/${id}`
      )
      const data = await result.json()
      setItem(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Container maxWidth="sm" sx={{ pt: 4, pb: 6 }}>
      {loading ? (
        <ItemDetailSkeleton />
      ) : (
        Boolean(item) && <ItemDetail {...item} />
      )}
    </Container>
  )
}

export default ItemDetailPage
