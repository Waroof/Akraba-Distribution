import { useEffect, useState } from 'react';

interface ConfirmationPopupProps {
    message: string;
    duration?: number;
    onClose: () => void;
}

const ConfirmationPopup = ({ message, duration = 3000, onClose }: ConfirmationPopupProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
};

export default ConfirmationPopup; 