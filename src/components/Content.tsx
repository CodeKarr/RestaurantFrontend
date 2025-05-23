import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import '../index.css';

interface contentInterface{
    heading:string,
    paragraph:string,
    text?:string,
    boxShadow?:string,
    width?:string,
    height?:string,
    bgColor?:string,
    headingSize?:string,
    paragraphSize?:string,
    extraInfo?:string
};
const Content=({heading,paragraph,text,boxShadow,width,height,bgColor,paragraphSize,headingSize,extraInfo}:contentInterface)=>{
return(

    <Card className='card' sx={{ width:width,height:height,boxShadow:boxShadow}}>
      <CardContent>
              <Typography className='heading' variant="h5" component="div" sx={{fontSize:headingSize}}>
          {heading}
        </Typography>
         <Typography className='paragraph' variant="body2" sx={{wordBreak:"break-word",marginTop:"4px",fontSize:paragraphSize}}>
            {paragraph}
        </Typography>
      </CardContent>
      <CardActions>
        {
          !text ? "":  <Button size="small" variant='contained'>{text}</Button>
        }
      {
        extraInfo
      }
      </CardActions>
    </Card>
)
};
export default Content;