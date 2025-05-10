import React from "react";
import { schemes } from "../data/schemes";
import SchemeCard from "../components/ui/SchemeCard";
import Header from "../components/Header";

const Dashboard: React.FC = () => {
    return (
        <div className="p-6">
            <Header />
            <h1 className="text-3xl font-bold mb-6">Government Welfare Schemes</h1>
            <div className="flex flex-wrap gap-6">
                {schemes.map((scheme, index) => (
                    <SchemeCard key={index} scheme={scheme} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;