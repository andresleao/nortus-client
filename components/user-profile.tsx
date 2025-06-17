import { useEffect, useState } from "react";

export default function UserProfile() {
    const [initials, setInitials] = useState('');

    useEffect(() => {
        const userString = localStorage.getItem('user');

        if (userString) {
            try {
                const user = JSON.parse(userString);

                const userInitials = user.name
                    .split(' ')
                    .map((word: string) => word[0])
                    .join('')
                    .toUpperCase();

                setInitials(userInitials);
            } catch (error) {
                console.error('Erro ao parsear user no localStorage:', error);
            }
        }
    }, []);

    if (!initials) return;

    return (
        <div className="w-16 h-16 bg-[#1876D2] rounded-full flex items-center justify-center">
            <span className="font-semibold text-[18px] leading-[16px]">
                {initials}
            </span>
        </div>
    );
}
