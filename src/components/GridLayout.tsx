import { Grid, ListItem } from "@mui/material"

const GridLayout = () => {
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
      <Grid size={4}>
          <ListItem>HASSAN</ListItem>
      </Grid>
      <Grid size={4}>
          <ListItem>HASSAN</ListItem>
      </Grid>
    </Grid>
  )
}

export default GridLayout