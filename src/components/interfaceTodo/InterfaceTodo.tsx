import Input from "../Input/Input";
import Todos from "../Todos/Todos";
import GlobalStyles from "../styles/reset";
import Footer from "../Footer/Footer";
import { StyleForAllProject } from "./style";

export default function InterfaceTodo() {
  return (
    <div>
      <GlobalStyles />
      <StyleForAllProject>
        <Input />
        <Todos />
        <Footer />
      </StyleForAllProject>
    </div>
  );
}
