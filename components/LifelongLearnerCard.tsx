'use client';
import { fadeInRight } from "@/lib/motion/variants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
const MotionBlock = dynamic(() => import("./motions/Block"));

const LifelongLearnerCard = () => {
  return (
    <MotionBlock variants={{
      ...fadeInRight, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }
    }} >
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>یادگیری مداوم، رشد بی‌وقفه</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
            <p>
              در تیم IamDev، ما همیشه در مسیر رشد و یادگیری هستیم.
              هر تجربه برای ما فرصتی است برای کشف فناوری‌های نو، ارتقای مهارت‌ها و خلق راه‌حل‌های هوشمندانه‌تر.

            </p>
            <p>
              با ترکیب دانش، خلاقیت و تجربه، تلاش می‌کنیم در هر پروژه بهترین نسخه از خودمان باشیم.
            </p>
          </div>
        </CardContent>
      </Card>
    </MotionBlock>
  );
};
export default LifelongLearnerCard;
