import { Home } from "../../components/template/home";
import { useHomeContext } from "../../context/useHomeContext";

export const HomePage: React.FC = () => {
  const { name } = useHomeContext();
  
  return <Home text={name} />;
};
