import { Button, Container, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import Item from '../components/Item'

import data from '../data'

export default function Home() {
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
          />
        </Grid>
        <Grid xs={4}>
          <Button variant="contained" fullWidth>
            Buscar
          </Button>
        </Grid>
      </Grid>

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
    </Container>
  )
}
