import React, { useState, useTransition } from 'react'

const Index = () => {
    const [text, settext] = useState("")
    const [list, setlist] = useState([])
    const [isPending, startTransition] = useTransition()

    const handleChange = (e) => {
        const value = e.target.value
        settext(value)

        startTransition(() => {
            const newList = []
            for (let i = 0; i < 500; i++) {
                newList.push(`${value} => ${i}`)
            }
            setlist(newList)
        })
    }

    return (
        <div>
            <input
                value={text}
                onChange={handleChange}
                type="text"
                placeholder="type here"
            />

            {isPending && <h2>Updating List...</h2>}

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Index