import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
    const [listPets, setListPets] = useState<Pet[]>([]),
          [petSelected, setPetSelected] = useState<Pet | null>(null),
          [email, setEmail] = useState(''),
          [value, setValue] = useState(''),
          [message, setMessage] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((response) => {
                setListPets(response.data)
            })
    }, []);

    useEffect(() => {
        if(petSelected === null) {
            clearForm();
        }
    }, [petSelected]);

    function adotar() {
        if(petSelected !== null) {
            if(validateDataAdocao()) {
                ApiService.post('/adocoes', {
                    pet_id: petSelected.id,
                    email,
                    valor: value
                })
                    .then(() => {
                        setPetSelected(null);
                        setMessage('Parabéns Pet adotado com sucesso!');
                        clearForm();
                    })
                    .catch((error: AxiosError) => {
                        setMessage(error.request?.data.message);
                    })
            } else {
                setMessage('Preencha todos os campos corretamente! ')
            }
        }
    }

    function validateDataAdocao() {
        return email.length > 0 && value.length > 0;
    }

    function clearForm() {
        setEmail('');
        setValue('');
    }
          
    return {
        listPets,
        petSelected,
        setPetSelected,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        adotar
    };
}