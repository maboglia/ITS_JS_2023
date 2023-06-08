package com.boglia.pl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boglia.entities.Provincia;
import com.boglia.services.ProvinciaService;

@RestController
@RequestMapping("api")
public class ProvinciaRest {

	@Autowired
	private ProvinciaService service;
	
	@GetMapping("province")
	List<Provincia> getProvince(){
		return service.getProvince();
	}

	@GetMapping("province/{regione}")
	List<Provincia> getProvinceByRegione(@PathVariable String regione){
		return service.getProvinceByRegione(regione);
	}
	

	@GetMapping("provincia/{id}")
	Provincia getProvinciaById(@PathVariable int id){
		return service.getProvinciaById(id);
	}
	
	
	@GetMapping("regioni")
	Set<String> getRegioni(){
		return service.getRegioni();
	}
	
	
	
	
}
