
function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600" >
           <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p className="">How Airbnb works</p>
                <p className="">Newsroom</p>
                <p className="">Investors</p>
                <p className="">Airbnb Plus</p>
                <p className="">Airbnb Luxe</p>
           </div>
           <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Community</h5>
                <p>Diversity & Belonging</p>
                <p>Against Discrimination</p>
                <p>Accessibility</p>
                <p>Gift cards</p>
            </div>
           <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p className="">Sergio Silva</p>
                <p className="">Presents</p>
                <p className="">Zero to Full Stack Hero</p>
                <p className="">Hundreds of Students</p>
                <p className="">Join Now</p>
           </div>
           <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="">Help Centre</p>
                <p className="">Trust & Safety</p>
                <p className="">Say Hi Youtube</p>
                <p className="">Easter Eggs</p>
                <p className="">For the Win</p>
           </div>
        </div>
    )
}

export default Footer;