import styled from "styled-components";
import { Card, CardMedia } from "@mui/material";

export const PokemonCardContainer = styled(Card)`
  width: 100%;
  max-width: 220px;
  height: 220px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  box-sizing: border-box;
`;
export const PokemonSprite = styled(CardMedia)`
  width: 96px;
  height: 96px;
  display: block;
  margin: 10px auto 0 auto;
  object-fit: contain;
  image-rendering: pixelated;
`;
