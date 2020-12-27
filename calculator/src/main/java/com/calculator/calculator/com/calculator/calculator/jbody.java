package com.calculator.calculator.com.calculator.calculator;

public class jbody {
	
	private float num1,num2;
	private char op;
	
	public jbody(float num1,float num2, char op)
	{
		this.num1=num1;
		this.num2=num2;
		this.op=op;
	}
	public float getNum1()
	{
		return num1;
	}
	public float getNum2()
	{
		return num2;
	}
	public char getOp()
	{
		return op;
	}
}
