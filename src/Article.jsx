import { useEffect, useState } from "react"

export const Article = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/csblog')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
            });
    }, []); // Agrega un array de dependencias vacío para que se ejecute solo una vez.

    return (
       <>
        {articles.length > 0 ? (
            articles.map((item) => (
                <div key={item.id}>
                    <b>{item.user}:</b>
                    <div  dangerouslySetInnerHTML={{ __html: item.content }} className="articles" ></div>
                </div>
            ))
        ) : (
            <p>Chargin articles...</p>
        )}
        </>
    )
}