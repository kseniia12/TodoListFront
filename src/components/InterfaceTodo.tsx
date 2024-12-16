
import Input from "./Input/Input";
import Todos from "./Todos/Todos";
import { StyleForAllProject } from "./styles/style";
import GlobalStyles from "./styles/reset";
import Footer from "./Footer/Footer";
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
