'use client';
import { useLanguage } from '../context/LanguageContext';
export default function ContactoPage() {
  const { t } = useLanguage();
  return (
    <div className="card p-5 mt-5 shadow-sm text-center">
       <h3>{t.contact}</h3>
       <p className="lead mt-3">{t.contact_text}</p>
    </div>
  );
}