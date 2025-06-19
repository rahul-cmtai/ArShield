import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "RAJESH SHARMA",
    text: "ArShield's Firewall Protection saved our company from multiple cyber attacks. It truly works like a protective boundary for our digital assets."
  },
  {
    name: "PRIYA PATEL",
    text: "Their Data Encryption service is so powerful that no hacker can access our information. It provides ultimate protection for our sensitive data."
  },
  {
    name: "VIKRAM SINGH",
    text: "The Cloud Security solutions have kept our data safe. It swiftly detects and blocks every threat, providing vigilant protection across our cloud infrastructure."
  },
  {
    name: "ANITA DESAI",
    text: "ArShield's Threat Detection system remains constantly vigilant. It immediately catches any suspicious activity, keeping our business secure at all times."
  },
  {
    name: "SURESH KUMAR",
    text: "With their 24/7 Monitoring service, I can sleep peacefully. Like constant sunlight, our systems are watched over at every moment of the day."
  },
  {
    name: "MEERA JOSHI",
    text: "When we faced a cyber attack, ArShield's Incident Response team took immediate action. Their expertise saved our business from significant damage."
  },
  {
    name: "AMIT VERMA",
    text: "Their Firewall Protection is so strong that our company data is completely secure. No unauthorized access can penetrate this protective boundary."
  },
  {
    name: "NEHA GUPTA",
    text: "ArShield's Data Encryption service has made our client information 100% secure. It serves as our strongest defense for critical data protection."
  },
  {
    name: "ARJUN REDDY",
    text: "With their Cloud Security solutions, our data is as secure in the cloud as it is on-premise. Protection follows our data wherever it resides."
  },
  {
    name: "SUNITA AGARWAL",
    text: "The Threat Detection system has alerted us to potential attacks multiple times before they happened. It vigilantly protects our digital assets."
  },
  {
    name: "RAHUL MEHTA",
    text: "The 24/7 Monitoring has given our IT team peace of mind. Like constant light, our digital assets are protected every second of every day."
  },
  {
    name: "POOJA MALHOTRA",
    text: "ArShield's Incident Response team helped us recover quickly after a cyber breach. Their powerful response minimized the impact on our operations."
  },
  {
    name: "VIJAY KAPOOR",
    text: "ArShield's multiple layers of protection have kept our company secure. Like an impenetrable boundary, it stops every threat before it can enter."
  },
  {
    name: "KAVITA SHARMA",
    text: "Our sensitive financial data has been completely secured by ArShield's encryption. It protects our most critical information like an unbreakable shield."
  },
  {
    name: "DEEPAK CHOPRA",
    text: "During our cloud migration, ArShield's Cloud Security ensured a smooth transition. Security implementation was swift and comprehensive across all platforms."
  },
  {
    name: "ANANYA IYER",
    text: "Their Advanced Threat Detection has saved us from zero-day attacks. It stays alert and protects our digital assets from even the newest threats."
  }
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({ name, text }: { name: string; text: string }) => {
  return (
    <div className="w-[450px] px-3">
      <Card className="bg-white rounded-lg shadow-lg border-0 h-[200px] hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <h3 className="font-bold text-gray-900 mb-4">
            {name}
          </h3>
          <p className="text-gray-600 text-sm flex-grow overflow-hidden">
            {text}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">
          Why Customers Trust ArShield
        </h2>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
