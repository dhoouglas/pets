import { ListStyled, ItemList, Photo, Informations, Name, Description } from './List.style';
import { Button } from '@mui/material';
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService';

interface ListProps {
    pets: Pet[];
}

export default function List(props: ListProps) {
    const maximumTextSize = 200;

    return(
        <ListStyled>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                    <Photo src={pet.photo} alt={pet.name} />
                    <Informations>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.limitText(pet.history, maximumTextSize)}
                        </Description>
                        <Button
                            variant={'contained'}
                            fullWidth
                        >
                            Adotar {pet.name}
                        </Button>
                    </Informations>
                </ItemList>

            ))}
        </ListStyled>
    )
}


