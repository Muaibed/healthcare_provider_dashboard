'use client'

import { useUserStore } from "../app/store_provider"
import { DashboardCard } from "../app/dashboard/page"


export const IndicatorCard = () => {
  const { name } = useUserStore(
    (state) => state,
  )

  return (
    <DashboardCard width="w-30" height="h-20" title="92" subtitle="kg" body={name.toString()} imagePath="/weight.png"/>
  )
}