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
		pet.setName("Bidu");
		pet.setHistory("Historia emocionante");
		pet.setPhoto("https://image.cachorrogato.com.br/textimages/cachorrinho-ideal");
		petRepository.save(pet);
		
		var pet2 = new Pet();
		pet2.setName("Scooby");
		pet2.setHistory("Historia emocionante");
		pet2.setPhoto("https://www.petz.com.br/blog/wp-content/uploads/2020/09/como-cuidar-de-filhotes-de-cachorro-recem-nascidos-2.jpg");
		petRepository.save(pet2);
	}

}
