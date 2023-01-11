package com.devdouglas.adoteumpet.api.pet.mappers;

import org.springframework.stereotype.Component;

import com.devdouglas.adoteumpet.api.pet.dtos.PetResponse;
import com.devdouglas.adoteumpet.core.models.Pet;

@Component
public class PetMapper {
	
	public PetResponse toResponse(Pet pet) {
		var petResponse = new PetResponse();
		petResponse.setId(pet.getId());
		petResponse.setName(pet.getName());
		petResponse.setHistory(pet.getHistory());
		petResponse.setPhoto(pet.getPhoto());
		return petResponse;	
	}
	
}
