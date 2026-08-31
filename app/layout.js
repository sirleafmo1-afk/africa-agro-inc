export const metadata = {
  title: 'Africa Agro Inc - Liberian Sustainable Cocoa Supply',
  description: 'Premium cocoa supply solutions connecting Liberian farmers with international markets. Sustainable, traceable, and compliant cocoa exports.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          
          /* Navigation */
          .navbar { background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); color: white; padding: 1rem 0; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          .navbar .container { display: flex; justify-content: space-between; align-items: center; }
          .logo { font-size: 1.5rem; font-weight: bold; }
          .nav-links { display: flex; list-style: none; gap: 2rem; }
          .nav-links a { color: white; text-decoration: none; transition: opacity 0.3s; }
          .nav-links a:hover { opacity: 0.8; }
          
          /* Hero */
          .hero { background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); color: white; padding: 100px 0; text-align: center; }
          .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
          .hero p { font-size: 1.5rem; margin-bottom: 2rem; }
          
          /* Buttons */
          .cta-button, .submit-button { background: #D2691E; color: white; border: none; padding: 12px 30px; font-size: 1rem; border-radius: 5px; cursor: pointer; transition: background 0.3s; }
          .cta-button:hover, .submit-button:hover { background: #CD853F; }
          
          /* Sections */
          section { padding: 60px 0; }
          h2 { font-size: 2.5rem; margin-bottom: 2rem; text-align: center; color: #8B4513; }
          h3 { color: #A0522D; margin-bottom: 1rem; }
          
          /* About */
          .about { background: #f9f9f9; text-align: center; }
          .about p { font-size: 1.1rem; max-width: 700px; margin: 0 auto; line-height: 1.8; }
          
          /* CEO Section */
          .ceo-section { background: white; padding: 60px 0; }
          .ceo-content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .ceo-image { text-align: center; }
          .ceo-image img { max-width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          .ceo-info h3 { font-size: 1.5rem; color: #8B4513; }
          .ceo-info p { margin-bottom: 1rem; }
          
          /* Services Grid */
          .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
          .service-card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; border-left: 4px solid #D2691E; }
          .service-card:hover { transform: translateY(-10px); box-shadow: 0 8px 12px rgba(0,0,0,0.15); }
          .service-card h3 { color: #8B4513; }
          
          .services { background: #f5f5f5; }
          
          /* Contact Form */
          .contact { background: #f9f9f9; }
          .contact-form { max-width: 600px; margin: 2rem auto; display: flex; flex-direction: column; gap: 1rem; }
          .contact-form input, .contact-form textarea { padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-family: inherit; font-size: 1rem; }
          .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: #A0522D; box-shadow: 0 0 5px rgba(160, 82, 45, 0.3); }
          
          .contact-info { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem; }
          .contact-info-card { background: white; padding: 1.5rem; border-radius: 8px; text-align: center; }
          .contact-info-card h4 { color: #8B4513; margin-bottom: 0.5rem; }
          
          /* Footer */
          .footer { background: #8B4513; color: white; text-align: center; padding: 2rem 0; margin-top: 3rem; }
          
          /* Responsive */
          @media (max-width: 768px) {
            .hero h1 { font-size: 2rem; }
            .ceo-content { grid-template-columns: 1fr; }
            .nav-links { gap: 1rem; font-size: 0.9rem; }
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
