import { Grid, ListItem } from "@mui/material"
import type { ReactElement } from "react"
interface GridInter{
  left:ReactElement,
  right:ReactElement
}
const GridLayout = ({left,right}:GridInter) => {
  return (
    <Grid container spacing={0} alignItems={"center"} justifyContent={"center"}>
      <Grid size={{md:4,sm:12,xs:12}}>
          <ListItem>{left}</ListItem>
      </Grid>
      <Grid size={{md:1,sm:1,xs:1}} />
      <Grid size={{md:5,sm:12,xs:12}}>
          <ListItem>{right}</ListItem>
      </Grid>
    </Grid>
  )
}

export default GridLayout