package rnu.iset.dsi201.SPANV2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rnu.iset.dsi201.SPANV2.entities.Mission;
@Repository
public interface MissionRepository extends JpaRepository<Mission,Integer>{

}
