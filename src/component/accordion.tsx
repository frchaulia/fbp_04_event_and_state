import { useState } from "react";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With population about 2 million people, Almaty is the biggest city in Kazahstan.
                From year 1929 until 1997, this city become the Capital city of Kazahstan.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                Name "Almaty" come from word <span lang="kk-KZ">Алма</span>, in Kazakh Language that means "apple" and
                often translated as "full with apple". Actually, area nearby Almaty trusted as
                the origin of Apple, and <i lang="la">Malus sieversii</i> liar considered as candidate
                that might be the ancestors of modern domestic apple.
            </Panel>
        </>
    );
}

function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel border border-gray-700-p-2">
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) : (<button className="bg-blue-400-text-xs text-white p-1 rounded m-2" onClick={onShow}>Shows</button>)}
        </section>
    );
}