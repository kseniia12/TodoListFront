
import Input from "./Input";
import Todos from "./Todos";
import { StyleForAllProject } from "./styles/style";
import GlobalStyles from "./styles/reset";
import Footer from "./Footer";
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
