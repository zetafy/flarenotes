"use client"
import React, { useState, useEffect } from 'react';

interface TypewriterParams {
    text: string;
    delay: number;
    infinite: number
}
const Typewriter = ({ text, delay, infinite }: TypewriterParams) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: any;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) { // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span>{currentText}</span>;
};


// interface TypewriterParams {
//     text: string,
//     delay: number
// }

// const Typewriter = ({ text, delay }: TypewriterParams) => {
//     const [currentText, setCurrentText] = useState('Welcome  ');
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [completed, setCompleted] = useState(false)
//     useEffect(() => {
//         const animateTyping = () => {
//             if (currentIndex < text.length) {
//                 const timeout = setTimeout(() => {
//                     setCurrentText(prevText => prevText + text[currentIndex]);
//                     setCurrentIndex(prevIndex => prevIndex + 1);
//                 }, delay);

//                 return () => clearTimeout(timeout);
//             } else (() => {
//                 setCompleted(true);
//                 const timeout = setTimeout(() => {
//                     setCurrentIndex(0);
//                     setCurrentText('Welcome ')
//                     setCompleted(false);

//                 }, 5000);

//                 return () => clearTimeout(timeout);
//             })
//         }
//         animateTyping();
//         const interval = setInterval(animateTyping, delay * currentText.length);
//         return () => clearInterval(interval);

//     }, [currentIndex, delay, text]);

//     return <span>{completed ? 'Welcome' : currentText}</span>;
};
export default Typewriter;
