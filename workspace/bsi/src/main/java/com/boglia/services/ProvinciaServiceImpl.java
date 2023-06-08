package com.boglia.services;

import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boglia.entities.Provincia;
import com.boglia.repos.ProvinciaDAO;

@Service
public class ProvinciaServiceImpl implements ProvinciaService {

	@Autowired 
	private ProvinciaDAO dao;
	
	@Override
	public List<Provincia> getProvince() {
		return dao.findAll();
	}

	@Override
	public Set<String> getRegioni() {
		List<String> regioni = getProvince().stream().map(p -> p.getRegione()).sorted().toList();
		return new TreeSet<>(regioni);
	}

	@Override
	public List<Provincia> getProvinceByRegione(String regione) {
		return dao.findByRegione(regione);
	}

	@Override
	public Provincia getProvinciaById(int id) {
		return dao.findAll().stream().filter(p->p.getId() == id).findFirst().get();
	}

}
