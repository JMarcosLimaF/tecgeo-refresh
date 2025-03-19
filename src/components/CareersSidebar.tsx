
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, UserPlus, FileText, LogIn } from 'lucide-react';

const CareersSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      title: "Início",
      path: "/carreiras",
      icon: Home,
    },
    {
      title: "Cadastro",
      path: "/cadastro",
      icon: UserPlus,
    },
    {
      title: "Questionário",
      path: "/questionario",
      icon: FileText,
    },
    {
      title: "Login",
      path: "/login",
      icon: LogIn,
    }
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                isActive={currentPath === item.path}
                tooltip={item.title}
              >
                <Link to={item.path}>
                  <item.icon className="mr-2" size={18} />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default CareersSidebar;
