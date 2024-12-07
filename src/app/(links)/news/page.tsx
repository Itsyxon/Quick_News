import { Metadata } from "next";

type News = {
    [key: string]: string
}

export const metadata: Metadata = {
    title: 'Quick News'
}

const NewsPage = async () => {
    const data = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-12-05&to=2024-12-05&sortBy=popularity&apiKey=76121fac4c844e6ab5efb63fc292b08b')
    const news = await data.json()
    console.log(news)
    return (
        <>
            {news.status != 'error' ? <>
                <p className="my-8 bg-gray-700 text-white p-5 font-mono"><span className="font-bold">Предупреждение</span>: автор не несёт ответственности за новости, представленные на сайте. Было задействовано зарубежное API в свободном доступе. Представленная информация, так или иначе, может отличаться от реальности.</p>
                <div className="grid grid-cols-2 gap-5 mb-5 md:p-0">
                    <div className="h-[350px] flex items-center p-3 text-2xl bg-black" style={{ backgroundImage: `url(${news.articles[0].urlToImage})` }}>
                        <p className="bg-white py-4 px-2 w-full">{news.articles[0].title}</p>
                    </div>
                    <div className="h-[350px] flex items-center p-3 text-2xl bg-black" style={{ backgroundImage: `url(${news.articles[1].urlToImage})` }}>
                        <p className="bg-white py-4 px-2 w-full">{news.articles[1].title}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5">
                    {news!.articles.slice(2).map((item: News, index: number) => (
                        item.urlToImage !== null ? <div key={index} style={{ backgroundImage: `url(${item.urlToImage})` }} className="p-4 flex items-end h-[350px] bg-cover bg-black shadow-xl transition cursor-pointer hover:scale-105">
                            <div className="bg-white p-3 h-20 w-full shadow-2xl text-[14px]">
                                {item.title.length > 70 ? item.title.slice(0, 70) + '...' : item.title}
                            </div>
                        </div> : null
                    ))}
                </div></> : <p className="text-xl">Возникла ошибка при загрузке данных.</p>}
        </>
    )
}

export default NewsPage;