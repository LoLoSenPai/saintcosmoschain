import React from 'react';
import useCountdown from '../hooks/useCountdown';

const Phase = ({ condition, numberClaimed, numberTotal, isActive }: { condition: any, numberClaimed: any, numberTotal: string, isActive: boolean }) => {
    const { countdown, isLive } = useCountdown(new Date(condition.startTime));

    return (
        <div className={`flex flex-col border gap-2 p-4 rounded-lg mb-4 ${isActive ? 'shadow-neon' : ''}`}>
            <h2 className="text-lg font-bold">{condition?.metadata?.name}</h2>
            <div>
                {isLive ? "Live" : (
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <div className="flex flex-col items-center p-2 rounded-md bg-countdownBg halo">
                            <span className="text-xl font-bold ">{countdown.days}</span>
                            <span className="text-sm ">Days</span>
                        </div>
                        <div className="flex flex-col items-center p-2 rounded-md bg-countdownBg halo">
                            <span className="text-xl font-bold ">{countdown.hours}</span>
                            <span className="text-sm ">Hours</span>
                        </div>
                        <div className="flex flex-col items-center p-2 rounded-md bg-countdownBg halo">
                            <span className="text-xl font-bold ">{countdown.minutes}</span>
                            <span className="text-sm ">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center p-2 rounded-md bg-countdownBg halo">
                            <span className="text-xl font-bold ">{countdown.seconds}</span>
                            <span className="text-sm ">Seconds</span>
                        </div>
                    </div>
                )}
            </div>
            {condition?.metadata?.name === 'Public phase' ? (
                <p>
                    Minted: {numberClaimed} / {numberTotal}
                </p>
            ) : (
                <p>
                    Minted: {condition.currentMintSupply} / {condition.maxClaimableSupply}
                </p>
            )}
        </div>

    );
};

export default Phase;