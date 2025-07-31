import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cars = [
    {
      id: 1,
      name: "Лада Гранта",
      price: "от 750,000 ₽",
      image: "https://cdn.poehali.dev/files/2c42ad64-c4d3-4cf3-bdaf-07da6868548e.png",
      features: ["Бензин", "Механика", "Российский автопром"]
    },
    {
      id: 2,
      name: "Hyundai Solaris",
      price: "от 900,000 ₽", 
      image: "https://cdn.poehali.dev/files/21d65439-43f8-41e9-bde9-a1af7eedc3ac.jfif",
      features: ["АКПП", "Комфорт", "Надёжность"]
    },
    {
      id: 3,
      name: "Geely Coolray",
      price: "от 1,750,000 ₽",
      image: "https://cdn.poehali.dev/files/82ed958e-2f79-45ef-bf91-af9369daca16.png", 
      features: ["Кроссовер", "Турбо", "Китайское качество"]
    },
    {
      id: 4,
      name: "Лада Нива",
      price: "от 850,000 ₽",
      image: "https://cdn.poehali.dev/files/713edacc-160d-4229-a88f-9ac62df1097e.png",
      features: ["Полный привод", "Внедорожник", "Российская классика"]
    },
    {
      id: 5,
      name: "Volkswagen Polo",
      price: "от 1,200,000 ₽",
      image: "https://cdn.poehali.dev/files/c77dd384-e72b-45bc-b9f9-2926b8bd77db.png",
      features: ["Немецкое качество", "Экономичность", "Комфорт"]
    },
    {
      id: 6,
      name: "Лада Веста",
      price: "от 950,000 ₽",
      image: "https://cdn.poehali.dev/files/5ec25dfa-56ea-44e3-b19b-c8ccf653445c.jpg",
      features: ["Просторный салон", "Современный дизайн", "Российское производство"]
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
              <h1 className="text-2xl font-bold">ГарантАвто</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#cars" className="hover:text-auto-red transition-colors">Автомобили</a>
              <a href="#credit" className="hover:text-auto-red transition-colors"></a>
              <a href="#contacts" className="hover:text-auto-red transition-colors">Контакты</a>
            </nav>
            <Button asChild className="bg-auto-red hover:bg-red-600 text-white">
              <a href="tel:+79287361139">
                <Icon name="Phone" size={16} className="mr-2" />
                Звонок
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-auto-navy to-auto-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">ГарантАвто </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">Дорога начинается здесь!</p>

          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-bold text-auto-navy mb-4"></h3>
            <p className="text-4xl text-red-600 font-medium">Найдите идеальный автомобиль для себя!</p>
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

      {/* Working Hours & Payment Methods Section */}
      <section className="py-20 bg-auto-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Working Hours */}
            <div className="animate-fade-in">
              <h3 className="text-5xl font-bold text-auto-navy mb-12">График работы</h3>
              <div className="bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-12 border border-gray-100">
                <div className="text-center space-y-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-auto-red rounded-full mb-6">
                    <Icon name="Clock" size={36} className="text-white" />
                  </div>
                  <div className="space-y-6">
                    <div className="bg-auto-navy rounded-xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-4">Ежедневно без выходных</h4>
                      <div className="text-3xl font-bold text-auto-red">09:00 - 18:00</div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Мы работаем каждый день, чтобы вы могли выбрать и купить автомобиль мечты в удобное время
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="animate-scale-in">
              <h3 className="text-4xl font-bold text-auto-navy mb-8">Способы покупки</h3>
              <div className="space-y-6">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="bg-auto-red rounded-full p-4 mr-6">
                        <Icon name="Banknote" size={32} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-auto-navy mb-3">Наличный расчёт</h4>
                        <p className="text-gray-600 mb-4">
                          Полная оплата автомобиля наличными средствами. Быстрое оформление и получение автомобиля в день покупки.
                        </p>
                        <div className="flex items-center text-green-600">
                          <span className="font-medium"></span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="bg-auto-navy rounded-full p-4 mr-6">
                        <Icon name="CreditCard" size={32} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-auto-navy mb-3">Кредит через банк</h4>
                        <p className="text-gray-600 mb-4">Покупка автомобиля в кредит через  банк</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-auto-red">
                            <span className="font-medium"></span>
                          </div>
                          <div className="flex items-center text-auto-red">
                            <span className="font-medium"></span>
                          </div>
                          <div className="flex items-center text-auto-red">
                            <span className="font-medium"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>
            </div>
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
              <p className="opacity-90">+7(928)736-11-39</p>
              <p className="opacity-90 text-sm">Ежедневно 9:00-21:00</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-auto-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Адрес</h4>
              <p className="opacity-90">ЧР, Надтеречный район, с. Надтеречное,
 ул. Им. М.С. Такаева, д. 22</p>
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
            <span className="text-xl font-bold">ГарантАвто

ИП Абдулхажиева Г.В.</span>
          </div>
          <p className="opacity-75"></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;