import { Button, Container, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ pt: 3 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        Búsqueda de items
      </Typography>
      <Grid container spacing={1} alignItems="center">
        <Grid xs={8}>
          <TextField
            label="Término de busqueda"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid xs={4}>
          <Button variant="contained" fullWidth>
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
