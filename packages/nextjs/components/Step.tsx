import React, { ReactNode } from 'react';

interface StepProps {
    children: ReactNode;
    step: string;
    phrase: string;
    //activate: boolean;
}

export const Step: React.FC<StepProps> = ({children, step, phrase}) => {

    //var background = activate ? "[#37e231]" : "[#37e231]";
    var background = "[#37e231]";

  return (
    <div className={`w-full bg-${background} rounded-lg p-8`}>
        <p className="text-4xl font-bold text-[#1e1e1e]">#{step} Step</p>
        <p className="text-[#1e1e1e]">{phrase}</p> 
        {children}
    </div>
  ); 
};
