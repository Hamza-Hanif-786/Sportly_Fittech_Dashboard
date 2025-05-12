import React from 'react'
import { Icon } from '@iconify/react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"



const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full bg-biscuit rounded-4xl shadow mt-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Visits
          </CardTitle>
          <Icon icon="bi:arrow-up-right" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12%</div>
          <p className="text-xs text-muted-foreground">
            From last month
          </p>
        </CardContent>
        <CardFooter>
          <Progress value={50} className="w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Sales
          </CardTitle>
          <Icon icon="bi:arrow-up-right" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12%</div>
          <p className="text-xs text-muted-foreground">
            From last month
          </p>
        </CardContent>
        <CardFooter>
          <Progress value={50} className="w-full" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                Users
            </CardTitle>
            <Icon icon="bi:arrow-up-right" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">
            From last month
            </p>
        </CardContent>
        <CardFooter>
            <Progress value={50} className="w-full" />
        </CardFooter>
        </Card>
        <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                Revenue
            </CardTitle>
            <Icon icon="bi:arrow-up-right" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">
            From last month
            </p>
        </CardContent>
        <CardFooter>
            <Progress value={50} className="w-full" />
        </CardFooter>
        </Card>
    </div>
  )
}

export default StatsSection