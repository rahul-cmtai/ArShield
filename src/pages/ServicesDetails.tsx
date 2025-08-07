import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServicesDetail";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Product {
  name: string;
  technology: string;
  oem: string;
  useCases: string[];
  keyFeatures: string[];
}

interface Domain {
  name: string;
  products: Product[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  mythology: string;
  domains: Domain[];
}

interface ServicesData {
  services: Service[];
}

const ServicesDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch("/services.json");
        if (!response.ok) {
          throw new Error("Failed to fetch service data");
        }
        
        const data: ServicesData = await response.json();
        const foundService = data.services.find(s => s.id === serviceId);
        
        if (foundService) {
          setService(foundService);
        } else {
          setError("Service not found");
        }
      } catch (err) {
        setError("Error loading service data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceId]);

  return (
    <>
      <Helmet>
        <title>{service ? `${service.title} | ArShield` : "Service Details | ArShield"}</title>
        <meta 
          name="description" 
          content={service ? `${service.description} - ${service.mythology}` : "ArShield service details"} 
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <section className="pt-32 pb-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              className="mb-8 flex items-center gap-2 hover:bg-gray-100"
              onClick={() => navigate("/services")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
            
            {loading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-arshield-orange"></div>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>
                <p className="text-arshield-gray">Please try again or return to the services page.</p>
                <Button 
                  className="mt-6 bg-arshield-orange hover:bg-arshield-orange/90"
                  onClick={() => navigate("/services")}
                >
                  Return to Services
                </Button>
              </div>
            ) : service ? (
              <ServiceDetail 
                title={service.title}
                description={service.description}
                mythology={service.mythology}
                domains={service.domains}
              />
            ) : null}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesDetails;