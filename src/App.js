import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setAnimate(true); // Trigger animations on mount
  }, []);

  const styles = {
    app: {
      overflowX: 'hidden',
      fontFamily: "'Arial', sans-serif",
      backgroundColor: '#f5f5f5',
    },
    header: {
      backgroundColor: '#2e7d32',
      color: 'white',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 20,
      padding: '1rem 2rem',
      transition: 'all 0.3s ease-in-out',
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    },
    logo: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      transition: 'transform 0.3s ease',
    },
    logoHover: {
      transform: 'scale(1.05)',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '500',
      position: 'relative',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'color 0.3s, transform 0.3s, opacity 0.5s',
    },
    navLinkHover: {
      color: '#a5d6a7',
      transform: 'scale(1.05)',
    },
    navLinkAfter: {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-2px',
      left: '0',
      backgroundColor: '#a5d6a7',
      transition: 'width 0.3s ease',
    },
    navLinkAfterHover: {
      width: '100%',
    },
    navCta: {
      backgroundColor: '#1b5e20',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '20px',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    navCtaHover: {
      backgroundColor: '#145014',
      transform: 'scale(1.05)',
    },
    menuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1.8rem',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      marginLeft: 'auto',
    },
    menuButtonHover: {
      transform: 'rotate(90deg)',
    },
    mobileNav: {
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(46, 125, 50, 0.95)',
      padding: '2rem',
      position: 'fixed',
      top: 0,
      right: isMenuOpen ? '0' : '-100%',
      width: '70%',
      height: '100vh',
      zIndex: 19,
      transition: 'right 0.3s ease',
    },
    mobileNavLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.4rem',
      padding: '1rem 0',
      transition: 'color 0.3s, transform 0.2s',
    },
    mobileNavCta: {
      backgroundColor: '#1b5e20',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '20px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: '600',
      marginTop: '1rem',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #e8f5e9 0%, white 100%)',
      padding: '6rem 2rem 2rem',
      textAlign: 'center',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    heroContent: {
      maxWidth: '1000px',
    },
    heroTitle: {
      fontSize: '4rem',
      color: '#1b5e20',
      marginBottom: '1rem',
      fontWeight: 'bold',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.8rem',
      color: '#2e7d32',
      marginBottom: '1.5rem',
      fontWeight: '500',
    },
    heroText: {
      fontSize: '1.3rem',
      color: '#4a4a4a',
      marginBottom: '2rem',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    ctaButton: {
      backgroundColor: '#2e7d32',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s, transform 0.2s',
      display: 'inline-block',
      margin: '0 0.5rem',
    },
    ctaButtonHover: {
      backgroundColor: '#1b5e20',
      transform: 'scale(1.05)',
    },
    secondaryCta: {
      backgroundColor: 'transparent',
      color: '#2e7d32',
      border: '2px solid #2e7d32',
      padding: '0.75rem 2rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'color 0.3s, transform 0.2s, border-color 0.3s',
      display: 'inline-block',
      margin: '0 0.5rem',
    },
    secondaryCtaHover: {
      color: '#1b5e20',
      borderColor: '#1b5e20',
      transform: 'scale(1.05)',
    },
    whySection: {
      padding: '6rem 2rem',
      backgroundColor: '#e8f5e9',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
    },
    whyTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#1b5e20',
      marginBottom: '2rem',
      fontWeight: 'bold',
    },
    whyText: {
      fontSize: '1.2rem',
      color: '#4a4a4a',
      maxWidth: '800px',
      margin: '0 auto 2rem',
      lineHeight: '1.6',
      textAlign: 'center',
    },
    features: {
      padding: '6rem 2rem',
      backgroundColor: 'white',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
    },
    featuresTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#1b5e20',
      marginBottom: '3rem',
      fontWeight: 'bold',
    },
    featuresGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    featureCard: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateX(0)' : 'translateX(-20px)',
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
    featureIcon: {
      fontSize: '3.5rem',
      color: '#2e7d32',
      marginBottom: '1rem',
    },
    featureTitle: {
      fontSize: '1.8rem',
      color: '#1b5e20',
      marginBottom: '0.75rem',
      fontWeight: '600',
    },
    featureText: {
      color: '#4a4a4a',
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    about: {
      padding: '6rem 2rem',
      backgroundColor: '#e8f5e9',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
    },
    aboutTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#1b5e20',
      marginBottom: '2rem',
      fontWeight: 'bold',
    },
    aboutText: {
      fontSize: '1.2rem',
      color: '#4a4a4a',
      maxWidth: '800px',
      margin: '0 auto 2rem',
      lineHeight: '1.6',
      textAlign: 'center',
    },
    aboutStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      flexWrap: 'wrap',
    },
    statCard: {
      textAlign: 'center',
      padding: '1.5rem',
      borderRadius: '10px',
      backgroundColor: 'white',
      minWidth: '150px',
    },
    statNumber: {
      fontSize: '2rem',
      color: '#1b5e20',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    statLabel: {
      fontSize: '1rem',
      color: '#4a4a4a',
    },
    testimonials: {
      padding: '6rem 2rem',
      backgroundColor: '#f5f5f5',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
    },
    testimonialsTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#1b5e20',
      marginBottom: '3rem',
      fontWeight: 'bold',
    },
    testimonialsGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    testimonialCard: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateX(0)' : 'translateX(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
    },
    testimonialText: {
      fontSize: '1rem',
      color: '#4a4a4a',
      marginBottom: '1rem',
      fontStyle: 'italic',
      lineHeight: '1.6',
    },
    testimonialAuthor: {
      fontSize: '1.2rem',
      color: '#1b5e20',
      fontWeight: '600',
    },
    pricing: {
      padding: '6rem 2rem',
      backgroundColor: '#e8f5e9',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 1s, transform 0.8s ease 1s',
    },
    pricingTitle: {
      textAlign: 'center',
      fontSize: '3rem',
      color: '#1b5e20',
      marginBottom: '3rem',
      fontWeight: 'bold',
    },
    pricingGrid: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    pricingCard: {
      background: 'white',
      padding: '2.5rem',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    pricingCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    },
    pricingPlan: {
      fontSize: '1.8rem',
      color: '#1b5e20',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    pricingPrice: {
      fontSize: '2.2rem',
      color: '#2e7d32',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    pricingFeatures: {
      color: '#4a4a4a',
      fontSize: '1rem',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
      whiteSpace: 'pre-line',
    },
    pricingButton: {
      backgroundColor: '#2e7d32',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s, transform 0.2s',
      display: 'inline-block',
    },
    pricingButtonHover: {
      backgroundColor: '#1b5e20',
      transform: 'scale(1.05)',
    },
    ctaSection: {
      padding: '6rem 2rem',
      backgroundColor: 'white',
      textAlign: 'center',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 1.2s, transform 0.8s ease 1.2s',
    },
    ctaTitle: {
      fontSize: '2.8rem',
      color: '#1b5e20',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
    },
    ctaText: {
      fontSize: '1.3rem',
      color: '#4a4a4a',
      marginBottom: '2rem',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    footer: {
      backgroundColor: '#2e7d32',
      color: 'white',
      padding: '3rem 2rem',
      textAlign: 'center',
      opacity: animate ? 1 : 0,
      transform: animate ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease 1.4s, transform 0.8s ease 1.4s',
    },
    footerText: {
      marginBottom: '1.5rem',
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      marginBottom: '1.5rem',
    },
    footerLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s, transform 0.2s',
    },
    footerLinkHover: {
      color: '#a5d6a7',
      transform: 'scale(1.05)',
    },
    newsletter: {
      marginTop: '2rem',
      maxWidth: '500px',
      margin: '2rem auto 0',
    },
    newsletterText: {
      fontSize: '1.1rem',
      marginBottom: '1rem',
      color: '#e8f5e9',
    },
    newsletterInput: {
      padding: '0.75rem',
      borderRadius: '20px 0 0 20px',
      border: 'none',
      fontSize: '1rem',
      width: '60%',
      maxWidth: '300px',
    },
    newsletterButton: {
      backgroundColor: '#1b5e20',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0 20px 20px 0',
      border: 'none',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    newsletterButtonHover: {
      backgroundColor: '#145014',
      transform: 'scale(1.05)',
    },
    mediaQueries: {
      '@media (max-width: 768px)': {
        nav: {
          display: 'none',
        },
        menuButton: {
          display: 'block',
        },
        mobileNav: {
          display: isMenuOpen ? 'flex' : 'none',
        },
        heroTitle: {
          fontSize: '2.5rem',
        },
        heroSubtitle: {
          fontSize: '1.4rem',
        },
        heroText: {
          fontSize: '1.1rem',
        },
        whyTitle: {
          fontSize: '2.2rem',
        },
        featuresTitle: {
          fontSize: '2.2rem',
        },
        aboutTitle: {
          fontSize: '2.2rem',
        },
        testimonialsTitle: {
          fontSize: '2.2rem',
        },
        pricingTitle: {
          fontSize: '2.2rem',
        },
        ctaTitle: {
          fontSize: '2.2rem',
        },
        logo: {
          fontSize: '1.8rem',
        },
        featureCard: {
          transform: animate ? 'translateY(0)' : 'translateY(20px)',
        },
        testimonialCard: {
          transform: animate ? 'translateY(0)' : 'translateY(20px)',
        },
      },
      '@media (max-width: 480px)': {
        hero: {
          padding: '4rem 1rem 1rem',
        },
        whySection: {
          padding: '3rem 1rem',
        },
        features: {
          padding: '3rem 1rem',
        },
        about: {
          padding: '3rem 1rem',
        },
        testimonials: {
          padding: '3rem 1rem',
        },
        pricing: {
          padding: '3rem 1rem',
        },
        ctaSection: {
          padding: '3rem 1rem',
        },
        featureCard: {
          padding: '1.5rem',
        },
        testimonialCard: {
          padding: '1.5rem',
        },
        pricingCard: {
          padding: '1.5rem',
        },
        newsletterInput: {
          width: '50%',
        },
      },
    },
  };

  const features = [
    {
      title: 'Spaced Repetition',
      description: 'Our AI-driven algorithm schedules reviews at optimal intervals to ensure long-term retention of programming concepts, from algorithms to DevOps.',
      icon: '🧠',
    },
    {
      title: 'Code Snippet Support',
      description: 'Create flashcards with syntax-highlighted code in JavaScript, Python, Java, and more, ideal for mastering coding patterns and frameworks.',
      icon: '💻',
    },
    {
      title: 'API Integration',
      description: 'Sync flashcards with tools like GitHub, Notion, or your custom apps via our robust API, enhancing your development workflow.',
      icon: '🔗',
    },
    {
      title: 'Custom Decks',
      description: 'Organize flashcards into tailored decks for topics like data structures, system design, or cloud certifications like AWS and Azure.',
      icon: '📚',
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your learning with detailed analytics, including mastery levels, study time, and personalized improvement suggestions.',
      icon: '📊',
    },
    {
      title: 'Collaborative Learning',
      description: 'Share decks with teams or students for real-time collaboration, with version control and group study features.',
      icon: '🤝',
    },
    {
      title: 'Offline Access',
      description: 'Study anywhere with offline mode, automatically syncing progress when you reconnect to the internet.',
      icon: '📴',
    },
    {
      title: 'Gamification',
      description: 'Stay engaged with streaks, badges, and leaderboards, turning learning into a rewarding and fun experience for developers.',
      icon: '🏆',
    },
  ];

  const testimonials = [
    {
      text: 'AESTHETIC’s spaced repetition system helped me ace my coding interviews. It’s a must-have for developers!',
      author: 'Sarah K., Software Engineer at TechCorp',
    },
    {
      text: 'The code snippet flashcards are incredible for learning frameworks like React and Django quickly.',
      author: 'Michael T., Full-Stack Developer',
    },
    {
      text: 'Our team uses AESTHETIC to train new hires. Collaborative decks save hours of onboarding time.',
      author: 'Priya R., Tech Lead at InnovateX',
    },
    {
      text: 'Offline access lets me study on the go, making AESTHETIC perfect for my busy schedule.',
      author: 'James L., Freelance Developer',
    },
    {
      text: 'The gamification features make learning algorithms fun. I’m hooked on earning badges!',
      author: 'Emma S., Computer Science Student',
    },
  ];

  const pricingPlans = [
    {
      plan: 'Free',
      price: '$0/month',
      features: '100 flashcards\nBasic spaced repetition\nCommunity decks\nEmail support',
    },
    {
      plan: 'Pro',
      price: '$9.99/month',
      features: 'Unlimited flashcards\nCode snippet support\nAdvanced progress tracking\nAPI access\nPriority email support',
    },
    {
      plan: 'Team',
      price: '$29.99/month',
      features: 'Everything in Pro\nCollaborative decks\nTeam analytics\nOffline access\n24/7 priority support',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1M+', label: 'Flashcards Created' },
    { number: '200+', label: 'Supported Languages' },
    { number: '95%', label: 'User Satisfaction' },
  ];

  const FeatureCard = ({ title, description, icon, index }) => (
    <div
      style={{
        ...styles.featureCard,
        transitionDelay: `${index * 0.1}s`,
        ...styles.mediaQueries['@media (max-width: 768px)'].featureCard,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.featureCardHover.transform;
        e.currentTarget.style.boxShadow = styles.featureCardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = styles.featureCard.boxShadow;
      }}
    >
      <div style={styles.featureIcon}>{icon}</div>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.featureText}>{description}</p>
    </div>
  );

  const TestimonialCard = ({ text, author, index }) => (
    <div
      style={{
        ...styles.testimonialCard,
        transitionDelay: `${index * 0.1}s`,
        ...styles.mediaQueries['@media (max-width: 768px)'].testimonialCard,
      }}
    >
      <p style={styles.testimonialText}>"{text}"</p>
      <p style={styles.testimonialAuthor}>- {author}</p>
    </div>
  );

  const PricingCard = ({ plan, price, features }) => (
    <div
      style={{
        ...styles.pricingCard,
        ...styles.mediaQueries['@media (max-width: 480px)'].pricingCard,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.pricingCardHover.transform;
        e.currentTarget.style.boxShadow = styles.pricingCardHover.boxShadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = styles.pricingCard.boxShadow;
      }}
    >
      <h3 style={styles.pricingPlan}>{plan}</h3>
      <p style={styles.pricingPrice}>{price}</p>
      <p style={styles.pricingFeatures}>{features}</p>
      <a
        href="#signup"
        style={styles.pricingButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = styles.pricingButtonHover.backgroundColor;
          e.currentTarget.style.transform = styles.pricingButtonHover.transform;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = styles.pricingButton.backgroundColor;
          e.currentTarget.style.transform = 'none';
        }}
      >
        Get Started
      </a>
    </div>
  );

  const StatCard = ({ number, label }) => (
    <div style={styles.statCard}>
      <p style={styles.statNumber}>{number}</p>
      <p style={styles.statLabel}>{label}</p>
    </div>
  );

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <h1
            style={{ ...styles.logo, ...styles.mediaQueries['@media (max-width: 768px)'].logo }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = styles.logoHover.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            AESTHETIC
          </h1>
          <nav style={{ ...styles.nav, ...styles.mediaQueries['@media (max-width: 768px)'].nav }}>
            <a
              href="#home"
              style={{ ...styles.navLink, transitionDelay: '0.1s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navLinkHover.color;
                e.currentTarget.style.transform = styles.navLinkHover.transform;
                e.currentTarget.style.setProperty('--underline-width', styles.navLinkAfterHover.width);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navLink.color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.setProperty('--underline-width', '0');
              }}
            >
              Home
              <span style={{ ...styles.navLinkAfter, width: 'var(--underline-width, 0)' }}></span>
            </a>
            <a
              href="#why"
              style={{ ...styles.navLink, transitionDelay: '0.2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navLinkHover.color;
                e.currentTarget.style.transform = styles.navLinkHover.transform;
                e.currentTarget.style.setProperty('--underline-width', styles.navLinkAfterHover.width);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navLink.color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.setProperty('--underline-width', '0');
              }}
            >
              Why AESTHETIC
              <span style={{ ...styles.navLinkAfter, width: 'var(--underline-width, 0)' }}></span>
            </a>
            <a
              href="#features"
              style={{ ...styles.navLink, transitionDelay: '0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navLinkHover.color;
                e.currentTarget.style.transform = styles.navLinkHover.transform;
                e.currentTarget.style.setProperty('--underline-width', styles.navLinkAfterHover.width);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navLink.color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.setProperty('--underline-width', '0');
              }}
            >
              Features
              <span style={{ ...styles.navLinkAfter, width: 'var(--underline-width, 0)' }}></span>
            </a>
            <a
              href="#about"
              style={{ ...styles.navLink, transitionDelay: '0.4s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navLinkHover.color;
                e.currentTarget.style.transform = styles.navLinkHover.transform;
                e.currentTarget.style.setProperty('--underline-width', styles.navLinkAfterHover.width);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navLink.color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.setProperty('--underline-width', '0');
              }}
            >
              About
              <span style={{ ...styles.navLinkAfter, width: 'var(--underline-width, 0)' }}></span>
            </a>
            <a
              href="#pricing"
              style={{ ...styles.navLink, transitionDelay: '0.5s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navLinkHover.color;
                e.currentTarget.style.transform = styles.navLinkHover.transform;
                e.currentTarget.style.setProperty('--underline-width', styles.navLinkAfterHover.width);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navLink.color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.setProperty('--underline-width', '0');
              }}
            >
              Pricing
              <span style={{ ...styles.navLinkAfter, width: 'var(--underline-width, 0)' }}></span>
            </a>
            <a
              href="#contact"
              style={{ ...styles.navLink, transitionDelay: '0.6s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navLinkHover.color;
                e.currentTarget.style.transform = styles.navLinkHover.transform;
                e.currentTarget.style.setProperty('--underline-width', styles.navLinkAfterHover.width);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navLink.color;
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.setProperty('--underline-width', '0');
              }}
            >
              Contact
              <span style={{ ...styles.navLinkAfter, width: 'var(--underline-width, 0)' }}></span>
            </a>
            <a
              href="#signup"
              style={{ ...styles.navCta, transitionDelay: '0.7s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.navCtaHover.backgroundColor;
                e.currentTarget.style.transform = styles.navCtaHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = styles.navCta.backgroundColor;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Get Started
            </a>
          </nav>
          <button
            style={{ ...styles.menuButton, ...styles.mediaQueries['@media (max-width: 768px)'].menuButton }}
            onClick={toggleMenu}
            onMouseEnter={(e) => (e.currentTarget.style.transform = styles.menuButtonHover.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        <nav style={{ ...styles.mobileNav, ...styles.mediaQueries['@media (max-width: 768px)'].mobileNav }}>
          <a
            href="#home"
            style={styles.mobileNavLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.navLinkHover.color;
              e.currentTarget.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.navLink.color;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#why"
            style={styles.mobileNavLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.navLinkHover.color;
              e.currentTarget.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.navLink.color;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            Why AESTHETIC
          </a>
          <a
            href="#features"
            style={styles.mobileNavLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.navLinkHover.color;
              e.currentTarget.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.navLink.color;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            Features
          </a>
          <a
            href="#about"
            style={styles.mobileNavLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.navLinkHover.color;
              e.currentTarget.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.navLink.color;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#pricing"
            style={styles.mobileNavLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.navLinkHover.color;
              e.currentTarget.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.navLink.color;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            Pricing
          </a>
          <a
            href="#contact"
            style={styles.mobileNavLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.navLinkHover.color;
              e.currentTarget.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.navLink.color;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            href="#signup"
            style={styles.mobileNavCta}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = styles.navCtaHover.backgroundColor;
              e.currentTarget.style.transform = styles.navCtaHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = styles.navCta.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
            onClick={toggleMenu}
          >
            Get Started
          </a>
        </nav>
      </header>
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={{ ...styles.heroTitle, ...styles.mediaQueries['@media (max-width: 768px)'].heroTitle }}>
            Master Coding with AESTHETIC
          </h2>
          <h3 style={{ ...styles.heroSubtitle, ...styles.mediaQueries['@media (max-width: 768px)'].heroSubtitle }}>
            Your AI-Powered Flashcard Platform
          </h3>
          <p style={{ ...styles.heroText, ...styles.mediaQueries['@media (max-width: 768px)'].heroText }}>
            Transform your developer journey with AESTHETIC’s cutting-edge flashcard platform. Designed for programmers, our AI-driven tools help you learn, retain, and master coding skills efficiently, from algorithms to cloud certifications.
          </p>
          <div>
            <a
              href="#signup"
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.ctaButtonHover.backgroundColor;
                e.currentTarget.style.transform = styles.ctaButtonHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = styles.ctaButton.backgroundColor;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Start Learning Now
            </a>
            <a
              href="#trial"
              style={styles.secondaryCta}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.secondaryCtaHover.color;
                e.currentTarget.style.borderColor = styles.secondaryCtaHover.borderColor;
                e.currentTarget.style.transform = styles.secondaryCtaHover.transform;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.secondaryCta.color;
                e.currentTarget.style.borderColor = styles.secondaryCta.border;
                e.currentTarget.style.transform = 'none';
              }}
            >
              Try Free for 14 Days
            </a>
          </div>
        </div>
      </section>
      <section id="why" style={styles.whySection}>
        <h2 style={{ ...styles.whyTitle, ...styles.mediaQueries['@media (max-width: 768px)'].whyTitle }}>
          Why AESTHETIC?
        </h2>
        <p style={styles.whyText}>
          AESTHETIC is built by developers, for developers. Our platform combines cutting-edge AI with intuitive design to make learning technical skills seamless and effective. Whether you’re preparing for interviews, mastering new frameworks, or training a team, AESTHETIC empowers you to succeed with tools tailored to the modern coder’s needs.
        </p>
      </section>
      <section id="features" style={styles.features}>
        <h2 style={{ ...styles.featuresTitle, ...styles.mediaQueries['@media (max-width: 768px)'].featuresTitle }}>
          Powerful Features for Developers
        </h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </section>
      <section id="about" style={styles.about}>
        <h2 style={{ ...styles.aboutTitle, ...styles.mediaQueries['@media (max-width: 768px)'].aboutTitle }}>
          About AESTHETIC
        </h2>
        <p style={styles.aboutText}>
          Founded in 2023, AESTHETIC is on a mission to revolutionize developer education with AI-driven flashcards. Our platform empowers programmers worldwide to learn efficiently, collaborate effectively, and excel in their careers. Join our growing community of learners today.
        </p>
        <div style={styles.aboutStats}>
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </section>
      <section id="testimonials" style={styles.testimonials}>
        <h2 style={{ ...styles.testimonialsTitle, ...styles.mediaQueries['@media (max-width: 768px)'].testimonialsTitle }}>
          What Our Users Say
        </h2>
        <div style={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              index={index}
            />
          ))}
        </div>
      </section>
      <section id="pricing" style={styles.pricing}>
        <h2 style={{ ...styles.pricingTitle, ...styles.mediaQueries['@media (max-width: 768px)'].pricingTitle }}>
          Choose Your Plan
        </h2>
        <p style={{ ...styles.heroText, ...styles.mediaQueries['@media (max-width: 768px)'].heroText, textAlign: 'center' }}>
          Start with our Free plan or unlock advanced features with Pro or Team. All plans include a 14-day free trial.
        </p>
        <div style={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </section>
      <section id="cta" style={styles.ctaSection}>
        <h2 style={{ ...styles.ctaTitle, ...styles.mediaQueries['@media (max-width: 768px)'].ctaTitle }}>
          Ready to Elevate Your Learning?
        </h2>
        <p style={{ ...styles.ctaText, ...styles.mediaQueries['@media (max-width: 768px)'].ctaText }}>
          Join thousands of developers using AESTHETIC to master coding skills. Sign up today and experience the future of learning.
        </p>
        <a
          href="#signup"
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = styles.ctaButtonHover.backgroundColor;
            e.currentTarget.style.transform = styles.ctaButtonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = styles.ctaButton.backgroundColor;
            e.currentTarget.style.transform = 'none';
          }}
        >
          Get Started Now
        </a>
      </section>
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          AESTHETIC is a leading platform for developer education, offering AI-driven flashcards to help you excel in coding.
        </p>
        <div style={styles.footerLinks}>
          <a
            href="#"
            style={styles.footerLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.footerLinkHover.color;
              e.currentTarget.style.transform = styles.footerLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.footerLink.color;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Twitter
          </a>
          <a
            href="#"
            style={styles.footerLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.footerLinkHover.color;
              e.currentTarget.style.transform = styles.footerLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.footerLink.color;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Instagram
          </a>
          <a
            href="#"
            style={styles.footerLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.footerLinkHover.color;
              e.currentTarget.style.transform = styles.footerLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.footerLink.color;
              e.currentTarget.style.transform = 'none';
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:support@aesthetic.com"
            style={styles.footerLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.footerLinkHover.color;
              e.currentTarget.style.transform = styles.footerLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.footerLink.color;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Contact Us
          </a>
          <a
            href="#privacy"
            style={styles.footerLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.footerLinkHover.color;
              e.currentTarget.style.transform = styles.footerLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.footerLink.color;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            style={styles.footerLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = styles.footerLinkHover.color;
              e.currentTarget.style.transform = styles.footerLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = styles.footerLink.color;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Terms of Service
          </a>
        </div>
        <div style={styles.newsletter}>
          <p style={styles.newsletterText}>Stay updated with AESTHETIC’s latest features and tips.</p>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.newsletterInput}
          />
          <button
            style={styles.newsletterButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = styles.newsletterButtonHover.backgroundColor;
              e.currentTarget.style.transform = styles.newsletterButtonHover.transform;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = styles.newsletterButton.backgroundColor;
              e.currentTarget.style.transform = 'none';
            }}
          >
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;