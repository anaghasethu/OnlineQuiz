package com.quizzapp.quiz.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@Configuration
public class DataRestConfig  implements RepositoryRestConfigurer{

	private EntityManager entityManager;
	@Autowired
	public DataRestConfig(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		exposeIds(config);
	}
	private void exposeIds(RepositoryRestConfiguration config) {
		
		Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
		List<Class> entityClasses = new ArrayList();
		
		for(EntityType entity:entities) {
			entityClasses.add(entity.getJavaType());
		}
		
		Class[] domainType = entityClasses.toArray(new Class[0]);
		config.exposeIdsFor(domainType);
		
	}
}
