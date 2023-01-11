package com.devdouglas.adoteumpet.core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devdouglas.adoteumpet.core.models.Pet;

public interface PetRepository extends JpaRepository<Pet, Long>{
	
	
}
