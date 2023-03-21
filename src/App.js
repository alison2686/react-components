import Button from './Button';
import { GoBell, GoCloudDownload } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('Clicked');
  };
  return (
    <div className='App'>
      <div>
        <Button onClick={handleClick} success rounded outline>
          <GoBell />
          Click Me!!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Button 1
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Button 2
        </Button>
      </div>
      <div>
        <Button secondary>Button 3</Button>
      </div>
      <div>
        <Button primary rounded>
          Button 4
        </Button>
      </div>
    </div>
  );
}

export default App;
