import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Business Plan', href: '/business-plan' },
    { name: 'Cyber Mythology', href: '/cyber-mythology' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black text-white shadow-lg' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200 text-arshield-gray'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group cursor-pointer">
            <img 
              src="/logo.png" 
              alt="ArShield Logo" 
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`hover:text-arshield-orange transition-colors duration-300 font-medium relative group ${
                  scrolled ? 'text-white' : 'text-arshield-gray'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-arshield-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className={`border-arshield-orange hover:bg-arshield-orange hover:text-white transition-all duration-300 ${
                scrolled ? 'text-black' : 'text-arshield-orange'
              }`}
            >
              <a href="/contact">Free Audit</a>
            </Button>
            <Button className="bg-arshield-orange hover:bg-arshield-orange/90 text-white">
              <a href="/contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={scrolled ? 'text-white' : ''}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="mb-4">
                  <img 
                    src="/logo.png" 
                    alt="ArShield Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-arshield-orange transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-700">
                  <Button variant="outline" className="border-arshield-orange text-white hover:bg-arshield-orange hover:text-white">
                    <a href="/contact">Free Audit</a>
                  </Button>
                  <Button className="bg-arshield-orange hover:bg-arshield-orange/90 text-white">
                    <a href="/contact">Get Started</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
