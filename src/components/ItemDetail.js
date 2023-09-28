import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'

const ItemDetail = ({
  name,
  scientificName,
  commonNames,
  impact,
  manage,
  riskLevel,
  urlImage,
}) => {
  return (
    <Card>
      <CardMedia sx={{ height: 200 }} image={urlImage} title={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          fontStyle="italic"
        >
          {scientificName}
        </Typography>
        <Box mb={0.5}>
          {commonNames.split(',').map((commonName) => (
            <Chip
              size="small"
              label={commonName}
              key={commonName}
              sx={{ m: 0.25 }}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
        <Typography variant="subtitle2" fontWeight="bold">
          Impacto
        </Typography>
        <Typography variant="body2" paragraph mb={1}>
          {impact}
        </Typography>
        <Typography variant="subtitle2" fontWeight="bold">
          Manejo
        </Typography>
        <Typography variant="body2" paragraph mb={0}>
          {manage}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ItemDetail
