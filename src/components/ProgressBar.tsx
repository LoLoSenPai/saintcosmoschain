import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
                className="h-4 bg-blue-600 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
