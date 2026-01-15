import { usePokemonCry } from "./hooks";
import { Box, CryButton } from "./styles";

export const PokemonCry = ({ src }) => {
  const {play} = usePokemonCry({src});
  return (
    <Box>
      <CryButton onClick={play}>▶</CryButton>
      <span>Cry</span>
    </Box>
  );
};
