import React from 'react';
import useCountdown from '../hooks/useCountdown';

const Phase = ({ condition, numberClaimed, numberTotal, isActive }: { condition: any, numberClaimed: any, numberTotal: string, isActive: boolean }) => {
    const { countdown, isLive } = useCountdown(new Date(condition.startTime));

    return (
        <div className={`flex flex-col border p-4 rounded-lg mb-4 ${isActive ? 'halo' : ''}`}>
            <h2 className="text-lg font-bold">{condition?.metadata?.name}</h2>
            <p>
                {isLive ? "Live" : `Start In: ${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}
            </p>
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