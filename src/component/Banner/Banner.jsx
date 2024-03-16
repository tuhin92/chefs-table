const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="hero  h-auto rounded-2xl" style={{backgroundImage: 'url(https://i.postimg.cc/yN5FbWmv/Rectangle-1.png)', backgroundRepeat: 'no-repeat'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="py-24">
                        <h2 className="py-5 text-5xl font-bold text-[#FFFFFF]">Discover an exceptional cooking <br /> class tailored for you!</h2>
                        <p className="mb-6 text-[#FFFFFF] text-xl ">Experience a tailored culinary adventure with our exclusive cooking class. Explore diverse cuisines <br /> and techniques led by expert instructors. Ignite your passion for food today!</p>
                        <div>
                            <button className="btn bg-[#0BE58A] mx-4 px-6 rounded-full text-xl text-black">Explore Now</button>
                            <button className="btn px-6 rounded-full text-xl text-[#FFFFFF]">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
