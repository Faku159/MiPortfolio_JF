
package com.portfolio.JF.Repository;


import com.portfolio.JF.Entity.HyS;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface Rhys extends JpaRepository<HyS, Integer>{
    Optional<HyS> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
