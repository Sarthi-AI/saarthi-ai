import React from "react";
import { Scheme } from "../../data/schemes";

const SchemeCard: React.FC<{ scheme: Scheme }> = ({ scheme }) => {
    return (
        <div className="border p-4 rounded-xl shadow-md bg-white w-full md:w-[45%] lg:w-[30%]">
            <h2 className="text-xl font-bold mb-2">{scheme.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{scheme.description}</p>
            <p className="text-sm font-medium text-blue-700">Department: {scheme.department}</p>
            <p className="text-sm font-medium text-green-700">Eligibility: {scheme.eligibility}</p>
            {scheme.link && (
                <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                    Apply / Learn More
                </a>
            )}
        </div>
    );
};

export default SchemeCard;