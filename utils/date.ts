import { useState, useEffect } from 'react';

// Static formatter function
export function formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return dateString;
    }

    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (seconds < 5) return "Just Now"; // Very fresh
    if (seconds < 60) return `${seconds}s ago`; // Show seconds if < 1 min

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;

    const years = Math.floor(months / 12);
    return `${years}y ago`;
}

// Hook for real-time updates
export function useTimeAgo(dateString: string): string {
    const [label, setLabel] = useState(() => formatTimeAgo(dateString));

    useEffect(() => {
        // Update immediately to correct any hydration mismatch or lag
        setLabel(formatTimeAgo(dateString));

        const interval = setInterval(() => {
            setLabel(formatTimeAgo(dateString));
        }, 10000); // Check every 10 seconds

        return () => clearInterval(interval);
    }, [dateString]);

    return label;
}
