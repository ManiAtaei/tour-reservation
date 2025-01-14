import React, { useState } from 'react';
import Daftar from './Daftar';
import Support from './Support';

function Contactus() {
    const [activeTab, setActiveTab] = useState('mainOffice');

    const tabClasses = (tab) =>
        `w-1/2 text-center text-xl font-xbold border-b py-[18px] cursor-pointer ${activeTab === tab ? 'text-orange-500 border-orange-500' : 'text-black border-gray-300'
        }`;

    const renderContent = () => {
        if (activeTab === 'mainOffice') {
            return (
                <Daftar />
            );
        } else if (activeTab === 'support') {
            return (
               <Support/>
            );
        }
    };

    return (
        <div>
            <div className="w-[904px] bg-white flex flex-col">
                <div className="flex w-full items-center justify-between">
                    <div
                        className={tabClasses('mainOffice')}
                        onClick={() => setActiveTab('mainOffice')}
                    >
                        دفتر مرکزی
                    </div>

                    <div
                        className={tabClasses('support')}
                        onClick={() => setActiveTab('support')}
                    >
                        پشتیبانی
                    </div>
                </div>

                <div className="mt-4 pr-[62px]">
                    {renderContent()}
                </div>


            </div>

            <div className='mt-[22px]'>
                <img src="/about-us/5.svg" alt="img" />
            </div>
        </div>
    );
}

export default Contactus;
