import React, { useEffect, useState } from "react";

const Countdown = () => {
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 rounded-box text-black border border-black">
                <span className="countdown font-mono text-md md:text-2xl lg:text-5xl">
                    <span
                        style={{ "--value": timeLeft.days } as React.CSSProperties}
                    ></span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2 rounded-box  text-black border border-black">
                <span className="countdown font-mono text-md md:text-2xl lg:text-5xl">
                    <span
                        style={{ "--value": timeLeft.hours } as React.CSSProperties}
                    ></span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 rounded-box  text-black border border-black">
                <span className="countdown font-mono text-md md:text-2xl lg:text-5xl">
                    <span
                        style={{ "--value": timeLeft.minutes } as React.CSSProperties}
                    ></span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 rounded-box  text-black border border-black">
                <span className="countdown font-mono text-md md:text-2xl lg:text-5xl">
                    <span
                        style={{ "--value": timeLeft.seconds } as React.CSSProperties}
                    ></span>
                </span>
                sec
            </div>
        </div>
    );
};

export default Countdown;
