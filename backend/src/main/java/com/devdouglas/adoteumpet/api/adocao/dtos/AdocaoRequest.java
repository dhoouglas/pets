package com.devdouglas.adoteumpet.api.adocao.dtos;

import java.math.BigDecimal;

import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.Data;

@Data
@JsonNaming(SnakeCaseStrategy.class)
public class AdocaoRequest {
	
	private String email;
	private BigDecimal valor;
	
	private Long petId;
	
	public AdocaoRequest() {
		
	}

	public AdocaoRequest(String email, BigDecimal valor, Long petId) {
		this.email = email;
		this.valor = valor;
		this.petId = petId;
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

	public Long getPetId() {
		return petId;
	}

	public void setPetId(Long petId) {
		this.petId = petId;
	}
	
	
	
	
	
	
}
