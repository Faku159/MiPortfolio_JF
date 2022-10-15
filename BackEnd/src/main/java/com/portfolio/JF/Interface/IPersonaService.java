package com.Portfolio.JF.Interface;

import com.Portfolio.JF.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> gerPersona();
    
    //Guardar un objeto del tipo Persona
    public void savePersona (Persona persona);
    
    //Eliminar un objeto buscandolo por ID
    public void deletePersona(Long id);
    
    //Buscar una persona
    public Persona findPersona (Long id);

    public List<Persona> getPersona();
}