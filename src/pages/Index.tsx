import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cars = [
    {
      id: 1,
      name: "DragonForce SUV",
      price: "от 2,890,000 ₽",
      image: "/img/4eb04fc8-6ea8-4ee1-bd04-151f3be1d459.jpg",
      features: ["Электрический", "450 км", "0-100 за 4.2с"]
    },
    {
      id: 2,
      name: "RedWind Sedan",
      price: "от 2,350,000 ₽", 
      image: "/img/5bbda306-2237-4f3e-8512-05fef6b2a646.jpg",
      features: ["Гибрид", "520 км", "Автопилот"]
    },
    {
      id: 3,
      name: "BlueCity Compact",
      price: "от 1,750,000 ₽",
      image: "/img/1bff271d-18e2-4e27-9813-3fb951f8b13c.jpg", 
      features: ["Городской", "380 км", "Быстрая зарядка"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-auto-gray to-white">
      {/* Header */}
      <header className="bg-auto-navy text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Car" size={32} className="text-auto-red" />
              <h1 className="text-2xl font-bold">Драйв Авто</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#cars" className="hover:text-auto-red transition-colors">Автомобили</a>
              <a href="#credit" className="hover:text-auto-red transition-colors">Кредит</a>
              <a href="#contacts" className="hover:text-auto-red transition-colors">Контакты</a>
            </nav>
            <Button className="bg-auto-red hover:bg-red-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-auto-navy to-auto-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Автосалон</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Дорога начинается здесь!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-auto-red hover:bg-red-600 text-white animate-scale-in">
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-auto-navy animate-scale-in">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать кредит
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-bold text-auto-navy mb-4">Наши автомобили</h3>
            <p className="text-lg text-gray-600">Выберите идеальный автомобиль для себя</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card 
                key={car.id} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-auto-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      ХИТ
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-auto-navy mb-2">{car.name}</h4>
                    <p className="text-3xl font-bold text-auto-red mb-4">{car.price}</p>
                    
                    <div className="space-y-2 mb-6">
                      {car.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <Icon name="CheckCircle" size={16} className="text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-auto-navy text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-lg opacity-90">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-auto-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Телефон</h4>
              <p className="opacity-90">+79287361139</p>
              <p className="opacity-90 text-sm">Ежедневно 9:00-21:00</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-auto-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Адрес</h4>
              <p className="opacity-90">ЧР, Надтеречный район, с. Надтеречное, ул. Им. М.С. Такаева, д. 22</p>
              <p className="opacity-90"></p>
            </div>
            
            <div className="text-center group">
              <div className="bg-auto-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="opacity-90">info@driveavto.ru</p>
              <p className="opacity-90 text-sm">Ответим в течение часа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-auto-dark text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Car" size={24} className="text-auto-red" />
            <span className="text-xl font-bold">Драйв Авто</span>
          </div>
          <p className="opacity-75"></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;