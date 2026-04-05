
import React from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import { BUSINESS_DATA } from '@/constants';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Privacy Policy',
    description: 'Read the Magic Brush Ltd privacy policy and learn how we collect, use, and protect your information.',
    path: '/legal/privacy-policy',
});

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-black">Privacy Policy</h1>
                            <p className="text-slate-400 mt-2">Last Updated: January 2026</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Introduction</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Magic Brush Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">2. Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Information</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        We may collect personal information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
                                        <li>Request a quote or consultation</li>
                                        <li>Contact us via phone, email, or contact forms</li>
                                        <li>Subscribe to our newsletter</li>
                                        <li>Engage with our services</li>
                                    </ul>
                                    <p className="text-slate-600 leading-relaxed mt-2">
                                        This information may include: name, email address, phone number, postal address, and project details.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Automatically Collected Information</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        When you visit our website, we may automatically collect certain information about your device, including:
                                    </p>
                                    <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1 ml-4">
                                        <li>Browser type and version</li>
                                        <li>IP address</li>
                                        <li>Operating system</li>
                                        <li>Pages visited and time spent on pages</li>
                                        <li>Referring website addresses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Respond to your inquiries and requests</li>
                                <li>Send you quotes, estimates, and project updates</li>
                                <li>Process transactions and manage projects</li>
                                <li>Send promotional communications (with your consent)</li>
                                <li>Analyze website usage and improve user experience</li>
                                <li>Comply with legal obligations</li>
                                <li>Protect against fraudulent or illegal activity</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">4. How We Share Your Information</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                We do not sell or rent your personal information to third parties. We may share your information with:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (e.g., email service providers, payment processors)</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                                <li><strong>With Your Consent:</strong> When you have given us permission to share your information</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Data Security</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">6. Your Rights</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to processing of your personal information</li>
                                <li>Withdraw consent at any time</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                To exercise these rights, please contact us at <a href={`mailto:${BUSINESS_DATA.email}`} className="text-orange-600 font-bold hover:text-orange-700">{BUSINESS_DATA.email}</a>
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">7. Cookies</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookies through your browser settings, though some features of our website may not function properly if cookies are disabled.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">8. Third-Party Links</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">9. Children&apos;s Privacy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">10. Changes to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">11. Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                If you have any questions or concerns about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <p className="text-slate-900 font-bold mb-2">Magic Brush Ltd</p>
                                <p className="text-slate-600 text-sm space-y-1">
                                    <span className="block">Email: <a href={`mailto:${BUSINESS_DATA.email}`} className="text-orange-600 hover:text-orange-700 font-bold">{BUSINESS_DATA.email}</a></span>
                                    <span className="block">Phone: <a href={`tel:${BUSINESS_DATA.phone}`} className="text-orange-600 hover:text-orange-700 font-bold">{BUSINESS_DATA.phone}</a></span>
                                    <span className="block">Address: {BUSINESS_DATA.address}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
