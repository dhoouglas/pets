package com.devdouglas.adoteumpet.api.pet.dtos;

public class PetResponse {
	
	private Long id;
	private String name;
	private String history;
	private String photo;
	
	public PetResponse() {
		
	}
	
	public PetResponse(Long id, String name, String history, String photo) {
		this.id = id;
		this.name = name;
		this.history = history;
		this.photo = photo;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHistory() {
		return history;
	}
	public void setHistory(String history) {
		this.history = history;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	
}
