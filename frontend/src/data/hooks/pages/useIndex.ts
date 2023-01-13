import { useState } from "react";

export function useIndex() {
    const [listPets, setListPets] = useState(
        [
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
          ]
    );

    return {
        listPets
    };
}