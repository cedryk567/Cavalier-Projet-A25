import { useState } from "react";
import "./Equipes.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CarteEquipe({ nom, image, icone, equipes }) {
  return (
    <Card className="carteEquipe">
      <CardMedia className="carteImage" image={image} title={nom} />
      <CardContent className="generalCarte">
        <Box className="carteTitre">
          {icone && (
            <img src={icone} alt={`${nom} icone`} className="iconeSport" />
          )}
          <Typography gutterBottom variant="h5" component="div">
            {nom}
          </Typography>
        </Box>

        <Box className="groupeBoutons">
          {(equipes || []).map((eq, index) => (
            <Button
              key={index}
              variant="outlined"
              size="small"
              className="buttonEquipes"
              disableRipple
              // disableElevation
            >
              {eq}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default CarteEquipe;
