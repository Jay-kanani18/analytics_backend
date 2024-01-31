import { NextFunction, Response } from 'express';
import { validationResult, body } from 'express-validator';


export class  Utils {
  public static  validateRequestBody = (validations: any[]) => {
        return async (data:any) => {
          // Apply validation rules
          await Promise.all(validations.map(validation => validation.run(data)));
      
          // Check for validation errors
          const errors = validationResult(data);
          if (errors.isEmpty()) {
            return true;
          }
      
          // If validation errors exist, send a 400 Bad Request response with the errors
          return { errors: errors.array() };
        };
      };
}