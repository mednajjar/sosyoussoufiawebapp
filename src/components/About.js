import React from 'react'
import { BgAbout } from '../assets'
// import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-full p-5 rtl text-center ml-auto mr-auto' style={{
            position: 'relative',
            top: 100,
            width: "100%",
            height: "70vh",
            margin: "0 auto",
            background: `url(${BgAbout})`,
            // backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundColor: '#3396FF',
        }}>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl font-medium text-slate-700'>حول التطبيق</h2>

                <p className='text-lg font-medium text-slate-700 group-hover:text-slate-900 mt-4 leading-9'>أول نسخة من  هذا التطبيق تساعد في معرفة صيدلية الحراسة كل أسبوع وكذلك موقع تواجدها على الخريطة كما تتيح توفير أرقام الهواتف و ربط الاتصال بسيارة الأجرة من النوع الصغير أرجو أن ينتفع به ساكنة مدينة اليوسفية</p>
                <p className='text-lg font-medium text-slate-700 group-hover:text-slate-900 mt-4 leading-9'>سنقوم بإضافة خدمات أخرى مستقبلا حسب الحاجة</p>
            </div>
        </div>
    )
}

export default About