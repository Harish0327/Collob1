import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Front() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        details: ''
    });

    const imaRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (imaRef.current) {
                const scrollAmount = imaRef.current.offsetWidth;
                imaRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

                if (imaRef.current.scrollLeft >= imaRef.current.scrollWidth / 2) {
                    imaRef.current.scrollTo({ left: 0, behavior: 'instant' });
                }
            }
        }, 3000); // Adjust the interval timing as needed

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleWhatsAppMessage = () => {
        const { name, email, phone, date, details } = formData;
        const message = `Hello! I would like to book an event with the following details:\n\n` +
                        `Name: ${name}\n` +
                        `Email: ${email}\n` +
                        `Phone: ${phone}\n` +
                        `Event Date: ${date}\n` +
                        `Details: ${details}\n`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/9778737090?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    };

    const handleWhatsAppRedirect = () => {
        const whatsappURL = `https://wa.me/9778737090`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <>
            <div className='Nav'>
                <div className='Logo'>
                    <h1>CAMERON</h1>
                </div>
                <div className='Nav1'>
                    <li><a href="#">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Event</a></li>
                </div>
                <div className='Nav2'>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </div>
            </div>

            <div className='Ima' ref={imaRef}>
                <div className="Ima-content">
                    <img src="src/assets/Images/leslie-rose-kit-harington-hochzeit.webp" alt="Wedding 1" />
                    <img src="src/assets/Images/200804-blake-lively-ryan-reynolds-jm-1045.jpg" alt="Couple 1" />
                    <img src="src/assets/Images/dfca48c0-f163-0132-44b1-0a2ca390b447.jpg" alt="Wedding 2" />
                    
                    {/* Duplicate the images for seamless looping */}
                    <img src="src/assets/Images/leslie-rose-kit-harington-hochzeit.webp" alt="Wedding 1" />
                    <img src="src/assets/Images/200804-blake-lively-ryan-reynolds-jm-1045.jpg" alt="Couple 1" />
                    <img src="src/assets/Images/dfca48c0-f163-0132-44b1-0a2ca390b447.jpg" alt="Wedding 2" />
                </div>
            </div>

            <div className='h1'>
                <h1>ABOUT US</h1>
            </div>
            <div className='About'>
                <img src="src/assets/Images/i1.jpg" alt="About Us" />
                <p>
                    We specialize in wedding photography, corporate, family, and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. From the shores here in Lake Geneva to the beaches of Lake Michigan in Milwaukee and Chicago and beyond. We will be there with you every step of the way to guarantee your special moments are captured for all time. <br /><br />

                    To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments. <br /><br />

                    We are incredibly blessed to have a team of photographers who work with us on any given weekend. Please take a few minutes to get to know us. <br /><br />

                    We would love to visit with you by phone or in person and talk about your wedding, event, portrait session, or video project. Please reach out to us through the Contact Page.
                </p>
            </div>

            <h1 className='prev1'>OUR PREVIOUS WORKS</h1>
            <div className='prev'>
                <img src="src/assets/Images/1494890785798-evgenia-kostiaeva-10.jpeg" alt="Previous Work 1" />
                <img src="src/assets/Images/Fun+ring+finger+photo.jpeg" alt="Previous Work 2" />
                <img src="src/assets/Images/MG_3291(pp_w768_h512).jpg" alt="Previous Work 3" />
                <img src="src/assets/Images/im2.jpg" alt="Previous Work 4" />
                <img src="src/assets/Images/4543.jpg" alt="Previous Work 5" />
                <img src="src/assets/Images/castaway_portland_wedding_photos_award_winning_wedding_photographers_josandtree-2.jpg" alt="Previous Work 6" />
            </div>

            {/* Book Event Section */}
            <h1 className='book1'>BOOK AN EVENT</h1>
            <div className='book-event'>
                <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppMessage(); }}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                    <label>Phone:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />

                    <label>Event Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />

                    <label>Event Details:</label>
                    <textarea name="details" value={formData.details} onChange={handleInputChange} required />

                    <button type="submit">Book Event</button>
                </form>
            </div>

            <div className='whatsapp-container'>
                <button onClick={handleWhatsAppRedirect} className='whatsapp-button'>
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </button>
            </div>

            <div className="Blog">
                <h1 className="blog-header">OUR BLOG</h1>
                <div className="Blog-posts">
                    <div className="Blog-post">
                        <h2>MR & MRS REYENOLDS</h2>
                        <img src="src/assets/Images/200804-blake-lively-ryan-reynolds-jm-1045.jpg" alt="Blog Post 1" />
                        <p className="date">August 31, 2024</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non rhoncus leo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga reiciendis excepturi laboriosam, quaerat assumenda, ratione minima vel necessitatibus, quis tempora cupiditate animi impedit iste ducimus. Distinctio, esse eum vero excepturi eius maxime nihil quidem facere repudiandae assumenda iste explicabo incidunt fugiat cupiditate minus sapiente consequatur accusamus sunt laboriosam tenetur!.</p>
                    </div>
                    <div className="Blog-post">
                        <h2>MR & MRS REYENOLDS</h2>
                        <img src="src/assets/Images/200804-blake-lively-ryan-reynolds-jm-1045.jpg" alt="Blog Post 2" />
                        <p className="date">August 31, 2024</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non rhoncus leo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga reiciendis excepturi laboriosam, quaerat assumenda, ratione minima vel necessitatibus, quis tempora cupiditate animi impedit iste ducimus. Distinctio, esse eum vero excepturi eius maxime nihil quidem facere repudiandae assumenda iste explicabo incidunt fugiat cupiditate minus sapiente consequatur accusamus sunt laboriosam tenetur!.</p>
                    </div>
                </div>
            </div>

            <div className="Footer">
                <div className="Footer-content">
                    <div className="Footer-details">
                        <p><strong>Address:</strong> 1234 Wedding Ave, Love City, NY 56789</p>
                        <p><strong>Email:</strong> contact@cameronphotography.com</p>
                        <p><strong>Phone:</strong> 676786875</p>
                    </div>
                    <div className="Social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                        </a>
                        <p>© 2024 Cameron Photography. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
