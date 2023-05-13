import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DialogButton from "./DialogButton";


export default function CardComponent({ id, name, desc, age, img, handleDelete }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 250, width: 300 }} image={img} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hola me llamo {name} y tengo {age} años
        </Typography>
      </CardContent>
      <CardActions>
        <DialogButton name={name} desc={desc}/>
        <IconButton aria-label="delete">
          <DeleteIcon size="small" onClick={() => handleDelete(id)} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
