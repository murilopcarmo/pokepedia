import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { PokemonCard } from "../pokemonCard";

export const PokemonGrid = () => {
  const [pokemonList, setPokemonList] = useState([]); // State to hold the list of Pokémon
  const [loading, setLoading] = useState(true); // State to manage loading status
  useEffect(() => {
    // Fetch Pokémon data from the API
    async function fetchPokemonList() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10000",
        );
        const data = await response.json();
        const dataFormatted = data.results.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop();
          return {
            id: id,
            name:
              pokemon.name.charAt(0).toUpperCase() +
              pokemon.name.slice(1).toLowerCase(),
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
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
  // Render loading state or Pokémon grid
  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );
  // Render the grid of Pokémon cards
  return (
    <Grid container spacing={2}>
      {pokemonList.map((pokemon) => (
        <Grid size={{ xs: 12, md: 2 }} key={pokemon.id}>
          <PokemonCard
            name={pokemon.name}
            sprite={pokemon.sprite}
            id={pokemon.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};
