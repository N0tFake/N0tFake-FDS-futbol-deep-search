import { HomePage } from './components';
import { ThemeSwitcher } from './components/Buttons/btnThemeSwitcher';

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <HomePage />
    </>
  )
}
