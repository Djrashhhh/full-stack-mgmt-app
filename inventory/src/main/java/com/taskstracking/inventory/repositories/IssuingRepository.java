package com.taskstracking.inventory.repositories;




import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.taskstracking.inventory.domains.Issuing;

@Repository
public interface IssuingRepository extends JpaRepository<Issuing, Long>{

}
