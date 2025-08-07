import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CheckCircle } from "lucide-react";

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

interface ServiceDetailProps {
  title: string;
  description: string;
  mythology: string;
  domains: Domain[];
}

const ServiceDetail = ({ title, description, mythology, domains }: ServiceDetailProps) => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-arshield-charcoal mb-2">{title}</h1>
        <p className="text-arshield-orange font-semibold mb-4">{mythology}</p>
        <p className="text-arshield-gray">{description}</p>
      </div>

      {domains.length > 0 ? (
        <Tabs defaultValue={domains[0].name} className="w-full">
          <TabsList className="mb-6 flex flex-wrap gap-2">
            {domains.map((domain) => (
              <TabsTrigger key={domain.name} value={domain.name} className="px-4 py-2">
                {domain.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {domains.map((domain) => (
            <TabsContent key={domain.name} value={domain.name} className="w-full">
              <div className="grid gap-6">
                {domain.products.map((product, index) => (
                  <Card key={index} className="w-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-arshield-orange" />
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                      </div>
                      <CardDescription>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                            {product.technology}
                          </Badge>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                            {product.oem}
                          </Badge>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <Zap className="h-4 w-4 mr-2 text-arshield-orange" />
                            Use Cases
                          </h3>
                          <ul className="space-y-2">
                            {product.useCases.map((useCase, i) => (
                              <li key={i} className="text-arshield-gray text-sm flex items-start space-x-2">
                                <span className="text-arshield-orange text-xs mt-1">•</span>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-arshield-orange" />
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {product.keyFeatures.map((feature, i) => (
                              <li key={i} className="text-arshield-gray text-sm flex items-start space-x-2">
                                <span className="text-arshield-orange text-xs mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="p-8 text-center bg-gray-50 rounded-lg">
          <p className="text-arshield-gray">Detailed information for this service is coming soon.</p>
          <p className="text-arshield-orange font-semibold mt-2">Contact us for more details.</p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;