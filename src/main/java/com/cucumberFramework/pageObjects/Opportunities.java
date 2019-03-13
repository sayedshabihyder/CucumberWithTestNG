package com.cucumberFramework.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * 
 * @author Bhanu Pratap Singh
 * https://www.udemy.com/seleniumbybhanu/
 * https://www.youtube.com/user/MrBhanupratap29/playlists
 *
 */
public class Opportunities {

	private WebDriver driver;
	
	public Opportunities(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
}
