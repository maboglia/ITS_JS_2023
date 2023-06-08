package com.boglia.services;

import java.util.List;
import java.util.Set;

import com.boglia.entities.Provincia;

public interface ProvinciaService {

	List<Provincia> getProvince();
	Set<String> getRegioni();
	
	List<Provincia> getProvinceByRegione(String regione);
	
	Provincia getProvinciaById(int id);
	
}
