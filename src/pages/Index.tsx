import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Users, 
  Utensils, 
  TrendingUp, 
  Brain, 
  Clock,
  Star,
  BarChart3,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Smart promotion recommendations based on sales trends and customer behavior"
    },
    {
      icon: TrendingUp,
      title: "Real-time Sales Tracking",
      description: "Monitor daily, weekly, and monthly performance with detailed insights"
    },
    {
      icon: Users,
      title: "Multi-User Dashboard",
      description: "Separate interfaces for customers, kitchen staff, and administrators"
    },
    {
      icon: Clock,
      title: "Live Order Management",
      description: "Real-time order tracking from placement to completion"
    }
  ];

  const userTypes = [
    {
      type: "Customer",
      icon: Users,
      description: "Browse menus, place orders, and track delivery status",
      route: "/login",
      color: "bg-gradient-primary"
    },
    {
      type: "Kitchen",
      icon: Utensils,
      description: "Manage incoming orders and update preparation status",
      route: "/login",
      color: "bg-gradient-success"
    },
    {
      type: "Admin",
      icon: BarChart3,
      description: "Access analytics, manage staff, and view AI insights",
      route: "/login",
      color: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ChefMate</h1>
                <p className="text-xs text-muted-foreground">Restaurant Management & AI Analytics</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button onClick={() => navigate('/signup')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-glow">
            <ChefHat className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Smart Restaurant
            <span className="text-primary block">Management</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline your restaurant operations with AI-powered analytics, 
            real-time order management, and intelligent promotion recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/signup')}>
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/login')}>
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed for modern restaurants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* User Types Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Dashboard
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored experiences for every role in your restaurant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((user, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in" onClick={() => navigate(user.route)} style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="pt-8 pb-8">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${user.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                      <user.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{user.type} Portal</h3>
                    <p className="text-muted-foreground mb-6">{user.description}</p>
                    <Button variant="outline" className="w-full">
                      Access Dashboard
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-primary text-primary-foreground shadow-glow animate-scale-in">
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Trusted by Restaurants Worldwide</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="opacity-90">Active Restaurants</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <p className="opacity-90">Customer Satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25%</div>
                  <p className="opacity-90">Average Revenue Increase</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">ChefMate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ChefMate. All rights reserved. Built with AI-powered restaurant intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
