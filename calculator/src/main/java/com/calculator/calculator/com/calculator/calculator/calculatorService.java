package com.calculator.calculator.com.calculator.calculator;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class calculatorService {
	
	@PostMapping("/calc")
	public String calc(@RequestBody jbody obj)
	{
		char op=obj.getOp();
		float x=obj.getNum1();
		float y=obj.getNum2();
		switch(op)
		{
		case '+':
			float a=x+y;
			return Float.toString(a);
			
		case '-':
			float b=y-x;
			return Float.toString(b);

		case '*':
			float c=x*y;
			return Float.toString(c);
			
		case '/':
			if(x==0)
				return "E";
			float d=y/x;
			return Float.toString(d);
			
		case 'r':
			if(x<0)
				return "E";
			float e= (float)Math.sqrt(x);
			return Float.toString(e);
			
		default:
			return "0";
		}
		
	}
}