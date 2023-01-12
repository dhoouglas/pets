package com.devdouglas.adoteumpet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.devdouglas.adoteumpet.core.models.Pet;
import com.devdouglas.adoteumpet.core.repositories.PetRepository;

@SpringBootApplication
public class AdoteUmPetApplication implements CommandLineRunner{

	@Autowired
	private PetRepository petRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AdoteUmPetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		var pet = new Pet();
		pet.setName("Joãozinho");
		pet.setHistory("Historia emocionante");
		pet.setPhoto("http://www.exemplo.com.br/foto.png");
		petRepository.save(pet);
	}

}
