import { notFound } from 'next/navigation'
import vehicleData from '@/data/vehicle-data'
import VehicleDetails from '@/components/VehicleDetails'
import { Vehicle } from '@/types/vehicle'

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = vehicleData[params.id] as Vehicle | undefined

  if (!vehicle) {
    notFound()
  }

  return <VehicleDetails vehicle={vehicle} />
}

export function generateStaticParams() {
  return Object.keys(vehicleData).map((id) => ({ id }))
}

