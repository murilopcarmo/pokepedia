import {Box, Typography, Container, Toolbar} from "@mui/material";
import SearchAppBar from "../../components/appBar";


export const Layout = ({children}) => {
  return <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <header><SearchAppBar /></header>
    <Toolbar />
    <Container component='main' maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
   {children}</Container>
    <Box component='footer' sx={{ textAlign: 'center', py: 2, mt: 'auto' }}><Typography variant="body2">© 2026 PokéPedia</Typography></Box>
  </Box>;
}  