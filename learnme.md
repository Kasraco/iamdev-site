# یادگیری: بهینه‌سازی و رفع مشکلات پروژه Next.js

این فایل شامل تمام اقدامات انجام شده برای بهینه‌سازی و رفع مشکلات پروژه است.

## 📋 مشکلات شناسایی شده

### 1. خطای TypeScript: استفاده از prop غیرمجاز
**مشکل:** در فایل `components/home/index.tsx`، کامپوننت `ExpertiseSection` با prop `title` استفاده می‌شد، اما این کامپوننت هیچ prop نمی‌پذیرد.

**کد مشکل‌دار:**
```tsx
<ExpertiseSection title="مهارتها" />
```

**راه‌حل:**
```tsx
<ExpertiseSection />
```

**دلیل:** کامپوننت `ExpertiseSection` عنوان را از `expertiseData[0].title` می‌خواند و نیازی به prop ندارد. استفاده از prop غیرمجاز باعث خطای TypeScript می‌شود.

---

### 2. استفاده از React Hook در Server Component
**مشکل:** در فایل `app/blog/[...slug]/page.tsx`، از `useMDXComponents` که یک React Hook است در یک Server Component استفاده می‌شد.

**کد مشکل‌دار:**
```tsx
import { useMDXComponents } from 'mdx-components'

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const { components } = useMDXComponents({ components: {} as any });
  // ...
}
```

**راه‌حل:**
```tsx
// حذف import
// import { useMDXComponents } from 'mdx-components'

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  // حذف استفاده از hook
  // ...
}
```

**دلیل:** 
- React Hooks فقط می‌توانند در Client Components استفاده شوند (کامپوننت‌هایی که `"use client"` دارند)
- Server Components در Next.js 13+ به صورت async هستند و نمی‌توانند از hooks استفاده کنند
- `MDXLayoutRenderer` خودش `MDXComponents` را مدیریت می‌کند، پس نیازی به pass کردن `components` نیست

---

### 3. کندی لود صفحات (Performance Issue)
**مشکل:** زمان کامپایل و لود صفحات خیلی طولانی بود (16-20 ثانیه برای هر صفحه).

**علل احتمالی:**
1. لود همزمان همه فایل‌های MDX در `data/blogs.ts`
2. استفاده زیاد از dynamic import برای کامپوننت‌های کوچک
3. عدم استفاده از cache برای داده‌های تکراری

**راه‌حل - اضافه کردن Cache:**
```tsx
// قبل
const getBlogs = async () => {
  // ...
}

export default (await getBlogs());

// بعد
import { cache } from 'react';

const getBlogs = cache(async () => {
  // ...
});

export default (await getBlogs());
```

**دلیل:**
- `cache` از React 18+ برای cache کردن نتایج async functions در Server Components استفاده می‌شود
- این باعث می‌شود که اگر `getBlogs()` چندین بار صدا زده شود، فقط یک بار اجرا شود
- این بهینه‌سازی به خصوص در `generateStaticParams` و `generateMetadata` مفید است

---

## 🔍 نکات آموزشی

### Server Components vs Client Components

**Server Components:**
- به صورت پیش‌فرض در Next.js 13+ همه کامپوننت‌ها Server Component هستند
- می‌توانند async باشند
- نمی‌توانند از React Hooks استفاده کنند
- نمی‌توانند از browser APIs استفاده کنند
- برای داده‌های استاتیک و SEO مناسب هستند

**Client Components:**
- باید `"use client"` در ابتدای فایل داشته باشند
- می‌توانند از React Hooks استفاده کنند
- می‌توانند از browser APIs استفاده کنند
- برای تعاملات کاربری مناسب هستند

### استفاده از `cache` در Next.js

```tsx
import { cache } from 'react';

// این function فقط یک بار اجرا می‌شود حتی اگر چندین بار صدا زده شود
const getData = cache(async () => {
  // کارهای async
  return data;
});
```

**مزایا:**
- جلوگیری از اجرای تکراری
- بهبود performance
- کاهش بار سرور

### Dynamic Import در Next.js

```tsx
import dynamic from 'next/dynamic';

// لود lazy کامپوننت
const MyComponent = dynamic(() => import('./MyComponent'));

// با options
const MyComponent = dynamic(() => import('./MyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // غیرفعال کردن SSR
});
```

**زمان استفاده:**
- برای کامپوننت‌های بزرگ که در همه صفحات نیاز نیستند
- برای کامپوننت‌هایی که فقط در client-side نیاز هستند
- برای کاهش bundle size

**زمان عدم استفاده:**
- برای کامپوننت‌های کوچک و ساده
- برای کامپوننت‌هایی که در همه صفحات استفاده می‌شوند

---

## 🛠️ اقدامات انجام شده

### 1. رفع خطای TypeScript
- **فایل:** `components/home/index.tsx`
- **تغییر:** حذف prop `title` از `ExpertiseSection`
- **نتیجه:** خطای TypeScript برطرف شد

### 2. حذف استفاده از Hook در Server Component
- **فایل:** `app/blog/[...slug]/page.tsx`
- **تغییر:** حذف `useMDXComponents` و استفاده مستقیم از `MDXLayoutRenderer`
- **نتیجه:** کد مطابق با معماری Next.js 13+ شد

### 3. بهینه‌سازی Performance
- **فایل:** `data/blogs.ts`
- **تغییر:** اضافه کردن `cache` به `getBlogs`
- **نتیجه:** جلوگیری از لود تکراری فایل‌های MDX

---

## 📝 دستورات Git

تمام تغییرات با دستورات زیر commit شدند:

```bash
# بررسی وضعیت
git status

# اضافه کردن فایل‌های تغییر یافته
git add components/home/index.tsx
git add app/blog/[...slug]/page.tsx
git add data/blogs.ts

# Commit با پیام مناسب
git commit -m "fix: remove invalid title prop from ExpertiseSection component"
git commit -m "fix: remove useMDXComponents hook from Server Component"
git commit -m "perf: add cache to blogs data loading"
```

---

## ✅ مشکلات برطرف شده

### مشکل با `layout` undefined در MDXLayoutRenderer
**مشکل:** در `MDXLayoutRenderer.tsx`، `wrapper` در `MDXComponents` از `layout` استفاده می‌کرد اما `layout` undefined بود.

**کد مشکل‌دار:**
```tsx
wrapper: ({ components, layout, ...rest }: any) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
}
```

**راه‌حل:**
```tsx
wrapper: ({ components, layout, ...rest }: any) => {
    if (!layout) {
        return <>{rest.children}</>
    }
    try {
        const Layout = require(`../layouts/${layout}`).default
        return <Layout {...rest} />
    } catch (error) {
        console.error(`Layout ${layout} not found, using default wrapper`)
        return <>{rest.children}</>
    }
}
```

**دلیل:** 
- `layout` ممکن است undefined باشد
- باید error handling داشته باشیم
- باید fallback مناسب داشته باشیم

### مشکل با React Hooks Rules
**مشکل:** `useMemo` بعد از early return استفاده می‌شد که باعث خطای React Hooks می‌شد.

**کد مشکل‌دار:**
```tsx
const MDXLayoutRenderer = (props: any) => {
    const { path, ...rest } = props
    if (!path) {
        return <div>Error</div>
    }
    const MDXLayout = useMemo(() => dynamic(...), [path]) // ❌ بعد از return
    return <MDXLayout {...rest} />
}
```

**راه‌حل:**
```tsx
const MDXLayoutRenderer = (props: any) => {
    const { path, ...rest } = props
    const MDXLayout = useMemo(() => {
        if (!path) {
            const ErrorComponent = () => <div>Error</div>
            ErrorComponent.displayName = 'MDXError'
            return ErrorComponent
        }
        return dynamic(() => import(`../data/blog/${path}`))
    }, [path])
    return <MDXLayout {...rest} />
}
```

**دلیل:**
- React Hooks باید همیشه در همان ترتیب صدا زده شوند
- نمی‌توانیم بعد از early return از hooks استفاده کنیم
- باید logic را داخل hook قرار دهیم

### بهبود مدیریت `path` در blog page
**تغییرات:**
```tsx
// تعیین path برای MDX
const mdxPath = post.file || (post.file_path ? post.file_path.replace('blog/', '') : null) || `${post.slug}.mdx`

<MDXLayoutRenderer 
  code={post.body?.code} 
  toc={post.toc} 
  path={mdxPath}
/>
```

**دلیل:**
- استفاده از optional chaining برای `body?.code`
- تعیین واضح `path` با fallback مناسب
- بهبود error handling

---

## 🎯 بهترین روش‌ها (Best Practices)

### 1. Type Safety
- همیشه از TypeScript استفاده کنید
- از `any` استفاده نکنید
- Props را با interface تعریف کنید

### 2. Performance
- از `cache` برای داده‌های تکراری استفاده کنید
- از dynamic import برای کامپوننت‌های بزرگ استفاده کنید
- از `generateStaticParams` برای SSG استفاده کنید

### 3. Code Organization
- Server Components و Client Components را جدا کنید
- از path aliases استفاده کنید (`@components`, `@data`, etc.)
- کد را modular نگه دارید

### 4. Error Handling
- همیشه error handling داشته باشید
- از `notFound()` برای صفحات 404 استفاده کنید
- از try-catch برای async operations استفاده کنید

---

## 📚 منابع مفید

- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [React Cache API](https://react.dev/reference/react/cache)
- [Next.js Dynamic Import](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

---

## 🔄 مراحل بعدی

1. ✅ رفع مشکل `path` در `MDXLayoutRenderer` - انجام شد
2. ✅ رفع مشکل `layout` undefined - انجام شد
3. ✅ رفع مشکل React Hooks Rules - انجام شد
4. بهینه‌سازی بیشتر dynamic imports
5. اضافه کردن error boundaries
6. بهبود TypeScript types
7. اضافه کردن tests

---

**نکته مهم:** همیشه قبل از commit کردن تغییرات، پروژه را build کنید تا مطمئن شوید خطایی وجود ندارد:

```bash
npm run build
```

