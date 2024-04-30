import { Logo } from '@/Components/Icons/Logo'

export const Header = () => {
  return (
    <header className="bg-[url('./assets/images/hero-image-wr.jpg')] bg-auto md:bg-cover bg-no-repeat bg-center h-60 flex items-center justify-center">
        <Logo />
    </header>
  )
}
