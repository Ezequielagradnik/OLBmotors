export interface Vehicle {
    name: string;
    price: number;
    mileage: number;
    description: string;
    additionalInfo: string;
    features: string[];
    images: string[]; 
  }
  
  export interface VehicleData {
    [key: string]: Vehicle;
  }
  
  