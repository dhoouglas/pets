package com.devdouglas.adoteumpet.api.adocao.dtos;

import java.math.BigDecimal;

import com.devdouglas.adoteumpet.api.pet.dtos.PetResponse;

import lombok.Data;

@Data
public class AdocaoResponse {

	private Long id;
	
	private String email;
	
	private BigDecimal valor;
	
	private PetResponse Pet;
	
	public AdocaoResponse() {
		
	}

	public AdocaoResponse(Long id, String email, BigDecimal valor, PetResponse pet) {
		this.id = id;
		this.email = email;
		this.valor = valor;
		Pet = pet;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public PetResponse getPet() {
		return Pet;
	}

	public void setPet(PetResponse pet) {
		Pet = pet;
	}
	
	
	
	
	
}
