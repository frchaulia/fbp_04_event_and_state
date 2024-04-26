import { useState } from 'react';
import { sculptureList } from '@/data/article';

export default function Gallery() {
    const [index, setIndex] = useState(0);    // index data start from 0

    function handleClick() {
        setIndex(index + 1);  // counter index + 1, to see the next data
        if (index==4) {
            setIndex(0)
        }
    }

    function handleClick2() {
        setIndex(index - 1);  // counter index + 1, to see the next data
        if (index==0) {
            setIndex(4)
        }
    }

    let sculpture = sculptureList[index];  // read data as the index

    return (
        <> 
            <button
                onClick={handleClick2}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Previous Article </button>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Next Article </button>
                <h2><i>{sculpture.name}</i> oleh {sculpture.artist} </h2>
                <h3>({index + 1} dari {sculptureList.length} )</h3>
                <img src={sculpture.url} alt={sculpture.alt} />
                <p>
                    {sculpture.description}
                </p>
        </>
    )
}