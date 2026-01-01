
import React from 'react';
import { Product } from '../types';
import DashboardCard from './DashboardCard';

interface DashboardProps {
    products: Product[];
    onCheckOverview: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ products, onCheckOverview }) => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                {products.map((product, index) => (
                    <DashboardCard
                        key={product.id}
                        product={product}
                        index={index}
                        onCheckOverview={onCheckOverview}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
