import styled from "styled-components";
import { Card, CardMedia } from "@mui/material";

export const PokemonCardContainer = styled(Card)`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  border-radius: 20px;
`;
export const PokemonSprite = styled(CardMedia)`
  width: 120px;
  height: 120px;
  display: block;
  margin: 20px auto auto auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
