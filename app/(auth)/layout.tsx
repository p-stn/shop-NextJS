import { ReactNode } from 'react';
import type { Metadata } from 'next';
import "@/app/(main)/globals.css";
import AuthWrapper from './AuthWrapper';

export const metadata: Metadata = {
    title: 'احراز هویت | MyApp',
    description: 'ورود و ثبت‌نام در MyApp',
};
export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <AuthWrapper>
                    {children}
                </AuthWrapper>
            </body>
        </html>
    );
}