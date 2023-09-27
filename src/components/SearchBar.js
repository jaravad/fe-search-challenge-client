import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Button,
  Unstable_Grid2 as Grid,
  InputAdornment,
  TextField,
} from '@mui/material/'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ disabledButton = false }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { push } = useRouter()

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!disabledButton) {
      push(`/items?q=${searchTerm}`)
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid xs={4}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={disabledButton}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SearchBar
