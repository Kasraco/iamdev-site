'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-yellow-700 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">تیم توسعه IamDev</h2>      
      <p className="mb-4">
                  <span className="italic">کدنویسی و توسعه</span> به عنوان بخشی از تیم <strong>IamDev</strong> انجام می‌شود، و ما با هم برای برنامه‌ریزی، بازبینی و ارائه محصولات با کیفیت همکاری می‌کنیم.
      </p>
      <p>        
          تیم <strong>IamDev</strong> با سال‌ها تجربه در توسعه و اجرای پروژه‌های متنوع، توانایی ارائه خدمات گسترده و پشتیبانی از مشتریان در سراسر منطقه را دارد. ما متعهد به کیفیت، کارایی و تحویل به موقع محصولات هستیم و با هماهنگی کامل، پروژه‌ها را به نتیجه می‌رسانیم.
      </p>
    </MotionBlock>
  );
}
