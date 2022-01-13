package com.foodbox.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.foodbox.entity.Food;
import com.foodbox.entity.FoodCuisine;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
	
	@Value("${allowed.origins}")
	private String[] theAllowedOrigins;
	
	private EntityManager entityManager;
	
	@Autowired
	public MyDataRestConfig(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		
//		HttpMethod[] theUnsupportedActions = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE, HttpMethod.PATCH};
		
		//disable HTTP methods for Food and FoodCuisine: POST, PUT and DELETE
//		disableHttpMethods(Food.class, config, theUnsupportedActions);
//		disableHttpMethods(FoodCuisine.class, config, theUnsupportedActions);
//		disableHttpMethods(Order.class, config, theUnsupportedActions);
		
		// call an internal helper method
				exposeIds(config);
				
		// configure cors mapping 
				cors.addMapping(config.getBasePath() + "/**").allowedOrigins(theAllowedOrigins);
	}

	private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
		config.getExposureConfiguration()
		      .forDomainType(theClass)
		      .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
		      .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
	}

	private void exposeIds(RepositoryRestConfiguration config) {
		
		//expose entity ids
		
		//--get a list of all entity classes from Entity Manager
		Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
		
		//--create an array of entity type
		List<Class> entityClasses = new ArrayList<>();
		
		//--get the entity types for the entities
		for(EntityType tempEntityType: entities) {
			entityClasses.add(tempEntityType.getJavaType());
			
		//--expose the entity ids for the array of entity/domain types
		Class[] domainTypes = entityClasses.toArray(new Class[0]);
		config.exposeIdsFor(domainTypes);
		}
		
		
	}

}
