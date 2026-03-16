
import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import { BUSINESS_DATA } from '@/constants';

export const metadata = {
    title: 'Terms of Service | Magic Brush Ltd',
    description: 'Terms of Service for Magic Brush Ltd - Review our terms and conditions for using our services.',
};

const TermsOfServicePage = () => {
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
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-black">Terms of Service</h1>
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
                            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                By accessing or using the services provided by Magic Brush Ltd, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Magic Brush Ltd.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">2. Services</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                Magic Brush Ltd provides renovation, construction, and property improvement services including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                                <li>House renovations and extensions</li>
                                <li>Painting and decorating</li>
                                <li>Tiling and flooring</li>
                                <li>Plastering and drywall</li>
                                <li>Kitchen and bathroom installations</li>
                                <li>General construction and repair work</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                All services are subject to availability and provided in accordance with the specific agreement made between Magic Brush Ltd and the client.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">3. Quotes and Estimates</h2>
                            <div className="space-y-3 text-slate-600 leading-relaxed">
                                <p>
                                    All quotes and estimates provided are valid for 30 days from the date of issue unless otherwise specified. Quotes are based on the information provided by the client and are subject to site inspection.
                                </p>
                                <p>
                                    Final pricing may vary if additional work is required due to unforeseen circumstances, structural issues, or changes to the scope of work. Any variations will be communicated and agreed upon before proceeding.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">4. Payment Terms</h2>
                            <div className="space-y-3 text-slate-600 leading-relaxed">
                                <p>
                                    <strong>Deposit:</strong> A deposit of 30-50% may be required before work commences, depending on the project scope and materials required.
                                </p>
                                <p>
                                    <strong>Progress Payments:</strong> For larger projects, payment may be structured in stages based on project milestones as agreed in the contract.
                                </p>
                                <p>
                                    <strong>Final Payment:</strong> The remaining balance is due upon completion of the work, subject to client satisfaction and final inspection.
                                </p>
                                <p>
                                    <strong>Late Payments:</strong> Payments not received within 14 days of the due date may incur interest charges at a rate of 2% per month or the maximum rate permitted by law.
                                </p>
                                <p>
                                    <strong>Payment Methods:</strong> We accept bank transfers, credit/debit cards, and checks. Cash payments may be accepted for smaller projects.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Project Timeline</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We strive to complete all projects within the agreed timeframe. However, timelines may be affected by factors beyond our control, including weather conditions, material availability, client-requested changes, or unforeseen structural issues. We will communicate any delays promptly and work to minimize their impact.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">6. Changes to Scope of Work</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Any changes to the agreed scope of work must be documented in writing and approved by both parties. Additional work will be charged at our standard rates unless otherwise agreed. Changes may affect the project timeline and final cost.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">7. Client Responsibilities</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                The client agrees to:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                <li>Provide accurate information about the property and required work</li>
                                <li>Ensure access to the property during agreed working hours</li>
                                <li>Obtain necessary permissions, permits, or consents where required</li>
                                <li>Remove or protect valuable items from the work area</li>
                                <li>Provide utilities (water, electricity) as needed for the work</li>
                                <li>Make timely payments as per the agreed schedule</li>
                                <li>Communicate any concerns or issues promptly</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">8. Warranties and Guarantees</h2>
                            <div className="space-y-3 text-slate-600 leading-relaxed">
                                <p>
                                    <strong>Workmanship Guarantee:</strong> We guarantee our workmanship for a period of 12 months from the completion date. This covers defects arising from our work, excluding normal wear and tear.
                                </p>
                                <p>
                                    <strong>Materials:</strong> Materials are covered by the manufacturer&apos;s warranty. We will assist in warranty claims where applicable.
                                </p>
                                <p>
                                    <strong>Exclusions:</strong> Warranties do not cover damage caused by misuse, lack of maintenance, alterations by others, or circumstances beyond our control.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">9. Liability and Insurance</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Magic Brush Ltd carries comprehensive public liability insurance and employer&apos;s liability insurance. We are not liable for pre-existing defects, hidden defects discovered during work, or damage to items not properly protected by the client. Our liability is limited to the value of the contract.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">10. Cancellation and Termination</h2>
                            <div className="space-y-3 text-slate-600 leading-relaxed">
                                <p>
                                    <strong>By Client:</strong> Clients may cancel a project with written notice. Deposits are non-refundable, and payment is due for work completed and materials ordered.
                                </p>
                                <p>
                                    <strong>By Magic Brush Ltd:</strong> We reserve the right to terminate a contract if payment is not received, access is denied, or the client breaches these terms. In such cases, payment is due for work completed.
                                </p>
                                <p>
                                    <strong>Mutual Agreement:</strong> Either party may agree to terminate the contract by mutual written consent.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">11. Intellectual Property</h2>
                            <p className="text-slate-600 leading-relaxed">
                                All designs, plans, and documents created by Magic Brush Ltd remain our intellectual property unless otherwise agreed. We retain the right to use photographs of completed work for marketing purposes, subject to client approval.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">12. Dispute Resolution</h2>
                            <p className="text-slate-600 leading-relaxed">
                                In the event of a dispute, both parties agree to attempt to resolve the matter through good-faith negotiation. If negotiation fails, disputes will be resolved through mediation or, as a last resort, through the appropriate legal channels under UK law.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">13. Force Majeure</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Magic Brush Ltd is not liable for failure to perform obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government restrictions, strikes, or material shortages.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">14. Privacy and Data Protection</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We collect and process personal information in accordance with our Privacy Policy and applicable data protection laws. Your information will be used solely for providing our services and will not be shared with third parties without your consent, except as required by law.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">15. Amendments to Terms</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Magic Brush Ltd reserves the right to update these Terms of Service at any time. Updated terms will be posted on our website with a revised &quot;Last Updated&quot; date. Continued use of our services constitutes acceptance of the updated terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">16. Governing Law</h2>
                            <p className="text-slate-600 leading-relaxed">
                                These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts of England and Wales.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">17. Contact Information</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                If you have any questions about these Terms of Service, please contact us:
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

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                            <p className="text-slate-900 font-bold mb-2">Acceptance</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfServicePage;
