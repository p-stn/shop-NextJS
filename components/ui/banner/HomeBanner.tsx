import React from 'react'

export default function HomeBanner() {
    return (
        <>
            <section
                className="mx-4 lg:container mt-10 lg:mt-20 flex flex-col lg:flex-row items-center gap-5 child:rounded-xl child:overflow-hidden">
                <a href="shop.html" className="group">
                    <img src="images/banner/1.webp" className="group-hover:scale-105 transition-transform duration-300"
                        alt="" />
                </a>
                <a href="shop.html" className="group">
                    <img src="images/banner/2.webp" className="group-hover:scale-105 transition-transform duration-300"
                        alt="" />
                </a>
            </section>
        </>
    )
}
