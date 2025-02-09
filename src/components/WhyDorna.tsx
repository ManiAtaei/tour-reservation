import { Plane, Star, Award, MapPin, Phone, CreditCard } from 'lucide-react';

export default function WhyDorna() {
  const features = [
    {
      icon: <Plane className="w-6 h-6 text-blue-500" />,
      title: 'تور های خارجی',
      className: 'col-start-1 row-start-1',
    },
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      title: 'بیشترین تور های موجود',
      className: 'col-start-1 row-start-2',
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: 'رتبه اول تور های گردشگری',
      className: 'col-start-1 row-start-3',
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: 'هر جا که بخوای!',
      className: 'col-start-3 row-start-1',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: 'پشتیبانی ۲۴ ساعته',
      className: 'col-start-3 row-start-2',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      title: 'بهترین قیمت ها',
      className: 'col-start-3 row-start-3',
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">چرا درنا؟</h2>
        
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="space-y-12">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 justify-end">
                <div className="text-right">
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="w-full aspect-square bg-blue-100 rounded-full flex items-center justify-center p-8">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="Travel Globe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="space-y-12">
            {features.slice(3).map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}