'use client';

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skills } from "./Skills";
import { fadeInLeft } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import { expertiseData } from "@/data/expertiseData";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function ExpertiseSection() {
  const { title,items }=expertiseData[0];

  return (
    <MotionBlock variants={{
      ...fadeInLeft, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }
    }} >
      <Card className="shadow-lg border-0 bg-white dark:bg-slate-700 pt-4">
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-3 sm:w-4/12">
              <h3 className="text-nowrap">{title}</h3>
              {items.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                  <span className=" text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="w-8/12">
              <Skills />
            </div>
          </div>
        </CardContent>
      </Card>
    </MotionBlock>
  );
}
