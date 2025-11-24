'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import HeroDashboard from "./components/HeroDashboard";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.feature-card, .hero-content, .hero-visual, .stat-number, h2');
    animatedElements.forEach((el) => {
      el.classList.add('fade-in-section');
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <Link href="/" className="logo">LexPort</Link>
          <nav>
            <ul className="nav-links">
              <li><Link href="#features" className="nav-link">Features</Link></li>
              <li><Link href="#how-it-works" className="nav-link">How it Works</Link></li>
              <li><Link href="#moat" className="nav-link">Security</Link></li>
              <li><Link href="#contact" className="nav-link">Contact</Link></li>
            </ul>
          </nav>
          <Link href="#contact" className="btn btn-primary">Book Demo</Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <span className="hero-tag">New: Autonomous Classification Engine</span>
              <h1>Export Control Compliance.<br />Solved by Agents.</h1>
              <p>Stop relying on manual review for ITAR & EAR. LexPort integrates with your PLM to autonomously classify engineering data, generating defensible audit trails in seconds.</p>
              <div className="hero-buttons">
                <Link href="#contact" className="btn btn-primary">Request Access</Link>
                <Link href="#how-it-works" className="btn btn-secondary">How it Works</Link>
              </div>
            </div>
            <div className="hero-visual" style={{ background: 'transparent', border: 'none', boxShadow: 'none', overflow: 'visible' }}>
              <HeroDashboard />
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="section">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 64px' }}>
              <h2>The Compliance Bottleneck</h2>
              <p>Advanced manufacturing is slowed down by the &quot;translation gap&quot;—converting technical CAD data into legal regulatory language. Manual review is slow, expensive, and risky.</p>
            </div>
            <div className="stats-section" style={{ background: 'transparent', border: 'none' }}>
              <div className="stats-grid">
                <div>
                  <div className="stat-number" style={{ color: 'var(--plx-danger)' }}>$1M+</div>
                  <div className="stat-label">Fines per Violation</div>
                </div>
                <div>
                  <div className="stat-number">Weeks</div>
                  <div className="stat-label">Delay in Engineering</div>
                </div>
                <div>
                  <div className="stat-number">80%</div>
                  <div className="stat-label">Routine Classifications</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section" style={{ background: 'var(--plx-surface)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <h2>Engineered for Compliance</h2>
              <p>A complete system designed to handle the complexity of USML and CCL regulations.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="feature-title">Direct PLM Integration</h3>
                <p>Connects directly to Siemens Teamcenter and SolidWorks PDM to ingest the engineering source of truth—CAD, BOMs, and specs.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h3 className="feature-title">Agentic Classification</h3>
                <p>Our autonomous agent analyzes technical data against a proprietary knowledge graph of USML and CCL regulations to determine ECCN/ITAR categories.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 className="feature-title">Defensible Audit Trail</h3>
                <p>Automatically generates a human-readable report detailing the logic tree, citations, and evidence for every classification decision.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="feature-title">Human-in-the-Loop</h3>
                <p>Flags ambiguous &quot;edge cases&quot; for expert review. The system learns from every resolution, constantly improving its accuracy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="section">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '64px' }}>
              <h2>From CAD to Compliance</h2>
              <p>Seamlessly integrated into your existing engineering workflow.</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
              <div>
                <ol style={{ counterReset: 'step' }}>
                  <li style={{ marginBottom: '48px', position: 'relative', paddingLeft: '64px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, width: '40px', height: '40px', background: 'var(--plx-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>1</span>
                    <h3 style={{ color: '#fff' }}>Ingest Data</h3>
                    <p>LexPort pulls CAD files, BOMs, and material specs directly from Teamcenter or SolidWorks PDM.</p>
                  </li>
                  <li style={{ marginBottom: '48px', position: 'relative', paddingLeft: '64px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, width: '40px', height: '40px', background: 'var(--plx-card)', border: '1px solid var(--plx-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--plx-primary)' }}>2</span>
                    <h3 style={{ color: '#fff' }}>Analyze & Classify</h3>
                    <p>The agent evaluates the technical data against the USML/CCL knowledge graph to find the correct classification.</p>
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '64px' }}>
                    <span style={{ position: 'absolute', left: 0, top: 0, width: '40px', height: '40px', background: 'var(--plx-card)', border: '1px solid var(--plx-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--plx-primary)' }}>3</span>
                    <h3 style={{ color: '#fff' }}>Generate Report</h3>
                    <p>A complete audit trail is pushed back to the PLM, ready for export approval.</p>
                  </li>
                </ol>
              </div>
              <div className="hero-visual" style={{ marginTop: 0 }}>
                <Image
                  src="/process_diagram.png"
                  alt="LexPort Process Diagram"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Moat / Trust */}
        <section id="moat" className="section" style={{ background: 'linear-gradient(to bottom, var(--plx-bg), var(--plx-surface))' }}>
          <div className="container text-center">
            <span className="hero-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--plx-accentB)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Proprietary Advantage</span>
            <h2 style={{ maxWidth: '800px', margin: '24px auto' }}>Built on the &quot;Edge Cases&quot;</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 48px' }}>
              Unlike generalized LLMs, LexPort is trained on a proprietary dataset of ambiguous technical specifications and expert resolutions. We automate the hard stuff, not just the easy stuff.
            </p>
            <div className="stats-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ background: 'var(--plx-card)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: 'var(--plx-primary)' }}>90%+</h3>
                <p style={{ margin: 0 }}>Reduction in Manual Review</p>
              </div>
              <div style={{ background: 'var(--plx-card)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: 'var(--plx-accentB)' }}>100%</h3>
                <p style={{ margin: 0 }}>Audit Trail Coverage</p>
              </div>
              <div style={{ background: 'var(--plx-card)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: '#fff' }}>24/7</h3>
                <p style={{ margin: 0 }}>Autonomous Operation</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="section">
          <div className="container">
            <div style={{ background: 'linear-gradient(135deg, var(--plx-primary-700), var(--plx-bg))', padding: '80px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2>Ready to automate compliance?</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '16px auto 32px' }}>
                Join the Tier-2 and Tier-3 aerospace leaders using LexPort to accelerate their engineering workflows.
              </p>
              <Link href="mailto:sales@lexport.ai" className="btn" style={{ background: '#fff', color: 'var(--plx-primary)', fontWeight: 600 }}>Contact Sales</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>LexPort</h4>
              <p>Autonomous Export Control Classification for Advanced Manufacturing.</p>
            </div>
            <div className="footer-col">
              <h5>Product</h5>
              <ul className="footer-links">
                <li><Link href="#features">Features</Link></li>
                <li><Link href="#how-it-works">Integration</Link></li>
                <li><Link href="#moat">Security</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul className="footer-links">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <ul className="footer-links">
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; 2025 LexPort Inc. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#">Twitter</Link>
              <Link href="#">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
