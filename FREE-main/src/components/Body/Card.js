import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useNavigate, Link } from "react-router-dom"

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
function CardCategory({title,des,label}) {
  const history=useNavigate();
  return (
    
    <div className='shadow hover:shadow-lg' onClick={()=>{ history("/todo")}}>
       
       <Card sx={{ minWidth: 275 }}>
       <CardActionArea>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Category
        </Typography>
        <Typography variant="h5" component="div">
        {title}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {des}
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> <div className="text-blue-300"> <Chip label={label} /></div> </Button>
      </CardActions>
      </CardActionArea>
    </Card>
   </div>

 
   
  )
}

export default CardCategory