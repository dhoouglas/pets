import Title from "../ui/components/Title/Title";
import List from '../ui/components/List/List';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from "@mui/material";
import { useIndex } from "../data/hooks/pages/useIndex";

export default function Home() {

  const {
    listPets
  } = useIndex();

  return (
    <>
      <Title 
        titulo="" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
      }/>

      <List 
        pets={listPets}
      />

      <Dialog 
        open={false}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label={'E-mail'}
              type={'email'}
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField 
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button
            color={'secondary'}
          >
            Cancelar
          </Button>
            
          <Button
            variant={'contained'}
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={false}
        message={'jfsjahkfkhkjsaf'}
      />
    </>
      
  );
}
