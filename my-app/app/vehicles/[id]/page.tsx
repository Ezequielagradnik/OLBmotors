import { notFound } from 'next/navigation'
import vehicleData from '@/data/vehicle-data'
import VehicleDetails from '@/components/VehicleDetails'
import { Vehicle } from '@/types/vehicle'

interface PageProps {
  params: { id: string }
}

export default function VehiclePage({ params }: PageProps) {
  const vehicle = vehicleData[params.id as keyof typeof vehicleData]

  if (!vehicle) {
    notFound()
  }

  return <VehicleDetails vehicle={vehicle as Vehicle} />
}

export function generateStaticParams() {
  return Object.keys(vehicleData).map((id) => ({ id }))
}

