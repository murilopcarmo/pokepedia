import { CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PokemonCardContainer, PokemonSprite } from './styles';

export const PokemonCard = ({name, sprite, id}) => {
  return (
    <PokemonCardContainer>
<PokemonSprite
        component="img"
        alt={name}
        src={sprite}
      />
        <CardContent>
          <Typography variant="id" component="div">
            {`#${id.toString().padStart(3, '0')}`}
          </Typography>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center', mt: -1}}>
                {name}
            </Typography>
        </CardContent>
        <CardActions>

        </CardActions>
    </PokemonCardContainer>
            
  );
}