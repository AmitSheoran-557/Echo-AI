import React from 'react';
import { AI_PROFIT_LIST } from '../utils/helper';

const AiProfit = () => {
    return (
        <div className='bg-dark-blue lg:pt-[60px] -mt-1 pt-12 lg:pb-[177px] pb-20'>
            <div className="max-w-[1140px] mx-auto container w-full">
                <div className="flex flex-wrap w-full justify-center">
                    {AI_PROFIT_LIST.map((obj, i) => (
                        <div className={`lg:w-4/12 md:w-6/12 w-full ${i === 0 ? "border-gradient max-sm:hidden" : ""}  ${i === 1 ? "border-gradient max-lg:!border-none" : ""}`} key={i}>
                            <div className={`max-w-[365px] max-lg:mt-3 w-full mx-auto `}>
                                <h3 className='text-white lg:text-5xl font-semibold !leading-[57px] text-center'>
                                    {obj.Content}
                                </h3>
                                <p className={`text-white max-w-[146px] mx-auto w-full text-center lg:text-base text-sm ${i === 2 ? "!max-w-[180px]" : ""}`}>
                                    {obj.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiProfit;
