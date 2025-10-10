interface Project {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  imgSrc?: string;
}

const projectsData: Project[] = [
  {
    title: "آرگانمهر HIS System",
    description: `سیستم جامع بیمارستانی (HIS) با معماری ماژولار، شامل بخش‌های ICU، CCU، آزمایشگاه و ... . 
    طراحی‌شده با C# و ASP.NET MVC و WebAPI. این پروژه قابلیت نصب کلاینت در هر بیمارستان و مدیریت ماژول‌ها از سرور مرکزی را دارد.`,
    imgSrc: "/imgs/arganmehr.png",
    tags: ["ASP.NET MVC", "C#", "Entity Framework", "Modular Architecture"],
    href: "https://github.com/mostafarasouli/arganmehr",
  },
  {
    title: "Drugstore Finder App",
    description: `اپلیکیشن و پرتال جستجوی داروخانه‌ها که امکان چت، نقشه، احراز هویت و نوتیفیکیشن دارد. 
    نسخه‌های مجزا برای داروخانه‌ها، مشتریان و مدیر طراحی شده است.`,
    imgSrc: "/imgs/drugstore.png",
    tags: ["React.js", "React Native", "Node.js", "MongoDB"],
    href: "https://iamdev.ir/projects/drugstore",
  },
  {
    title: "Software Evaluation Portal",
    description: `سامانه تحلیل و ارزیابی نرم‌افزارها برای سازمان‌ها و شرکت‌ها. 
    شامل امتیازدهی، دسته‌بندی و تحلیل ویژگی‌های نرم‌افزارها با قابلیت ورود اطلاعات از وردپرس.`,
    imgSrc: "/imgs/software-eval.png",
    tags: ["ASP.NET Core", "React.js", "Clean Architecture"],
    href: "https://iamdev.ir/projects/software-evaluation",
  },
  {
    title: "Office Automation System",
    description: `اتوماسیون اداری جهت مدیریت مکاتبات و نامه‌ها بین کارمندان و مدیران، 
    با قابلیت ثبت روزانه صدها رکورد در هر بخش.`,
    imgSrc: "/imgs/office-automation.png",
    tags: ["ASP.NET Core", "SQL Server", "Entity Framework"],
    href: "https://iamdev.ir/projects/office-automation",
  },
  {
    title: "Modular Portal Platform",
    description: `پرتال ماژولار برای ایجاد پروژه‌های مستقل با امکان بارگذاری و ثبت ماژول‌ها در پرتال اصلی. 
    ماژول‌ها قابل استفاده در هر بخش از پرتال هستند.`,
    imgSrc: "/imgs/modular-portal.png",
    tags: ["ASP.NET Core", "React.js", "Plugin Architecture"],
    href: "https://iamdev.ir/projects/modular-portal",
  },
  {
    title: "AI Task Scheduler",
    description: `اپلیکیشن موبایل با قابلیت دریافت صوت کاربر، تشخیص متن، تحلیل محتوا و زمان‌بندی خودکار کارها 
    با هشدار در زمان مقرر.`,
    imgSrc: "/imgs/ai-scheduler.png",
    tags: ["React Native", "AI", "Speech Recognition"],
    href: "https://iamdev.ir/projects/ai-scheduler",
  },
  {
    title: "IamDev Personal Website",
    description: `وب‌سایت شخصی من برای معرفی خدمات، مقالات و نمونه‌کارها با طراحی مدرن و بهینه‌شده برای سئو.`,
    imgSrc: "/imgs/iamdev.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://iamdev.ir",
  },
];

export default projectsData;
