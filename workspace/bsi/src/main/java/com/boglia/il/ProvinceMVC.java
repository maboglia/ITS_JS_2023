package com.boglia.il;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProvinceMVC {

	
	@GetMapping(path = {"/", "index", "home"})
	String home() {
		return "province";
	}
	
}
