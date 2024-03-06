// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {ButtonComponent} from "@stores/shared-components"
import { CheckboxComponent } from "@stores/shared-components"

export function App() {
  return (
    <div>
      <h1>Проект BYE</h1>
      <ButtonComponent />
    </div>
  );
}

export default App;
