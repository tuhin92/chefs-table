const Cart = () => {
    return (
        <div  className="md:h-1/3 mt-3 ">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body px-16">
                    <h2 className="text-center">Want to cook: 01</h2>
                    <hr className="hr-line" />
                    <div className="text-center flex justify-between text-[#878787]">
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                    <div>
                        <h3>Dynamic Data</h3>
                    </div>
                    <h2 className="text-center">Currently cooking: 02</h2>
                    <hr className="hr-line" />
                    <div className="text-center flex justify-between text-[#878787]">
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                    <div>
                        <h3>Dynamic Data</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;