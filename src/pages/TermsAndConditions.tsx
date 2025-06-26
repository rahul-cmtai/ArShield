import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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
            Terms and Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Please read these terms and conditions carefully before using our services.
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
                  Welcome to ArShield Cybertech Pvt. Ltd. These terms and conditions govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these terms and conditions.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Services</h2>
                <p className="text-gray-600">
                  ArShield provides cybersecurity services including but not limited to Network Security, Endpoint Security, Cloud Security, VAPT Testing, SOC Services, and Compliance. The specific details of each service will be outlined in the service agreement.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">3. 30-Day Money-Back Guarantee</h2>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee on eligible services. If you are not satisfied with our services within the first 30 days of your subscription, you may request a full refund. To be eligible for a refund:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                  <li>You must submit your refund request within 30 days of the initial purchase date</li>
                  <li>You must provide specific reasons for your dissatisfaction</li>
                  <li>Your account must be in good standing</li>
                  <li>The refund applies only to first-time purchases of eligible services</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  Please note that certain services, customized solutions, and enterprise plans may not be eligible for this guarantee. Setup fees, implementation costs, and third-party integrations are non-refundable.
                </p>
                
                <motion.div 
                  className="mt-4 bg-gray-50 p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">VAPT Services Specific Terms</h3>
                  <p className="text-gray-600">
                    For VAPT (Vulnerability Assessment & Penetration Testing) services, the following additional terms apply:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>The money-back guarantee is only applicable if we fail to identify any significant vulnerabilities that are later discovered by another security provider within 30 days of our assessment</li>
                    <li>The guarantee does not apply if the client fails to provide complete access to systems in scope as agreed in the service contract</li>
                    <li>The refund request must be accompanied by a detailed report from a qualified third-party security professional documenting the missed vulnerabilities</li>
                    <li>The guarantee covers only the cost of the initial assessment, not any remediation services or follow-up testing</li>
                  </ul>
                </motion.div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Payment and Billing</h2>
                <p className="text-gray-600">
                  Payment terms will be specified in your service agreement. All fees are exclusive of applicable taxes unless otherwise stated. You are responsible for providing accurate billing information and ensuring sufficient funds are available for payment.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-600">
                  All content on our website and services, including but not limited to text, graphics, logos, images, and software, is the property of ArShield and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Private Streaming Channel for Mitigation Support</h2>
                <p className="text-gray-600">
                  As part of our services, we may provide access to a private streaming channel containing educational content and guidance for vulnerability remediation ("Good Reads"). The following terms apply to this service:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                  <li>Access is provided on a request basis and is exclusive to active clients</li>
                  <li>Sharing access credentials with non-authorized individuals or organizations is strictly prohibited</li>
                  <li>Content is provided for educational purposes only and implementation of any guidance is at the client's own risk</li>
                  <li>Access to the streaming channel may be revoked upon termination of services or breach of these terms</li>
                  <li>The content provided does not replace the need for professional security implementation and is meant as supplementary guidance</li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600">
                  ArShield shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability for any claims shall not exceed the amount paid by you for the services in question.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Termination</h2>
                <p className="text-gray-600">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these terms and conditions. Upon termination, your right to use our services will cease immediately.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
                <p className="text-gray-600">
                  These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Mumbai, India.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these terms and conditions, please contact us at:
                </p>
                <div className="mt-2 text-gray-600">
                  <p>Email: Info@arshieldtech.com</p>
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
  );
};

export default TermsAndConditions; 