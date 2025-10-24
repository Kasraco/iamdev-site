
export interface ExpertisItems {
    title: string,
    items: string[]
}

export interface SkillCategoty {
    category: string,
    items: string[]
}
export const expertiseData: ExpertisItems[] = [{
    title: 'مهارتها',
    items: [
        "طراحی نرم‌افزار سازمانی",
        "طراحی پرتال و سایت",
        "طراحی فروشگاه آنلاین",
        "تحلیل و ارزیابی نرم افزار",
        "اپلیکیشن موبایل"
    ],
},
]

export const skills:SkillCategoty[]=[
     {
    category: "فرانت‌اند",
    items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "بک‌اند",
    items: ["ASP.NET Core", "Node.js","Python"],
  },
  {
    category: "دیتابیس",
    items: [ "MSSQL Server", "MongoDB","PostgreSQL"],
  },
  {
    category: "DevOps / ابزارها",
    items: ["Git", "Docker", "CI/CD", "OpenLiteSpeed"],
  },
];