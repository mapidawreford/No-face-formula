/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import ReactDOM from 'react-dom/client';
import React from 'react';

const icons = {
  monetized: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 12C12 14.2091 10.2091 16 8 16H4V20H10C15.5228 20 20 15.5228 20 10C20 7.58172 18.8284 5.43857 17 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15L12 18M10 16.5H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 4.5C14.5 5.32843 13.8284 6 13 6C12.1716 6 11.5 5.32843 11.5 4.5C11.5 3.67157 12.1716 3 13 3C13.8284 3 14.5 3.67157 14.5 4.5Z" fill="white"/>
    </svg>
  ),
  copyPaste: (
     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 13.7V4.3C15 3.58203 14.418 3 13.7 3H4.3C3.58203 3 3 3.58203 3 4.3V16.7C3 17.418 3.58203 18 4.3 18H7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21H19.7C20.418 21 21 20.418 21 19.7V8.3C21 7.58203 20.418 7 19.7 7H9.3C8.58203 7 8 7.58203 8 8.3V19.7C8 20.418 8.58203 21 9 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L4 20V6L9 4M9 18L15 16M9 18V4M15 16L20 18V4L15 2M15 16V2M15 2L9 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  toolkit: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 3.5L7.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 2L22 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 5.5L18.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0631 8.9372L12.5694 6.43091C14.0863 4.91404 16.4862 4.72103 18.2045 6.0903C19.9228 7.45957 20.3344 9.7731 18.9651 11.4914L11.4914 18.9651C9.7731 20.3344 7.45957 19.9228 6.0903 18.2045C4.72103 16.4862 4.91404 14.0863 6.43091 12.5694L8.9372 10.0631" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 17L15.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const walkAwayItems = [
    { icon: icons.monetized, text: "A faceless YouTube channel optimized for viral growth" },
    { icon: icons.copyPaste, text: "A content system that works even when you're offline" },
    { icon: icons.map, text: "A realistic roadmap to $1K/month—and beyond" },
    { icon: icons.toolkit, text: "Tools to automate, scale, and monetize effortlessly" }
];

const testimonials = [
    { name: "Sarah J.", text: "Hit 1k followers in a week following the Lazy system. Mind-blown.", avatar: "https://i.pravatar.cc/80?img=1" },
    { name: "Mike R.", text: "I was skeptical, but I'm already at $250/month two months in. This stuff works.", avatar: "https://i.pravatar.cc/80?img=2" },
    { name: "Chloe T.", text: "Finally making passive income! The AI workflows are a game-changer for busy people.", avatar: "https://i.pravatar.cc/80?img=3" },
    { name: "David L.", text: "The no-face approach is perfect. All the reward, none of the awkward camera time.", avatar: "https://i.pravatar.cc/80?img=4" },
    { name: "Emily P.", text: "Best $5 I've ever spent on my business. The value is insane.", avatar: "https://i.pravatar.cc/80?img=5" }
];

const Testimonials = () => (
    <div className="testimonials-section">
        <div className="testimonials-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                    <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-name">- {testimonial.name}</p>
                </div>
            ))}
        </div>
    </div>
);


function App() {
  return (
    <div className="container">
      <div className="price-badge">$4.97</div>
      <header className="header">
        <h1>
          $1K/MONTH LAZY YOUTUBE SHORTS 2026 for only $4.97
          <svg className="underline" viewBox="0 0 100 10">
            <path d="M2,5 C20,-2 80,12 98,5" />
          </svg>
        </h1>
      </header>
      <main className="main-content">
        <div className="book-container">
            <div className="book-glow"></div>
            <div className="book-mockup">
                <div className="book-cover">
                    <h2 className="book-title">$1K/MONTH LAZY YOUTUBE SHORTS 2026</h2>
                    <p className="book-subtitle">No-Face Formula for Your First 100 Million Views in 90 Days</p>
                </div>
            </div>
        </div>
        <button className="cta-button top-cta">Get Lifetime Access Now</button>
      </main>
      
      <section className="content-section intro">
        <h2>Are you stuck in a 9–5, watching faceless YouTube channels rack up millions of views while you wonder "Could I do that?"</h2>
        <p>You can. And you don't need a camera, editing skills, or fancy gear.</p>
        <p><strong>The $1K/Month Lazy YouTube Shorts 2026 System is your shortcut to:</strong></p>
        <ul className="checklist">
          <li>✅ Launch a faceless channel from scratch</li>
          <li>✅ Pick niches that go viral</li>
          <li>✅ Use AI to create content (no showing your face)</li>
          <li>✅ Script, edit, and post without lifting a camera</li>
          <li>✅ Hit $1K/month in 90 days—starting from zero</li>
        </ul>
      </section>

      <Testimonials />

      <section className="content-section">
        <h2 className="section-title">What You Get Inside</h2>
        <div className="grid-layout">
          <div>
            <h3>📚 7 Complete Modules</h3>
            <p>With future updates included.</p>
          </div>
          <div>
            <h3>🛠️ Copy-and-paste system</h3>
             <p>Templates for everything.</p>
          </div>
          <div>
            <h3>💡 AI tool stack</h3>
             <p>Free and paid options.</p>
          </div>
          <div>
            <h3>🎯 90-Day roadmap</h3>
             <p>Your guide to the first $1K/month.</p>
          </div>
        </div>
      </section>

      <section className="content-section dark-bg">
        <h2 className="section-title">Who This Is For</h2>
        <ul className="checklist">
            <li>✔️ 9–5ers looking for an escape plan</li>
            <li>✔️ Busy beginners with zero YouTube experience</li>
            <li>✔️ Smart hustlers who want lazy leverage over hard hustle</li>
            <li>✔️ Anyone who wants YouTube income WITHOUT becoming a YouTuber</li>
        </ul>
      </section>
      
       <section className="content-section">
        <h2 className="section-title">What You'll Walk Away With</h2>
        <div className="walk-away-grid">
            {walkAwayItems.map((item, index) => (
                <div className="feature-box" key={index}>
                    <div className="feature-icon">{item.icon}</div>
                    <p className="feature-text">{item.text}</p>
                </div>
            ))}
        </div>
       </section>
       
       <section className="content-section course-details">
        <h2 className="section-title">Includes: Full Course Breakdown</h2>
        <div className="details-grid">
            <div className="module-list">
                <h3>Course Modules</h3>
                <ul>
                    <li>🎬 Module 1: Foundational Insights & Mindset</li>
                    <li>🎬 Module 2: Building Viral-Ready Channels</li>
                    <li>🎬 Module 3: Lazy Creator Framework (Ideas, Scripts, Editing)</li>
                    <li>🎬 Module 4: Optimized Posting Strategies</li>
                    <li>🎬 Module 5: Analytics & Metrics That Convert</li>
                    <li>🎬 Module 6: Automation, Scaling & Multiple Income Streams</li>
                    <li>🎬 Module 7: 90-Day Case Studies & Real Roadmap</li>
                </ul>
            </div>
            <div className="bonus-list">
                <h3>Bonus Resources</h3>
                <ul>
                    <li>✨ 90-Day Notion Planner</li>
                    <li>✨ AI Prompt Templates</li>
                    <li>✨ Viral Shorts Hook Vault</li>
                    <li>✨ Monetization Checklist</li>
                    <li>✨ Thumbnail Formulas</li>
                </ul>
            </div>
        </div>
       </section>
       
       <footer className="footer-cta">
        <p className="investment-text">One-time investment. Lifetime access. No monthly fees. No upsells.</p>
        <p className="price-info">Launch Price: <span>$4.97</span> (Normally $97)</p>
        <p>You're getting $1,000+ of value for just $4.97—but only during launch week.</p>
        <button className="cta-button">BUY NOW</button>
      </footer>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);