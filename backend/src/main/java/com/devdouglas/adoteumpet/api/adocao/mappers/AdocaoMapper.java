package com.devdouglas.adoteumpet.api.adocao.mappers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.devdouglas.adoteumpet.api.adocao.dtos.AdocaoRequest;
import com.devdouglas.adoteumpet.core.models.Adocao;
import com.devdouglas.adoteumpet.core.repositories.PetRepository;

@Component
public class AdocaoMapper {
	
	@Autowired
	private PetRepository petRepository;

	public Adocao toModel(AdocaoRequest adocaoRequest) {
		var adocao = new Adocao();
		adocao.setEmail(adocaoRequest.getEmail());
		adocao.setValor(adocaoRequest.getValor());
		adocao.setPet(petRepository.findByIdOrElseThrow(adocaoRequest.getPetId()));
		return adocao;
	}
}
