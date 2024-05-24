import React from 'react';
import ProgressBar from './ProgressBar';

const MintInfo = ({ numberClaimed, numberTotal, isOpenEdition, isLoading, contractMetadata }: {
    numberClaimed: any;
    numberTotal: any;
    isOpenEdition: boolean;
    isLoading: boolean;
    contractMetadata: any;
}) => {
    const progress = numberTotal > 0 ? (numberClaimed / numberTotal) * 100 : 0;

    return (
        <div className="flex flex-col gap-2 xs:gap-4">
            {isLoading ? (
                <div
                    role="status"
                    className="space-y-8 animate-pulse md:flex md:items-center md:space-x-8 md:space-y-0"
                >
                    <div className="w-full">
                        <div className="w-24 h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
            ) : isOpenEdition ? null : (
                <div>
                    <p>
                        <span className="text-lg font-bold tracking-wider text-gray-500 xs:text-xl lg:text-2xl">
                            {numberClaimed}
                        </span>{" "}
                        <span className="text-lg font-bold tracking-wider xs:text-xl lg:text-2xl">
                            / {numberTotal} minted
                        </span>
                    </p>
                    <ProgressBar progress={progress} />
                </div>
            )}
            <h1 className="text-2xl font-bold line-clamp-1 xs:text-3xl lg:text-4xl">
                {contractMetadata.isLoading ? (
                    <div
                        role="status"
                        className="space-y-8 animate-pulse md:flex md:items-center md:space-x-8 md:space-y-0"
                    >
                        <div className="w-full">
                            <div className="w-48 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    contractMetadata.data?.name
                )}
            </h1>
            {contractMetadata.data?.description || contractMetadata.isLoading ? (
                <div className="text-gray-500 line-clamp-2">
                    {contractMetadata.isLoading ? (
                        <div
                            role="status"
                            className="space-y-8 animate-pulse md:flex md:items-center md:space-x-8 md:space-y-0"
                        >
                            <div className="w-full">
                                <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        contractMetadata.data?.description
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default MintInfo;
