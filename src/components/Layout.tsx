
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">MEDIКальк</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Калькуляторы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/rheumatoid-arthritis" title="Ревматоидный артрит">
                      Калькуляторы: DAS28, SDAI, CDAI
                    </ListItem>
                    <ListItem href="/lupus" title="Системная красная волчанка">
                      Калькуляторы: SLEDAI, BILAG
                    </ListItem>
                    <ListItem href="/scleroderma" title="Системная склеродермия">
                      Калькуляторы: mRSS, Valentini
                    </ListItem>
                    <ListItem href="/ankylosing-spondylitis" title="Болезнь Бехтерева">
                      Калькуляторы: BASDAI, ADAS
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О проекте
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">MEDIКальк</h3>
              <p className="text-muted-foreground">
                Онлайн калькуляторы для оценки активности ревматологических заболеваний
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Ссылки</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground">Главная</Link></li>
                <li><Link to="/calculators" className="text-muted-foreground hover:text-foreground">Калькуляторы</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">О проекте</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Для специалистов</h3>
              <p className="text-muted-foreground mb-3">
                Калькуляторы предназначены для использования квалифицированными медицинскими специалистами
              </p>
              <Button variant="outline" asChild>
                <Link to="/about#disclaimer">Правовая информация</Link>
              </Button>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} MEDIКальк. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
