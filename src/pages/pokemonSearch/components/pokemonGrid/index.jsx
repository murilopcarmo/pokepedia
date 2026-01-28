import { useEffect, useState } from "react";
import { useDebounce  } from "./hooks";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { PokemonCard } from "../pokemonCard";

export const PokemonGrid = () => {
  const [input, setInput] = useState(""); // State to hold the search input
  const [filteredPokemonList, setFilteredPokemonList] = useState([]); // State to hold the filtered list of Pokémon
  const [pokemonList, setPokemonList] = useState([]); // State to hold the list of Pokémon
  const [loading, setLoading] = useState(true); // State to manage loading status

  const debouncedSearch = useDebounce((searchTerm) => {
    const filteredList = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
    setFilteredPokemonList(filteredList);
  }, 1000); // Debounce delay of 500ms

  useEffect(() => {
    // Fetch Pokémon data from the API
    async function fetchPokemonList() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=1025",
        );
        const data = await response.json();
        const dataFormatted = data.results.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return {
            id: id,
            name: pokemon.name,
          };
        });
        setPokemonList(dataFormatted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    }
    fetchPokemonList();
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  // Render loading state or Pokémon grid
  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );
  // Render the grid of Pokémon cards
  return (
    <Container>
      <div id="text">Qual Pokémon busca?</div>
      <TextField
        id="searchPokemon"
        size="small"
        variant="outlined"
        value={input}
        onChange={handleChange}
        required
      />
      <div id="bottom-box">
      </div>
      <Grid container spacing={2}>
        {filteredPokemonList.map((pokemon) => (
          <Grid size={{ xs: 12, md: 2 }} key={pokemon.id}>
            <PokemonCard name={pokemon.name} id={pokemon.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
