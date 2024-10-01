package com.taskstracking.inventory.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignUpDto {
	
	

    @NotEmpty
    private String login;

    @NotEmpty
    private char[] password;

	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	public char[] getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

}
