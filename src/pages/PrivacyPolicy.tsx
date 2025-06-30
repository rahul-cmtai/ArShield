import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | ArShield</title>
        <meta name="description" content="Read ArShield's privacy policy to understand how we protect your data and privacy in all our cybersecurity services." />
        <meta name="keywords" content="privacy policy, ArShield, data protection, cybersecurity, India" />
        <link rel="canonical" href="https://arshield.in/privacy-policy" />
      </Helmet>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="p-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-8">
                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                  <p className="text-gray-600">
                    This Privacy Policy explains how ArShield Cybertech Pvt. Ltd. ("ArShield," "we," "us," or "our") collects, uses, discloses, and safeguards your information when you visit our website, use our services, or engage with us in any way. Please read this privacy policy carefully. By accessing or using our services, you agree to the terms of this privacy policy.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
                  <p className="text-gray-600">
                    We may collect personal and non-personal information in the following ways:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li><strong>Information you provide:</strong> Contact details, account information, payment information, and any other information you provide when using our services</li>
                    <li><strong>Automated information:</strong> Device information, IP address, browsing history, cookies, and other tracking technologies</li>
                    <li><strong>Security assessment data:</strong> When providing VAPT and other security services, we may access and collect information about your systems, networks, and applications as agreed in our service contract</li>
                    <li><strong>Business information:</strong> Company details, employee information, and other organizational data necessary to provide our services</li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>Providing, maintaining, and improving our services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Conducting security assessments and vulnerability testing as per service agreements</li>
                    <li>Communicating with you about our services, updates, and promotions</li>
                    <li>Analyzing usage patterns to enhance user experience</li>
                    <li>Protecting our rights, your security, and the security of our services</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                  <p className="text-gray-600">
                    As a cybersecurity company, we implement robust security measures to protect your information. These include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>Industry-standard encryption for data in transit and at rest</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular security assessments of our own systems</li>
                    <li>Employee training on data protection and security best practices</li>
                    <li>Incident response procedures</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    While we take significant measures to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your data.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
                  <p className="text-gray-600">
                    We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need personal information, we securely delete or anonymize it.
                  </p>
                  <p className="text-gray-600 mt-2">
                    For security assessment data and reports, retention periods will be specified in your service agreement.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Sharing Your Information</h2>
                  <p className="text-gray-600">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li><strong>Service providers:</strong> Third parties who help us deliver our services (e.g., payment processors, cloud hosting providers)</li>
                    <li><strong>Business partners:</strong> With your consent, we may share information with our business partners for specific purposes</li>
                    <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority</li>
                    <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate safeguards for your data</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    We require all third parties to respect the security of your data and to treat it in accordance with the law.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze usage patterns, and deliver personalized content. You can control cookies through your browser settings, but disabling certain cookies may limit your ability to use some features of our website.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Your Rights and Choices</h2>
                  <p className="text-gray-600">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>Accessing, correcting, or deleting your personal information</li>
                    <li>Withdrawing your consent to processing</li>
                    <li>Restricting or objecting to certain processing activities</li>
                    <li>Data portability (receiving your data in a structured, machine-readable format)</li>
                    <li>Lodging a complaint with a supervisory authority</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    To exercise these rights, please contact us using the information provided at the end of this policy.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-600">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-600">
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer your information internationally, we implement appropriate safeguards to ensure your data is protected.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600">
                    We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.
                  </p>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
                  <p className="text-gray-600">
                    If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us at:
                  </p>
                  <div className="mt-2 text-gray-600">
                    <p>Email: privacy@arshield.com</p>
                    <p>Phone: +91 99302 87895</p>
                    <p>Address: Mumbai, India</p>
                  </div>
                </motion.section>
              </div>

              <motion.div 
                className="mt-10 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <p className="text-gray-500 text-sm">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy; 