import { useEffect, useState } from "react";

// Terminal-style typing effect cycling through phrases.
export default function useTyping(phrases, typeSpeed = 70, deleteSpeed = 35, pause = 1600) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = phrases[index % phrases.length];
        let timeout;

        if (!deleting && text === current) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === "") {
            setDeleting(false);
            setIndex((i) => i + 1);
        } else {
            timeout = setTimeout(
                () => {
                    setText((prev) =>
                        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
                    );
                },
                deleting ? deleteSpeed : typeSpeed
            );
        }
        return () => clearTimeout(timeout);
    }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, pause]);

    return text;
}
