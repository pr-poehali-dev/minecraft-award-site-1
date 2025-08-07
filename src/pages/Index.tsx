import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const awards = [
    { id: 1, title: "Лучший Строитель", description: "За выдающиеся архитектурные достижения" },
    { id: 2, title: "Мастер PvP", description: "За непревзойденные навыки в сражениях" },
    { id: 3, title: "Король Редстоуна", description: "За инновационные механизмы и устройства" },
    { id: 4, title: "Исследователь Года", description: "За открытие новых территорий" },
    { id: 5, title: "Торговец Месяца", description: "За развитие экономики сервера" },
    { id: 6, title: "Помощник Сообщества", description: "За поддержку новых игроков" },
    { id: 7, title: "Творческий Гений", description: "За уникальные креативные проекты" },
    { id: 8, title: "Лидер Гильдии", description: "За эффективное управление командой" },
    { id: 9, title: "Защитник Сервера", description: "За борьбу с грифингом" },
    { id: 10, title: "Инноватор", description: "За революционные идеи" },
    { id: 11, title: "Легенда Сервера", description: "За многолетний вклад в развитие" },
    { id: 12, title: "Приз Зрительских Симпатий", description: "Выбор игрового сообщества" }
  ];

  const pastWinners = [
    { year: "2023", name: "BuilderPro", category: "Лучший Строитель" },
    { year: "2023", name: "PvPMaster", category: "Мастер PvP" },
    { year: "2022", name: "RedstoneKing", category: "Король Редстоуна" },
    { year: "2022", name: "Explorer99", category: "Исследователь Года" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-transparent to-yellow-600/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <Icon name="Trophy" size={48} className="text-yellow-400" />
            <h1 className="text-6xl font-bold gold-text-gradient">
              MINECRAFT AWARDS 2024
            </h1>
            <Icon name="Trophy" size={48} className="text-yellow-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ежегодная церемония награждения лучших игроков нашего Minecraft сервера. 
            Время отметить выдающиеся достижения и вклад в развитие игрового сообщества.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button className="gold-gradient text-black font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform">
              <Icon name="Vote" className="mr-2" />
              Голосовать
            </Button>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg">
              <Icon name="Calendar" className="mr-2" />
              Расписание
            </Button>
          </div>
        </div>
      </header>

      {/* Awards Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gold-text-gradient">
              Номинации 2024
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              12 престижных категорий для признания мастерства в различных аспектах игры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={award.id} className="premium-card hover:award-glow transition-all duration-300 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-yellow-900/30 to-black border-b border-yellow-400/20 flex items-center justify-center relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Award" size={40} className="text-black" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold">
                    #{String(index + 1).padStart(2, '0')}
                  </Badge>
                  <div className="absolute bottom-4 left-4 text-xs text-gray-400">
                    500×500
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2 group-hover:gold-text-gradient transition-all">
                    {award.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {award.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    <Icon name="Users" className="mr-2" size={16} />
                    Номинанты
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Server Info Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-black via-gray-900/50 to-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gold-text-gradient">
                О Нашем Сервере
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Добро пожаловать на один из лучших Minecraft серверов! 
                Мы создали уникальное игровое сообщество, где каждый игрок может 
                проявить свои таланты и получить заслуженное признание.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 premium-card rounded-lg">
                  <div className="text-3xl font-bold gold-text-gradient mb-2">5000+</div>
                  <div className="text-gray-400">Активных игроков</div>
                </div>
                <div className="text-center p-6 premium-card rounded-lg">
                  <div className="text-3xl font-bold gold-text-gradient mb-2">3</div>
                  <div className="text-gray-400">Года работы</div>
                </div>
              </div>

              <Button className="gold-gradient text-black font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform">
                <Icon name="Server" className="mr-2" />
                Присоединиться
              </Button>
            </div>

            <div className="relative">
              <div className="premium-card p-8 rounded-2xl">
                <img 
                  src="/img/cd1b579d-c99e-405b-bcb4-e210677304cb.jpg" 
                  alt="Minecraft Award Trophy"
                  className="w-full h-auto rounded-lg award-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Winners Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gold-text-gradient">
              Галерея Победителей
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Почетные чемпионы прошлых лет, навсегда вписанные в историю нашего сервера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastWinners.map((winner, index) => (
              <Card key={index} className="premium-card hover:award-glow transition-all duration-300 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Crown" size={24} className="text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    {winner.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {winner.category}
                  </p>
                  <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                    {winner.year}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-yellow-400/20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Icon name="Gamepad2" size={32} className="text-yellow-400" />
            <h3 className="text-2xl font-bold gold-text-gradient">
              Minecraft Awards
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 Minecraft Awards. Все права защищены.
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400">
              <Icon name="MessageCircle" className="mr-2" size={16} />
              Discord
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400">
              <Icon name="Youtube" className="mr-2" size={16} />
              YouTube
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-yellow-400">
              <Icon name="Users" className="mr-2" size={16} />
              Сообщество
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;