import { Box, Card, CardContent, Skeleton } from '@mui/material'

const ItemDetailSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton width="60%" height={30} />
        <Skeleton width="40%" height={20} sx={{ mb: 1 }} />
        <Box display="flex" mb={1}>
          <Skeleton
            height={10}
            variant="rounded"
            width="8%"
            sx={{ mx: 0.25 }}
          />
          <Skeleton
            height={10}
            variant="rounded"
            width="8%"
            sx={{ mx: 0.25 }}
          />
          <Skeleton
            height={10}
            variant="rounded"
            width="8%"
            sx={{ mx: 0.25 }}
          />
          <Skeleton
            height={10}
            variant="rounded"
            width="8%"
            sx={{ mx: 0.25 }}
          />
          <Skeleton
            height={10}
            variant="rounded"
            width="8%"
            sx={{ mx: 0.25 }}
          />
          <Skeleton
            height={10}
            variant="rounded"
            width="8%"
            sx={{ mx: 0.25 }}
          />
        </Box>
        <Skeleton width="15%" height={15} sx={{ mb: 1 }} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton width="15%" height={15} sx={{ my: 1 }} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton height={13} />
        <Skeleton height={13} />
      </CardContent>
    </Card>
  )
}

export default ItemDetailSkeleton
