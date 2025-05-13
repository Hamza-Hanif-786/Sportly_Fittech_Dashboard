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

interface StatsCardProps {
    title: string;
    percentage: string;
    progressValue: number;
}

const StatsCard = ({ title, percentage, progressValue }: StatsCardProps) => {
  return (
    <>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                <Icon icon="bi:arrow-up-right" />
            </CardHeader>
            <CardContent>
                <p className="text-2xl font-bold">{percentage}</p>
                <p className="text-xs text-muted-foreground">
                    From last month
                </p>
            </CardContent>
            <CardFooter>
                <Progress value={progressValue} className="w-full" />
            </CardFooter>
      </Card>
    </>
  )
}

export default StatsCard