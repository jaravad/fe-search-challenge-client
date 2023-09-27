import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Item = ({ name, image, impact }) => {
  return (
    <Card>
      <CardMedia sx={{ height: 130 }} image={image} title="A happy cat" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '3',
            overflow: 'hidden',
          }}
        >
          {impact}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber mas</Button>
      </CardActions>
    </Card>
  )
}

export default Item
