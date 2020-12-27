package com.calculator.calculator.com.calculator.calculator;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class view {

	@RequestMapping("/calculator")
	public String setView()
	{
		return "calculator_index.html";
	}
	
}
