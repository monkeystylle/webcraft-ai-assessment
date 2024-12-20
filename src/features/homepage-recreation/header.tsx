import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navigation = [
  { name: 'Lifestyle & Home', href: '/homepage-recreation' },
  { name: 'Beauty & Wellness', href: '/homepage-recreation/beauty-wellness' },
  { name: 'Technology', href: '/homepage-recreation/technology' },
  { name: 'Finance', href: '/homepage-recreation/finance' },
  { name: 'Deals', href: '/homepage-recreation/deals' },
];

export function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/homepage-recreation" className="text-2xl font-bold">
              IN THE KNOW
            </Link>
          </div>
          <div className="hidden space-x-8 md:flex">
            {navigation.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="grid gap-6 text-lg font-medium">
          {navigation.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
