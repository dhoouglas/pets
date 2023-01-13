import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

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
    }, [])

    function adotar() {

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