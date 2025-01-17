import { Vehicle } from '@/types/vehicle'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface VehicleDetailsProps {
  vehicle: Vehicle
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{vehicle.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4 relative h-64">
            <Image
              src={vehicle.images[0] || "/placeholder.svg"}
              alt={vehicle.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {vehicle.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-20">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${vehicle.name} - Image ${index + 2}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl mb-2">Price: ${vehicle.price.toLocaleString()}</p>
          <p className="text-lg mb-4">Mileage: {vehicle.mileage} miles</p>
          <p className="mb-4">{vehicle.description}</p>
          <p className="mb-4">{vehicle.additionalInfo}</p>
          <h2 className="text-2xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside mb-6">
            {vehicle.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button className="w-full sm:w-auto">Comprar</Button>
            <Button className="w-full sm:w-auto" variant="outline">Rentar</Button>
            <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600">
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

