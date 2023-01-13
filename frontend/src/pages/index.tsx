import Title from "../ui/components/Title/Title";
import List from '../ui/components/List/List';
import { Dialog, TextField, Grid, DialogActions, Button } from "@mui/material";

export default function Home() {
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
        pets={[
          {
            id: 1,
            name: 'Bidu',
            history: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
            photo: 'https://image.cachorrogato.com.br/textimages/cachorrinho-ideal'
          },
          
          {
            id: 1,
            name: 'Scooby',
            history: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
            photo: 'https://www.petz.com.br/blog/wp-content/uploads/2020/09/como-cuidar-de-filhotes-de-cachorro-recem-nascidos-2.jpg'
          }
        ]}
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
    </>
      
  );
}
