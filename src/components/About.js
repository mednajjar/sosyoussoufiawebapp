import React from 'react'
// import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-full p-5 rtl text-center mt-5 ml-auto mr-auto'>
            <h2 className='text-2xl font-medium text-slate-700'>حول التطبيق</h2>

            <p className='text-lg font-medium text-slate-700 group-hover:text-slate-900 mt-4 leading-9'>أول نسخة من  هذا التطبيق تفيد في معرفة صيدلية الحراسة في المنطقة مع معرفة الموقع على الخريطة كما تتيح توفير معلومات الاتصال و ربط الاتتصال بسيارة الأجرة من النوع الصغير أرجو أن ينتفع به ساكنة مدينة اليوسفية</p>
            <p className='text-lg font-medium text-slate-700 group-hover:text-slate-900 mt-4 leading-9'>سنقوم بإضافة خدمات أخرى مستقبلا حسب الحاجة</p>
        </div>
    )
}

export default About