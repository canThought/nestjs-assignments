import { Controller, Get, Param } from '@nestjs/common'; // Import necessary decorators and modules from NestJS

// Set up the controller and its route.
@Controller('factorial') // Define a controller with the route 'factorial'
export class FactorialController { 
    @Get(":factorialnum") // Define a GET route that takes a parameter 'factorialnum'
    identifyNum(@Param('factorialnum') num:any ){ // Method to identify the factorial of the given number
        let factorial = num; // Initialize factorial with the input number
        let total=1; // Initialize total to 1
        for(let i = 1; i<=num; i++){ // Loop from 1 to the input number
            total *= i; // Multiply total by the current loop index
        }

        return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"factorial":' + total +"<br>}</p>"; // Return the 
        // (kadugtong)result in an HTML paragraph   
    }
}
