import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChefHat, 
  Star, 
  Clock, 
  TrendingUp, 
  ShoppingCart, 
  User,
  Coffee,
  Cake,
  UtensilsCrossed
} from 'lucide-react';

const CustomerDashboard = () => {
  const [cartItems, setCartItems] = useState(0);

  // Mock data for top-selling menus
  const topSellingMenus = [
    {
      id: 1,
      name: "Grilled Salmon with Herbs",
      price: 24.99,
      image: "🐟",
      rating: 4.8,
      orders: 156,
      category: "Food"
    },
    {
      id: 2,
      name: "Truffle Pasta Special",
      price: 22.50,
      image: "🍝",
      rating: 4.9,
      orders: 143,
      category: "Food"
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      price: 8.99,
      image: "🍰",
      rating: 4.7,
      orders: 98,
      category: "Dessert"
    }
  ];

  const menuCategories = [
    { name: "Food", icon: UtensilsCrossed, count: 24 },
    { name: "Dessert", icon: Cake, count: 12 },
    { name: "Drinks", icon: Coffee, count: 18 }
  ];

  const addToCart = (item: any) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ChefMate</h1>
                <p className="text-xs text-muted-foreground">Welcome back, John!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" className="relative">
                <ShoppingCart className="w-4 h-4" />
                My Orders
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              
              <Button variant="ghost" size="icon">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Top Selling This Week</h2>
                  <p className="opacity-90">Discover what others are loving right now</p>
                </div>
                <TrendingUp className="w-12 h-12 opacity-80" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Selling Menus */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Weekly Favorites
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSellingMenus.map((item) => (
              <Card key={item.id} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <Badge variant="secondary">
                      {item.orders} orders
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ${item.price}
                    </span>
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Browse Menu</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {menuCategories.map((category) => (
              <Card key={category.name} className="hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">{category.count} items</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Now CTA */}
        <Card className="bg-gradient-success text-accent-foreground shadow-elegant">
          <CardContent className="pt-6">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Ready to Order?</h3>
              <p className="mb-4 opacity-90">Browse our full menu and place your order now</p>
              <Button variant="elegant" size="lg">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CustomerDashboard;